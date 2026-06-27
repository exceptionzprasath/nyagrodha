import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { G as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/category-card-D4tduycm.js
var import_jsx_runtime = require_jsx_runtime();
function CategoryCard({ category, index = 0, large = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/category/$slug",
		params: { slug: category.slug },
		className: "group relative block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `relative overflow-hidden rounded-3xl ${category.tint} ${large ? "aspect-[4/5]" : "aspect-square"} transition-all duration-300 group-hover:-translate-y-1 group-hover:soft-shadow`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 grid place-items-center p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: category.mascot,
					alt: category.name,
					loading: "lazy",
					className: `max-h-[85%] max-w-[85%] w-auto h-auto object-contain animate-float drop-shadow-[0_8px_16px_rgba(0,0,0,0.12)]`,
					style: { animationDelay: `${index * .3}s` }
				})
			}), large && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "absolute top-3 right-3 rounded-full bg-white/90 backdrop-blur px-2.5 py-1 text-[10px] font-bold text-[color:var(--organic-dark)] shadow-sm",
				children: [category.count, " items"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: `mt-3 ${large ? "text-left px-1" : "text-center"}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `font-display ${large ? "text-base" : "text-sm"} font-bold leading-tight`,
					children: category.name
				}),
				large && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[11px] text-muted-foreground mt-0.5 line-clamp-1",
					children: category.tagline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: `${large ? "mt-2" : "mt-1"} inline-flex items-center gap-1 text-[11px] font-bold text-[color:var(--organic-dark)]`,
					children: ["Shop Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3 w-3 transition group-hover:translate-x-0.5" })]
				})
			]
		})]
	});
}
//#endregion
export { CategoryCard as t };
