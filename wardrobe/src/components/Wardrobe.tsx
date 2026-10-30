"use client";
import { useEffect, useMemo, useState } from "react";
import { Plus, X, Trash2, LayoutGrid, Shirt, Search } from "lucide-react";
import { CATEGORIES, type Category, type Garment, type Trip } from "@/lib/types";
import { garmentRepository as repo, tripRepository, imageUrl, thumbUrl } from "@/lib/garmentRepository";
import Migration from "./Migration";
import Link from "next/link";
import BulkUpload from "./BulkUpload";
import Rack from "./Rack";



export default function Wardrobe() {
  const [items, setItems] = useState<Garment[]>([]);
  const [view, setView] = useState<"rack" | "gallery">("rack");
  const [cat, setCat] = useState<Category | "All">("All");
  const [q, setQ] = useState("");
  const [sel, setSel] = useState<Garment | null>(null);
  const [adding, setAdding] = useState(false);
  const [toast, setToast] = useState("");
  const [colour, setColour] = useState("");
  const [trips, setTrips] = useState<Trip[]>([]);
  const [showOrig, setShowOrig] = useState(false);
  const origUrl = sel ? `/api/garments/${sel.id}/original?v=${sel.updatedAt}` : "";
  const colours = useMemo(() => [...new Set(items.map((g) => g.primaryColor?.toLowerCase()).filter(Boolean) as string[])].sort(), [items]);

  useEffect(() => {
    const refresh = () => { repo.list().then(setItems).catch(() => setToast("Could not reach the server")); tripRepository.list().then(setTrips).catch(() => {}); };
    refresh(); window.addEventListener("focus", refresh); return () => window.removeEventListener("focus", refresh);
  }, []);
  const urls = useMemo(() => Object.fromEntries(items.map((g) => [g.id, imageUrl(g)])), [items]);
  useEffect(() => {
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") { setSel(null); setAdding(false); } };
    window.addEventListener("keydown", k); return () => window.removeEventListener("keydown", k);
  }, []);
  useEffect(() => { if (toast) { const t = setTimeout(() => setToast(""), 2200); return () => clearTimeout(t); } }, [toast]);

  const shown = useMemo(() => items.filter((g) =>
    (cat === "All" || g.category === cat) && (!colour || g.primaryColor?.toLowerCase() === colour) &&
    [g.name, g.category, g.brand, g.primaryColor, g.notes].join(" ").toLowerCase().includes(q.toLowerCase())), [items, cat, q, colour]);

  async function update(g: Garment, p: Partial<Garment>) {
    const u = await repo.update(g.id, p); setItems(await repo.list()); setSel(u); setToast("Saved");
  }
  async function addToTrip(g: Garment, id: string) {
    const t = trips.find((x) => x.id === id); if (!t) return;
    if (t.garmentIds.includes(g.id)) return setToast(`Already in ${t.name}`);
    await tripRepository.put({ ...t, garmentIds: [...t.garmentIds, g.id], updatedAt: Date.now() });
    setTrips(await tripRepository.list()); setToast(`Added to ${t.name}`);
  }
  async function del(g: Garment) {
    if (!confirm(`Delete "${g.name}"?`)) return;
    await repo.remove(g.id); setItems(await repo.list()); setSel(null); setToast("Garment deleted");
  }

  return (
    <div className="min-h-screen">
      <header className="flex items-center justify-between gap-3 border-b border-[var(--line)] px-5 py-3">
        <div className="flex items-center gap-6"><span className="text-sm font-medium tracking-[0.25em]">MY WARDROBE</span><Link href="/trips" className="text-sm text-[var(--mute)] hover:text-[var(--ink)]">Trips &amp; packing</Link></div>
        <div className="flex items-center gap-2">
          <label className="hidden items-center gap-2 rounded-full border border-[var(--line)] bg-white px-3 py-1.5 text-sm sm:flex">
            <Search size={14} aria-hidden /><input aria-label="Search garments" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search" className="w-36 bg-transparent outline-none" />
          </label>
          <button onClick={() => setAdding(true)} className="flex items-center gap-1.5 rounded-full bg-[var(--ink)] px-4 py-2 text-sm text-white"><Plus size={14} aria-hidden />Add clothing</button>
        </div>
      </header>

      <Migration onDone={async () => setItems(await repo.list())} />
      <main className="mx-auto max-w-[1600px] px-5 py-10">
        <h1 className="serif text-3xl sm:text-5xl">Your wardrobe, beautifully organised.</h1>
        <p className="mt-2 text-[var(--mute)]">Every piece you own, all in one place.</p>
        <p className="mt-4 text-sm text-[var(--mute)]">{items.length} garments · {items.filter((g) => Date.now() - g.createdAt < 7 * 864e5).length} added this week</p>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Category filter">
            {(["All", ...CATEGORIES] as const).map((c) => (
              <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c}
                className={`rounded-full border px-3 py-1 text-sm ${cat === c ? "border-[var(--ink)] bg-[var(--ink)] text-white" : "border-[var(--line)] bg-white hover:bg-[var(--hover)]"}`}>{c}</button>
            ))}
          </div>
          <div className="flex items-center gap-1" role="group" aria-label="View">
            <select aria-label="Filter by colour" value={colour} onChange={(e) => setColour(e.target.value)} className="mr-2 rounded border border-[var(--line)] bg-white px-2 py-1 text-sm">
              <option value="">All colours</option>{colours.map((c) => <option key={c}>{c}</option>)}
            </select>
            <button aria-label="Clothing rack" aria-pressed={view === "rack"} onClick={() => setView("rack")} className={`rounded p-2 ${view === "rack" ? "bg-[var(--hover)]" : ""}`}><Shirt size={18} /></button>
            <button aria-label="Product gallery" aria-pressed={view === "gallery"} onClick={() => setView("gallery")} className={`rounded p-2 ${view === "gallery" ? "bg-[var(--hover)]" : ""}`}><LayoutGrid size={18} /></button>
          </div>
        </div>

        {shown.length === 0 ? (
          <div className="mt-16 text-center">
            <div className="rail mx-auto mb-6 w-64" />
            <p className="serif text-2xl">Your wardrobe starts here.</p>
            <p className="mt-1 text-[var(--mute)]">No garments here yet. Add your first piece to get started.</p>
            <button onClick={() => setAdding(true)} className="mt-5 rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm text-white">Add your first garment</button>
          </div>
        ) : view === "rack" ? (
          <Rack items={shown} urls={urls} onSelect={(g) => { setShowOrig(false); setSel(g); }} />
        ) : (
          <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {shown.map((g) => (
              <li key={g.id} className="fade">
                <button onClick={() => setSel(g)} className="w-full rounded border border-[var(--line)] bg-white p-3 text-left transition hover:-translate-y-1 hover:shadow-md">
                  <div className="flex aspect-[4/5] items-center justify-center bg-[var(--hover)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img loading="lazy" decoding="async" src={thumbUrl(g)} alt={g.name} className="max-h-full max-w-full object-contain" />
                  </div>
                  <p className="mt-2 truncate text-sm font-medium">{g.name}</p>
                  <p className="text-xs text-[var(--mute)]">{g.category}{g.brand ? ` · ${g.brand}` : ""}</p>
                </button>
              </li>
            ))}
          </ul>
        )}
      </main>

      <footer className="border-t border-[var(--line)] py-6 text-center text-sm text-[var(--mute)]">Your personal style, in one place.</footer>

      {sel && (
        <Dialog onClose={() => setSel(null)} label={sel.name}>
          <div className="grid gap-5 sm:grid-cols-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={showOrig ? origUrl : urls[sel.id]} alt={sel.name} className="max-h-[70vh] w-full bg-[var(--hover)] object-contain" />
            <div>
              <h2 className="serif text-2xl">{sel.name}</h2>
              <dl className="mt-3 space-y-1 text-sm">
                {([["Category", sel.category], ["Colour", sel.primaryColor], ["Brand", sel.brand], ["Size", sel.size], ["Notes", sel.notes], ["Added", new Date(sel.createdAt).toLocaleDateString()]] as const).map(([k, v]) => v ? <div key={k} className="flex gap-2"><dt className="w-20 text-[var(--mute)]">{k}</dt><dd>{v}</dd></div> : null)}
              </dl>
              {sel.colorHex && <p className="mt-3 flex items-center gap-2 text-sm"><span className="inline-block h-4 w-4 rounded-full border border-[var(--line)]" style={{ background: sel.colorHex }} />{sel.primaryColor}{sel.secondaryColors?.length ? ` + ${sel.secondaryColors.join(", ")}` : ""}</p>}
              <div className="mt-3 space-y-2 text-sm">
                <input aria-label="Name" key={sel.id + "n"} defaultValue={sel.name} onBlur={(e) => e.target.value.trim() && e.target.value !== sel.name && update(sel, { name: e.target.value.trim() })} className="w-full rounded border border-[var(--line)] px-2 py-1" />
                <select aria-label="Category" value={sel.category} onChange={(e) => update(sel, { category: e.target.value as Category })} className="w-full rounded border border-[var(--line)] px-2 py-1">{CATEGORIES.map((c) => <option key={c}>{c}</option>)}</select>
                <input aria-label="Colour" placeholder="Colour (correct if wrong)" key={sel.id + "c"} defaultValue={sel.primaryColor} onBlur={(e) => e.target.value !== (sel.primaryColor ?? "") && update(sel, { primaryColor: e.target.value.trim(), status: "ready" })} className="w-full rounded border border-[var(--line)] px-2 py-1" />
                <input aria-label="Brand" placeholder="Brand (unknown)" key={sel.id + "b"} defaultValue={sel.brand} onBlur={(e) => e.target.value !== (sel.brand ?? "") && update(sel, { brand: e.target.value.trim() })} className="w-full rounded border border-[var(--line)] px-2 py-1" />
              </div>
              <p className="mt-3 text-xs text-[var(--mute)]">{sel.logoStatus === "done" ? `${sel.logos?.length ?? 0} logo(s) detected.` : "Logo and brand detection is not configured, so none was attempted."}</p>
              {sel.status === "needs-review" && <p className="mt-1 text-xs text-amber-700">Needs review: {sel.bgError ?? "low colour confidence"}</p>}
              <select aria-label="Add to trip" value="" onChange={(e) => e.target.value && addToTrip(sel, e.target.value)} className="mt-3 w-full rounded border border-[var(--line)] px-2 py-1 text-sm"><option value="">{trips.length ? "Add to trip…" : "No trips yet (create one in Trips & packing)"}</option>{trips.map((t) => <option key={t.id} value={t.id}>{t.name}</option>)}</select>
              {sel.hasProcessed && <button onClick={() => setShowOrig((v) => !v)} className="mt-3 text-sm underline">{showOrig ? "Show processed" : "Show original photo"}</button>}
              <button onClick={() => del(sel)} className="mt-6 flex items-center gap-1.5 rounded-full border border-[var(--line)] px-4 py-2 text-sm hover:bg-[var(--hover)]"><Trash2 size={14} aria-hidden />Delete</button>
            </div>
          </div>
        </Dialog>
      )}
      {adding && <Dialog onClose={() => setAdding(false)} label="Add clothing"><BulkUpload existing={items} onSaved={async () => setItems(await repo.list())} /></Dialog>}
      {toast && <div role="status" className="fade fixed bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-[var(--ink)] px-5 py-2 text-sm text-white">{toast}</div>}
    </div>
  );
}

function Dialog({ children, onClose, label }: { children: React.ReactNode; onClose: () => void; label: string }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4" onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-label={label} className="fade max-h-[92vh] w-full max-w-3xl overflow-auto rounded bg-white p-6" onClick={(e) => e.stopPropagation()}>
        <button aria-label="Close" onClick={onClose} autoFocus className="float-right"><X size={20} /></button>
        {children}
      </div>
    </div>
  );
}

