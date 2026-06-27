import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as ChevronRight, q as Sparkles } from "../_libs/lucide-react.mjs";
import { a as products, n as categories } from "./catalog-CKZEIlcO.mjs";
import { t as ProductCard } from "./product-card-CcpI-FAE.mjs";
import { t as CategoryCard } from "./category-card-D4tduycm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-4XSHi8Am.js
var import_jsx_runtime = require_jsx_runtime();
function ShopPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Shop",
			title: "The Whole Collection",
			subtitle: "Every piece woven from 100% organic muslin cotton — soft, breathable, beautifully made.",
			crumbs: [{
				label: "Home",
				to: "/"
			}, { label: "Shop" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 pb-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl sm:text-3xl font-black",
					children: "Browse by Category"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-sm text-muted-foreground hidden sm:block",
					children: [categories.length, " categories"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4",
				children: categories.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryCard, {
					category: c,
					index: i,
					large: true
				}, c.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 pb-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4 flex-wrap",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "chip bg-white border-[color:var(--organic)]/30 text-[color:var(--organic-dark)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " Featured for you"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-2xl sm:text-3xl font-black",
					children: "All Products"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-sm text-muted-foreground",
					children: [products.length, " items"]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
				children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
			})]
		})
	] });
}
function PageHero({ eyebrow, title, subtitle, crumbs }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-4 pt-6 sm:pt-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[color:var(--beige)] via-[color:var(--cream)] to-[color:var(--mint)]/60 px-6 sm:px-10 py-10 sm:py-14 soft-shadow",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[color:var(--sky)] blur-3xl opacity-60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex items-center gap-1.5 text-xs text-muted-foreground",
						children: crumbs.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5",
							children: [i > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3" }), c.to ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: c.to,
								className: "hover:text-[color:var(--organic-dark)]",
								children: c.label
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground font-semibold",
								children: c.label
							})]
						}, i))
					}),
					eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-4 chip bg-white border-[color:var(--organic)]/30 text-[color:var(--organic-dark)] w-fit",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 font-display text-3xl sm:text-5xl font-black leading-tight",
						children: title
					}),
					subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground sm:text-lg max-w-xl",
						children: subtitle
					})
				]
			})]
		})
	});
}
//#endregion
export { PageHero, ShopPage as component };
