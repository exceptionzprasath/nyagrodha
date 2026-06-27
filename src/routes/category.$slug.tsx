import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ChevronRight, Filter, SlidersHorizontal } from "lucide-react";
import { categories, getCategory, productsInCategory } from "@/lib/catalog";
import { ProductCard } from "@/components/product-card";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => ({
    meta: loaderData?.category ? [
      { title: `${loaderData.category.name} — Nyagrodha Apparels` },
      { name: "description", content: `${loaderData.category.description} Premium organic muslin cotton — AZO free, skin friendly.` },
      { property: "og:title", content: `${loaderData.category.name} — Nyagrodha Apparels` },
      { property: "og:description", content: loaderData.category.description },
    ] : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-display text-4xl font-black">Category not found</h1>
      <p className="mt-3 text-muted-foreground">We couldn't find that category. Try browsing all collections.</p>
      <Link to="/shop" className="mt-6 inline-flex rounded-full bg-[color:var(--organic)] px-5 py-2.5 text-sm font-bold text-white">Browse Shop</Link>
    </div>
  ),
  errorComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl font-black">Something went wrong</h1>
      <Link to="/shop" className="mt-6 inline-flex rounded-full bg-[color:var(--organic)] px-5 py-2.5 text-sm font-bold text-white">Browse Shop</Link>
    </div>
  ),
  component: CategoryPage,
});

const sorts = ["Featured", "Price: Low to High", "Price: High to Low", "Newest"];

function CategoryPage() {
  const { category } = Route.useLoaderData();
  const items = productsInCategory(category.slug);
  const others = categories.filter((c) => c.slug !== category.slug).slice(0, 4);
  const [sort, setSort] = useState("Featured");

  return (
    <div>
      {/* Category Hero */}
      <section className="mx-auto max-w-7xl px-4 pt-6 sm:pt-10">
        <div className={`relative overflow-hidden rounded-[2rem] ${category.tint} px-6 sm:px-10 py-10 sm:py-12 soft-shadow`}>
          <div className="grid items-center gap-6 lg:grid-cols-[2fr_1fr]">
            <div>
              <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Link to="/" className="hover:text-[color:var(--organic-dark)]">Home</Link>
                <ChevronRight className="h-3 w-3" />
                <Link to="/shop" className="hover:text-[color:var(--organic-dark)]">Shop</Link>
                <ChevronRight className="h-3 w-3" />
                <span className="text-foreground font-semibold">{category.name}</span>
              </nav>
              <span className="mt-4 chip bg-white/85 backdrop-blur border-white text-[color:var(--organic-dark)] w-fit">
                {category.tagline}
              </span>
              <h1 className="mt-3 font-display text-4xl sm:text-5xl font-black leading-tight">{category.name}</h1>
              <p className="mt-3 max-w-xl text-foreground/80">{category.description}</p>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded-full bg-white/85 backdrop-blur px-3 py-1 font-semibold">{items.length} items</span>
                <span className="rounded-full bg-white/85 backdrop-blur px-3 py-1 font-semibold">From ₹{Math.min(...items.map((p) => p.price))}</span>
                <span className="rounded-full bg-white/85 backdrop-blur px-3 py-1 font-semibold">100% Organic</span>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <img src={category.mascot} alt="" aria-hidden className="mx-auto h-56 w-auto animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* Toolbar */}
      <section className="mx-auto max-w-7xl px-4 pt-8">
        <div className="glass-card flex flex-wrap items-center justify-between gap-3 rounded-2xl px-4 py-3">
          <div className="flex items-center gap-2">
            <button className="chip"><Filter className="h-3.5 w-3.5" /> Filters</button>
            <button className="chip hidden sm:inline-flex">Age</button>
            <button className="chip hidden sm:inline-flex">Color</button>
            <button className="chip hidden md:inline-flex">Price</button>
          </div>
          <label className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
            <SlidersHorizontal className="h-3.5 w-3.5" /> Sort by
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-full border border-[color:var(--border)] bg-white px-3 py-1.5 text-xs font-bold text-foreground"
            >
              {sorts.map((s) => <option key={s}>{s}</option>)}
            </select>
          </label>
        </div>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-7xl px-4 py-10">
        {items.length === 0 ? (
          <div className="glass-card rounded-3xl p-12 text-center">
            <h3 className="font-display text-xl font-bold">Restocking soon</h3>
            <p className="mt-2 text-sm text-muted-foreground">This collection is being woven as we speak. Check back shortly.</p>
            <Link to="/shop" className="mt-5 inline-flex rounded-full bg-[color:var(--organic)] px-5 py-2.5 text-xs font-bold text-white">Browse Shop</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {items.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        )}
      </section>

      {/* Other categories */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-2xl sm:text-3xl font-black">Explore Other Categories</h2>
          <Link to="/shop" className="text-sm font-bold text-[color:var(--organic-dark)] inline-flex items-center gap-1">
            View all <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {others.map((c, i) => (
            <Link key={c.slug} to="/category/$slug" params={{ slug: c.slug }} className="group">
              <div className={`relative overflow-hidden rounded-3xl ${c.tint} aspect-square p-3 transition group-hover:-translate-y-1 group-hover:soft-shadow`}>
                <img src={c.mascot} alt="" loading="lazy" className="absolute inset-x-0 top-3 mx-auto h-[75%] w-auto object-contain animate-float" style={{ animationDelay: `${i * 0.2}s` }} />
              </div>
              <div className="mt-3 text-center text-sm font-bold">{c.name}</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
