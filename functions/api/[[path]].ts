interface Env { DB: D1Database; WARDROBE_BUCKET: R2Bucket; ACCESS_TEAM_DOMAIN?: string; ACCESS_AUD?: string; DEV_USER?: string }
type Row = Record<string, any>;
const CATS = ["Tops", "Shirts", "Outerwear", "Bottoms", "Shoes", "Accessories"];
const MAX = 15 * 1024 * 1024, UUID = /^[0-9a-f-]{36}$/i;
const j = (d: unknown, s = 200) => Response.json(d, { status: s, headers: { "Cache-Control": "no-store" } });
const err = (m: string, s = 400) => j({ error: m }, s);
const b64u = (s: string) => Uint8Array.from(atob(s.replace(/-/g, "+").replace(/_/g, "/").padEnd(Math.ceil(s.length / 4) * 4, "=")), (c) => c.charCodeAt(0));
const jwtPart = (s: string) => JSON.parse(new TextDecoder().decode(b64u(s)));
const safe = (s: string) => s.replace(/[^A-Za-z0-9_-]/g, "_");

// Verifies the Cloudflare Access JWT (signature, audience, issuer, expiry). The user id comes only from here.
async function userFrom(req: Request, env: Env): Promise<string | null> {
  if (env.DEV_USER && !env.ACCESS_AUD) return env.DEV_USER; // local dev only
  const jwt = req.headers.get("Cf-Access-Jwt-Assertion");
  if (!jwt || !env.ACCESS_AUD || !env.ACCESS_TEAM_DOMAIN) return null;
  const [h, p, s] = jwt.split("."); if (!s) return null;
  try {
    const head = jwtPart(h), c = jwtPart(p);
    if (!([] as string[]).concat(c.aud).includes(env.ACCESS_AUD) || c.exp * 1000 < Date.now() || c.iss !== `https://${env.ACCESS_TEAM_DOMAIN}`) return null;
    const certs = (await (await fetch(`https://${env.ACCESS_TEAM_DOMAIN}/cdn-cgi/access/certs`, { cf: { cacheTtl: 3600 } })).json()) as { keys: (JsonWebKey & { kid: string })[] };
    const jwk = certs.keys.find((k) => k.kid === head.kid); if (!jwk) return null;
    const key = await crypto.subtle.importKey("jwk", jwk, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["verify"]);
    const ok = await crypto.subtle.verify("RSASSA-PKCS1-v1_5", key, b64u(s), new TextEncoder().encode(`${h}.${p}`));
    return ok ? String(c.sub || c.email || "") || null : null;
  } catch { return null; }
}

async function sniff(b: Blob) {
  const h = new Uint8Array(await b.slice(0, 12).arrayBuffer());
  if (h[0] === 0xff && h[1] === 0xd8) return { ext: "jpg", type: "image/jpeg" };
  if (h[0] === 0x89 && h[1] === 0x50 && h[2] === 0x4e && h[3] === 0x47) return { ext: "png", type: "image/png" };
  if (h[0] === 0x52 && h[1] === 0x49 && h[8] === 0x57 && h[9] === 0x45) return { ext: "webp", type: "image/webp" };
  return null;
}
const parse = (s: string | null) => { try { return s ? JSON.parse(s) : undefined; } catch { return undefined; } };
const toG = (r: Row) => ({ id: r.id, name: r.name, category: r.category, primaryColor: r.primary_color ?? undefined, colorHex: r.primary_color_hex ?? undefined, secondaryColors: parse(r.secondary_colors), brand: r.brand ?? undefined, size: r.size ?? undefined, notes: r.notes ?? undefined, hash: r.hash ?? undefined, status: r.status ?? undefined, bgStatus: r.bg_status ?? undefined, bgError: r.bg_error ?? undefined, logoStatus: r.logo_status ?? undefined, logos: parse(r.logos), hasProcessed: !!r.processed_image_key, createdAt: r.created_at, updatedAt: r.updated_at });
const str = (v: unknown, n: number) => (typeof v === "string" && v.trim() ? v.trim().slice(0, n) : null);

