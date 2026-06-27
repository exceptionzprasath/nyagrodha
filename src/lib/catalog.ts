import catElephant from "@/assets/cat-elephant.png";
import catBunny from "@/assets/cat-bunny.png";
import catBear from "@/assets/cat-bear.png";
import catLion from "@/assets/cat-lion.png";
import catPanda from "@/assets/cat-panda.png";
import catFox from "@/assets/cat-fox.png";
import catMonkey from "@/assets/cat-monkey.png";
import catGiraffe from "@/assets/cat-giraffe.png";
import prodJabla from "@/assets/prod-jabla.jpg";
import prodCoord from "@/assets/prod-coord.jpg";
import prodFrock from "@/assets/prod-frock.jpg";
import prodPyjama from "@/assets/prod-pyjama.jpg";
import prodSwaddle from "@/assets/prod-swaddle.jpg";

export type Category = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  mascot: string;
  tint: string;
  count: number;
};

export type Product = {
  slug: string;
  name: string;
  category: string; // category slug
  price: number;
  oldPrice?: number;
  age: string;
  badge?: string;
  badgeColor?: string;
  tint: string;
  img: string;
  colors: string[];
  rating: number;
  reviews: number;
  fabric: string;
  description: string;
  features: string[];
};

export const categories: Category[] = [
  { slug: "jablas",      name: "Jablas",      tagline: "Tie & button closures",   description: "Soft tie and button Jablas for easy dressing.", mascot: catElephant, tint: "bg-[color:var(--sky)]",     count: 18 },
  { slug: "frocks",      name: "Frocks",      tagline: "Sweet everyday dresses",  description: "Breezy organic frocks for little girls.",       mascot: catBunny,    tint: "bg-[color:var(--pink)]",    count: 22 },
  { slug: "co-ord-sets", name: "Co-ord Sets", tagline: "Matching tops & pants",   description: "Co-ordinated outfits for an effortless look.",  mascot: catBear,     tint: "bg-[color:var(--beige)]",   count: 14 },
  { slug: "nightwear",   name: "Nightwear",   tagline: "Dreamy sleep essentials", description: "Soft, breathable nightwear for sweet dreams.",  mascot: catLion,     tint: "bg-[color:var(--lavender)]",count: 12 },
  { slug: "swaddles",    name: "Swaddles",    tagline: "Cocoon-soft wraps",       description: "Lightweight muslin swaddles for newborns.",     mascot: catPanda,    tint: "bg-[color:var(--mint)]",    count: 9  },
  { slug: "towels",      name: "Towels",      tagline: "Snuggly after-bath",      description: "Plush, absorbent organic baby towels.",         mascot: catFox,      tint: "bg-[color:var(--beige)]",   count: 7  },
  { slug: "cradles",     name: "Cradles",     tagline: "Cradle bedding sets",     description: "Bedding and sheets for cradles and cots.",      mascot: catGiraffe,  tint: "bg-[color:var(--sky)]",     count: 6  },
  { slug: "accessories", name: "Accessories", tagline: "Caps, mittens & bibs",    description: "Little extras for your little one.",            mascot: catMonkey,   tint: "bg-[color:var(--pink)]",    count: 11 },
];

