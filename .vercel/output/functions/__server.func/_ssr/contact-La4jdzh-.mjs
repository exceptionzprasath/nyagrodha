import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { E as Mail, T as MapPin, Y as CircleCheck, h as Send, x as Phone, z as Clock } from "../_libs/lucide-react.mjs";
import { t as PageHero } from "./shop-BOsyb4T3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-La4jdzh-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var channels = [
	{
		Icon: Phone,
		title: "Call us",
		lines: [
			"+91 90429 14202",
			"+91 95008 50717",
			"+91 96007 57327"
		]
	},
	{
		Icon: Mail,
		title: "Email",
		lines: ["info.nyagrodha@gmail.com"]
	},
	{
		Icon: MapPin,
		title: "Visit",
		lines: ["Erode, Tamil Nadu", "India"]
	},
	{
		Icon: Clock,
		title: "Hours",
		lines: ["Mon – Sat", "10:00 AM – 7:00 PM IST"]
	}
];
function ContactPage() {
	const [sent, setSent] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Contact",
		title: "We'd love to hear from you",
		subtitle: "Questions about a product, your order, or a wholesale partnership — we typically respond within one business day.",
		crumbs: [{
			label: "Home",
			to: "/"
		}, { label: "Contact" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto max-w-7xl px-4 py-12 grid lg:grid-cols-[1fr_1.4fr] gap-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid sm:grid-cols-2 lg:grid-cols-1 gap-4",
			children: channels.map(({ Icon, title, lines }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "glass-card rounded-2xl p-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--mint)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-[color:var(--organic-dark)]" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 font-display font-extrabold",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 text-sm text-muted-foreground space-y-0.5",
						children: lines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: l }, l))
					})
				]
			}, title))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
			onSubmit: (e) => {
				e.preventDefault();
				setSent(true);
			},
			className: "glass-card rounded-[2rem] p-6 sm:p-8",
			children: sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center py-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto grid h-16 w-16 place-items-center rounded-full bg-[color:var(--mint)]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-8 w-8 text-[color:var(--organic-dark)]" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-5 font-display text-2xl font-black",
						children: "Message sent!"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: "We'll get back to you within one business day."
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-2xl font-black",
					children: "Send us a message"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 grid sm:grid-cols-2 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Name",
							placeholder: "Your name"
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
							label: "Subject",
							placeholder: "What's this about?"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
					className: "mt-4 block text-xs font-bold uppercase tracking-wider text-muted-foreground",
					children: "Message"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					rows: 5,
					placeholder: "How can we help?",
					className: "mt-2 w-full rounded-2xl border-2 border-[color:var(--border)] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[color:var(--organic)]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "submit",
					className: "mt-5 inline-flex items-center gap-2 rounded-full bg-[color:var(--organic)] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_25px_-10px_color-mix(in_oklab,var(--organic)_70%,transparent)] hover:translate-y-[-1px] transition",
					children: ["Send Message ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" })]
				})
			] })
		})]
	})] });
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
export { ContactPage as component };
