import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  ChevronRight, Heart, Minus, Plus, ShoppingBag, Shield, Truck, RotateCcw,
  Leaf, Star, Sparkles,
} from "lucide-react";
import { getProduct, productsInCategory, getCategory } from "@/lib/catalog";
import { ProductCard } from "@/components/product-card";
import { useCart } from "@/lib/cart-context";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData?.product ? [
      { title: `${loaderData.product.name} — Nyagrodha Apparels` },
      { name: "description", content: loaderData.product.description },
      { property: "og:title", content: `${loaderData.product.name} — Nyagrodha Apparels` },
      { property: "og:description", content: loaderData.product.description },
      { property: "og:image", content: loaderData.product.img },
      { name: "twitter:image", content: loaderData.product.img },
    ] : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-display text-4xl font-black">Product not found</h1>
      <Link to="/shop" className="mt-6 inline-flex rounded-full bg-[color:var(--organic)] px-5 py-2.5 text-sm font-bold text-white">Browse Shop</Link>
    </div>
  ),
  errorComponent: () => (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-display text-3xl font-black">Something went wrong</h1>
      <Link to="/shop" className="mt-6 inline-flex rounded-full bg-[color:var(--organic)] px-5 py-2.5 text-sm font-bold text-white">Browse Shop</Link>
    </div>
  ),
  component: ProductPage,
});

const sizes = ["0-3m", "3-6m", "6-12m", "12-18m"];

