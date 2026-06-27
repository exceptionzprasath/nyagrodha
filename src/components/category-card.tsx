import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Category } from "@/lib/catalog";

export function CategoryCard({ category, index = 0, large = false }: { category: Category; index?: number; large?: boolean }) {
  return (
    <Link
      to="/category/$slug"
      params={{ slug: category.slug }}
      className="group relative block"
    >
      <div
        className={`relative overflow-hidden rounded-3xl ${category.tint} ${large ? "aspect-[4/5]" : "aspect-square"} transition-all duration-300 group-hover:-translate-y-1 group-hover:soft-shadow`}
      >
        <div className="absolute inset-0 grid place-items-center p-4">
          <img
            src={category.mascot}
            alt={category.name}
            loading="lazy"
            className={`max-h-[85%] max-w-[85%] w-auto h-auto object-contain animate-float drop-shadow-[0_8px_16px_rgba(0,0,0,0.12)]`}
            style={{ animationDelay: `${index * 0.3}s` }}
          />
        </div>
        {large && (
          <span className="absolute top-3 right-3 rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-[10px] font-bold text-[color:var(--organic-dark)] shadow-sm">
            {category.count} items
          </span>
        )}
      </div>
      <div className={`mt-3 ${large ? "text-left px-1" : "text-center"}`}>
        <div className={`font-display ${large ? "text-base" : "text-sm"} font-bold leading-tight`}>{category.name}</div>
        {large && <div className="text-[11px] text-muted-foreground mt-0.5 line-clamp-1">{category.tagline}</div>}
        <span className={`${large ? "mt-2" : "mt-1"} inline-flex items-center gap-1 text-[11px] font-bold text-[color:var(--organic-dark)]`}>
          Shop Now <ArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
