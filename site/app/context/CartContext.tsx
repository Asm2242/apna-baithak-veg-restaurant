"use client";
import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  category?: string;
};

export type DeliveryType = "delivery" | "takeaway" | "dinein";

export type CouponDef = {
  code: string;
  label: string;
  type: "flat" | "percent";
  value: number;
  maxDiscount?: number;
  minOrder: number;
  desc: string;
};

export const AVAILABLE_COUPONS: CouponDef[] = [
  { code: "BAITHAK10", label: "10% OFF", type: "percent", value: 10, maxDiscount: 80, minOrder: 199, desc: "10% off up to ₹80 on orders above ₹199" },
  { code: "WELCOME50", label: "₹50 OFF", type: "flat", value: 50, minOrder: 249, desc: "Flat ₹50 off on orders above ₹249" },
  { code: "FREESHIP", label: "FREE DELIVERY", type: "flat", value: 0, minOrder: 149, desc: "Free delivery — save ₹40" },
  { code: "CHAAP20", label: "₹20 OFF", type: "flat", value: 20, minOrder: 99, desc: "Flat ₹20 off on orders above ₹99" },
];

export const FREE_DELIVERY_THRESHOLD = 399;
export const BASE_DELIVERY_FEE = 40;
export const HANDLING_FEE = 5;
export const SMALL_CART_FEE = 30;
export const SMALL_CART_THRESHOLD = 149;

