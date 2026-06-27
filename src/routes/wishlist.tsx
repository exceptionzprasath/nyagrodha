import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { products } from "@/lib/catalog";
import { ProductCard } from "@/components/product-card";
import { PageHero } from "./shop";

export const Route = createFileRoute("/wishlist")({
  head: () => ({
    meta: [
      { title: "Wishlist — Nyagrodha Apparels" },
      { name: "description", content: "Your saved organic baby pieces." },
    ],
  }),
  component: WishlistPage,
});

function WishlistPage() {
  const saved = products.slice(0, 4);

  return (
    <div>
      <PageHero
        eyebrow="Wishlist"
        title="Your saved pieces"
        crumbs={[{ label: "Home", to: "/" }, { label: "Wishlist" }]}
      />
      <section className="mx-auto max-w-7xl px-4 py-12">
        {saved.length === 0 ? (
          <div className="glass-card rounded-3xl p-12 text-center">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[color:var(--pink)]">
              <Heart className="h-7 w-7 text-rose-500" />
            </div>
            <h3 className="mt-5 font-display text-2xl font-black">No saves yet</h3>
            <p className="mt-2 text-sm text-muted-foreground">Tap the heart on any product to save it for later.</p>
            <Link to="/shop" className="mt-6 inline-flex rounded-full bg-[color:var(--organic)] px-5 py-2.5 text-sm font-bold text-white">Start Browsing</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {saved.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        )}
      </section>
    </div>
  );
}
