"use client";
import { useEffect, useState } from "react";
import { openDB } from "idb";
import type { GarmentDraft, Trip } from "@/lib/types";
import { garmentRepository as repo, tripRepository } from "@/lib/garmentRepository";

interface Legacy { garments: GarmentDraft[]; trips: Trip[] }
// Reads the old browser-only IndexedDB ("wardrobe"). Never writes to or deletes it automatically.
async function readLegacy(): Promise<Legacy | null> {
  if (!indexedDB.databases) return null;
  if (!(await indexedDB.databases()).some((d) => d.name === "wardrobe")) return null;
  const db = await openDB("wardrobe");
  const has = (n: string) => db.objectStoreNames.contains(n);
  const out: Legacy = { garments: has("garments") ? await db.getAll("garments") : [], trips: has("trips") ? await db.getAll("trips") : [] };
  db.close(); return out;
}

export default function Migration({ onDone }: { onDone: () => void }) {
  const [legacy, setLegacy] = useState<Legacy | null>(null);
  const [cloud, setCloud] = useState<Set<string>>(new Set());
  const [prog, setProg] = useState<{ done: number; total: number; failed: string[] } | null>(null);
  const [busy, setBusy] = useState(false);

  async function load() {
    const l = await readLegacy().catch(() => null);
    if (!l || !(l.garments.length || l.trips.length)) return setLegacy(null);
    setLegacy(l); setCloud(new Set((await repo.list().catch(() => [])).map((g) => g.id)));
  }
  useEffect(() => { void load(); }, []);
  if (!legacy) return null;

  const pending = legacy.garments.filter((g) => !cloud.has(g.id));
  async function run() {
    setBusy(true); const failed: string[] = []; let done = 0;
    setProg({ done, total: pending.length, failed });
    for (const g of pending) {
      try { await repo.create(g); } catch { failed.push(g.name); }
      setProg({ done: ++done, total: pending.length, failed: [...failed] });
    }
    const have = new Set((await tripRepository.list().catch(() => [])).map((t) => t.id)); // never overwrite cloud trips
    for (const t of legacy!.trips.filter((t) => !have.has(t.id))) { try { await tripRepository.put(t); } catch { failed.push(`trip: ${t.name}`); } }
    setProg((p) => p && { ...p, failed });
    await load(); onDone(); setBusy(false);
  }
  return (
    <div role="status" className="border-b border-[var(--line)] bg-white px-5 py-3 text-sm">
      {pending.length > 0 ? (
        <>This browser holds {legacy.garments.length} garment(s) that were never saved to the cloud; {pending.length} still to migrate.
          <button onClick={run} disabled={busy} className="ml-2 underline">{busy ? "Migrating…" : prog?.failed.length ? "Retry failed" : "Migrate to cloud"}</button></>
      ) : (
        <>All {legacy.garments.length} local garment(s) are in the cloud.
          <button className="ml-2 underline" onClick={() => { if (confirm("Delete this browser's old local copy? The cloud copy stays.")) { indexedDB.deleteDatabase("wardrobe"); setLegacy(null); } }}>Delete local copy</button></>
      )}
      {prog && <span className="ml-3 text-[var(--mute)]">{prog.done} of {prog.total} migrated{prog.failed.length ? `, failed: ${prog.failed.join(", ")}` : ""}</span>}
    </div>
  );
}
