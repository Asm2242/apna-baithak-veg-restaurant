"use client";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

export default function BottomNav() {
  const { count, bill, openCart, isCartOpen } = useCart();
  const { count: wishCount } = useWishlist();

  const handleSearch = () => {
    const el = document.getElementById("menu-search") as HTMLInputElement | null;
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => el?.focus(), 400);
  };
  const handleCategories = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Floating cart strip - 1 item in cart style, above bottom nav */}
      {count > 0 && !isCartOpen && (
        <div className="fixed bottom-[64px] inset-x-0 z-40 px-3 lg:hidden">
          <div className="mx-auto max-w-[640px] rounded-2xl bg-[#ea580c] text-white px-3 py-2.5 flex items-center justify-between shadow-[0_8px_24px_rgba(0,0,0,0.22)]">
            <div className="flex items-center gap-2.5">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-white text-[#ea580c] text-sm font-black">🛒</div>
              <div className="leading-tight">
                <div className="text-sm font-black">
                  {count} {count === 1 ? "item" : "items"} in cart
                </div>
                <div className="text-xs opacity-90">₹{bill.grandTotal} • {bill.isFreeDelivery ? "FREE delivery" : `Add ₹${bill.freeDeliveryRemaining} for FREE`}</div>
              </div>
            </div>
            <button onClick={openCart} className="rounded-xl bg-white px-4 py-2 text-sm font-black text-[#ea580c] active:scale-[0.98]">
              View Cart →
            </button>
          </div>
        </div>
      )}

      {/* Bottom nav - 5 buttons like Blinkit */}
      <nav className="fixed bottom-0 inset-x-0 z-40 bg-white border-t shadow-[0_-4px_20px_rgba(0,0,0,0.06)] lg:hidden pb-[env(safe-area-inset-bottom)]">
        <div className="mx-auto max-w-[640px] grid grid-cols-5 gap-1 px-1 py-1">
          <a href="#home" className="flex flex-col items-center justify-center gap-0.5 py-1.5 rounded-xl hover:bg-[#f7f7f7]">
            <span className="text-lg">🏠</span>
            <span className="text-[10px] font-bold tracking-wide">Home</span>
          </a>
          <button onClick={handleCategories} className="flex flex-col items-center justify-center gap-0.5 py-1.5 rounded-xl hover:bg-[#f7f7f7]">
            <span className="text-lg">🍱</span>
            <span className="text-[10px] font-bold">Categories</span>
          </button>
          <button onClick={handleSearch} className="flex flex-col items-center justify-center gap-0.5 py-1.5 rounded-xl hover:bg-[#f7f7f7]">
            <span className="text-lg">🔍</span>
            <span className="text-[10px] font-bold">Search</span>
          </button>
          <button onClick={openCart} className="relative flex flex-col items-center justify-center gap-0.5 py-1.5 rounded-xl hover:bg-[#f7f7f7]">
            <span className="relative text-lg">
              🛒
              {count > 0 && (
                <span className="absolute -right-3 -top-1 grid h-5 min-w-[20px] place-items-center rounded-full bg-[#ea580c] px-1 text-[11px] font-black text-white ring-2 ring-white">
                  {count}
                </span>
              )}
            </span>
            <span className="text-[10px] font-bold">Cart</span>
          </button>
          <a href="#menu" className="relative flex flex-col items-center justify-center gap-0.5 py-1.5 rounded-xl hover:bg-[#f7f7f7]">
            <span className="relative text-lg">
              {wishCount > 0 ? "♥" : "♡"}
              {wishCount > 0 && (
                <span className="absolute -right-3 -top-1 grid h-4 min-w-[16px] place-items-center rounded-full bg-[#ea580c] px-1 text-[9px] font-black text-white ring-2 ring-white">
                  {wishCount}
                </span>
              )}
            </span>
            <span className="text-[10px] font-bold">Wishlist</span>
          </a>
        </div>
      </nav>
      {/* Spacer to avoid content hidden behind nav on mobile */}
      <div className="h-[64px] lg:hidden" aria-hidden />
    </>
  );
}
