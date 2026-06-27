import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { f as lazyRouteComponent, h as Link, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as ChevronRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-BOsyb4T3.js
var import_jsx_runtime = require_jsx_runtime();
var $$splitComponentImporter = () => import("./shop-4XSHi8Am.mjs");
var Route = createFileRoute("/shop")({
	head: () => ({ meta: [
		{ title: "Shop All — Nyagrodha Apparels" },
		{
			name: "description",
			content: "Browse all organic muslin cotton baby clothing — Jablas, Frocks, Co-ord Sets, Swaddles and more."
		},
		{
			property: "og:title",
			content: "Shop All — Nyagrodha Apparels"
		},
		{
			property: "og:description",
			content: "Premium organic baby clothing collections, hand-crafted in India."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
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
export { Route as n, PageHero as t };
