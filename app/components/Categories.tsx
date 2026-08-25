"use client";
import { menuCategories } from "@/data/menu";

const categoryImages: Record<string, string> = {
  chinese: "/images/foods/schezwan-noodles.jpg",
  "roasted-chaap": "/images/foods/malai-chaap.jpg",
  "chaap-rolls": "/images/foods/malai-chaap-roll.jpg",
  "main-course": "/images/foods/paneer-butter-masala.jpg",
  momos: "/images/foods/afghani-momos.jpg",
  burgers: "/images/foods/paneer-burger.jpg",
  beverages: "/images/foods/cold-coffee.jpg",
  extras: "/images/foods/butter-naan.jpg",
};

export default function Categories() {
  const onSelect = (id: string) => {
    window.dispatchEvent(new CustomEvent("select-category", { detail: id }));
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-[#1c0a00]">Popular Categories</h2>
          <p className="mt-1 text-sm text-black/60">Tap to filter the full menu • 8 categories • 84 dishes • Pure Veg</p>
        </div>
        <a href="#menu" className="hidden sm:inline-flex rounded-full border bg-white px-4 py-2 text-sm font-bold hover:bg-[#fff7ed]">View Full Menu →</a>
      </div>
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
        {menuCategories.map((c) => {
          const img = categoryImages[c.id] || c.items[0]?.image || "/images/foods/veg-noodles.jpg";
          return (
            <button
              key={c.id}
              onClick={() => onSelect(c.id)}
              className="group text-left overflow-hidden rounded-[20px] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.05)] ring-1 ring-black/[0.04] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:-translate-y-[1px] transition"
            >
              <div className="relative h-[108px] overflow-hidden bg-[#fff7ed]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-[1.06] transition duration-500"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent" />
                <span className="absolute bottom-2 left-2 rounded-full bg-white/95 px-2 py-1 text-[10px] font-black tracking-wide shadow">● PURE VEG</span>
                <span className="absolute top-2 right-2 rounded-full bg-[#1c0a00] px-2 py-1 text-[10px] font-bold text-white">{c.items.length} items</span>
              </div>
              <div className="p-3">
                <div className="text-sm font-extrabold leading-tight text-[#1c0a00] line-clamp-1">{c.name}</div>
                <div className="text-xs text-black/60">Tap to explore →</div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
