import { n as __exportAll$1 } from "../_runtime.mjs";
import { t as cat_giraffe_default } from "./cat-giraffe-TyMLQFTg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catalog-CKZEIlcO.js
var catalog_CKZEIlcO_exports = /* @__PURE__ */ __exportAll$1({
	a: () => products,
	i: () => getProduct,
	n: () => categories,
	o: () => productsInCategory,
	r: () => getCategory,
	t: () => catalog_exports
});
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var cat_elephant_default = "/assets/cat-elephant-kKqqycc3.png";
var cat_bunny_default = "/assets/cat-bunny-DCvLB95W.png";
var cat_bear_default = "/assets/cat-bear-BOGI4bWL.png";
var cat_lion_default = "/assets/cat-lion-DrWDcI08.png";
var cat_panda_default = "/assets/cat-panda-BQWwsTSu.png";
var cat_fox_default = "/assets/cat-fox-DGJrFHHK.png";
var cat_monkey_default = "/assets/cat-monkey-Cf_9iBqq.png";
var prod_jabla_default = "/assets/prod-jabla-BU8HvB6X.jpg";
var prod_coord_default = "/assets/prod-coord-D-etsOCf.jpg";
var prod_frock_default = "/assets/prod-frock-jCyk4SvK.jpg";
var prod_pyjama_default = "/assets/prod-pyjama-CGJnfFtB.jpg";
var prod_swaddle_default = "/assets/prod-swaddle-B06AOXon.jpg";
var catalog_exports = /* @__PURE__ */ __exportAll({
	categories: () => categories,
	getCategory: () => getCategory,
	getProduct: () => getProduct,
	products: () => products,
	productsInCategory: () => productsInCategory
});
var categories = [
	{
		slug: "jablas",
		name: "Jablas",
		tagline: "Tie & button closures",
		description: "Soft tie and button Jablas for easy dressing.",
		mascot: cat_elephant_default,
		tint: "bg-[color:var(--sky)]",
		count: 18
	},
	{
		slug: "frocks",
		name: "Frocks",
		tagline: "Sweet everyday dresses",
		description: "Breezy organic frocks for little girls.",
		mascot: cat_bunny_default,
		tint: "bg-[color:var(--pink)]",
		count: 22
	},
	{
		slug: "co-ord-sets",
		name: "Co-ord Sets",
		tagline: "Matching tops & pants",
		description: "Co-ordinated outfits for an effortless look.",
		mascot: cat_bear_default,
		tint: "bg-[color:var(--beige)]",
		count: 14
	},
	{
		slug: "nightwear",
		name: "Nightwear",
		tagline: "Dreamy sleep essentials",
		description: "Soft, breathable nightwear for sweet dreams.",
		mascot: cat_lion_default,
		tint: "bg-[color:var(--lavender)]",
		count: 12
	},
	{
		slug: "swaddles",
		name: "Swaddles",
		tagline: "Cocoon-soft wraps",
		description: "Lightweight muslin swaddles for newborns.",
		mascot: cat_panda_default,
		tint: "bg-[color:var(--mint)]",
		count: 9
	},
	{
		slug: "towels",
		name: "Towels",
		tagline: "Snuggly after-bath",
		description: "Plush, absorbent organic baby towels.",
		mascot: cat_fox_default,
		tint: "bg-[color:var(--beige)]",
		count: 7
	},
	{
		slug: "cradles",
		name: "Cradles",
		tagline: "Cradle bedding sets",
		description: "Bedding and sheets for cradles and cots.",
		mascot: cat_giraffe_default,
		tint: "bg-[color:var(--sky)]",
		count: 6
	},
	{
		slug: "accessories",
		name: "Accessories",
		tagline: "Caps, mittens & bibs",
		description: "Little extras for your little one.",
		mascot: cat_monkey_default,
		tint: "bg-[color:var(--pink)]",
		count: 11
	}
];
var products = [
	{
		slug: "knotted-jabla",
		name: "Knotted Jabla",
		category: "jablas",
		price: 48,
		oldPrice: 65,
		age: "0-6 Months",
		badge: "Best Seller",
		badgeColor: "bg-[color:var(--pink)] text-rose-700",
		tint: "bg-[color:var(--beige)]",
		img: prod_jabla_default,
		colors: [
			"#FFF3E6",
			"#DFF5FF",
			"#FFD8E5"
		],
		rating: 4.9,
		reviews: 184,
		fabric: "100% Organic Muslin Cotton",
		description: "A classic knotted-tie Jabla offering easy dressing, a comfortable fit, and superb breathability — perfect for sensitive newborn skin.",
		features: [
			"Long thread to knot",
			"Hands-free curved area",
			"AZO-free prints",
			"Light & skin friendly"
		]
	},
	{
		slug: "co-ord-set",
		name: "Co-ord Set",
		category: "co-ord-sets",
		price: 116,
		oldPrice: 149,
		age: "3-18 Months",
		badge: "New Arrival",
		badgeColor: "bg-[color:var(--mint)] text-emerald-700",
		tint: "bg-[color:var(--mint)]",
		img: prod_coord_default,
		colors: [
			"#FFFDF8",
			"#D8F6E2",
			"#E8DDFF"
		],
		rating: 4.8,
		reviews: 96,
		fabric: "100% Organic Muslin Cotton",
		description: "A matching top and pant set crafted from the softest organic muslin for all-day comfort.",
		features: [
			"Coconut shell buttons",
			"Breathable weave",
			"AZO-free prints",
			"Hypoallergenic"
		]
	},
	{
		slug: "frock-sleeveless",
		name: "Frock Sleeveless",
		category: "frocks",
		price: 92,
		oldPrice: 120,
		age: "3-12 Months",
		badge: "Popular",
		badgeColor: "bg-[color:var(--pink)] text-rose-700",
		tint: "bg-[color:var(--pink)]",
		img: prod_frock_default,
		colors: [
			"#FFD8E5",
			"#FFFDF8",
			"#DFF5FF"
		],
		rating: 4.9,
		reviews: 142,
		fabric: "100% Organic Muslin Cotton",
		description: "A breezy sleeveless frock with a darling print — gentle on skin, easy to wash, and made for summer days.",
		features: [
			"Sleeveless hands",
			"Back closure",
			"Soft elasticated waist",
			"Skin friendly"
		]
	},
	{
		slug: "pyjama-set",
		name: "Pyjama Set",
		category: "nightwear",
		price: 155,
		oldPrice: 195,
		age: "3-18 Months",
		badge: "Loved",
		badgeColor: "bg-[color:var(--lavender)] text-violet-700",
		tint: "bg-[color:var(--beige)]",
		img: prod_pyjama_default,
		colors: [
			"#FFF3E6",
			"#E8DDFF",
			"#D8F6E2"
		],
		rating: 4.7,
		reviews: 78,
		fabric: "100% Organic Muslin Cotton",
		description: "A classic pyjama set with press buttons and gentle elastic — for the sweetest nights.",
		features: [
			"Press button closure",
			"Stretch cuffs",
			"Breathable",
			"Machine wash"
		]
	},
	{
		slug: "swaddle",
		name: "Swaddle",
		category: "swaddles",
		price: 175,
		oldPrice: 220,
		age: "0-12 Months",
		badge: "Gift Pick",
		badgeColor: "bg-[color:var(--sky)] text-sky-700",
		tint: "bg-[color:var(--pink)]",
		img: prod_swaddle_default,
		colors: [
			"#FFFDF8",
			"#FFD8E5",
			"#DFF5FF"
		],
		rating: 5,
		reviews: 211,
		fabric: "100% Organic Muslin Cotton (double layer)",
		description: "A lightweight muslin swaddle, perfect for naps, tummy time and stroller days.",
		features: [
			"Generous 100×100 cm",
			"Pre-washed for softness",
			"Breathable double weave",
			"Eco-friendly dyes"
		]
	},
	{
		slug: "wooden-button-jabla",
		name: "Wooden Button Jabla",
		category: "jablas",
		price: 79,
		oldPrice: 99,
		age: "0-9 Months",
		badge: "Eco",
		badgeColor: "bg-[color:var(--mint)] text-emerald-700",
		tint: "bg-[color:var(--sky)]",
		img: prod_jabla_default,
		colors: ["#DFF5FF", "#FFF3E6"],
		rating: 4.8,
		reviews: 64,
		fabric: "100% Organic Muslin Cotton",
		description: "Wooden-button Jabla combining the softness of muslin with the natural beauty of coconut-shell buttons.",
		features: [
			"Coconut shell buttons",
			"Free hands curved area",
			"AZO-free prints",
			"100% breathable"
		]
	},
	{
		slug: "press-button-jabla",
		name: "Press Button Jabla",
		category: "jablas",
		price: 69,
		age: "0-6 Months",
		tint: "bg-[color:var(--pink)]",
		img: prod_jabla_default,
		colors: ["#FFD8E5", "#FFFDF8"],
		rating: 4.7,
		reviews: 51,
		fabric: "100% Organic Muslin Cotton",
		description: "Easy press-button Jabla for the quickest changes during the newborn days.",
		features: [
			"Sleeveless",
			"Press buttons",
			"AZO-free prints",
			"Skin friendly"
		]
	},
	{
		slug: "floral-frock",
		name: "Floral Frock",
		category: "frocks",
		price: 105,
		age: "6-18 Months",
		tint: "bg-[color:var(--lavender)]",
		img: prod_frock_default,
		colors: ["#E8DDFF", "#FFD8E5"],
		rating: 4.8,
		reviews: 39,
		fabric: "100% Organic Muslin Cotton",
		description: "A gathered floral frock perfect for play days and little parties.",
		features: [
			"Gathered skirt",
			"Back tie",
			"Soft muslin",
			"Eco prints"
		]
	}
];
var getCategory = (slug) => categories.find((c) => c.slug === slug);
var getProduct = (slug) => products.find((p) => p.slug === slug);
var productsInCategory = (slug) => products.filter((p) => p.category === slug);
//#endregion
export { products as a, getProduct as i, categories as n, productsInCategory as o, getCategory as r, catalog_CKZEIlcO_exports as t };
