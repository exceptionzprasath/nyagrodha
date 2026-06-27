import { Link } from "@tanstack/react-router";
import { Search, Heart, User, ShoppingBag, ChevronDown, Leaf, Sparkles, HandHeart, Package, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/nyagrodha-logo.png";
import { useCart } from "@/lib/cart-context";

const navLinks = [
  { to: "/" as const, label: "Home", exact: true },
  { to: "/shop" as const, label: "Shop", caret: true },
  { to: "/shop" as const, label: "Categories", caret: true },
  { to: "/wholesale" as const, label: "Wholesale", caret: true },
  { to: "/about" as const, label: "About Us" },
  { to: "/contact" as const, label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { count, wishlist } = useCart();

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-[color:var(--organic-dark)] text-white text-xs sm:text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 font-medium">
            <span className="inline-flex items-center gap-1.5"><Leaf className="h-3.5 w-3.5" /> 100% Organic Muslin Cotton</span>
            <span className="hidden sm:inline-flex items-center gap-1.5"><Sparkles className="h-3.5 w-3.5" /> AZO Free</span>
            <span className="hidden md:inline-flex items-center gap-1.5"><HandHeart className="h-3.5 w-3.5" /> Skin Friendly</span>
          </div>
          <div className="flex items-center gap-4 font-medium">
            <Link to="/wholesale" className="hidden sm:inline-flex items-center gap-1.5 hover:opacity-80"><Package className="h-3.5 w-3.5" /> Wholesale Enquiry</Link>
            <Link to="/wholesale" className="inline-flex items-center gap-1.5 hover:opacity-80"><User className="h-3.5 w-3.5" /> Dealer Login / Register</Link>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[color:var(--cream)]/80 border-b border-[color:var(--border)]/60">
        <nav className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3">
          <Link to="/" className="flex shrink-0 items-center">
            <img src={logo} alt="Nyagrodha Apparels" className="h-12 sm:h-14 w-auto" />
          </Link>

          <ul className="hidden lg:flex items-center justify-center gap-7 text-sm font-semibold">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.exact }}
                  activeProps={{ className: "text-[color:var(--organic-dark)]" }}
                  inactiveProps={{ className: "text-foreground hover:text-[color:var(--organic-dark)]" }}
                  className="inline-flex items-center gap-1 transition"
                >
                  {l.label}
                  {l.caret && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1 sm:gap-2 justify-self-end">
            <button aria-label="Search" className="grid h-10 w-10 place-items-center rounded-full hover:bg-white/70 transition">
              <Search className="h-5 w-5" />
            </button>
            <Link to="/wishlist" aria-label="Wishlist" className="relative grid h-10 w-10 place-items-center rounded-full hover:bg-white/70 transition">
              <Heart className="h-5 w-5" />
              {wishlist.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 grid h-5 w-5 place-items-center rounded-full bg-rose-500 text-[10px] font-bold text-white">{wishlist.length}</span>
              )}
            </Link>
            <button aria-label="Account" className="hidden sm:grid h-10 w-10 place-items-center rounded-full hover:bg-white/70 transition">
              <User className="h-5 w-5" />
            </button>
            <Link to="/cart" className="relative grid h-10 w-10 place-items-center rounded-full hover:bg-white/70 transition" aria-label="Cart">
              <ShoppingBag className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 grid h-5 w-5 place-items-center rounded-full bg-[color:var(--organic)] text-[10px] font-bold text-white">{count}</span>
              )}
            </Link>
            <button
              aria-label="Menu"
              className="lg:hidden grid h-10 w-10 place-items-center rounded-full hover:bg-white/70 transition"
              onClick={() => setOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-[color:var(--brand-brown)]/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <aside className="absolute right-0 top-0 h-full w-80 max-w-[85%] bg-[color:var(--cream)] p-6 shadow-2xl animate-pop-in">
            <div className="flex items-center justify-between">
              <img src={logo} alt="Nyagrodha" className="h-10 w-auto" />
              <button aria-label="Close" onClick={() => setOpen(false)} className="grid h-10 w-10 place-items-center rounded-full bg-white">
                <X className="h-5 w-5" />
              </button>
            </div>
            <ul className="mt-8 space-y-2">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-semibold hover:bg-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      )}
    </>
  );
}
