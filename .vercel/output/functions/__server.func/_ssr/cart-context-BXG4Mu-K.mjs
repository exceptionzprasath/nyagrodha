import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-context-BXG4Mu-K.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CartContext = (0, import_react.createContext)(null);
var STORAGE_KEY = "nyagrodha-cart-v1";
var WISH_KEY = "nyagrodha-wishlist-v1";
function CartProvider({ children }) {
	const [items, setItems] = (0, import_react.useState)([]);
	const [wishlist, setWishlist] = (0, import_react.useState)([]);
	const [toast, setToast] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			if (raw) setItems(JSON.parse(raw));
			const w = localStorage.getItem(WISH_KEY);
			if (w) setWishlist(JSON.parse(w));
		} catch {}
	}, []);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
	}, [items]);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		localStorage.setItem(WISH_KEY, JSON.stringify(wishlist));
	}, [wishlist]);
	const showToast = (msg) => {
		setToast(msg);
		window.clearTimeout(showToast._t);
		showToast._t = window.setTimeout(() => setToast(null), 2200);
	};
	const add = (0, import_react.useCallback)((p, opts = {}) => {
		const qty = opts.qty ?? 1;
		setItems((prev) => {
			if (prev.find((i) => i.slug === p.slug)) return prev.map((i) => i.slug === p.slug ? {
				...i,
				qty: i.qty + qty
			} : i);
			return [...prev, {
				slug: p.slug,
				name: p.name,
				price: p.price,
				img: p.img,
				tint: p.tint,
				age: p.age,
				size: opts.size,
				color: opts.color,
				qty
			}];
		});
		showToast(`Added "${p.name}" to bag`);
	}, []);
	const remove = (0, import_react.useCallback)((slug) => setItems((prev) => prev.filter((i) => i.slug !== slug)), []);
	const update = (0, import_react.useCallback)((slug, qty) => setItems((prev) => prev.map((i) => i.slug === slug ? {
		...i,
		qty: Math.max(1, qty)
	} : i)), []);
	const clear = (0, import_react.useCallback)(() => setItems([]), []);
	const toggleWishlist = (0, import_react.useCallback)((slug) => {
		setWishlist((prev) => {
			if (prev.includes(slug)) {
				showToast("Removed from wishlist");
				return prev.filter((s) => s !== slug);
			}
			showToast("Saved to wishlist");
			return [...prev, slug];
		});
	}, []);
	const isWishlisted = (0, import_react.useCallback)((slug) => wishlist.includes(slug), [wishlist]);
	const value = (0, import_react.useMemo)(() => ({
		items,
		wishlist,
		add,
		remove,
		update,
		clear,
		toggleWishlist,
		isWishlisted,
		count: items.reduce((s, i) => s + i.qty, 0),
		subtotal: items.reduce((s, i) => s + i.price * i.qty, 0)
	}), [
		items,
		wishlist,
		add,
		remove,
		update,
		clear,
		toggleWishlist,
		isWishlisted
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CartContext.Provider, {
		value,
		children: [children, toast && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 animate-pop-in",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-full bg-[color:var(--organic-dark)] px-5 py-3 text-sm font-semibold text-white shadow-2xl",
				children: toast
			})
		})]
	});
}
function useCart() {
	const ctx = (0, import_react.useContext)(CartContext);
	if (!ctx) throw new Error("useCart must be used within CartProvider");
	return ctx;
}
//#endregion
export { useCart as n, CartProvider as t };
