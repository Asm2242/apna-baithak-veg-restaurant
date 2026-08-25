"use client";
import FoodCard from "./FoodCard";
import { bestSellers } from "@/data/menu";

export default function BestSellers() {
  return (
    <section className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-2">
      <div className="rounded-[24px] bg-white p-4 sm:p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04]">
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-display text-xl sm:text-2xl font-black text-[#1c0a00]">Best Sellers <span className="ml-2 rounded-full bg-[#ea580c] px-2.5 py-1 text-xs font-bold text-white">TOP 9</span></h3>
          <a href="#menu" className="text-sm font-bold text-[#ea580c] hover:underline">View all →</a>
        </div>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {bestSellers.slice(0, 9).map((it) => (
            <FoodCard key={it.id} item={it} />
          ))}
        </div>
      </div>
    </section>
  );
}
