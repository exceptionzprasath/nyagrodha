import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { CreditCard, Lock, ShieldCheck, Truck, ArrowLeft, Wallet, IndianRupee } from "lucide-react";
import { useCart } from "@/lib/cart-context";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout — Nyagrodha Apparels" },
      { name: "description", content: "Secure checkout for your organic baby clothing order." },
    ],
  }),
  component: CheckoutPage,
});

type PayMethod = "card" | "upi" | "cod";

function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const navigate = useNavigate();
  const shipping = subtotal === 0 ? 0 : subtotal > 999 ? 0 : 79;
  const total = subtotal + shipping;

  const [pay, setPay] = useState<PayMethod>("card");
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "", firstName: "", lastName: "", phone: "",
    address: "", city: "", state: "", pincode: "",
    cardName: "", cardNumber: "", expiry: "", cvv: "", upi: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    setSubmitting(true);
    const orderId = `NYA-${Date.now().toString().slice(-8)}`;
    // simulate processing
    await new Promise((r) => setTimeout(r, 1400));
    try {
      sessionStorage.setItem("nyagrodha-last-order", JSON.stringify({
        orderId, total, items, email: form.email, name: `${form.firstName} ${form.lastName}`.trim(),
        address: `${form.address}, ${form.city}, ${form.state} ${form.pincode}`, method: pay, at: new Date().toISOString(),
      }));
    } catch {}
    clear();
    setSubmitting(false);
    navigate({ to: "/checkout/success", search: { o: orderId } });
  };

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <h1 className="font-display text-3xl font-black">Your bag is empty</h1>
        <p className="mt-2 text-muted-foreground">Add a few pieces before checking out.</p>
        <Link to="/shop" className="mt-6 inline-flex rounded-full bg-[color:var(--organic)] px-5 py-2.5 text-sm font-bold text-white">Browse Shop</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 pt-8 pb-16">
      <Link to="/cart" className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-[color:var(--organic-dark)]">
        <ArrowLeft className="h-4 w-4" /> Back to cart
      </Link>
      <h1 className="mt-3 font-display text-3xl sm:text-4xl font-black">Secure Checkout</h1>
      <p className="mt-1 text-sm text-muted-foreground inline-flex items-center gap-1.5">
        <Lock className="h-3.5 w-3.5" /> 256-bit encrypted payment
      </p>

      <form onSubmit={onSubmit} className="mt-8 grid lg:grid-cols-[1.5fr_1fr] gap-6">
        <div className="space-y-6">
          {/* Contact */}
          <Section title="Contact information" step={1}>
            <Field label="Email" value={form.email} onChange={update("email")} type="email" required placeholder="you@email.com" />
            <div className="grid sm:grid-cols-2 gap-3">
              <Field label="First name" value={form.firstName} onChange={update("firstName")} required />
              <Field label="Last name" value={form.lastName} onChange={update("lastName")} required />
            </div>
            <Field label="Phone" value={form.phone} onChange={update("phone")} type="tel" required placeholder="+91 9876543210" />
          </Section>

          {/* Shipping */}
          <Section title="Shipping address" step={2}>
            <Field label="Street address" value={form.address} onChange={update("address")} required />
            <div className="grid sm:grid-cols-3 gap-3">
              <Field label="City" value={form.city} onChange={update("city")} required />
              <Field label="State" value={form.state} onChange={update("state")} required />
              <Field label="PIN code" value={form.pincode} onChange={update("pincode")} required />
            </div>
          </Section>

          {/* Payment */}
          <Section title="Payment method" step={3}>
            <div className="grid sm:grid-cols-3 gap-2">
              <PayChoice id="card" active={pay === "card"} onClick={() => setPay("card")} icon={<CreditCard className="h-4 w-4" />} label="Card" />
              <PayChoice id="upi" active={pay === "upi"} onClick={() => setPay("upi")} icon={<Wallet className="h-4 w-4" />} label="UPI" />
              <PayChoice id="cod" active={pay === "cod"} onClick={() => setPay("cod")} icon={<IndianRupee className="h-4 w-4" />} label="Cash on Delivery" />
            </div>

            {pay === "card" && (
              <div className="mt-4 space-y-3">
                <Field label="Name on card" value={form.cardName} onChange={update("cardName")} required />
                <Field label="Card number" value={form.cardNumber} onChange={update("cardNumber")} required placeholder="1234 5678 9012 3456" inputMode="numeric" maxLength={19} />
                <div className="grid grid-cols-2 gap-3">
                  <Field label="Expiry (MM/YY)" value={form.expiry} onChange={update("expiry")} required placeholder="08/29" maxLength={5} />
                  <Field label="CVV" value={form.cvv} onChange={update("cvv")} required placeholder="123" inputMode="numeric" maxLength={4} />
                </div>
              </div>
            )}
            {pay === "upi" && (
              <div className="mt-4">
                <Field label="UPI ID" value={form.upi} onChange={update("upi")} required placeholder="name@bank" />
              </div>
            )}
            {pay === "cod" && (
              <p className="mt-4 rounded-2xl bg-[color:var(--beige)] px-4 py-3 text-sm text-[color:var(--organic-dark)]">
                Pay in cash when your order arrives. A small handling fee may apply.
              </p>
            )}
          </Section>
        </div>

        {/* Summary */}
        <aside className="glass-card rounded-3xl p-6 h-fit lg:sticky lg:top-24">
          <h3 className="font-display text-xl font-black">Order Summary</h3>
          <ul className="mt-5 space-y-3 max-h-72 overflow-auto pr-1">
            {items.map((i) => (
              <li key={i.slug} className="flex items-center gap-3">
                <div className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-xl ${i.tint}`}>
                  <img src={i.img} alt={i.name} className="absolute inset-0 h-full w-full object-cover" />
                  <span className="absolute -top-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-[color:var(--organic)] text-[10px] font-bold text-white">{i.qty}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-bold truncate">{i.name}</div>
                  <div className="text-[11px] text-muted-foreground">{i.age}</div>
                </div>
                <div className="text-sm font-bold">₹{i.price * i.qty}</div>
              </li>
            ))}
          </ul>
          <dl className="mt-5 space-y-2 text-sm border-t border-[color:var(--border)] pt-4">
            <Row label="Subtotal" value={`₹${subtotal}`} />
            <Row label="Shipping" value={shipping === 0 ? "Free" : `₹${shipping}`} />
            <Row label={<span className="font-display text-base font-extrabold">Total</span>}
                 value={<span className="font-display text-xl font-black">₹{total}</span>} />
          </dl>

          <button
            type="submit"
            disabled={submitting}
            className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--organic)] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_25px_-10px_color-mix(in_oklab,var(--organic)_70%,transparent)] hover:translate-y-[-1px] transition disabled:opacity-70"
          >
            {submitting ? "Processing…" : <>Pay ₹{total} <Lock className="h-4 w-4" /></>}
          </button>

          <div className="mt-4 grid grid-cols-3 gap-2 text-[10px]">
            <Trust icon={<ShieldCheck className="h-3.5 w-3.5" />} label="Secure" />
            <Trust icon={<Truck className="h-3.5 w-3.5" />} label="Fast Ship" />
            <Trust icon={<Lock className="h-3.5 w-3.5" />} label="Encrypted" />
          </div>
        </aside>
      </form>
    </div>
  );
}

function Section({ title, step, children }: { title: string; step: number; children: React.ReactNode }) {
  return (
    <div className="glass-card rounded-3xl p-5 sm:p-6">
      <div className="flex items-center gap-3">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-[color:var(--organic)] text-white text-sm font-bold">{step}</span>
        <h2 className="font-display text-lg font-extrabold">{title}</h2>
      </div>
      <div className="mt-4 space-y-3">{children}</div>
    </div>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs font-bold text-muted-foreground">{label}</span>
      <input
        {...props}
        className="mt-1 w-full rounded-xl border-2 border-[color:var(--border)] bg-white px-4 py-2.5 text-sm focus:border-[color:var(--organic)] focus:outline-none transition"
      />
    </label>
  );
}

function PayChoice({ id, active, onClick, icon, label }: { id: string; active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) {
  return (
    <button
      type="button"
      id={id}
      onClick={onClick}
      className={`flex items-center justify-center gap-2 rounded-2xl border-2 px-3 py-3 text-sm font-bold transition ${
        active
          ? "border-[color:var(--organic)] bg-[color:var(--organic)]/10 text-[color:var(--organic-dark)]"
          : "border-[color:var(--border)] bg-white hover:border-[color:var(--organic)]/50"
      }`}
    >
      {icon} {label}
    </button>
  );
}

function Row({ label, value }: { label: React.ReactNode; value: React.ReactNode }) {
  return <div className="flex items-center justify-between"><dt className="text-muted-foreground">{label}</dt><dd>{value}</dd></div>;
}

function Trust({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center justify-center gap-1 rounded-full bg-white/70 px-2 py-1.5 font-semibold text-[color:var(--organic-dark)]">
      {icon} {label}
    </div>
  );
}
