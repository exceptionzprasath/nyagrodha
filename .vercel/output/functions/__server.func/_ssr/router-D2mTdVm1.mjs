import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { P as useRouter, c as HeadContent, d as Outlet, f as lazyRouteComponent, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as Lock, E as Mail, F as Facebook, H as ChevronDown, M as Headphones, N as HandHeart, O as Leaf, S as Package, T as MapPin, f as ShoppingBag, g as Search, j as Heart, k as Instagram, n as X, o as User, q as Sparkles, s as Truck, t as Youtube, v as RotateCcw, w as Menu, x as Phone } from "../_libs/lucide-react.mjs";
import { n as Route$9 } from "./shop-BOsyb4T3.mjs";
import { n as useCart, t as CartProvider } from "./cart-context-BXG4Mu-K.mjs";
import { t as Route$10 } from "./category._slug-CrXnpDXG.mjs";
import { t as Route$11 } from "./checkout.success-B0Oic_NQ.mjs";
import { t as Route$12 } from "./product._slug-BSRYB94U.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D2mTdVm1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-D4plU69G.css";
var nyagrodha_logo_default = "/assets/nyagrodha-logo-B3vC2RVM.png";
var navLinks = [
	{
		to: "/",
		label: "Home",
		exact: true
	},
	{
		to: "/shop",
		label: "Shop",
		caret: true
	},
	{
		to: "/shop",
		label: "Categories",
		caret: true
	},
	{
		to: "/wholesale",
		label: "Wholesale",
		caret: true
	},
	{
		to: "/about",
		label: "About Us"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const { count, wishlist } = useCart();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-[color:var(--organic-dark)] text-white text-xs sm:text-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-x-5 gap-y-1 font-medium",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "h-3.5 w-3.5" }), " 100% Organic Muslin Cotton"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "hidden sm:inline-flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), " AZO Free"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "hidden md:inline-flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HandHeart, { className: "h-3.5 w-3.5" }), " Skin Friendly"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/wholesale",
						className: "hidden sm:inline-flex items-center gap-1.5 hover:opacity-80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-3.5 w-3.5" }), " Wholesale Enquiry"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/wholesale",
						className: "inline-flex items-center gap-1.5 hover:opacity-80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-3.5 w-3.5" }), " Dealer Login / Register"]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "sticky top-0 z-40 backdrop-blur-xl bg-[color:var(--cream)]/80 border-b border-[color:var(--border)]/60",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "flex shrink-0 items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: nyagrodha_logo_default,
							alt: "Nyagrodha Apparels",
							className: "h-12 sm:h-14 w-auto"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "hidden lg:flex items-center justify-center gap-7 text-sm font-semibold",
						children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: l.to,
							activeOptions: { exact: l.exact },
							activeProps: { className: "text-[color:var(--organic-dark)]" },
							inactiveProps: { className: "text-foreground hover:text-[color:var(--organic-dark)]" },
							className: "inline-flex items-center gap-1 transition",
							children: [l.label, l.caret && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-3.5 w-3.5" })]
						}) }, l.label))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1 sm:gap-2 justify-self-end",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								"aria-label": "Search",
								className: "grid h-10 w-10 place-items-center rounded-full hover:bg-white/70 transition",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/wishlist",
								"aria-label": "Wishlist",
								className: "relative grid h-10 w-10 place-items-center rounded-full hover:bg-white/70 transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-5 w-5" }), wishlist.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -top-0.5 -right-0.5 grid h-5 w-5 place-items-center rounded-full bg-rose-500 text-[10px] font-bold text-white",
									children: wishlist.length
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								"aria-label": "Account",
								className: "hidden sm:grid h-10 w-10 place-items-center rounded-full hover:bg-white/70 transition",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/cart",
								className: "relative grid h-10 w-10 place-items-center rounded-full hover:bg-white/70 transition",
								"aria-label": "Cart",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "h-5 w-5" }), count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute -top-0.5 -right-0.5 grid h-5 w-5 place-items-center rounded-full bg-[color:var(--organic)] text-[10px] font-bold text-white",
									children: count
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								"aria-label": "Menu",
								className: "lg:hidden grid h-10 w-10 place-items-center rounded-full hover:bg-white/70 transition",
								onClick: () => setOpen(true),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
							})
						]
					})
				]
			})
		}),
		open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed inset-0 z-50 lg:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 bg-[color:var(--brand-brown)]/50 backdrop-blur-sm",
				onClick: () => setOpen(false)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "absolute right-0 top-0 h-full w-80 max-w-[85%] bg-[color:var(--cream)] p-6 shadow-2xl animate-pop-in",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/assets/nyagrodha-logo-B3vC2RVM.png",
						alt: "Nyagrodha",
						className: "h-10 w-auto"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Close",
						onClick: () => setOpen(false),
						className: "grid h-10 w-10 place-items-center rounded-full bg-white",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 space-y-2",
					children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						onClick: () => setOpen(false),
						className: "block rounded-xl px-4 py-3 text-base font-semibold hover:bg-white",
						children: l.label
					}) }, l.label))
				})]
			})]
		})
	] });
}
var footerStrip = [
	{
		Icon: Lock,
		title: "Secure Payment",
		sub: "100% Safe & Secure"
	},
	{
		Icon: RotateCcw,
		title: "Easy Returns",
		sub: "Hassle Free Returns"
	},
	{
		Icon: Headphones,
		title: "24/7 Support",
		sub: "We're Here to Help"
	},
	{
		Icon: Truck,
		title: "Track Order",
		sub: "Real-time Tracking"
	}
];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-4 pb-12 pt-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "glass-card rounded-2xl px-4 py-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
				children: footerStrip.map(({ Icon, title, sub }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[color:var(--mint)]",
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
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-[color:var(--organic-dark)] text-white/90",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 py-14 grid gap-10 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-flex items-center gap-3 rounded-2xl bg-white/95 p-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: nyagrodha_logo_default,
							alt: "Nyagrodha",
							className: "h-10 w-auto"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-white/80",
						children: "Babies, Kids Clothing & Accessories — crafted in Erode, Tamil Nadu with 100% organic muslin cotton, AZO-free dyes and natural fastenings."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-5 flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								"aria-label": "Instagram",
								className: "grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20 transition",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								"aria-label": "Facebook",
								className: "grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20 transition",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "h-4 w-4" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								"aria-label": "YouTube",
								className: "grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20 transition",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, { className: "h-4 w-4" })
							})
						]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-white font-display text-base font-bold",
					children: "Shop"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/category/$slug",
							params: { slug: "jablas" },
							className: "hover:text-white",
							children: "Jablas"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/category/$slug",
							params: { slug: "frocks" },
							className: "hover:text-white",
							children: "Frocks"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/category/$slug",
							params: { slug: "co-ord-sets" },
							className: "hover:text-white",
							children: "Co-ord Sets"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/category/$slug",
							params: { slug: "swaddles" },
							className: "hover:text-white",
							children: "Swaddles"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							className: "hover:text-white",
							children: "View All"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-white font-display text-base font-bold",
					children: "Company"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "hover:text-white",
							children: "About Us"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/wholesale",
							className: "hover:text-white",
							children: "Wholesale"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "hover:text-white",
							children: "Contact"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/wishlist",
							className: "hover:text-white",
							children: "Wishlist"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-white font-display text-base font-bold",
					children: "Get in touch"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " +91 90429 14202"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }), " +91 95008 50717"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" }), " info.nyagrodha@gmail.com"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }), " Erode, Tamil Nadu, India"]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 py-5 text-xs text-white/70 flex flex-wrap items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Nyagrodha Apparels. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Made with 💚 in India" })]
			})
		})]
	})] });
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$8 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Nyagrodha Apparels — Premium Organic Muslin Baby Clothing" },
			{
				name: "description",
				content: "Made with love, wrapped in organic comfort. Premium 100% organic muslin cotton clothing for babies and kids. Made in India."
			},
			{
				name: "author",
				content: "Nyagrodha Apparels"
			},
			{
				property: "og:title",
				content: "Nyagrodha Apparels — Premium Organic Muslin Baby Clothing"
			},
			{
				property: "og:description",
				content: "Premium 100% organic muslin cotton baby clothing. AZO-free, skin friendly, made in India."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$8.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CartProvider, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "min-h-[60vh]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		] })
	});
}
var $$splitComponentImporter$6 = () => import("./wishlist-C7MB9WWX.mjs");
var Route$7 = createFileRoute("/wishlist")({
	head: () => ({ meta: [{ title: "Wishlist — Nyagrodha Apparels" }, {
		name: "description",
		content: "Your saved organic baby pieces."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./wholesale-BeubTJu1.mjs");
var Route$6 = createFileRoute("/wholesale")({
	head: () => ({ meta: [
		{ title: "Wholesale & Dealers — Nyagrodha Apparels" },
		{
			name: "description",
			content: "Become a Nyagrodha dealer. Low MOQ, bulk discounts, GST invoicing and Pan-India delivery."
		},
		{
			property: "og:title",
			content: "Wholesale & Dealers — Nyagrodha Apparels"
		},
		{
			property: "og:description",
			content: "Join 100+ retailers stocking premium organic baby clothing from Erode, Tamil Nadu."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var BASE_URL = "";
var Route$5 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const { categories, products } = await import("./catalog-CKZEIlcO.mjs").then((n) => n.t).then((n) => n.t);
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/shop",
				changefreq: "weekly",
				priority: "0.9"
			},
			{
				path: "/about",
				changefreq: "monthly",
				priority: "0.6"
			},
			{
				path: "/contact",
				changefreq: "monthly",
				priority: "0.6"
			},
			{
				path: "/wholesale",
				changefreq: "monthly",
				priority: "0.7"
			},
			...categories.map((c) => ({
				path: `/category/${c.slug}`,
				changefreq: "weekly",
				priority: "0.8"
			})),
			...products.map((p) => ({
				path: `/product/${p.slug}`,
				changefreq: "weekly",
				priority: "0.7"
			}))
		].map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$4 = () => import("./contact-La4jdzh-.mjs");
var Route$4 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact Us — Nyagrodha Apparels" },
		{
			name: "description",
			content: "Get in touch with Nyagrodha Apparels — phone, email and address in Erode, Tamil Nadu."
		},
		{
			property: "og:title",
			content: "Contact Us — Nyagrodha Apparels"
		},
		{
			property: "og:description",
			content: "Questions, wholesale enquiries or just a hello — we'd love to hear from you."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./checkout-DCQaZUPN.mjs");
var Route$3 = createFileRoute("/checkout")({
	head: () => ({ meta: [{ title: "Checkout — Nyagrodha Apparels" }, {
		name: "description",
		content: "Secure checkout for your organic baby clothing order."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./cart-Civ1EQYq.mjs");
var Route$2 = createFileRoute("/cart")({
	head: () => ({ meta: [{ title: "Your Cart — Nyagrodha Apparels" }, {
		name: "description",
		content: "Review the organic baby pieces in your shopping bag."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-CEaUECkR.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "Our Story — Nyagrodha Apparels" },
		{
			name: "description",
			content: "From Erode, Tamil Nadu. The story behind Nyagrodha — a family making the softest organic muslin clothing for babies."
		},
		{
			property: "og:title",
			content: "Our Story — Nyagrodha Apparels"
		},
		{
			property: "og:description",
			content: "We craft 100% organic muslin baby clothing with love, in Erode, India."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-CaSFRR5H.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Nyagrodha Apparels — Premium Organic Muslin Baby Clothing" },
		{
			name: "description",
			content: "Made with love, wrapped in organic comfort. Premium 100% organic muslin cotton baby clothing handcrafted in Erode, India."
		},
		{
			property: "og:title",
			content: "Nyagrodha Apparels — Premium Organic Muslin Baby Clothing"
		},
		{
			property: "og:description",
			content: "Premium 100% organic muslin cotton baby clothing. AZO-free, skin friendly, made in India."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var WishlistRoute = Route$7.update({
	id: "/wishlist",
	path: "/wishlist",
	getParentRoute: () => Route$8
});
var WholesaleRoute = Route$6.update({
	id: "/wholesale",
	path: "/wholesale",
	getParentRoute: () => Route$8
});
var SitemapDotxmlRoute = Route$5.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$8
});
var ShopRoute = Route$9.update({
	id: "/shop",
	path: "/shop",
	getParentRoute: () => Route$8
});
var ContactRoute = Route$4.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$8
});
var CheckoutRoute = Route$3.update({
	id: "/checkout",
	path: "/checkout",
	getParentRoute: () => Route$8
});
var CartRoute = Route$2.update({
	id: "/cart",
	path: "/cart",
	getParentRoute: () => Route$8
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$8
});
var IndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$8
});
var ProductSlugRoute = Route$12.update({
	id: "/product/$slug",
	path: "/product/$slug",
	getParentRoute: () => Route$8
});
var CheckoutSuccessRoute = Route$11.update({
	id: "/success",
	path: "/success",
	getParentRoute: () => CheckoutRoute
});
var CategorySlugRoute = Route$10.update({
	id: "/category/$slug",
	path: "/category/$slug",
	getParentRoute: () => Route$8
});
var CheckoutRouteChildren = { CheckoutSuccessRoute };
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	CartRoute,
	CheckoutRoute: CheckoutRoute._addFileChildren(CheckoutRouteChildren),
	ContactRoute,
	ShopRoute,
	SitemapDotxmlRoute,
	WholesaleRoute,
	WishlistRoute,
	CategorySlugRoute,
	ProductSlugRoute
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
