import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { j as Heart } from "../_libs/lucide-react.mjs";
import { t as PageHero } from "./shop-BOsyb4T3.mjs";
import { a as products } from "./catalog-CKZEIlcO.mjs";
import { t as ProductCard } from "./product-card-CcpI-FAE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wishlist-C7MB9WWX.js
var import_jsx_runtime = require_jsx_runtime();
function WishlistPage() {
	const saved = products.slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Wishlist",
		title: "Your saved pieces",
		crumbs: [{
			label: "Home",
			to: "/"
		}, { label: "Wishlist" }]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-4 py-12",
		children: saved.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass-card rounded-3xl p-12 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid h-16 w-16 place-items-center rounded-full bg-[color:var(--pink)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-7 w-7 text-rose-500" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-5 font-display text-2xl font-black",
					children: "No saves yet"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Tap the heart on any product to save it for later."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					className: "mt-6 inline-flex rounded-full bg-[color:var(--organic)] px-5 py-2.5 text-sm font-bold text-white",
					children: "Start Browsing"
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
			children: saved.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
		})
	})] });
}
//#endregion
export { WishlistPage as component };
