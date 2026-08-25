"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useAuth } from "./AuthContext";

type WishlistContextType = {
  ids: string[];
  toggle: (id: string) => void;
  isWishlisted: (id: string) => boolean;
  count: number;
};

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const { user, toggleWishlist, isWishlisted } = useAuth();
  const [guestIds, setGuestIds] = useState<string[]>([]);

  useEffect(() => {
    if (!user) {
      try {
        const s = localStorage.getItem("apna-wishlist");
        if (s) setGuestIds(JSON.parse(s));
      } catch {}
    }
  }, [user]);

  useEffect(() => {
    if (!user) {
      try {
        localStorage.setItem("apna-wishlist", JSON.stringify(guestIds));
      } catch {}
    }
  }, [guestIds, user]);

  // guest listener for auth fallback updates
  useEffect(() => {
    if (user) return;
    const h = () => {
      try {
        const s = localStorage.getItem("apna-wishlist");
        if (s) setGuestIds(JSON.parse(s));
      } catch {}
    };
    window.addEventListener("wishlist-guest-update", h);
    return () => window.removeEventListener("wishlist-guest-update", h);
  }, [user]);

  const ids = user ? user.wishlist : guestIds;
  const toggle = (id: string) => {
    if (user) toggleWishlist(id);
    else setGuestIds((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));
  };
  const check = (id: string) => (user ? isWishlisted(id) : guestIds.includes(id));

  return <WishlistContext.Provider value={{ ids, toggle, isWishlisted: check, count: ids.length }}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
  const c = useContext(WishlistContext);
  if (!c) throw new Error("useWishlist must be used within WishlistProvider");
  return c;
}