export const products: Product[] = [
  {
    slug: "knotted-jabla", name: "Knotted Jabla", category: "jablas",
    price: 48, oldPrice: 65, age: "0-6 Months",
    badge: "Best Seller", badgeColor: "bg-[color:var(--pink)] text-rose-700",
    tint: "bg-[color:var(--beige)]", img: prodJabla,
    colors: ["#FFF3E6", "#DFF5FF", "#FFD8E5"], rating: 4.9, reviews: 184,
    fabric: "100% Organic Muslin Cotton",
    description: "A classic knotted-tie Jabla offering easy dressing, a comfortable fit, and superb breathability — perfect for sensitive newborn skin.",
    features: ["Long thread to knot", "Hands-free curved area", "AZO-free prints", "Light & skin friendly"],
  },
  {
    slug: "co-ord-set", name: "Co-ord Set", category: "co-ord-sets",
    price: 116, oldPrice: 149, age: "3-18 Months",
    badge: "New Arrival", badgeColor: "bg-[color:var(--mint)] text-emerald-700",
    tint: "bg-[color:var(--mint)]", img: prodCoord,
    colors: ["#FFFDF8", "#D8F6E2", "#E8DDFF"], rating: 4.8, reviews: 96,
    fabric: "100% Organic Muslin Cotton",
    description: "A matching top and pant set crafted from the softest organic muslin for all-day comfort.",
    features: ["Coconut shell buttons", "Breathable weave", "AZO-free prints", "Hypoallergenic"],
  },
  {
    slug: "frock-sleeveless", name: "Frock Sleeveless", category: "frocks",
    price: 92, oldPrice: 120, age: "3-12 Months",
    badge: "Popular", badgeColor: "bg-[color:var(--pink)] text-rose-700",
    tint: "bg-[color:var(--pink)]", img: prodFrock,
    colors: ["#FFD8E5", "#FFFDF8", "#DFF5FF"], rating: 4.9, reviews: 142,
    fabric: "100% Organic Muslin Cotton",
    description: "A breezy sleeveless frock with a darling print — gentle on skin, easy to wash, and made for summer days.",
    features: ["Sleeveless hands", "Back closure", "Soft elasticated waist", "Skin friendly"],
  },
  {
    slug: "pyjama-set", name: "Pyjama Set", category: "nightwear",
    price: 155, oldPrice: 195, age: "3-18 Months",
    badge: "Loved", badgeColor: "bg-[color:var(--lavender)] text-violet-700",
    tint: "bg-[color:var(--beige)]", img: prodPyjama,
    colors: ["#FFF3E6", "#E8DDFF", "#D8F6E2"], rating: 4.7, reviews: 78,
    fabric: "100% Organic Muslin Cotton",
    description: "A classic pyjama set with press buttons and gentle elastic — for the sweetest nights.",
    features: ["Press button closure", "Stretch cuffs", "Breathable", "Machine wash"],
  },
  {
    slug: "swaddle", name: "Swaddle", category: "swaddles",
    price: 175, oldPrice: 220, age: "0-12 Months",
    badge: "Gift Pick", badgeColor: "bg-[color:var(--sky)] text-sky-700",
    tint: "bg-[color:var(--pink)]", img: prodSwaddle,
    colors: ["#FFFDF8", "#FFD8E5", "#DFF5FF"], rating: 5.0, reviews: 211,
    fabric: "100% Organic Muslin Cotton (double layer)",
    description: "A lightweight muslin swaddle, perfect for naps, tummy time and stroller days.",
    features: ["Generous 100×100 cm", "Pre-washed for softness", "Breathable double weave", "Eco-friendly dyes"],
  },
  {
    slug: "wooden-button-jabla", name: "Wooden Button Jabla", category: "jablas",
    price: 79, oldPrice: 99, age: "0-9 Months",
    badge: "Eco", badgeColor: "bg-[color:var(--mint)] text-emerald-700",
    tint: "bg-[color:var(--sky)]", img: prodJabla,
    colors: ["#DFF5FF", "#FFF3E6"], rating: 4.8, reviews: 64,
    fabric: "100% Organic Muslin Cotton",
    description: "Wooden-button Jabla combining the softness of muslin with the natural beauty of coconut-shell buttons.",
    features: ["Coconut shell buttons", "Free hands curved area", "AZO-free prints", "100% breathable"],
  },
  {
    slug: "press-button-jabla", name: "Press Button Jabla", category: "jablas",
    price: 69, age: "0-6 Months",
    tint: "bg-[color:var(--pink)]", img: prodJabla,
    colors: ["#FFD8E5", "#FFFDF8"], rating: 4.7, reviews: 51,
    fabric: "100% Organic Muslin Cotton",
    description: "Easy press-button Jabla for the quickest changes during the newborn days.",
    features: ["Sleeveless", "Press buttons", "AZO-free prints", "Skin friendly"],
  },
  {
    slug: "floral-frock", name: "Floral Frock", category: "frocks",
    price: 105, age: "6-18 Months",
    tint: "bg-[color:var(--lavender)]", img: prodFrock,
    colors: ["#E8DDFF", "#FFD8E5"], rating: 4.8, reviews: 39,
    fabric: "100% Organic Muslin Cotton",
    description: "A gathered floral frock perfect for play days and little parties.",
    features: ["Gathered skirt", "Back tie", "Soft muslin", "Eco prints"],
  },
];

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
export const getProduct  = (slug: string) => products.find((p) => p.slug === slug);
export const productsInCategory = (slug: string) =>
  products.filter((p) => p.category === slug);