async function tripsFor(env: Env, uid: string, only?: string) {
  const ts = await env.DB.prepare("SELECT * FROM trips WHERE user_id=?1 ORDER BY created_at DESC").bind(uid).all<Row>();
  const its = await env.DB.prepare("SELECT ti.trip_id, ti.garment_id, ti.packed FROM trip_items ti JOIN trips t ON t.id=ti.trip_id WHERE t.user_id=?1").bind(uid).all<Row>();
  const out = ts.results.map((t) => {
    const mine = its.results.filter((i) => i.trip_id === t.id);
    return { id: t.id, name: t.name, destination: t.destination ?? undefined, startDate: t.start_date ?? undefined, endDate: t.end_date ?? undefined, notes: t.notes ?? undefined, garmentIds: mine.map((i) => i.garment_id), packedIds: mine.filter((i) => i.packed).map((i) => i.garment_id), createdAt: t.created_at, updatedAt: t.updated_at };
  });
  return only ? out.find((t) => t.id === only) : out;
}

export const onRequest: PagesFunction<Env> = async ({ request, env, params }) => {
  const url = new URL(request.url), m = request.method;
  const origin = request.headers.get("Origin");
  if (m !== "GET" && origin && new URL(origin).origin !== url.origin) return err("Bad origin", 403);
  const uid = await userFrom(request, env);
  if (!uid) return err("Unauthorised", 401);
  const [res, id, kind] = ([] as string[]).concat((params.path as string[] | string) ?? []);
  try {
    if (res === "garments" && !id) {
      if (m === "GET") {
        const limit = Math.min(500, Math.max(1, Number(url.searchParams.get("limit")) || 200)), cur = url.searchParams.get("cursor");
        let q = "SELECT * FROM garments WHERE user_id=?1"; const a: (string | number)[] = [uid];
        if (cur) { const [t, i] = cur.split("|"); q += " AND (created_at<?2 OR (created_at=?2 AND id<?3))"; a.push(Number(t), i); }
        q += ` ORDER BY created_at DESC, id DESC LIMIT ?${a.length + 1}`; a.push(limit + 1);
        const rows = (await env.DB.prepare(q).bind(...a).all<Row>()).results;
        const page = rows.slice(0, limit), last = page[page.length - 1];
        return j({ items: page.map(toG), next: rows.length > limit ? `${last.created_at}|${last.id}` : null });
      }
      if (m === "POST") {
        const f = await request.formData();
        let meta: Row; try { meta = JSON.parse(String(f.get("meta") ?? "{}")); } catch { return err("Invalid metadata"); }
        const orig = f.get("original"), proc = f.get("processed"), thumb = f.get("thumb");
        if (!orig || typeof orig === "string") return err("An original image is required");
        const blobs = [orig, proc, thumb].filter((x): x is File => !!x && typeof x !== "string");
        if (blobs.some((b) => b.size > MAX)) return err("Image larger than 15 MB", 413);
        const o = await sniff(orig); if (!o) return err("Only JPEG, PNG or WebP images are accepted", 415);
        const hasP = proc && typeof proc !== "string", hasT = thumb && typeof thumb !== "string";
        if ((hasP && (await sniff(proc as File))?.ext !== "png") || (hasT && (await sniff(thumb as File))?.ext !== "png")) return err("Processed images must be PNG", 415);
        const gid = UUID.test(meta.id) ? meta.id : crypto.randomUUID();
        const old = await env.DB.prepare("SELECT * FROM garments WHERE id=?1").bind(gid).first<Row>();
        if (old && old.user_id !== uid) return err("Conflict", 409);
        const base = `wardrobe/${safe(uid)}/${gid}`;
        const keys = { o: `${base}/original.${o.ext}`, p: hasP ? `${base}/processed.png` : null, t: hasT ? `${base}/thumbnail.png` : null };
        const put = (k: string, b: Blob, type: string) => env.WARDROBE_BUCKET.put(k, b, { httpMetadata: { contentType: type } });
        const written: string[] = [];
        try {
          await put(keys.o, orig, o.type); written.push(keys.o);
          if (keys.p) { await put(keys.p, proc as File, "image/png"); written.push(keys.p); }
          if (keys.t) { await put(keys.t, thumb as File, "image/png"); written.push(keys.t); }
          const now = Date.now(), cat = CATS.includes(meta.category) ? meta.category : "Tops";
          await env.DB.prepare(`INSERT INTO garments (id,user_id,name,category,primary_color,primary_color_hex,secondary_colors,brand,size,notes,hash,status,bg_status,bg_error,logo_status,logos,original_image_key,processed_image_key,thumbnail_image_key,created_at,updated_at)
            VALUES (?1,?2,?3,?4,?5,?6,?7,?8,?9,?10,?11,?12,?13,?14,?15,?16,?17,?18,?19,?20,?21)
            ON CONFLICT(id) DO UPDATE SET name=excluded.name,category=excluded.category,primary_color=excluded.primary_color,primary_color_hex=excluded.primary_color_hex,secondary_colors=excluded.secondary_colors,brand=excluded.brand,size=excluded.size,notes=excluded.notes,hash=excluded.hash,status=excluded.status,bg_status=excluded.bg_status,bg_error=excluded.bg_error,logo_status=excluded.logo_status,logos=excluded.logos,original_image_key=excluded.original_image_key,processed_image_key=excluded.processed_image_key,thumbnail_image_key=excluded.thumbnail_image_key,updated_at=excluded.updated_at WHERE garments.user_id=excluded.user_id`)
            .bind(gid, uid, str(meta.name, 120) ?? "Untitled", cat, str(meta.primaryColor, 60), /^#[0-9a-f]{6}$/i.test(meta.colorHex) ? meta.colorHex : null, Array.isArray(meta.secondaryColors) ? JSON.stringify(meta.secondaryColors.slice(0, 5)) : null, str(meta.brand, 80), str(meta.size, 20), str(meta.notes, 2000), str(meta.hash, 64), meta.status === "needs-review" ? "needs-review" : "ready", str(meta.bgStatus, 12), str(meta.bgError, 300), str(meta.logoStatus, 20), Array.isArray(meta.logos) ? JSON.stringify(meta.logos.slice(0, 10)) : null, keys.o, keys.p, keys.t, old?.created_at ?? now, now).run();
        } catch (e) { await env.WARDROBE_BUCKET.delete(written.filter((k) => ![old?.original_image_key, old?.processed_image_key, old?.thumbnail_image_key].includes(k))).catch(() => {}); throw e; }
        const stale = [old?.original_image_key, old?.processed_image_key, old?.thumbnail_image_key].filter((k): k is string => !!k && ![keys.o, keys.p, keys.t].includes(k));
        if (stale.length) await env.WARDROBE_BUCKET.delete(stale).catch(() => {});
        return j(toG((await env.DB.prepare("SELECT * FROM garments WHERE id=?1").bind(gid).first<Row>())!), 201);
      }
    }
    if (res === "garments" && id && !kind) {
      if (m === "PATCH") {
        const b = (await request.json()) as Row, sets: string[] = [], a: (string | number | null)[] = [];
        const cols: Record<string, [string, number]> = { name: ["name", 120], primaryColor: ["primary_color", 60], brand: ["brand", 80], size: ["size", 20], notes: ["notes", 2000] };
        for (const [k, [c, n]] of Object.entries(cols)) if (k in b) { if (c === "name" && !str(b[k], n)) return err("Name required"); a.push(str(b[k], n)); sets.push(`${c}=?${a.length}`); }
        if ("category" in b) { if (!CATS.includes(b.category)) return err("Invalid category"); a.push(b.category); sets.push(`category=?${a.length}`); }
        if ("status" in b) { a.push(b.status === "needs-review" ? "needs-review" : "ready"); sets.push(`status=?${a.length}`); }
        if (!sets.length) return err("Nothing to update");
        a.push(Date.now(), id, uid);
        const r = await env.DB.prepare(`UPDATE garments SET ${sets.join(",")},updated_at=?${a.length - 2} WHERE id=?${a.length - 1} AND user_id=?${a.length}`).bind(...a).run();
        if (!r.meta.changes) return err("Not found", 404);
        return j(toG((await env.DB.prepare("SELECT * FROM garments WHERE id=?1").bind(id).first<Row>())!));
      }
      if (m === "DELETE") {
        const row = await env.DB.prepare("SELECT * FROM garments WHERE id=?1 AND user_id=?2").bind(id, uid).first<Row>();
        if (!row) return err("Not found", 404);
        await env.DB.prepare("DELETE FROM garments WHERE id=?1 AND user_id=?2").bind(id, uid).run(); // cascades trip_items
        await env.WARDROBE_BUCKET.delete([row.original_image_key, row.processed_image_key, row.thumbnail_image_key].filter(Boolean)).catch((e) => console.error("R2 cleanup failed", id, e));
        return new Response(null, { status: 204 });
      }
    }
    if (res === "garments" && id && kind && m === "GET") {
      const row = await env.DB.prepare("SELECT * FROM garments WHERE id=?1 AND user_id=?2").bind(id, uid).first<Row>();
      if (!row) return err("Not found", 404);
      const key = kind === "original" ? row.original_image_key : kind === "processed" ? row.processed_image_key ?? row.original_image_key : kind === "thumb" ? row.thumbnail_image_key ?? row.processed_image_key ?? row.original_image_key : null;
      if (!key) return err("Not found", 404);
      const obj = await env.WARDROBE_BUCKET.get(key);
      if (!obj) return err("Image missing", 404);
      return new Response(obj.body, { headers: { "Content-Type": obj.httpMetadata?.contentType ?? "application/octet-stream", "Cache-Control": "private, max-age=86400", ETag: obj.httpEtag, "X-Content-Type-Options": "nosniff" } });
    }
    if (res === "trips") {
      if (!id && m === "GET") return j(await tripsFor(env, uid));
      if (id && m === "PUT") {
        if (!UUID.test(id)) return err("Invalid id");
        const b = (await request.json()) as Row;
        const old = await env.DB.prepare("SELECT user_id, created_at FROM trips WHERE id=?1").bind(id).first<Row>();
        if (old && old.user_id !== uid) return err("Conflict", 409);
        const gids = [...new Set((Array.isArray(b.garmentIds) ? b.garmentIds : []).filter((x: unknown) => typeof x === "string"))].slice(0, 1000) as string[];
        const packed = new Set(Array.isArray(b.packedIds) ? b.packedIds : []), now = Date.now();
        await env.DB.batch([
          env.DB.prepare(`INSERT INTO trips (id,user_id,name,destination,start_date,end_date,notes,created_at,updated_at) VALUES (?1,?2,?3,?4,?5,?6,?7,?8,?9)
            ON CONFLICT(id) DO UPDATE SET name=excluded.name,destination=excluded.destination,start_date=excluded.start_date,end_date=excluded.end_date,notes=excluded.notes,updated_at=excluded.updated_at WHERE trips.user_id=excluded.user_id`)
            .bind(id, uid, str(b.name, 120) ?? "Trip", str(b.destination, 120), str(b.startDate, 10), str(b.endDate, 10), str(b.notes, 2000), old?.created_at ?? now, now),
          env.DB.prepare("DELETE FROM trip_items WHERE trip_id=?1").bind(id),
          ...gids.map((g) => env.DB.prepare("INSERT INTO trip_items (trip_id,garment_id,packed) SELECT ?1,?2,?3 WHERE EXISTS (SELECT 1 FROM garments WHERE id=?2 AND user_id=?4)").bind(id, g, packed.has(g) ? 1 : 0, uid)),
        ]);
        return j(await tripsFor(env, uid, id));
      }
      if (id && m === "DELETE") {
        const r = await env.DB.prepare("DELETE FROM trips WHERE id=?1 AND user_id=?2").bind(id, uid).run();
        return r.meta.changes ? new Response(null, { status: 204 }) : err("Not found", 404);
      }
    }
  } catch (e) { console.error(e); return err("Server error", 500); }
  return err("Not found", 404);
};
