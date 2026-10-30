import type { Garment } from "@/lib/types";
export const RackRail = () => <div className="rail absolute left-0 right-0 top-1" />;
export const WoodenHanger = () => (
  <svg viewBox="0 0 100 40" className="mx-auto h-8 w-24" aria-hidden>
    <path d="M50 2c-6 0-9 4-9 8 0 3 3 4 5 5" fill="none" stroke="#8c8c88" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M50 14 6 34c-3 2-1 5 2 5h84c3 0 5-3 2-5z" fill="#c9a77c" stroke="#a98458" strokeWidth="1" />
  </svg>
);
export const GarmentShadow = () => <div aria-hidden className="mx-auto mt-1 h-2 w-3/4 rounded-full bg-black/10 blur-sm" />;

export default function Rack({ items, urls, onSelect }: { items: Garment[]; urls: Record<string, string>; onSelect: (g: Garment) => void }) {
  return (
    <section aria-label="Clothing rack" className="mt-8 min-h-[38rem] overflow-x-auto pt-4">
      <div className="relative min-w-max px-24">
        <RackRail />
        <ul className="relative flex gap-4">
          {items.map((g, i) => (
            <li key={g.id} className="hang fade relative w-48 shrink-0" style={{ animationDelay: `${Math.min(i, 12) * 40}ms` }}>
              <button onClick={() => onSelect(g)} aria-label={`${g.name}, ${g.category}`} className="block w-full text-center">
                <div className="tilt">
                  <WoodenHanger />
                  <div className="-mt-1 aspect-[4/5] w-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img loading="lazy" decoding="async" src={urls[g.id]} alt={g.name} className="h-full w-full object-contain object-top" />
                  </div>
                  <GarmentShadow />
                </div>
              </button>
              <div className="info pointer-events-none absolute left-1/2 top-[30rem] z-40 w-56 -translate-x-1/2 rounded bg-white p-3 text-center text-xs shadow-lg">
                <p className="text-sm font-medium">{g.name}</p>
                <p className="text-[var(--mute)]">{[g.category, g.primaryColor, g.brand].filter(Boolean).join(" · ")}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
