import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Tag } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { PageHero } from "./shop";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart — Nyagrodha Apparels" },
      { name: "description", content: "Review the organic baby pieces in your shopping bag." },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, update, remove, subtotal } = useCart();
  const shipping = subtotal === 0 ? 0 : subtotal > 999 ? 0 : 79;
  const total = subtotal + shipping;

  return (
    <div>
      <PageHero
        eyebrow="Cart"
        title="Your shopping bag"
        crumbs={[{ label: "Home", to: "/" }, { label: "Cart" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-10">
        {items.length === 0 ? (
          <div className="glass-card rounded-3xl p-12 text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[color:var(--mint)]">
              <ShoppingBag className="h-7 w-7 text-[color:var(--organic-dark)]" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-black">Your bag is empty</h3>
            <p className="mt-2 text-sm text-muted-foreground">Pick up where you left off.</p>
            <Link to="/shop" className="mt-6 inline-flex rounded-full bg-[color:var(--organic)] px-5 py-2.5 text-sm font-bold text-white">Continue Shopping</Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1.6fr_1fr] gap-6">
            <div className="space-y-3">
              {items.map((i) => (
                <div key={i.slug} className="glass-card rounded-3xl p-3 sm:p-4 grid grid-cols-[88px_1fr_auto] sm:grid-cols-[112px_1fr_auto] gap-4 items-center">
                  <div className={`relative overflow-hidden rounded-2xl ${i.tint} aspect-square`}>
                    <img src={i.img} alt={i.name} className="absolute inset-0 h-full w-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <Link to="/product/$slug" params={{ slug: i.slug }} className="font-display text-base font-extrabold truncate block hover:text-[color:var(--organic-dark)]">{i.name}</Link>
                    <div className="text-xs text-muted-foreground">
                      {i.age}{i.size ? ` • Size ${i.size}` : ""}
                    </div>
                    <div className="mt-2 inline-flex items-center gap-1 rounded-full border-2 border-[color:var(--border)] bg-white p-1">
                      <button onClick={() => update(i.slug, i.qty - 1)} aria-label="Decrease" className="grid h-7 w-7 place-items-center rounded-full hover:bg-[color:var(--mint)]">
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-6 text-center text-sm font-bold">{i.qty}</span>
                      <button onClick={() => update(i.slug, i.qty + 1)} aria-label="Increase" className="grid h-7 w-7 place-items-center rounded-full hover:bg-[color:var(--mint)]">
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-lg font-extrabold">₹{i.price * i.qty}</div>
                    <button onClick={() => remove(i.slug)} aria-label="Remove" className="mt-2 inline-grid h-8 w-8 place-items-center rounded-full text-muted-foreground hover:bg-white hover:text-destructive">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <aside className="glass-card rounded-3xl p-6 h-fit sticky top-24">
              <h3 className="font-display text-xl font-black">Order Summary</h3>
              <dl className="mt-5 space-y-3 text-sm">
                <Row label="Subtotal" value={`₹${subtotal}`} />
                <Row label="Shipping" value={shipping === 0 ? "Free" : `₹${shipping}`} />
                <div className="border-t border-[color:var(--border)] pt-3">
                  <Row label={<span className="font-display text-base font-extrabold">Total</span>} value={<span className="font-display text-xl font-black">₹{total}</span>} />
                </div>
              </dl>
              <div className="mt-5 flex items-center gap-2 rounded-full border-2 border-dashed border-[color:var(--organic)]/40 px-3 py-2 text-xs text-[color:var(--organic-dark)] font-semibold">
                <Tag className="h-3.5 w-3.5" /> Free shipping on orders above ₹999
              </div>
              <Link to="/checkout" className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--organic)] px-6 py-3 text-sm font-bold text-white hover:translate-y-[-1px] transition">
                Proceed to Checkout <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/shop" className="mt-3 block text-center text-xs font-semibold text-muted-foreground hover:text-[color:var(--organic-dark)]">
                Continue shopping
              </Link>
            </aside>
          </div>
        )}
      </section>
    </div>
  );
}

function Row({ label, value }: { label: React.ReactNode; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-muted-foreground">{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}
