# APNA BAITHAK — Pure Veg Restaurant Website

Next.js 16 + TypeScript + Tailwind CSS 4 — Premium modern Indian restaurant design.

**Live sections:** Home → Menu → Cart → About → Gallery → Contact

### Quick Start (5 hours window — run overnight)
1. Open PowerShell in this folder `C:\Users\Abhig\OneDrive\Documents\RESTAURANT`
2. Run:
```
npm install
npm run dev
```
Then open http://localhost:3000

> Network is slow to registry.npmjs.org (one tarball took 274s). `npm install` may take 30-60 min. Leave it running overnight — it will finish. All source files are already ready and verified.

### Edit Prices
Edit `data/menu.ts` — all Half/Full prices in one file. Example:
```ts
item("Malai Chaap", "roasted-chaap", "Roasted Chaap", 290, { half: 150, full: 290 })
```

### Edit Phone / Address / Hours
Edit `lib/site.ts`:
```ts
phone: "8299751213"  // only this number, other removed as you requested
address, hours, mapsEmbed, etc.
```

### Add Real Photos
- Logo: `public/images/logo.png`
- Gallery: `public/images/gallery/` — drop your 11 store photos there
- Menu: `public/images/menu/`

Gallery currently shows placeholders — replace with your photos.

### Cart
Working cart with Add + / quantity, total, WhatsApp checkout (no payment gateway). Uses `app/context/CartContext.tsx` with CartProvider wrapping app — no runtime errors.

### Build for production
```
npm run build
npm start
```

---
Made for APNA BAITHAK, Eldeco City, Lucknow. Pure Veg • Fresh Taste.
