import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as ChevronRight, G as ArrowRight, I as Download, N as HandHeart, O as Leaf, P as FileText, R as Cloud, S as Package, T as MapPin, U as BadgePercent, V as ChevronLeft, W as Award, _ as Scissors, a as Users, p as Shield, q as Sparkles, r as Wind, s as Truck, u as Star, y as Quote } from "../_libs/lucide-react.mjs";
import { t as elephant_heart_default } from "./elephant-heart-BgPbE3Fw.mjs";
import { a as products, n as categories } from "./catalog-CKZEIlcO.mjs";
import { t as ProductCard } from "./product-card-CcpI-FAE.mjs";
import { t as giraffe_boxes_default } from "./giraffe-boxes-D9lzWOWr.mjs";
import { t as CategoryCard } from "./category-card-D4tduycm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CaSFRR5H.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_scene_default = "/assets/hero-scene-BHoj2Bzz.jpg";
var hero_scene_2_default = "/assets/hero-scene-2-BRxfU0K4.jpg";
var hero_scene_3_default = "/assets/hero-scene-3-DwTE6JtW.jpg";
var trustIcons = [
	{
		Icon: Cloud,
		title: "100% Organic",
		sub: "Muslin Cotton",
		tint: "bg-[color:var(--mint)]"
	},
	{
		Icon: Shield,
		title: "AZO Free",
		sub: "Safe for Babies",
		tint: "bg-[color:var(--sky)]"
	},
	{
		Icon: Wind,
		title: "Breathable",
		sub: "for Comfort",
		tint: "bg-[color:var(--mint)]"
	},
	{
		Icon: HandHeart,
		title: "Skin Friendly",
		sub: "Anti Rash",
		tint: "bg-[color:var(--pink)]"
	},
	{
		Icon: Leaf,
		title: "Eco Friendly",
		sub: "Sustainable",
		tint: "bg-[color:var(--mint)]"
	},
	{
		Icon: MapPin,
		title: "Made in India",
		sub: "Proudly Local",
		tint: "bg-[color:var(--beige)]"
	}
];
var whyChoose = [
	{
		Icon: Award,
		title: "Premium Quality",
		sub: "Checked with care"
	},
	{
		Icon: Leaf,
		title: "Hypoallergenic",
		sub: "Safe & Gentle"
	},
	{
		Icon: Scissors,
		title: "Perfect Stitching",
		sub: "Made to Last"
	},
	{
		Icon: Users,
		title: "Trusted by Parents",
		sub: "Loved by 1000+ families"
	}
];
var wholesalePerks = [
	{
		Icon: BadgePercent,
		title: "Bulk Discounts",
		sub: "Best Wholesale Prices"
	},
	{
		Icon: Package,
		title: "Low MOQ",
		sub: "Easy to Start"
	},
	{
		Icon: FileText,
		title: "GST Invoice",
		sub: "Billing Support"
	},
	{
		Icon: Truck,
		title: "Fast Delivery",
		sub: "Pan India"
	}
];
var testimonials = [
	{
		name: "Priya R.",
		city: "Bengaluru",
		rating: 5,
		text: "The muslin is impossibly soft. My newborn slept the moment I put her in the Jabla. Quality is on par with imported brands."
	},
	{
		name: "Aravind K.",
		city: "Chennai",
		rating: 5,
		text: "Beautiful packaging, lovely prints, and the breathability is amazing for our humid weather. Will buy again and again."
	},
	{
		name: "Sneha M.",
		city: "Coimbatore",
		rating: 5,
		text: "Bought the gift set for a baby shower — everyone asked where it was from. Nyagrodha is now our go-to baby brand."
	}
];
var heroSlides = [
	{
		img: hero_scene_default,
		headline: [
			"Made with Love,",
			"Wrapped in",
			"Organic Comfort"
		],
		eyebrow: "New season is here"
	},
	{
		img: hero_scene_2_default,
		headline: [
			"Softer than",
			"a Cherry",
			"Blossom Breeze"
		],
		eyebrow: "Spring drop"
	},
	{
		img: hero_scene_3_default,
		headline: [
			"Sweet Dreams in",
			"Breathable",
			"Muslin Cotton"
		],
		eyebrow: "Nursery essentials"
	}
];
function Home() {
	const [slide, setSlide] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const t = window.setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 4500);
		return () => window.clearInterval(t);
	}, []);
	const current = heroSlides[slide];
	const go = (dir) => setSlide((s) => (s + dir + heroSlides.length) % heroSlides.length);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-4 pt-6 sm:pt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-[color:var(--beige)] via-[color:var(--cream)] to-[color:var(--mint)]/60 soft-shadow",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-16 -top-10 h-56 w-56 rounded-full bg-[color:var(--mint)] blur-3xl opacity-60" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-16 -bottom-10 h-72 w-72 rounded-full bg-[color:var(--sky)] blur-3xl opacity-60" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative grid lg:grid-cols-2 gap-6 px-6 sm:px-10 lg:px-14 py-10 lg:py-14",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative z-10 flex flex-col justify-center max-w-xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "chip bg-white/80 border-[color:var(--organic)]/30 text-[color:var(--organic-dark)] w-fit animate-pop-in",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }),
												" ",
												current.eyebrow
											]
										}, `eye-${slide}`),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
											className: "mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] font-black animate-pop-in",
											children: [
												current.headline[0],
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												current.headline[1],
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[color:var(--organic-dark)]",
													children: current.headline[2]
												})
											]
										}, `h-${slide}`),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-5 text-base sm:text-lg text-muted-foreground max-w-md",
											children: "Premium 100% Organic Muslin Cotton, crafted in Erode for your little ones."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-7 flex flex-wrap items-center gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/shop",
												className: "inline-flex items-center gap-2 rounded-full bg-[color:var(--organic)] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_25px_-10px_color-mix(in_oklab,var(--organic)_70%,transparent)] hover:translate-y-[-1px] transition",
												children: ["Shop Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/wholesale",
												className: "inline-flex items-center gap-2 rounded-full border-2 border-[color:var(--organic)] bg-white/70 px-5 py-3 text-sm font-bold text-[color:var(--organic-dark)] hover:bg-white transition",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4" }), " Become a Dealer"]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/shop",
											className: "mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--organic-dark)] hover:underline",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Browse Catalogue"]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "relative mx-auto w-full max-w-[640px] aspect-[3/2] overflow-hidden rounded-3xl soft-shadow",
											children: heroSlides.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: s.img,
												alt: "Happy baby with Pixar-style animal friends in organic muslin cotton",
												width: 1536,
												height: 1024,
												className: `absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === slide ? "opacity-100" : "opacity-0"}`
											}, i))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "absolute right-2 sm:right-4 top-3 z-[2] hidden sm:flex h-20 w-20 lg:h-24 lg:w-24 flex-col items-center justify-center rounded-full bg-white/95 border-4 border-[color:var(--beige)] shadow-lg animate-float text-center",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-display text-[13px] font-extrabold text-[color:var(--organic-dark)] leading-none",
													children: "100%"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-display text-[11px] font-extrabold text-[color:var(--organic-dark)]",
													children: "Organic"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mt-0.5 text-[8px] font-semibold text-muted-foreground",
													children: "Made in India"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => go(-1),
											className: "absolute left-2 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/90 backdrop-blur soft-shadow hover:scale-105 transition",
											"aria-label": "Previous",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-5 w-5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => go(1),
											className: "absolute right-2 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/90 backdrop-blur soft-shadow hover:scale-105 transition",
											"aria-label": "Next",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-5 w-5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5",
											children: heroSlides.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => setSlide(i),
												"aria-label": `Slide ${i + 1}`,
												className: `h-1.5 rounded-full transition-all ${i === slide ? "w-6 bg-[color:var(--organic)]" : "w-1.5 bg-[color:var(--brand-brown)]/30 hover:bg-[color:var(--brand-brown)]/50"}`
											}, i))
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative px-4 sm:px-8 pb-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "glass-card rounded-2xl px-3 sm:px-6 py-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3",
										children: trustIcons.map(({ Icon, title, sub, tint }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3 min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: `grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${tint}`,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-[color:var(--organic-dark)]" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-sm font-bold truncate",
													children: title
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[11px] text-muted-foreground truncate",
													children: sub
												})]
											})]
										}, title))
									})
								})
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative mx-auto max-w-7xl px-4 py-16 sm:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "Shop by Category" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4",
					children: categories.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryCard, {
						category: c,
						index: i
					}, c.slug))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative mx-auto max-w-7xl px-4 pb-16 sm:pb-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
						className: "!mb-0",
						children: "Best Sellers"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/shop",
						className: "chip border-[color:var(--organic)]/30 text-[color:var(--organic-dark)]",
						children: ["View All Products ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4",
					children: products.slice(0, 5).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.slug))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-4 pb-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative overflow-hidden rounded-[2rem] bg-[color:var(--mint)]/70 p-5 sm:p-8 soft-shadow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid lg:grid-cols-[1.1fr_2fr] items-center gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: elephant_heart_default,
								alt: "Caring baby elephant mascot",
								loading: "lazy",
								className: "h-36 w-36 sm:h-44 sm:w-44 shrink-0 animate-float"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "font-display text-2xl sm:text-3xl font-black leading-tight",
										children: [
											"Why Choose",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Nyagrodha?"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: "We care for your baby like you do."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/about",
										className: "mt-3 inline-flex items-center gap-2 rounded-full bg-[color:var(--organic)] px-5 py-2.5 text-xs font-bold text-white",
										children: ["Know More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "glass-card rounded-2xl p-4 sm:p-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
								children: whyChoose.map(({ Icon, title, sub }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[color:var(--mint)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-6 w-6 text-[color:var(--organic-dark)]" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mt-3 font-display text-sm font-extrabold",
											children: title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11px] text-muted-foreground",
											children: sub
										})
									]
								}, title))
							})
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "mx-auto max-w-7xl px-4 pb-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative overflow-hidden rounded-[2rem] bg-[color:var(--beige)] p-5 sm:p-8 soft-shadow",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid lg:grid-cols-[1.2fr_2fr] items-center gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: giraffe_boxes_default,
								alt: "Wholesale delivery giraffe mascot",
								loading: "lazy",
								className: "h-40 w-40 sm:h-48 sm:w-48 shrink-0 animate-float"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "font-display text-2xl sm:text-3xl font-black leading-tight",
										children: [
											"Join Our",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"Wholesale Family"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: "Great quality. Best prices. Timely delivery."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/wholesale",
										className: "mt-3 inline-flex items-center gap-2 rounded-full bg-[color:var(--organic)] px-5 py-2.5 text-xs font-bold text-white",
										children: ["Become a Dealer Today ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-2 lg:grid-cols-4 gap-3",
							children: wholesalePerks.map(({ Icon, title, sub }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "glass-card rounded-2xl px-4 py-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--mint)]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 text-[color:var(--organic-dark)]" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-3 font-display text-sm font-extrabold leading-tight",
										children: title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-[11px] text-muted-foreground",
										children: sub
									})
								]
							}, title))
						})]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto max-w-7xl px-4 pb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, { children: "Loved by Parents" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid md:grid-cols-3 gap-4",
					children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "glass-card rounded-3xl p-6 relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "h-7 w-7 text-[color:var(--organic)]/50" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed",
								children: t.text
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-sm font-extrabold",
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[11px] text-muted-foreground",
									children: t.city
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex",
									children: Array.from({ length: t.rating }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-amber-400 text-amber-400" }, i))
								})]
							})
						]
					}, t.name))
				})]
			})
		]
	});
}
function SectionTitle({ children, className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex items-center justify-center gap-3 ${className}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "h-5 w-5 text-[color:var(--organic)] -scale-x-100" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl sm:text-4xl font-black tracking-tight text-center",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "h-5 w-5 text-[color:var(--organic)]" })
		]
	});
}
//#endregion
export { Home as component };
