import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { P as FileText, S as Package, U as BadgePercent, Y as CircleCheck, h as Send, s as Truck } from "../_libs/lucide-react.mjs";
import { t as PageHero } from "./shop-BOsyb4T3.mjs";
import { t as giraffe_boxes_default } from "./giraffe-boxes-D9lzWOWr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wholesale-BeubTJu1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var perks = [
	{
		Icon: BadgePercent,
		title: "Bulk Discounts",
		sub: "Tiered pricing from 50 units"
	},
	{
		Icon: Package,
		title: "Low MOQ",
		sub: "Start with just 25 pieces"
	},
	{
		Icon: FileText,
		title: "GST Invoicing",
		sub: "Full B2B documentation"
	},
	{
		Icon: Truck,
		title: "Pan India Ship",
		sub: "Tracked dispatch in 48h"
	}
];
var steps = [
	{
		n: "01",
		title: "Apply",
		text: "Submit the dealer form — we'll respond within 24 hours."
	},
	{
		n: "02",
		title: "Onboarding",
		text: "Get your catalogue, pricing sheet and credit terms."
	},
	{
		n: "03",
		title: "Order",
		text: "Place your first order with a dedicated relationship manager."
	},
	{
		n: "04",
		title: "Grow",
		text: "Restock easily, access seasonal drops and co-marketing."
	}
];
function WholesalePage() {
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Wholesale",
			title: "Stock India's softest organic baby brand",
			subtitle: "Low MOQs, transparent pricing, and a partner-first wholesale program built for boutiques, baby stores and online sellers.",
			crumbs: [{
				label: "Home",
				to: "/"
			}, { label: "Wholesale" }]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
				children: perks.map(({ Icon, title, sub }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass-card rounded-3xl p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--mint)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-[color:var(--organic-dark)]" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 font-display text-base font-extrabold",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs text-muted-foreground mt-1",
							children: sub
						})
					]
				}, title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 pb-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[2rem] bg-[color:var(--beige)] p-6 sm:p-10 soft-shadow",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl sm:text-3xl font-black text-center",
						children: "How partnerships work"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-center text-muted-foreground",
						children: "Four simple steps to get your shelves stocked."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4",
						children: steps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "glass-card rounded-2xl p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-xs font-bold text-[color:var(--organic-dark)]",
									children: s.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 font-display text-lg font-extrabold",
									children: s.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: s.text
								})
							]
						}, s.n))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-4 pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-[1fr_1.2fr] gap-6 items-stretch",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[color:var(--mint)] to-[color:var(--sky)] p-8 soft-shadow",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: giraffe_boxes_default,
							alt: "",
							"aria-hidden": true,
							className: "absolute right-2 bottom-0 h-56 w-auto animate-float"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-black max-w-xs",
							children: "Become a Nyagrodha Dealer"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-foreground/80 max-w-xs",
							children: "Fill the form and our wholesale team will reach out within one business day."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-2 text-sm",
							children: [
								"No franchise fees",
								"Free product catalogue",
								"Dedicated account manager",
								"Seasonal incentives"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2 font-semibold",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-[color:var(--organic-dark)]" }),
									" ",
									t
								]
							}, t))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
					onSubmit: (e) => {
						e.preventDefault();
						setSubmitted(true);
					},
					className: "glass-card rounded-[2rem] p-6 sm:p-8",
					children: submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center py-12",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto grid h-16 w-16 place-items-center rounded-full bg-[color:var(--mint)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-8 w-8 text-[color:var(--organic-dark)]" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 font-display text-2xl font-black",
								children: "Application received!"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "Our team will be in touch within 24 hours."
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-black",
							children: "Dealer Application"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 grid sm:grid-cols-2 gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Full name",
									placeholder: "Your name"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Business",
									placeholder: "Store / brand name"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Email",
									placeholder: "you@example.com",
									type: "email"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Phone",
									placeholder: "+91"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "City",
									placeholder: "City"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "GSTIN",
									placeholder: "Optional"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "mt-4 block text-xs font-bold uppercase tracking-wider text-muted-foreground",
							children: "Tell us about your store"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: "mt-2 w-full rounded-2xl border-2 border-[color:var(--border)] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[color:var(--organic)]",
							rows: 4,
							placeholder: "Categories of interest, monthly volume, store type..."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							className: "mt-5 inline-flex items-center gap-2 rounded-full bg-[color:var(--organic)] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_25px_-10px_color-mix(in_oklab,var(--organic)_70%,transparent)] hover:translate-y-[-1px] transition",
							children: ["Submit Application ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })]
						})
					] })
				})]
			})
		})
	] });
}
function Field({ label, placeholder, type = "text" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "block text-xs font-bold uppercase tracking-wider text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		placeholder,
		className: "mt-2 w-full rounded-2xl border-2 border-[color:var(--border)] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[color:var(--organic)]"
	})] });
}
//#endregion
export { WholesalePage as component };
