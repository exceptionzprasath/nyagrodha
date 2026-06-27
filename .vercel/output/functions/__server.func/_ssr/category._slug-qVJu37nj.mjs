import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as ChevronRight, G as ArrowRight, J as Funnel, d as SlidersHorizontal } from "../_libs/lucide-react.mjs";
import { n as categories, o as productsInCategory } from "./catalog-CKZEIlcO.mjs";
import { t as Route } from "./category._slug-CrXnpDXG.mjs";
import { t as ProductCard } from "./product-card-CcpI-FAE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/category._slug-qVJu37nj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var sorts = [
	"Featured",
	"Price: Low to High",
	"Price: High to Low",
	"Newest"
];
function CategoryPage() {
	const { category } = Route.useLoaderData();
	const items = productsInCategory(category.slug);
	const others = categories.filter((c) => c.slug !== category.slug).slice(0, 4);
	const [sort, setSort] = (0, import_react.useState)("Featured");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 pt-6 sm:pt-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `relative overflow-hidden rounded-[2rem] ${category.tint} px-6 sm:px-10 py-10 sm:py-12 soft-shadow`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-center gap-6 lg:grid-cols-[2fr_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground font-semibold",
									children: category.name
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-4 chip bg-white/85 backdrop-blur border-white text-[color:var(--organic-dark)] w-fit",
							children: category.tagline
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 font-display text-4xl sm:text-5xl font-black leading-tight",
							children: category.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xl text-foreground/80",
							children: category.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex flex-wrap items-center gap-3 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "rounded-full bg-white/85 backdrop-blur px-3 py-1 font-semibold",
									children: [items.length, " items"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "rounded-full bg-white/85 backdrop-blur px-3 py-1 font-semibold",
									children: ["From ₹", Math.min(...items.map((p) => p.price))]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-white/85 backdrop-blur px-3 py-1 font-semibold",
									children: "100% Organic"
								})
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative hidden lg:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: category.mascot,
							alt: "",
							"aria-hidden": true,
							className: "mx-auto h-56 w-auto animate-float"
						})
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 pt-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-card flex flex-wrap items-center justify-between gap-3 rounded-2xl px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "chip",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "h-3.5 w-3.5" }), " Filters"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "chip hidden sm:inline-flex",
							children: "Age"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "chip hidden sm:inline-flex",
							children: "Color"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "chip hidden md:inline-flex",
							children: "Price"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-2 text-xs font-semibold text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "h-3.5 w-3.5" }),
						" Sort by",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: sort,
							onChange: (e) => setSort(e.target.value),
							className: "rounded-full border border-[color:var(--border)] bg-white px-3 py-1.5 text-xs font-bold text-foreground",
							children: sorts.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: s }, s))
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 py-10",
			children: items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-card rounded-3xl p-12 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl font-bold",
						children: "Restocking soon"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "This collection is being woven as we speak. Check back shortly."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						className: "mt-5 inline-flex rounded-full bg-[color:var(--organic)] px-5 py-2.5 text-xs font-bold text-white",
						children: "Browse Shop"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
				children: items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-4 pb-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl sm:text-3xl font-black",
					children: "Explore Other Categories"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/shop",
					className: "text-sm font-bold text-[color:var(--organic-dark)] inline-flex items-center gap-1",
					children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4",
				children: others.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/category/$slug",
					params: { slug: c.slug },
					className: "group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `relative overflow-hidden rounded-3xl ${c.tint} aspect-square p-3 transition group-hover:-translate-y-1 group-hover:soft-shadow`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: c.mascot,
							alt: "",
							loading: "lazy",
							className: "absolute inset-x-0 top-3 mx-auto h-[75%] w-auto object-contain animate-float",
							style: { animationDelay: `${i * .2}s` }
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 text-center text-sm font-bold",
						children: c.name
					})]
				}, c.slug))
			})]
		})
	] });
}
//#endregion
export { CategoryPage as component };
