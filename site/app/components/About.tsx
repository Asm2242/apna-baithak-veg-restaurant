export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 scroll-mt-20">
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-[24px] bg-white p-6 sm:p-8 shadow-[0_8px_24px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04]">
          <div className="inline-flex rounded-full bg-[#16a34a]/10 px-3 py-1 text-xs font-extrabold text-[#16a34a]">ABOUT APNA BAITHAK</div>
          <h2 className="mt-3 font-display text-3xl font-black leading-tight text-[#1c0a00]">Pure Veg. Fresh Taste.<br />Family-Friendly.</h2>
          <p className="mt-3 text-sm leading-6 text-black/70">Apna Baithak is Eldeco City&apos;s pure vegetarian neighbourhood restaurant — loved for <b>Roasted Chaap, Momos, Chinese, Rolls and Main Course</b>. Every plate is freshly prepared, served hot, and perfect for family dinners, tiffin, and bulk orders.</p>
          <div className="mt-5 grid sm:grid-cols-2 gap-3">
            <div className="rounded-2xl bg-[#fff7ed] p-4 ring-1 ring-[#fed7aa]"><div className="text-sm font-extrabold">✓ 100% Pure Veg</div><div className="text-xs text-black/60">Green dot on every dish</div></div>
            <div className="rounded-2xl bg-[#fff7ed] p-4 ring-1 ring-[#fed7aa]"><div className="text-sm font-extrabold">✓ Freshly Prepared</div><div className="text-xs text-black/60">Made to order, served hot</div></div>
            <div className="rounded-2xl bg-[#fff7ed] p-4 ring-1 ring-[#fed7aa]"><div className="text-sm font-extrabold">✓ Family Friendly</div><div className="text-xs text-black/60">Clean &amp; comfortable</div></div>
            <div className="rounded-2xl bg-[#fff7ed] p-4 ring-1 ring-[#fed7aa]"><div className="text-sm font-extrabold">✓ Bulk &amp; Tiffin</div><div className="text-xs text-black/60">Home delivery available</div></div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            <span className="rounded-full bg-[#1c0a00] px-3 py-1.5 font-bold text-white">Breakfast • Lunch • Dinner</span>
            <span className="rounded-full bg-white px-3 py-1.5 font-bold ring-1 ring-black/10">7:30 AM – 10:00 PM</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-3">
            <img src="/images/foods/malai-chaap.jpg" alt="Malai Chaap" className="h-36 sm:h-44 w-full rounded-[20px] object-cover shadow ring-1 ring-black/5" loading="lazy" />
            <img src="/images/foods/afghani-momos.jpg" alt="Momos" className="h-36 sm:h-44 w-full rounded-[20px] object-cover shadow ring-1 ring-black/5" loading="lazy" />
            <div className="rounded-[20px] bg-[#ea580c] p-4 text-white"><div className="text-2xl font-black">90+</div><div className="text-xs opacity-90">Dishes • 8 Categories</div></div>
          </div>
          <div className="space-y-3">
            <div className="rounded-[20px] bg-[#1c0a00] p-4 text-white"><div className="text-sm font-bold text-[#fed7aa]">Why families love us</div><div className="mt-1 text-sm leading-6 text-white/80">Consistent taste, generous portions, quick service.</div></div>
            <img src="/images/foods/schezwan-noodles.jpg" alt="Noodles" className="h-36 sm:h-44 w-full rounded-[20px] object-cover shadow ring-1 ring-black/5" loading="lazy" />
            <img src="/images/foods/paneer-butter-masala.jpg" alt="Main Course" className="h-36 sm:h-44 w-full rounded-[20px] object-cover shadow ring-1 ring-black/5" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
