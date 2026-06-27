import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Minus, G as ArrowRight, b as Plus, c as Trash2, f as ShoppingBag, l as Tag } from "../_libs/lucide-react.mjs";
import { t as PageHero } from "./shop-BOsyb4T3.mjs";
import { n as useCart } from "./cart-context-BXG4Mu-K.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-Civ1EQYq.js
var import_jsx_runtime = require_jsx_runtime();
function CartPage() {
	const { items, update, remove, subtotal } = useCart();
	const shipping = subtotal === 0 ? 0 : subtotal > 999 ? 0 : 79;
	const total = subtotal + shipping;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Cart",
		title: "Your shopping bag",
		crumbs: [{
			label: "Home",
			to: "/"
		}, { label: "Cart" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-4 py-10",
		children: items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-card rounded-3xl p-12 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid h-16 w-16 place-items-center rounded-full bg-[color:var(--mint)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-7 w-7 text-[color:var(--organic-dark)]" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-5 font-display text-2xl font-black",
					children: "Your bag is empty"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Pick up where you left off."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					className: "mt-6 inline-flex rounded-full bg-[color:var(--organic)] px-5 py-2.5 text-sm font-bold text-white",
					children: "Continue Shopping"
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid lg:grid-cols-[1.6fr_1fr] gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-3",
				children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card rounded-3xl p-3 sm:p-4 grid grid-cols-[88px_1fr_auto] sm:grid-cols-[112px_1fr_auto] gap-4 items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `relative overflow-hidden rounded-2xl ${i.tint} aspect-square`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: i.img,
								alt: i.name,
								className: "absolute inset-0 h-full w-full object-cover"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/product/$slug",
									params: { slug: i.slug },
									className: "font-display text-base font-extrabold truncate block hover:text-[color:var(--organic-dark)]",
									children: i.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-xs text-muted-foreground",
									children: [i.age, i.size ? ` • Size ${i.size}` : ""]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 inline-flex items-center gap-1 rounded-full border-2 border-[color:var(--border)] bg-white p-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => update(i.slug, i.qty - 1),
											"aria-label": "Decrease",
											className: "grid h-7 w-7 place-items-center rounded-full hover:bg-[color:var(--mint)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "h-3.5 w-3.5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "w-6 text-center text-sm font-bold",
											children: i.qty
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => update(i.slug, i.qty + 1),
											"aria-label": "Increase",
											className: "grid h-7 w-7 place-items-center rounded-full hover:bg-[color:var(--mint)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-3.5 w-3.5" })
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-display text-lg font-extrabold",
								children: ["₹", i.price * i.qty]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => remove(i.slug),
								"aria-label": "Remove",
								className: "mt-2 inline-grid h-8 w-8 place-items-center rounded-full text-muted-foreground hover:bg-white hover:text-destructive",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
							})]
						})
					]
				}, i.slug))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "glass-card rounded-3xl p-6 h-fit sticky top-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-black",
						children: "Order Summary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-5 space-y-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Subtotal",
								value: `₹${subtotal}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Shipping",
								value: shipping === 0 ? "Free" : `₹${shipping}`
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "border-t border-[color:var(--border)] pt-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-base font-extrabold",
										children: "Total"
									}),
									value: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-display text-xl font-black",
										children: ["₹", total]
									})
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex items-center gap-2 rounded-full border-2 border-dashed border-[color:var(--organic)]/40 px-3 py-2 text-xs text-[color:var(--organic-dark)] font-semibold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, { className: "h-3.5 w-3.5" }), " Free shipping on orders above ₹999"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/checkout",
						className: "mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--organic)] px-6 py-3 text-sm font-bold text-white hover:translate-y-[-1px] transition",
						children: ["Proceed to Checkout ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "mt-3 block text-center text-xs font-semibold text-muted-foreground hover:text-[color:var(--organic-dark)]",
						children: "Continue shopping"
					})
				]
			})]
		})
	})] });
}
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: value })]
	});
}
//#endregion
export { CartPage as component };
