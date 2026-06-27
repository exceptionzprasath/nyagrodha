import { i as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { N as useNavigate, h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as IndianRupee, D as Lock, K as ArrowLeft, L as CreditCard, i as Wallet, m as ShieldCheck, s as Truck } from "../_libs/lucide-react.mjs";
import { n as useCart } from "./cart-context-BXG4Mu-K.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-DCQaZUPN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CheckoutPage() {
	const { items, subtotal, clear } = useCart();
	const navigate = useNavigate();
	const shipping = subtotal === 0 ? 0 : subtotal > 999 ? 0 : 79;
	const total = subtotal + shipping;
	const [pay, setPay] = (0, import_react.useState)("card");
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)({
		email: "",
		firstName: "",
		lastName: "",
		phone: "",
		address: "",
		city: "",
		state: "",
		pincode: "",
		cardName: "",
		cardNumber: "",
		expiry: "",
		cvv: "",
		upi: ""
	});
	const update = (k) => (e) => setForm((f) => ({
		...f,
		[k]: e.target.value
	}));
	const onSubmit = async (e) => {
		e.preventDefault();
		if (items.length === 0) return;
		setSubmitting(true);
		const orderId = `NYA-${Date.now().toString().slice(-8)}`;
		await new Promise((r) => setTimeout(r, 1400));
		try {
			sessionStorage.setItem("nyagrodha-last-order", JSON.stringify({
				orderId,
				total,
				items,
				email: form.email,
				name: `${form.firstName} ${form.lastName}`.trim(),
				address: `${form.address}, ${form.city}, ${form.state} ${form.pincode}`,
				method: pay,
				at: (/* @__PURE__ */ new Date()).toISOString()
			}));
		} catch {}
		clear();
		setSubmitting(false);
		navigate({
			to: "/checkout/success",
			search: { o: orderId }
		});
	};
	if (items.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl px-4 py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-3xl font-black",
				children: "Your bag is empty"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: "Add a few pieces before checking out."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/shop",
				className: "mt-6 inline-flex rounded-full bg-[color:var(--organic)] px-5 py-2.5 text-sm font-bold text-white",
				children: "Browse Shop"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 pt-8 pb-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/cart",
				className: "inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-[color:var(--organic-dark)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back to cart"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-3xl sm:text-4xl font-black",
				children: "Secure Checkout"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-sm text-muted-foreground inline-flex items-center gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3.5 w-3.5" }), " 256-bit encrypted payment"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit,
				className: "mt-8 grid lg:grid-cols-[1.5fr_1fr] gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
							title: "Contact information",
							step: 1,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Email",
									value: form.email,
									onChange: update("email"),
									type: "email",
									required: true,
									placeholder: "you@email.com"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid sm:grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "First name",
										value: form.firstName,
										onChange: update("firstName"),
										required: true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Last name",
										value: form.lastName,
										onChange: update("lastName"),
										required: true
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Phone",
									value: form.phone,
									onChange: update("phone"),
									type: "tel",
									required: true,
									placeholder: "+91 9876543210"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
							title: "Shipping address",
							step: 2,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Street address",
								value: form.address,
								onChange: update("address"),
								required: true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid sm:grid-cols-3 gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "City",
										value: form.city,
										onChange: update("city"),
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "State",
										value: form.state,
										onChange: update("state"),
										required: true
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "PIN code",
										value: form.pincode,
										onChange: update("pincode"),
										required: true
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
							title: "Payment method",
							step: 3,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid sm:grid-cols-3 gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PayChoice, {
											id: "card",
											active: pay === "card",
											onClick: () => setPay("card"),
											icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "h-4 w-4" }),
											label: "Card"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PayChoice, {
											id: "upi",
											active: pay === "upi",
											onClick: () => setPay("upi"),
											icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wallet, { className: "h-4 w-4" }),
											label: "UPI"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PayChoice, {
											id: "cod",
											active: pay === "cod",
											onClick: () => setPay("cod"),
											icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IndianRupee, { className: "h-4 w-4" }),
											label: "Cash on Delivery"
										})
									]
								}),
								pay === "card" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 space-y-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Name on card",
											value: form.cardName,
											onChange: update("cardName"),
											required: true
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
											label: "Card number",
											value: form.cardNumber,
											onChange: update("cardNumber"),
											required: true,
											placeholder: "1234 5678 9012 3456",
											inputMode: "numeric",
											maxLength: 19
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-2 gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "Expiry (MM/YY)",
												value: form.expiry,
												onChange: update("expiry"),
												required: true,
												placeholder: "08/29",
												maxLength: 5
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
												label: "CVV",
												value: form.cvv,
												onChange: update("cvv"),
												required: true,
												placeholder: "123",
												inputMode: "numeric",
												maxLength: 4
											})]
										})
									]
								}),
								pay === "upi" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "UPI ID",
										value: form.upi,
										onChange: update("upi"),
										required: true,
										placeholder: "name@bank"
									})
								}),
								pay === "cod" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 rounded-2xl bg-[color:var(--beige)] px-4 py-3 text-sm text-[color:var(--organic-dark)]",
									children: "Pay in cash when your order arrives. A small handling fee may apply."
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "glass-card rounded-3xl p-6 h-fit lg:sticky lg:top-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-black",
							children: "Order Summary"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 space-y-3 max-h-72 overflow-auto pr-1",
							children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: `relative h-14 w-14 shrink-0 overflow-hidden rounded-xl ${i.tint}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: i.img,
											alt: i.name,
											className: "absolute inset-0 h-full w-full object-cover"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute -top-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-[color:var(--organic)] text-[10px] font-bold text-white",
											children: i.qty
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0 flex-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-sm font-bold truncate",
											children: i.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "text-[11px] text-muted-foreground",
											children: i.age
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "text-sm font-bold",
										children: ["₹", i.price * i.qty]
									})
								]
							}, i.slug))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-5 space-y-2 text-sm border-t border-[color:var(--border)] pt-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Subtotal",
									value: `₹${subtotal}`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: "Shipping",
									value: shipping === 0 ? "Free" : `₹${shipping}`
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
									label: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-base font-extrabold",
										children: "Total"
									}),
									value: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-display text-xl font-black",
										children: ["₹", total]
									})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							disabled: submitting,
							className: "mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--organic)] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_25px_-10px_color-mix(in_oklab,var(--organic)_70%,transparent)] hover:translate-y-[-1px] transition disabled:opacity-70",
							children: submitting ? "Processing…" : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								"Pay ₹",
								total,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-4 w-4" })
							] })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-4 grid grid-cols-3 gap-2 text-[10px]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trust, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-3.5 w-3.5" }),
									label: "Secure"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trust, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "h-3.5 w-3.5" }),
									label: "Fast Ship"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trust, {
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-3.5 w-3.5" }),
									label: "Encrypted"
								})
							]
						})
					]
				})]
			})
		]
	});
}
function Section({ title, step, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass-card rounded-3xl p-5 sm:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-8 w-8 place-items-center rounded-full bg-[color:var(--organic)] text-white text-sm font-bold",
				children: step
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-lg font-extrabold",
				children: title
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 space-y-3",
			children
		})]
	});
}
function Field({ label, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs font-bold text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			...props,
			className: "mt-1 w-full rounded-xl border-2 border-[color:var(--border)] bg-white px-4 py-2.5 text-sm focus:border-[color:var(--organic)] focus:outline-none transition"
		})]
	});
}
function PayChoice({ id, active, onClick, icon, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		id,
		onClick,
		className: `flex items-center justify-center gap-2 rounded-2xl border-2 px-3 py-3 text-sm font-bold transition ${active ? "border-[color:var(--organic)] bg-[color:var(--organic)]/10 text-[color:var(--organic-dark)]" : "border-[color:var(--border)] bg-white hover:border-[color:var(--organic)]/50"}`,
		children: [
			icon,
			" ",
			label
		]
	});
}
function Row({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: value })]
	});
}
function Trust({ icon, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-center gap-1 rounded-full bg-white/70 px-2 py-1.5 font-semibold text-[color:var(--organic-dark)]",
		children: [
			icon,
			" ",
			label
		]
	});
}
//#endregion
export { CheckoutPage as component };
