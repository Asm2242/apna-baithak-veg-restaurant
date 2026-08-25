export default function Gallery() {
  const galleryImages = [
    "/gallery/WhatsApp%20Image%202026-08-23%20at%2011.08.40%20PM.jpeg",
    "/gallery/WhatsApp%20Image%202026-08-23%20at%2011.08.41%20PM.jpeg",
    "/gallery/WhatsApp%20Image%202026-08-23%20at%2011.08.41%20PM%20(1).jpeg",
    "/gallery/WhatsApp%20Image%202026-08-23%20at%2011.08.41%20PM%20(2).jpeg",
    "/gallery/WhatsApp%20Image%202026-08-23%20at%2011.08.42%20PM.jpeg",
    "/gallery/WhatsApp%20Image%202026-08-23%20at%2011.08.42%20PM%20(1).jpeg",
    "/gallery/WhatsApp%20Image%202026-08-23%20at%2011.08.43%20PM.jpeg",
    "/gallery/WhatsApp%20Image%202026-08-23%20at%2011.08.43%20PM%20(1).jpeg",
    "/gallery/WhatsApp%20Image%202026-08-23%20at%2011.08.44%20PM.jpeg",
    "/gallery/WhatsApp%20Image%202026-08-23%20at%2011.08.44%20PM%20(1).jpeg",
  ];
  return (
    <section id="gallery" className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-8 scroll-mt-20">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl font-black text-[#1c0a00]">Gallery</h2>
          <p className="mt-1 text-sm text-black/60">Real photos from Apna Baithak — Eldeco City, Lucknow • Click to enlarge</p>
        </div>
        <a href="/menu" className="hidden sm:inline-flex rounded-full bg-[#ea580c] px-4 py-2 text-sm font-bold text-white">View Menu →</a>
      </div>
      <div className="mt-5 grid grid-cols-2 lg:grid-cols-3 gap-3">
        {galleryImages.map((src, i) => (
          <a key={src} href={src.replace(/%20/g, " ")} target="_blank" className="group relative h-40 sm:h-52 overflow-hidden rounded-[20px] bg-white shadow ring-1 ring-black/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={`Apna Baithak gallery ${i + 1}`} className="h-full w-full object-cover group-hover:scale-[1.03] transition" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
            <div className="absolute bottom-2 left-2 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-[#1c0a00]">{i === 0 ? "Front • Night" : i === 1 ? "Kitchen • Live Wok" : i < 5 ? "Outdoor Seating" : "Apna Baithak"}</div>
          </a>
        ))}
      </div>
      <div className="mt-4 rounded-2xl bg-white p-3 text-center text-xs text-black/60 ring-1 ring-black/5">Add more photos to <code>public/gallery/</code> — they appear automatically. All images are pure veg restaurant, no filter needed.</div>
    </section>
  );
}
