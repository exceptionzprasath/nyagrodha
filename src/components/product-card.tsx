import { Link } from "@tanstack/react-router";
import { Heart, ShoppingBag, Star } from "lucide-react";
import type { Product } from "@/lib/catalog";
import { useCart } from "@/lib/cart-context";

export function ProductCard({ product }: { product: Product }) {
  const { add, toggleWishlist, isWishlisted } = useCart();
  const wished = isWishlisted(product.slug);

  return (
    <article className="group relative animate-pop-in">
      <Link to="/product/$slug" params={{ slug: product.slug }} className="block">
        <div className={`relative overflow-hidden rounded-3xl ${product.tint} aspect-square transition-shadow group-hover:soft-shadow`}>
          {product.badge && (
            <span className={`absolute top-3 left-3 z-10 rounded-full px-3 py-1 text-[10px] font-bold ${product.badgeColor}`}>
              {product.badge}
            </span>
          )}
          <button
            type="button"
            aria-label="Add to wishlist"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleWishlist(product.slug); }}
            className={`absolute top-3 right-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/95 hover:scale-110 transition ${wished ? "text-rose-500" : ""}`}
          >
            <Heart className={`h-4 w-4 ${wished ? "fill-rose-500" : ""}`} />
          </button>
          <img
            src={product.img}
            alt={product.name}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="px-1 pt-4">
        <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
          <span className="font-semibold text-foreground">{product.rating.toFixed(1)}</span>
          <span>({product.reviews})</span>
        </div>
        <Link to="/product/$slug" params={{ slug: product.slug }}>
          <h3 className="mt-1 text-sm font-bold truncate hover:text-[color:var(--organic-dark)] transition">{product.name}</h3>
        </Link>
        <div className="mt-1 flex items-center justify-between gap-2">
          <div className="min-w-0">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-lg font-extrabold">₹{product.price}</span>
              {product.oldPrice && (
                <span className="text-xs text-muted-foreground line-through">₹{product.oldPrice}</span>
              )}
            </div>
            <div className="text-[11px] text-muted-foreground truncate">{product.age}</div>
          </div>
          <button
            type="button"
            aria-label="Add to cart"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); add(product); }}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[color:var(--organic)] text-white shadow-[0_8px_18px_-8px_color-mix(in_oklab,var(--organic)_80%,transparent)] hover:scale-110 transition"
          >
            <ShoppingBag className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
