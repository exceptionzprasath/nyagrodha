import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { N as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as ChevronRight, C as Minus, O as Leaf, b as Plus, f as ShoppingBag, j as Heart, p as Shield, q as Sparkles, s as Truck, u as Star, v as RotateCcw } from "../_libs/lucide-react.mjs";
import { n as useCart } from "./cart-context-BXG4Mu-K.mjs";
import { o as productsInCategory, r as getCategory } from "./catalog-CKZEIlcO.mjs";
import { t as ProductCard } from "./product-card-CcpI-FAE.mjs";
import { t as Route } from "./product._slug-BSRYB94U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product._slug-hY9EIK-q.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var sizes = [
	"0-3m",
	"3-6m",
	"6-12m",
	"12-18m"
];
function ProductPage() {
	const { product } = Route.useLoaderData();
	const category = getCategory(product.category);
	const related = productsInCategory(product.category).filter((p) => p.slug !== product.slug).slice(0, 4);
	const [qty, setQty] = (0, import_react.useState)(1);
	const [size, setSize] = (0, import_react.useState)("3-6m");
	const [color, setColor] = (0, import_react.useState)(product.colors[0]);
	const { add, toggleWishlist, isWishlisted } = useCart();
	const navigate = useNavigate();
	const wished = isWishlisted(product.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 pt-6 sm:pt-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex items-center gap-1.5 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "hover:text-[color:var(--organic-dark)]",
						children: "Home"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "hover:text-[color:var(--organic-dark)]",
						children: "Shop"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3" }),
					category && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/category/$slug",
						params: { slug: category.slug },
						className: "hover:text-[color:var(--organic-dark)]",
						children: category.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3" })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-foreground font-semibold truncate",
						children: product.name
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-8 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `relative overflow-hidden rounded-[2rem] ${product.tint} aspect-square soft-shadow`,
						children: [product.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `absolute top-5 left-5 z-10 rounded-full px-3 py-1.5 text-[11px] font-bold ${product.badgeColor}`,
							children: product.badge
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: product.img,
							alt: product.name,
							className: "absolute inset-0 h-full w-full object-cover"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-4 gap-3",
						children: [
							product.img,
							product.img,
							product.img,
							product.img
						].map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: `relative overflow-hidden rounded-2xl ${product.tint} aspect-square ${i === 0 ? "ring-2 ring-[color:var(--organic)]" : ""}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src,
								alt: "",
								className: "absolute inset-0 h-full w-full object-cover"
							})
						}, i))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:py-2",
					children: [
						category && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/category/$slug",
							params: { slug: category.slug },
							className: "chip border-[color:var(--organic)]/30 text-[color:var(--organic-dark)] w-fit",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }),
								" ",
								category.name
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-display text-3xl sm:text-4xl font-black leading-tight",
							children: product.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-1 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-amber-400 text-amber-400" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-bold",
											children: product.rating.toFixed(1)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-muted-foreground",
											children: [
												"(",
												product.reviews,
												" reviews)"
											]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground",
									children: "•"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm text-muted-foreground",
									children: product.age
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex items-baseline gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-display text-4xl font-black text-[color:var(--brand-brown)]",
								children: ["₹", product.price]
							}), product.oldPrice && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-lg text-muted-foreground line-through",
								children: ["₹", product.oldPrice]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-full bg-[color:var(--mint)] px-2 py-0.5 text-[11px] font-bold text-[color:var(--organic-dark)]",
								children: ["Save ₹", product.oldPrice - product.price]
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-foreground/80 leading-relaxed",
							children: product.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
								children: "Color"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 flex items-center gap-3",
								children: product.colors.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setColor(c),
									"aria-label": `Color ${c}`,
									className: `h-10 w-10 rounded-full border-2 transition ${color === c ? "border-[color:var(--organic)] scale-110" : "border-white"}`,
									style: {
										backgroundColor: c,
										boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
									}
								}, c))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
								children: "Age / Size"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 flex flex-wrap gap-2",
								children: sizes.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setSize(s),
									className: `rounded-full border-2 px-4 py-2 text-sm font-bold transition ${size === s ? "border-[color:var(--organic)] bg-[color:var(--organic)] text-white" : "border-[color:var(--border)] bg-white text-foreground hover:border-[color:var(--organic)]"}`,
									children: s
								}, s))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 flex flex-wrap items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex items-center gap-1 rounded-full border-2 border-[color:var(--border)] bg-white p-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setQty(Math.max(1, qty - 1)),
											"aria-label": "Decrease",
											className: "grid h-9 w-9 place-items-center rounded-full hover:bg-[color:var(--mint)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-4 w-4" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "w-8 text-center font-bold",
											children: qty
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setQty(qty + 1),
											"aria-label": "Increase",
											className: "grid h-9 w-9 place-items-center rounded-full hover:bg-[color:var(--mint)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" })
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => add(product, {
										qty,
										size,
										color
									}),
									className: "inline-flex items-center gap-2 rounded-full bg-[color:var(--organic)] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_25px_-10px_color-mix(in_oklab,var(--organic)_70%,transparent)] hover:translate-y-[-1px] transition",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-4 w-4" }), " Add to Cart"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => {
										add(product, {
											qty,
											size,
											color
										});
										navigate({ to: "/checkout" });
									},
									className: "inline-flex items-center gap-2 rounded-full border-2 border-[color:var(--organic)] bg-white px-6 py-3 text-sm font-bold text-[color:var(--organic-dark)] hover:bg-[color:var(--mint)] transition",
									children: "Buy Now"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => toggleWishlist(product.slug),
									"aria-label": "Wishlist",
									className: `grid h-12 w-12 place-items-center rounded-full border-2 border-[color:var(--border)] bg-white hover:border-[color:var(--organic)] transition ${wished ? "text-rose-500 border-rose-300" : ""}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: `h-5 w-5 ${wished ? "fill-rose-500" : ""}` })
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-7 grid grid-cols-3 gap-2",
							children: [
								{
									Icon: Shield,
									title: "Safe",
									sub: "AZO Free"
								},
								{
									Icon: Truck,
									title: "Free Ship",
									sub: "Above ₹999"
								},
								{
									Icon: RotateCcw,
									title: "Easy",
									sub: "Returns"
								}
							].map(({ Icon, title, sub }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass-card rounded-2xl px-3 py-3 flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4 text-[color:var(--organic-dark)] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs font-bold truncate",
										children: title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[10px] text-muted-foreground truncate",
										children: sub
									})]
								})]
							}, title))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 glass-card rounded-2xl p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-sm font-bold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "h-4 w-4 text-[color:var(--organic)]" }), " Fabric & Features"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 text-xs text-muted-foreground",
									children: product.fabric
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 grid sm:grid-cols-2 gap-x-4 gap-y-2 text-sm",
									children: product.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-start gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--organic)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f })]
									}, f))
								})
							]
						})
					]
				})]
			}),
			related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16 pb-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl sm:text-3xl font-black",
					children: "You'll also love"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
					children: related.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
				})]
			})
		]
	});
}
//#endregion
export { ProductPage as component };
