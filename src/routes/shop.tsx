import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Sparkles } from "lucide-react";
import { categories, products } from "@/lib/catalog";
import { CategoryCard } from "@/components/category-card";
import { ProductCard } from "@/components/product-card";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop All — Nyagrodha Apparels" },
      { name: "description", content: "Browse all organic muslin cotton baby clothing — Jablas, Frocks, Co-ord Sets, Swaddles and more." },
      { property: "og:title", content: "Shop All — Nyagrodha Apparels" },
      { property: "og:description", content: "Premium organic baby clothing collections, hand-crafted in India." },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  return (
    <div>
      <PageHero
        eyebrow="Shop"
        title="The Whole Collection"
        subtitle="Every piece woven from 100% organic muslin cotton — soft, breathable, beautifully made."
        crumbs={[{ label: "Home", to: "/" as const }, { label: "Shop" }]}
      />

      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-2xl sm:text-3xl font-black">Browse by Category</h2>
          <span className="text-sm text-muted-foreground hidden sm:block">{categories.length} categories</span>
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((c, i) => <CategoryCard key={c.slug} category={c} index={i} large />)}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <span className="chip bg-white border-[color:var(--organic)]/30 text-[color:var(--organic-dark)]">
              <Sparkles className="h-3.5 w-3.5" /> Featured for you
            </span>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-black">All Products</h2>
          </div>
          <span className="text-sm text-muted-foreground">{products.length} items</span>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </section>
    </div>
  );
}

export function PageHero({
  eyebrow, title, subtitle, crumbs,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs: Array<{ label: string; to?: "/" | "/shop" | "/wholesale" | "/about" | "/contact" }>;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-6 sm:pt-10">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[color:var(--beige)] via-[color:var(--cream)] to-[color:var(--mint)]/60 px-6 sm:px-10 py-10 sm:py-14 soft-shadow">
        <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[color:var(--sky)] blur-3xl opacity-60" />
        <div className="relative max-w-2xl">
          <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
            {crumbs.map((c, i) => (
              <span key={i} className="inline-flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="h-3 w-3" />}
                {c.to ? <Link to={c.to} className="hover:text-[color:var(--organic-dark)]">{c.label}</Link>
                      : <span className="text-foreground font-semibold">{c.label}</span>}
              </span>
            ))}
          </nav>
          {eyebrow && (
            <span className="mt-4 chip bg-white border-[color:var(--organic)]/30 text-[color:var(--organic-dark)] w-fit">
              {eyebrow}
            </span>
          )}
          <h1 className="mt-3 font-display text-3xl sm:text-5xl font-black leading-tight">{title}</h1>
          {subtitle && <p className="mt-3 text-muted-foreground sm:text-lg max-w-xl">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}
