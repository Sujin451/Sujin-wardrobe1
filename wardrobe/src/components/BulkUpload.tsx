"use client";
import { useRef, useState } from "react";
import type { Garment } from "@/lib/types";
import { garmentRepository as repo } from "@/lib/garmentRepository";
import { processFile, hashFile, STAGE_LABEL, type Stage } from "@/lib/processing";

interface Item { id: string; file: File; stage: Stage; error?: string }
const CONCURRENCY = 2, MAX = 15 * 1024 * 1024, OK = ["image/jpeg", "image/png", "image/webp"];

export default function BulkUpload({ existing, onSaved }: { existing: Garment[]; onSaved: () => void }) {
  const [items, setItems] = useState<Item[]>([]);
  const [err, setErr] = useState("");
  const stop = useRef(false);
  const hashes = useRef(new Set(existing.map((g) => g.hash).filter(Boolean) as string[]));
  const patch = (id: string, p: Partial<Item>) => setItems((prev) => prev.map((i) => (i.id === id ? { ...i, ...p } : i)));

  async function run(batch: Item[], force = false) {
    stop.current = false; const q = [...batch];
    const worker = async () => {
      for (let it = q.shift(); it && !stop.current; it = q.shift()) {
        try {
          const hash = await hashFile(it.file);
          if (!force && hashes.current.has(hash)) { patch(it.id, { stage: "duplicate" }); continue; }
          hashes.current.add(hash);
          const g = await processFile(it.file, it.id, hash, (s) => patch(it.id, { stage: s }));
          await repo.create(g); onSaved(); // auto-save; original is always stored
          patch(it.id, { stage: g.bgStatus === "failed" ? "failed" : "ready", error: g.bgError });
        } catch (e) { patch(it.id, { stage: "failed", error: e instanceof Error ? e.message : String(e) }); }
      }
    };
    await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  }
  function add(files: FileList | File[]) {
    const next: Item[] = []; let bad = 0;
    for (const f of Array.from(files)) { if (!OK.includes(f.type) || f.size > MAX) bad++; else next.push({ id: crypto.randomUUID(), file: f, stage: "queued" }); }
    setErr(bad ? `Skipped ${bad} file(s): only JPEG, PNG or WebP under 15 MB are accepted.` : "");
    setItems((p) => [...p, ...next]); void run(next);
  }
  const done = items.filter((i) => ["ready", "failed", "duplicate"].includes(i.stage)).length;
  const pending = items.filter((i) => i.stage === "queued");
  return (
    <div>
      <h2 className="serif mb-4 text-2xl">Add clothing</h2>
      <label onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); add(e.dataTransfer.files); }}
        className="flex min-h-32 cursor-pointer items-center justify-center rounded border border-dashed border-[var(--accent)] bg-[var(--hover)] p-4 text-center text-sm text-[var(--mute)]">
        Drop many photos here, or tap to choose (camera works on mobile)
        <input type="file" multiple accept="image/jpeg,image/png,image/webp" className="sr-only" onChange={(e) => { if (e.target.files) add(e.target.files); e.target.value = ""; }} />
      </label>
      {err && <p role="alert" className="mt-2 text-sm text-red-700">{err}</p>}
      {items.length > 0 && (<>
        <p className="mt-4 text-sm" aria-live="polite">{done} of {items.length} garments processed</p>
        <progress className="h-1.5 w-full" value={done} max={items.length} />
        <div className="mt-2 flex gap-2 text-sm">
          {pending.length > 0 && <button className="rounded-full border px-3 py-1" onClick={() => { stop.current = true; }}>Cancel pending</button>}
          {pending.length > 0 && <button className="rounded-full border px-3 py-1" onClick={() => run(pending)}>Process pending</button>}
        </div>
        <ul className="mt-3 max-h-64 space-y-1 overflow-auto text-sm">
          {items.map((i) => (
            <li key={i.id} className="flex items-center justify-between gap-2 border-b border-[var(--line)] py-1">
              <span className="truncate">{i.file.name}</span>
              <span className="flex shrink-0 items-center gap-2 text-[var(--mute)]">
                {STAGE_LABEL[i.stage]}{i.error ? ` — ${i.error}` : ""}
                {(i.stage === "failed" || i.stage === "duplicate") && <button className="underline" onClick={() => { patch(i.id, { stage: "queued", error: undefined }); void run([i], true); }}>{i.stage === "failed" ? "Retry" : "Add anyway"}</button>}
              </span>
            </li>
          ))}
        </ul>
        <p className="mt-2 text-xs text-[var(--mute)]">Processed garments are saved automatically. Items needing review show a notice in their details. Logo detection is not configured.</p>
      </>)}
    </div>
  );
}
