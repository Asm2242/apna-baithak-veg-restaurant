import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "source.unsplash.com" },
      { protocol: "https", hostname: "**.unsplash.com" },
      { protocol: "https", hostname: "media-assets.swiggy.com" },
      { protocol: "https", hostname: "**.swiggy.com" },
      { protocol: "https", hostname: "b.zmtcdn.com" },
      { protocol: "https", hostname: "**.zmtcdn.com" },
      { protocol: "https", hostname: "**.zomato.com" },
      { protocol: "https", hostname: "**.cloudfront.net" },
      { protocol: "https", hostname: "loremflickr.com" },
      { protocol: "https", hostname: "**.loremflickr.com" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "**.picsum.photos" },
    ],
  },
};

export default nextConfig;