export type CartBill = {
  subtotal: number;
  discount: number;
  deliveryFee: number;
  handlingFee: number;
  smallCartFee: number;
  tip: number;
  grandTotal: number;
  savings: number;
  freeDeliveryProgress: number;
  freeDeliveryRemaining: number;
  isFreeDelivery: boolean;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  increase: (id: string) => void;
  decrease: (id: string) => void;
  clearCart: () => void;
  setTip: (n: number) => void;
  tip: number;
  deliveryType: DeliveryType;
  setDeliveryType: (t: DeliveryType) => void;
  couponCode: string | null;
  couponError: string | null;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  appliedCoupon: CouponDef | null;
  total: number;
  subtotal: number;
  count: number;
  bill: CartBill;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

function calcDiscount(coupon: CouponDef | null, subtotal: number): number {
  if (!coupon) return 0;
  if (subtotal < coupon.minOrder) return 0;
  if (coupon.code === "FREESHIP") return 0;
  if (coupon.type === "flat") return Math.min(coupon.value, subtotal);
  if (coupon.type === "percent") {
    const v = Math.floor((subtotal * coupon.value) / 100);
    return coupon.maxDiscount ? Math.min(v, coupon.maxDiscount) : v;
  }
  return 0;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [tip, setTip] = useState(0);
  const [deliveryType, setDeliveryType] = useState<DeliveryType>("delivery");
  const [couponCode, setCouponCode] = useState<string | null>(null);
  const [couponError, setCouponError] = useState<string | null>(null);

  // hydration
  useEffect(() => {
    try {
      const saved = localStorage.getItem("apna-baithak-cart");
      if (saved) setCart(JSON.parse(saved));
      const savedTip = localStorage.getItem("apna-baithak-tip");
      if (savedTip) setTip(Number(savedTip) || 0);
      const savedDel = localStorage.getItem("apna-baithak-delivery") as DeliveryType | null;
      if (savedDel) setDeliveryType(savedDel);
      const savedCoupon = localStorage.getItem("apna-baithak-coupon");
      if (savedCoupon) setCouponCode(savedCoupon);
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("apna-baithak-cart", JSON.stringify(cart));
    } catch {}
  }, [cart]);
  useEffect(() => {
    try {
      localStorage.setItem("apna-baithak-tip", String(tip));
    } catch {}
  }, [tip]);
  useEffect(() => {
    try {
      localStorage.setItem("apna-baithak-delivery", deliveryType);
    } catch {}
  }, [deliveryType]);
  useEffect(() => {
    try {
      if (couponCode) localStorage.setItem("apna-baithak-coupon", couponCode);
      else localStorage.removeItem("apna-baithak-coupon");
    } catch {}
  }, [couponCode]);

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) => (p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p));
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    // do not auto-open cart - user requested Add should not show cart
  };

  const removeFromCart = (id: string) => setCart((prev) => prev.filter((p) => p.id !== id));
  const increase = (id: string) => setCart((prev) => prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p)));
  const decrease = (id: string) =>
    setCart((prev) => {
      const item = prev.find((p) => p.id === id);
      if (!item) return prev;
      if (item.quantity <= 1) return prev.filter((p) => p.id !== id);
      return prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity - 1 } : p));
    });

  const clearCart = () => {
    setCart([]);
    setTip(0);
    setCouponCode(null);
    setCouponError(null);
    try {
      localStorage.removeItem("apna-baithak-cart");
      localStorage.removeItem("apna-baithak-tip");
      localStorage.removeItem("apna-baithak-coupon");
    } catch {}
  };

  const appliedCoupon = useMemo(() => {
    if (!couponCode) return null;
    return AVAILABLE_COUPONS.find((c) => c.code === couponCode) ?? null;
  }, [couponCode]);

  const subtotal = useMemo(() => cart.reduce((sum, i) => sum + i.price * i.quantity, 0), [cart]);
  const count = useMemo(() => cart.reduce((sum, i) => sum + i.quantity, 0), [cart]);

  const discount = useMemo(() => calcDiscount(appliedCoupon, subtotal), [appliedCoupon, subtotal]);

  const bill: CartBill = useMemo(() => {
    const isFreeByThreshold = subtotal >= FREE_DELIVERY_THRESHOLD;
    const isFreeByCoupon = appliedCoupon?.code === "FREESHIP" && subtotal >= (appliedCoupon?.minOrder ?? 0);
    const isFreeDelivery = deliveryType !== "delivery" ? true : isFreeByThreshold || isFreeByCoupon;
    let deliveryFee = 0;
    if (deliveryType === "delivery") {
      if (isFreeDelivery) deliveryFee = 0;
      else if (subtotal >= 250) deliveryFee = 20;
      else if (subtotal > 0) deliveryFee = BASE_DELIVERY_FEE;
      else deliveryFee = 0;
    }
    const handlingFee = cart.length > 0 ? HANDLING_FEE : 0;
    const smallCartFee = deliveryType === "delivery" && subtotal > 0 && subtotal < SMALL_CART_THRESHOLD ? SMALL_CART_FEE : 0;
    const grandTotal = Math.max(0, subtotal - discount + deliveryFee + handlingFee + smallCartFee + tip);
    const savedDelivery = deliveryType === "delivery" && isFreeDelivery && subtotal > 0 ? BASE_DELIVERY_FEE : 0;
    const savings = discount + savedDelivery;
    const progress = Math.min(100, Math.round((subtotal / FREE_DELIVERY_THRESHOLD) * 100));
    const remaining = Math.max(0, FREE_DELIVERY_THRESHOLD - subtotal);
    return {
      subtotal,
      discount,
      deliveryFee,
      handlingFee,
      smallCartFee,
      tip,
      grandTotal,
      savings,
      freeDeliveryProgress: progress,
      freeDeliveryRemaining: remaining,
      isFreeDelivery,
    };
  }, [subtotal, discount, tip, cart.length, deliveryType, appliedCoupon]);

  const total = bill.grandTotal;

  const applyCoupon = (code: string) => {
    const upper = code.trim().toUpperCase();
    if (!upper) {
      setCouponError("Enter coupon code");
      return false;
    }
    const found = AVAILABLE_COUPONS.find((c) => c.code === upper);
    if (!found) {
      setCouponError("Invalid coupon");
      return false;
    }
    if (subtotal < found.minOrder) {
      setCouponError(`Add ₹${found.minOrder - subtotal} more to use this coupon`);
      return false;
    }
    if (cart.length === 0) {
      setCouponError("Cart is empty");
      return false;
    }
    setCouponCode(found.code);
    setCouponError(null);
    return true;
  };
  const removeCoupon = () => {
    setCouponCode(null);
    setCouponError(null);
  };

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increase,
        decrease,
        clearCart,
        tip,
        setTip,
        deliveryType,
        setDeliveryType,
        couponCode,
        couponError,
        applyCoupon,
        removeCoupon,
        appliedCoupon,
        total,
        subtotal,
        count,
        bill,
        isCartOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
