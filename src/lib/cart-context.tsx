import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Product } from "./catalog";

export type CartLine = {
  slug: string;
  name: string;
  price: number;
  img: string;
  tint: string;
  age: string;
  size?: string;
  color?: string;
  qty: number;
};

type CartContextValue = {
  items: CartLine[];
  wishlist: string[];
  add: (p: Product, opts?: { qty?: number; size?: string; color?: string }) => void;
  remove: (slug: string) => void;
  update: (slug: string, qty: number) => void;
  clear: () => void;
  toggleWishlist: (slug: string) => void;
  isWishlisted: (slug: string) => boolean;
  count: number;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "nyagrodha-cart-v1";
const WISH_KEY = "nyagrodha-wishlist-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartLine[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
      const w = localStorage.getItem(WISH_KEY);
      if (w) setWishlist(JSON.parse(w));
    } catch {}
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem(WISH_KEY, JSON.stringify(wishlist));
  }, [wishlist]);

  const showToast = (msg: string) => {
    setToast(msg);
    window.clearTimeout((showToast as any)._t);
    (showToast as any)._t = window.setTimeout(() => setToast(null), 2200);
  };

  const add: CartContextValue["add"] = useCallback((p, opts = {}) => {
    const qty = opts.qty ?? 1;
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === p.slug);
      if (existing) {
        return prev.map((i) => i.slug === p.slug ? { ...i, qty: i.qty + qty } : i);
      }
      return [...prev, {
        slug: p.slug, name: p.name, price: p.price, img: p.img, tint: p.tint, age: p.age,
        size: opts.size, color: opts.color, qty,
      }];
    });
    showToast(`Added "${p.name}" to bag`);
  }, []);

  const remove = useCallback((slug: string) => setItems((prev) => prev.filter((i) => i.slug !== slug)), []);
  const update = useCallback((slug: string, qty: number) =>
    setItems((prev) => prev.map((i) => i.slug === slug ? { ...i, qty: Math.max(1, qty) } : i)), []);
  const clear = useCallback(() => setItems([]), []);

  const toggleWishlist = useCallback((slug: string) => {
    setWishlist((prev) => {
      if (prev.includes(slug)) { showToast("Removed from wishlist"); return prev.filter((s) => s !== slug); }
      showToast("Saved to wishlist"); return [...prev, slug];
    });
  }, []);
  const isWishlisted = useCallback((slug: string) => wishlist.includes(slug), [wishlist]);

  const value = useMemo<CartContextValue>(() => ({
    items, wishlist, add, remove, update, clear, toggleWishlist, isWishlisted,
    count: items.reduce((s, i) => s + i.qty, 0),
    subtotal: items.reduce((s, i) => s + i.price * i.qty, 0),
  }), [items, wishlist, add, remove, update, clear, toggleWishlist, isWishlisted]);

  return (
    <CartContext.Provider value={value}>
      {children}
      {toast && (
        <div className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 animate-pop-in">
          <div className="rounded-full bg-[color:var(--organic-dark)] px-5 py-3 text-sm font-semibold text-white shadow-2xl">
            {toast}
          </div>
        </div>
      )}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
