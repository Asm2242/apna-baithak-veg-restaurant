"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import type { MenuItem } from "@/data/menu";

type DetailContextType = {
  item: MenuItem | null;
  isOpen: boolean;
  openDetail: (item: MenuItem) => void;
  closeDetail: () => void;
};

const DetailContext = createContext<DetailContextType | undefined>(undefined);

export function DetailProvider({ children }: { children: ReactNode }) {
  const [item, setItem] = useState<MenuItem | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const openDetail = (it: MenuItem) => {
    setItem(it);
    setIsOpen(true);
  };
  const closeDetail = () => setIsOpen(false);
  return <DetailContext.Provider value={{ item, isOpen, openDetail, closeDetail }}>{children}</DetailContext.Provider>;
}

export function useDetail() {
  const ctx = useContext(DetailContext);
  if (!ctx) throw new Error("useDetail must be used within DetailProvider");
  return ctx;
}
