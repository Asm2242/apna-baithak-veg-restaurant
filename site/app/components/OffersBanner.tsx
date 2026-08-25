"use client";

export default function OffersBanner() {
  const offers = [
    { bg: "from-[#ea580c] to-[#f97316]", title: "FREE Delivery", sub: "On orders ₹399+", code: "FREESHIP", icon: "🚚" },
    { bg: "from-[#1c0a00] to-[#7c2d12]", title: "Flat ₹50 OFF", sub: "Code: WELCOME50", code: "WELCOME50", icon: "🎉" },
    { bg: "from-[#16a34a] to-[#15803d]", title: "10% OFF up to ₹80", sub: "Code: BAITHAK10", code: "BAITHAK10", icon: "💚" },
  ];
  return (
    <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 pt-6">
      <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-thin">
        {offers.map((o) => (
          <div key={o.code} className={`snap-start shrink-0 w-[280px] sm:w-[360px] rounded-2xl bg-gradient-to-br ${o.bg} p-4 text-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] card-hover`}>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/20 text-xl backdrop-blur">{o.icon}</span>
              <div>
                <div className="text-sm font-black leading-none">{o.title}</div>
                <div className="text-xs opacity-90">{o.sub}</div>
              </div>
              <span className="ml-auto rounded-full bg-white px-3 py-1 text-xs font-black text-[#1c0a00]">{o.code}</span>
            </div>
            <div className="mt-2 text-[11px] opacity-80">Pure Veg • Eldeco City • 7:30 AM – 10 PM</div>
          </div>
        ))}
      </div>
    </section>
  );
}
