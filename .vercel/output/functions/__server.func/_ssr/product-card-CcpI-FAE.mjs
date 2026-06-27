import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as ShoppingBag, j as Heart, u as Star } from "../_libs/lucide-react.mjs";
import { n as useCart } from "./cart-context-BXG4Mu-K.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-card-CcpI-FAE.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product }) {
	const { add, toggleWishlist, isWishlisted } = useCart();
	const wished = isWishlisted(product.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group relative animate-pop-in",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/product/$slug",
			params: { slug: product.slug },
			className: "block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `relative overflow-hidden rounded-3xl ${product.tint} aspect-square transition-shadow group-hover:soft-shadow`,
				children: [
					product.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `absolute top-3 left-3 z-10 rounded-full px-3 py-1 text-[10px] font-bold ${product.badgeColor}`,
						children: product.badge
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Add to wishlist",
						onClick: (e) => {
							e.preventDefault();
							e.stopPropagation();
							toggleWishlist(product.slug);
						},
						className: `absolute top-3 right-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/95 hover:scale-110 transition ${wished ? "text-rose-500" : ""}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: `h-4 w-4 ${wished ? "fill-rose-500" : ""}` })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.img,
						alt: product.name,
						loading: "lazy",
						className: "absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-1 pt-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1 text-[11px] text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3 w-3 fill-amber-400 text-amber-400" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold text-foreground",
							children: product.rating.toFixed(1)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"(",
							product.reviews,
							")"
						] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/product/$slug",
					params: { slug: product.slug },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 text-sm font-bold truncate hover:text-[color:var(--organic-dark)] transition",
						children: product.name
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-1 flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-display text-lg font-extrabold",
								children: ["₹", product.price]
							}), product.oldPrice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs text-muted-foreground line-through",
								children: ["₹", product.oldPrice]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[11px] text-muted-foreground truncate",
							children: product.age
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Add to cart",
						onClick: (e) => {
							e.preventDefault();
							e.stopPropagation();
							add(product);
						},
						className: "grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[color:var(--organic)] text-white shadow-[0_8px_18px_-8px_color-mix(in_oklab,var(--organic)_80%,transparent)] hover:scale-110 transition",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" })
					})]
				})
			]
		})]
	});
}
//#endregion
export { ProductCard as t };