function ProductPage() {
  const { product } = Route.useLoaderData();
  const category = getCategory(product.category);
  const related = productsInCategory(product.category).filter((p) => p.slug !== product.slug).slice(0, 4);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("3-6m");
  const [color, setColor] = useState(product.colors[0]);
  const { add, toggleWishlist, isWishlisted } = useCart();
  const navigate = useNavigate();
  const wished = isWishlisted(product.slug);

  return (
    <div className="mx-auto max-w-7xl px-4 pt-6 sm:pt-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Link to="/" className="hover:text-[color:var(--organic-dark)]">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <Link to="/shop" className="hover:text-[color:var(--organic-dark)]">Shop</Link>
        <ChevronRight className="h-3 w-3" />
        {category && (
          <>
            <Link to="/category/$slug" params={{ slug: category.slug }} className="hover:text-[color:var(--organic-dark)]">
              {category.name}
            </Link>
            <ChevronRight className="h-3 w-3" />
          </>
        )}
        <span className="text-foreground font-semibold truncate">{product.name}</span>
      </nav>

      {/* Main */}
      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        {/* Gallery */}
        <div className="grid gap-3">
          <div className={`relative overflow-hidden rounded-[2rem] ${product.tint} aspect-square soft-shadow`}>
            {product.badge && (
              <span className={`absolute top-5 left-5 z-10 rounded-full px-3 py-1.5 text-[11px] font-bold ${product.badgeColor}`}>
                {product.badge}
              </span>
            )}
            <img src={product.img} alt={product.name} className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[product.img, product.img, product.img, product.img].map((src, i) => (
              <button key={i} className={`relative overflow-hidden rounded-2xl ${product.tint} aspect-square ${i === 0 ? "ring-2 ring-[color:var(--organic)]" : ""}`}>
                <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Detail */}
        <div className="lg:py-2">
          {category && (
            <Link to="/category/$slug" params={{ slug: category.slug }} className="chip border-[color:var(--organic)]/30 text-[color:var(--organic-dark)] w-fit">
              <Sparkles className="h-3.5 w-3.5" /> {category.name}
            </Link>
          )}
          <h1 className="mt-4 font-display text-3xl sm:text-4xl font-black leading-tight">{product.name}</h1>

          <div className="mt-3 flex items-center gap-3">
            <div className="flex items-center gap-1 text-sm">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="font-bold">{product.rating.toFixed(1)}</span>
              <span className="text-muted-foreground">({product.reviews} reviews)</span>
            </div>
            <span className="text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground">{product.age}</span>
          </div>

          <div className="mt-5 flex items-baseline gap-3">
            <span className="font-display text-4xl font-black text-[color:var(--brand-brown)]">₹{product.price}</span>
            {product.oldPrice && (
              <>
                <span className="text-lg text-muted-foreground line-through">₹{product.oldPrice}</span>
                <span className="rounded-full bg-[color:var(--mint)] px-2 py-0.5 text-[11px] font-bold text-[color:var(--organic-dark)]">
                  Save ₹{product.oldPrice - product.price}
                </span>
              </>
            )}
          </div>

          <p className="mt-5 text-foreground/80 leading-relaxed">{product.description}</p>

          {/* Color */}
          <div className="mt-7">
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Color</div>
            <div className="mt-3 flex items-center gap-3">
              {product.colors.map((c: string) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  aria-label={`Color ${c}`}
                  className={`h-10 w-10 rounded-full border-2 transition ${color === c ? "border-[color:var(--organic)] scale-110" : "border-white"}`}
                  style={{ backgroundColor: c, boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
                />
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mt-6">
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Age / Size</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`rounded-full border-2 px-4 py-2 text-sm font-bold transition ${
                    size === s
                      ? "border-[color:var(--organic)] bg-[color:var(--organic)] text-white"
                      : "border-[color:var(--border)] bg-white text-foreground hover:border-[color:var(--organic)]"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Qty + CTA */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-1 rounded-full border-2 border-[color:var(--border)] bg-white p-1">
              <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease" className="grid h-9 w-9 place-items-center rounded-full hover:bg-[color:var(--mint)]">
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 text-center font-bold">{qty}</span>
              <button onClick={() => setQty(qty + 1)} aria-label="Increase" className="grid h-9 w-9 place-items-center rounded-full hover:bg-[color:var(--mint)]">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              onClick={() => add(product, { qty, size, color })}
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--organic)] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_25px_-10px_color-mix(in_oklab,var(--organic)_70%,transparent)] hover:translate-y-[-1px] transition"
            >
              <ShoppingBag className="h-4 w-4" /> Add to Cart
            </button>
            <button
              onClick={() => { add(product, { qty, size, color }); navigate({ to: "/checkout" }); }}
              className="inline-flex items-center gap-2 rounded-full border-2 border-[color:var(--organic)] bg-white px-6 py-3 text-sm font-bold text-[color:var(--organic-dark)] hover:bg-[color:var(--mint)] transition"
            >
              Buy Now
            </button>
            <button
              onClick={() => toggleWishlist(product.slug)}
              aria-label="Wishlist"
              className={`grid h-12 w-12 place-items-center rounded-full border-2 border-[color:var(--border)] bg-white hover:border-[color:var(--organic)] transition ${wished ? "text-rose-500 border-rose-300" : ""}`}
            >
              <Heart className={`h-5 w-5 ${wished ? "fill-rose-500" : ""}`} />
            </button>
          </div>

          {/* Trust pills */}
          <div className="mt-7 grid grid-cols-3 gap-2">
            {[
              { Icon: Shield,    title: "Safe",     sub: "AZO Free" },
              { Icon: Truck,     title: "Free Ship",sub: "Above ₹999" },
              { Icon: RotateCcw, title: "Easy",     sub: "Returns" },
            ].map(({ Icon, title, sub }) => (
              <div key={title} className="glass-card rounded-2xl px-3 py-3 flex items-center gap-2">
                <Icon className="h-4 w-4 text-[color:var(--organic-dark)] shrink-0" />
                <div className="min-w-0">
                  <div className="text-xs font-bold truncate">{title}</div>
                  <div className="text-[10px] text-muted-foreground truncate">{sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="mt-7 glass-card rounded-2xl p-5">
            <div className="flex items-center gap-2 text-sm font-bold">
              <Leaf className="h-4 w-4 text-[color:var(--organic)]" /> Fabric & Features
            </div>
            <div className="mt-2 text-xs text-muted-foreground">{product.fabric}</div>
            <ul className="mt-4 grid sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
              {product.features.map((f: string) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--organic)]" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-16 pb-8">
          <h2 className="font-display text-2xl sm:text-3xl font-black">You'll also love</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {related.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </section>
      )}
    </div>
  );
}
