import type { Garment, GarmentDraft, Trip } from "./types";

async function api<T>(path: string, init?: RequestInit, retries = 0): Promise<T> {
  for (let attempt = 0; ; attempt++) {
    try {
      const r = await fetch(`/api${path}`, { ...init, credentials: "same-origin" });
      if (r.status >= 500 && attempt < retries) throw new Error("retry");
      if (!r.ok) throw new Error(((await r.json().catch(() => null)) as { error?: string } | null)?.error ?? `Request failed (${r.status})`);
      return (r.status === 204 ? undefined : await r.json()) as T;
    } catch (e) {
      if (attempt >= retries) throw e;
      await new Promise((res) => setTimeout(res, 800 * (attempt + 1)));
    }
  }
}
const v = (g: Garment) => `?v=${g.updatedAt}`;
export const imageUrl = (g: Garment) => `/api/garments/${g.id}/processed${v(g)}`;
export const thumbUrl = (g: Garment) => `/api/garments/${g.id}/thumb${v(g)}`;
export const originalUrl = (g: Garment) => `/api/garments/${g.id}/original${v(g)}`;

// Cloud-backed repositories (Cloudflare D1 + R2 behind /api). Same call sites as before.
export const garmentRepository = {
  async list() {
    const all: Garment[] = []; let cursor = "";
    do {
      const p = await api<{ items: Garment[]; next: string | null }>(`/garments?limit=200${cursor ? `&cursor=${encodeURIComponent(cursor)}` : ""}`);
      all.push(...p.items); cursor = p.next ?? "";
    } while (cursor);
    return all;
  },
  create(d: GarmentDraft) {
    const { imageBlob, processedBlob, thumbBlob, ...meta } = d;
    const f = new FormData();
    f.set("meta", JSON.stringify(meta)); f.set("original", imageBlob, "original");
    if (processedBlob) f.set("processed", processedBlob, "processed.png");
    if (thumbBlob) f.set("thumb", thumbBlob, "thumb.png");
    return api<Garment>("/garments", { method: "POST", body: f }, 2); // safe to retry: same id is an upsert
  },
  update(id: string, patch: Partial<Garment>) {
    return api<Garment>(`/garments/${id}`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(patch) });
  },
  remove(id: string) { return api<void>(`/garments/${id}`, { method: "DELETE" }); },
};
export const tripRepository = {
  list() { return api<Trip[]>("/trips"); },
  put(t: Trip) { return api<Trip>(`/trips/${t.id}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) }, 2); },
  remove(id: string) { return api<void>(`/trips/${id}`, { method: "DELETE" }); },
};
