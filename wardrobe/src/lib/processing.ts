import type { GarmentDraft, Logo } from "./types";
export type Stage = "queued" | "removing-bg" | "colour" | "logos" | "ready" | "failed" | "duplicate";
export const STAGE_LABEL: Record<Stage, string> = { queued: "Queued", "removing-bg": "Removing background", colour: "Detecting colour", logos: "Detecting logos", ready: "Ready for review", failed: "Failed", duplicate: "Duplicate (skipped)" };

export async function hashFile(f: Blob) {
  const d = await crypto.subtle.digest("SHA-256", await f.arrayBuffer());
  return Array.from(new Uint8Array(d), (b) => b.toString(16).padStart(2, "0")).join("");
}

// Providers: swap independently. Background removal runs locally in the browser (ONNX model);
// the model files are downloaded on first use, so the first run needs internet access.
export interface BackgroundRemover { name: string; remove(src: Blob): Promise<Blob> }
export const backgroundRemover: BackgroundRemover = {
  name: "imgly-local",
  async remove(src) { const { removeBackground } = await import("@imgly/background-removal"); return removeBackground(src); },
};
// Returns null when no provider is configured. No logo model ships with the app yet.
export interface LogoDetector { name: string; detect(img: Blob): Promise<Logo[] | null> }
export const logoDetector: LogoDetector = { name: "none", detect: async () => null };

async function toCanvas(b: Blob, max = Infinity) {
  const bmp = await createImageBitmap(b); const s = Math.min(1, max / Math.max(bmp.width, bmp.height));
  const c = document.createElement("canvas"); c.width = Math.round(bmp.width * s); c.height = Math.round(bmp.height * s);
  c.getContext("2d")!.drawImage(bmp, 0, 0, c.width, c.height); bmp.close(); return c;
}
const toBlob = (c: HTMLCanvasElement) => new Promise<Blob>((res, rej) => c.toBlob((b) => (b ? res(b) : rej(new Error("Encoding failed"))), "image/png"));

// Trim transparent margins, scale to fit an 800x1000 canvas, centre horizontally, align top (for the hanger).
function normalise(src: HTMLCanvasElement, W = 800, H = 1000, pad = 24) {
  const { data, width, height } = src.getContext("2d")!.getImageData(0, 0, src.width, src.height);
  let x0 = width, y0 = height, x1 = -1, y1 = -1;
  for (let y = 0; y < height; y++) for (let x = 0; x < width; x++) if (data[(y * width + x) * 4 + 3] > 24) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
  if (x1 < 0) throw new Error("No garment found after background removal");
  const w = x1 - x0 + 1, h = y1 - y0 + 1, s = Math.min((W - 2 * pad) / w, (H - 2 * pad) / h);
  const out = document.createElement("canvas"); out.width = W; out.height = H;
  const o = out.getContext("2d")!; o.imageSmoothingQuality = "high";
  o.drawImage(src, x0, y0, w, h, (W - w * s) / 2, pad, w * s, h * s); return out;
}

function lab(r: number, g: number, b: number) {
  const f = (v: number) => { v /= 255; return v > 0.04045 ? ((v + 0.055) / 1.055) ** 2.4 : v / 12.92; };
  const R = f(r), G = f(g), B = f(b), h = (t: number) => (t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116);
  const X = h((R * 0.4124 + G * 0.3576 + B * 0.1805) / 0.95047), Y = h(R * 0.2126 + G * 0.7152 + B * 0.0722), Z = h((R * 0.0193 + G * 0.1192 + B * 0.9505) / 1.08883);
  return [116 * Y - 16, 500 * (X - Y), 200 * (Y - Z)];
}
export function nameColour(r: number, g: number, b: number) {
  const R = r / 255, G = g / 255, B = b / 255, mx = Math.max(R, G, B), mn = Math.min(R, G, B), l = (mx + mn) / 2, d = mx - mn;
  const s = d === 0 ? 0 : d / (1 - Math.abs(2 * l - 1));
  let h = 0; if (d) { h = mx === R ? ((G - B) / d) % 6 : mx === G ? (B - R) / d + 2 : (R - G) / d + 4; h = (h * 60 + 360) % 360; }
  if (l < 0.12) return "black";
  if (s < 0.12) return l > 0.9 ? "white" : "grey";
  if (l > 0.88 && h >= 30 && h < 70) return "cream";
  if (h < 10 || h >= 345) return "red";
  if (h < 40) return l < 0.38 ? "brown" : l > 0.7 && s < 0.6 ? "beige" : "orange";
  if (h < 65) return l > 0.7 && s < 0.5 ? "beige" : l < 0.35 ? "olive" : "yellow";
  if (h < 90) return l < 0.45 ? "olive" : "green";
  if (h < 165) return "green"; if (h < 200) return "teal";
  if (h < 255) return l < 0.3 ? "navy" : l > 0.7 ? "light blue" : "blue";
  return h < 300 ? "purple" : "pink";
}

