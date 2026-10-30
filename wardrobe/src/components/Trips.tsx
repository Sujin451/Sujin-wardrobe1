"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Plus, Trash2 } from "lucide-react";
import type { Garment, Trip } from "@/lib/types";
import { garmentRepository, tripRepository, thumbUrl } from "@/lib/garmentRepository";

const box = "w-full rounded border border-[var(--line)] bg-white px-3 py-2 text-sm";

export default function Trips() {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [garments, setGarments] = useState<Garment[]>([]);
  const [selId, setSelId] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([tripRepository.list(), garmentRepository.list()]).then(([t, g]) => { setTrips(t); setGarments(g); setSelId(t[0]?.id ?? null); });
  }, []);
  const urls = useMemo(() => Object.fromEntries(garments.map((g) => [g.id, thumbUrl(g)])), [garments]);
  useEffect(() => {
    const r = () => Promise.all([tripRepository.list(), garmentRepository.list()]).then(([t, g]) => { setTrips(t); setGarments(g); }).catch(() => {});
    window.addEventListener("focus", r); return () => window.removeEventListener("focus", r);
  }, []);

  const byId = useMemo(() => new Map(garments.map((g) => [g.id, g])), [garments]);
  const trip = trips.find((t) => t.id === selId) ?? null;

  async function save(t: Trip) { await tripRepository.put({ ...t, updatedAt: Date.now() }); setTrips(await tripRepository.list()); }
  async function create() {
    const now = Date.now(); const t: Trip = { id: crypto.randomUUID(), name: "New trip", garmentIds: [], packedIds: [], createdAt: now, updatedAt: now };
    await tripRepository.put(t); setTrips(await tripRepository.list()); setSelId(t.id);
  }
  async function remove(t: Trip) {
    if (!confirm(`Delete trip "${t.name}"? Your garments are not affected.`)) return;
    await tripRepository.remove(t.id); const l = await tripRepository.list(); setTrips(l); setSelId(l[0]?.id ?? null);
  }
  const toggleItem = (t: Trip, id: string) => save({ ...t, garmentIds: t.garmentIds.includes(id) ? t.garmentIds.filter((x) => x !== id) : [...t.garmentIds, id], packedIds: t.packedIds.filter((x) => x !== id) });
  const togglePacked = (t: Trip, id: string) => save({ ...t, packedIds: t.packedIds.includes(id) ? t.packedIds.filter((x) => x !== id) : [...t.packedIds, id] });

  const items = trip ? trip.garmentIds.map((id) => byId.get(id)).filter((g): g is Garment => !!g) : [];
  const missing = trip ? trip.garmentIds.length - items.length : 0; // garments deleted from the wardrobe
  const packed = trip ? items.filter((g) => trip.packedIds.includes(g.id)).length : 0;
  const counts = items.reduce<Record<string, number>>((a, g) => ({ ...a, [g.category]: (a[g.category] ?? 0) + 1 }), {});

  return (
    <div className="min-h-screen">
      <header className="flex items-center justify-between border-b border-[var(--line)] px-5 py-3">
        <div className="flex items-center gap-6">
          <span className="text-sm font-medium tracking-[0.25em]">MY WARDROBE</span>
          <Link href="/" className="text-sm text-[var(--mute)] hover:text-[var(--ink)]">Wardrobe</Link>
        </div>
        <button onClick={create} className="flex items-center gap-1.5 rounded-full bg-[var(--ink)] px-4 py-2 text-sm text-white"><Plus size={14} aria-hidden />New trip</button>
      </header>
      <main className="mx-auto max-w-[1400px] px-5 py-10">
        <h1 className="serif text-3xl sm:text-5xl">Trips &amp; packing</h1>
        <p className="mt-2 text-[var(--mute)]">Plan a trip and pack from the clothes you already own.</p>

        {trips.length === 0 ? (
          <div className="mt-16 text-center">
            <p className="serif text-2xl">No trips yet.</p>
            <p className="mt-1 text-[var(--mute)]">Create a trip, then choose garments from your wardrobe to pack.</p>
            <button onClick={create} className="mt-5 rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm text-white">Plan your first trip</button>
          </div>
        ) : (
          <div className="mt-8 grid gap-8 lg:grid-cols-[260px_1fr]">
            <ul className="space-y-2" aria-label="Trips">
              {trips.map((t) => (
                <li key={t.id}>
                  <button onClick={() => setSelId(t.id)} aria-pressed={t.id === selId} className={`w-full rounded border px-3 py-2 text-left text-sm ${t.id === selId ? "border-[var(--ink)] bg-white" : "border-[var(--line)] hover:bg-[var(--hover)]"}`}>
                    <span className="block font-medium">{t.name}</span>
                    <span className="text-xs text-[var(--mute)]">{[t.destination, `${t.garmentIds.length} items`].filter(Boolean).join(" · ")}</span>
                  </button>
                </li>
              ))}
            </ul>

            {trip && (
              <section key={trip.id} aria-label={trip.name} className="fade space-y-8">
                <div className="grid gap-3 sm:grid-cols-2">
                  <input aria-label="Trip name" defaultValue={trip.name} onBlur={(e) => e.target.value.trim() && e.target.value !== trip.name && save({ ...trip, name: e.target.value.trim() })} className={box} />
                  <input aria-label="Destination" placeholder="Destination" defaultValue={trip.destination} onBlur={(e) => e.target.value !== (trip.destination ?? "") && save({ ...trip, destination: e.target.value.trim() })} className={box} />
                  <input aria-label="Start date" type="date" defaultValue={trip.startDate} onBlur={(e) => e.target.value !== (trip.startDate ?? "") && save({ ...trip, startDate: e.target.value })} className={box} />
                  <input aria-label="End date" type="date" defaultValue={trip.endDate} onBlur={(e) => e.target.value !== (trip.endDate ?? "") && save({ ...trip, endDate: e.target.value })} className={box} />
                  <textarea aria-label="Notes" placeholder="Notes (weather, plans, laundry…)" defaultValue={trip.notes} onBlur={(e) => e.target.value !== (trip.notes ?? "") && save({ ...trip, notes: e.target.value })} className={`${box} sm:col-span-2`} rows={2} />
                </div>

                <div>
                  <h2 className="serif text-2xl">Packing list</h2>
                  <p className="mt-1 text-sm text-[var(--mute)]" aria-live="polite">
                    {items.length ? `${packed} of ${items.length} packed · ${Object.entries(counts).map(([c, n]) => `${n} ${c.toLowerCase()}`).join(", ")}` : "Nothing selected yet. Pick garments below."}
                  </p>
                  {missing > 0 && <p className="mt-1 text-sm text-amber-700">{missing} item(s) were deleted from your wardrobe.{" "}<button className="underline" onClick={() => save({ ...trip, garmentIds: items.map((g) => g.id), packedIds: trip.packedIds.filter((id) => byId.has(id)) })}>Remove them</button></p>}
                  <ul className="mt-3 divide-y divide-[var(--line)] rounded border border-[var(--line)] bg-white">
                    {items.map((g) => (
                      <li key={g.id} className="flex items-center gap-3 p-2">
                        <input type="checkbox" id={`p-${g.id}`} checked={trip.packedIds.includes(g.id)} onChange={() => togglePacked(trip, g.id)} className="h-4 w-4" />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img loading="lazy" decoding="async" src={urls[g.id]} alt="" className="h-12 w-10 object-contain" />
                        <label htmlFor={`p-${g.id}`} className={`flex-1 text-sm ${trip.packedIds.includes(g.id) ? "text-[var(--mute)] line-through" : ""}`}>{g.name}<span className="ml-2 text-xs text-[var(--mute)]">{g.category}</span></label>
                        <button aria-label={`Remove ${g.name} from trip`} onClick={() => toggleItem(trip, g.id)} className="px-2 text-sm text-[var(--mute)] hover:text-[var(--ink)]">Remove</button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="serif text-2xl">Choose from your wardrobe</h2>
                  {garments.length === 0 ? (
                    <p className="mt-2 text-sm text-[var(--mute)]">Your wardrobe is empty. <Link href="/" className="underline">Add garments first.</Link></p>
                  ) : (
                    <ul className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
                      {garments.map((g) => {
                        const on = trip.garmentIds.includes(g.id);
                        return (
                          <li key={g.id}>
                            <button onClick={() => toggleItem(trip, g.id)} aria-pressed={on} aria-label={`${on ? "Remove" : "Add"} ${g.name}`} className={`w-full rounded border bg-white p-2 text-left transition hover:-translate-y-0.5 ${on ? "border-[var(--accent)] ring-1 ring-[var(--accent)]" : "border-[var(--line)]"}`}>
                              <div className="flex aspect-[4/5] items-center justify-center bg-[var(--hover)]">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img loading="lazy" decoding="async" src={urls[g.id]} alt={g.name} className="max-h-full max-w-full object-contain" />
                              </div>
                              <p className="mt-1 truncate text-xs">{g.name}</p>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
                <button onClick={() => remove(trip)} className="flex items-center gap-1.5 rounded-full border border-[var(--line)] px-4 py-2 text-sm hover:bg-[var(--hover)]"><Trash2 size={14} aria-hidden />Delete trip</button>
              </section>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