// k-means in CIELAB over opaque garment pixels only.
export function dominantColours(c: HTMLCanvasElement, k = 4) {
  const { data } = c.getContext("2d")!.getImageData(0, 0, c.width, c.height);
  const px: number[][] = []; const step = Math.max(1, Math.floor(data.length / 4 / 12000));
  for (let i = 0; i < data.length; i += 4 * step) if (data[i + 3] > 200) px.push([data[i], data[i + 1], data[i + 2]]);
  if (px.length < 50) throw new Error("Too few garment pixels");
  const L = px.map((p) => lab(p[0], p[1], p[2])), dist = (a: number[], b: number[]) => (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2;
  const cen = [L[0]]; while (cen.length < k) { let best = 0, bd = -1; L.forEach((p, i) => { const m = Math.min(...cen.map((q) => dist(p, q))); if (m > bd) { bd = m; best = i; } }); cen.push(L[best]); }
  let as = new Array(L.length).fill(0);
  for (let it = 0; it < 10; it++) {
    as = L.map((p) => cen.reduce((bi, q, i) => (dist(p, q) < dist(p, cen[bi]) ? i : bi), 0));
    cen.forEach((_, ci) => { const m = L.filter((_, i) => as[i] === ci); if (m.length) cen[ci] = [0, 1, 2].map((j) => m.reduce((a, p) => a + p[j], 0) / m.length); });
  }
  const byName = new Map<string, { share: number; rgb: number[] }>();
  for (let ci = 0; ci < k; ci++) {
    const idx = as.map((a, i) => (a === ci ? i : -1)).filter((i) => i >= 0); if (!idx.length) continue;
    const rgb = [0, 1, 2].map((j) => Math.round(idx.reduce((a, i) => a + px[i][j], 0) / idx.length));
    const n = nameColour(rgb[0], rgb[1], rgb[2]), e = byName.get(n);
    byName.set(n, { share: (e?.share ?? 0) + idx.length / px.length, rgb: e && e.share > idx.length / px.length ? e.rgb : rgb });
  }
  return [...byName.entries()].map(([name, v]) => ({ name, share: v.share, hex: "#" + v.rgb.map((x) => x.toString(16).padStart(2, "0")).join("") })).sort((a, b) => b.share - a.share);
}

export async function processFile(file: File, id: string, hash: string, stage: (s: Stage) => void): Promise<GarmentDraft> {
  const now = Date.now();
  const g: GarmentDraft = { id, name: file.name.replace(/\.[^.]+$/, "").replace(/[_-]+/g, " "), category: "Tops", imageBlob: file, hash, createdAt: now, updatedAt: now, status: "ready", bgStatus: "skipped", logoStatus: "not-configured" };
  stage("removing-bg");
  let norm: HTMLCanvasElement;
  try {
    const cut = await backgroundRemover.remove(await toBlob(await toCanvas(file, 1600)));
    norm = normalise(await toCanvas(cut));
    g.processedBlob = await toBlob(norm);
    const t = document.createElement("canvas"); t.width = 200; t.height = 250; t.getContext("2d")!.drawImage(norm, 0, 0, 200, 250);
    g.thumbBlob = await toBlob(t); g.bgStatus = "removed";
  } catch (e) { // original is kept; nothing is faked
    g.bgStatus = "failed"; g.bgError = e instanceof Error ? e.message : "Background removal failed"; g.status = "needs-review"; return g;
  }
  stage("colour");
  try {
    const cols = dominantColours(norm);
    const sig = cols.filter((c) => c.share >= 0.15);
    const multi = cols[0].share < 0.4 && sig.length >= 3;
    g.primaryColor = multi ? "multicolour" : cols[0].name; g.colorHex = cols[0].hex;
    g.secondaryColors = sig.slice(1).map((c) => c.name);
    if (cols[0].share < 0.45) g.status = "needs-review";
  } catch { g.status = "needs-review"; }
  stage("logos");
  const logos = await logoDetector.detect(g.processedBlob!).catch(() => null);
  if (logos) { g.logos = logos; g.logoStatus = "done"; }
  return g;
}
