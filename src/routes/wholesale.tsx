import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BadgePercent, FileText, Package, Truck, CheckCircle2, Send } from "lucide-react";
import giraffeBoxes from "@/assets/giraffe-boxes.png";
import { PageHero } from "./shop";

export const Route = createFileRoute("/wholesale")({
  head: () => ({
    meta: [
      { title: "Wholesale & Dealers — Nyagrodha Apparels" },
      { name: "description", content: "Become a Nyagrodha dealer. Low MOQ, bulk discounts, GST invoicing and Pan-India delivery." },
      { property: "og:title", content: "Wholesale & Dealers — Nyagrodha Apparels" },
      { property: "og:description", content: "Join 100+ retailers stocking premium organic baby clothing from Erode, Tamil Nadu." },
    ],
  }),
  component: WholesalePage,
});

const perks = [
  { Icon: BadgePercent, title: "Bulk Discounts", sub: "Tiered pricing from 50 units" },
  { Icon: Package,      title: "Low MOQ",        sub: "Start with just 25 pieces" },
  { Icon: FileText,     title: "GST Invoicing",  sub: "Full B2B documentation" },
  { Icon: Truck,        title: "Pan India Ship", sub: "Tracked dispatch in 48h" },
];

const steps = [
  { n: "01", title: "Apply", text: "Submit the dealer form — we'll respond within 24 hours." },
  { n: "02", title: "Onboarding", text: "Get your catalogue, pricing sheet and credit terms." },
  { n: "03", title: "Order", text: "Place your first order with a dedicated relationship manager." },
  { n: "04", title: "Grow", text: "Restock easily, access seasonal drops and co-marketing." },
];

function WholesalePage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <PageHero
        eyebrow="Wholesale"
        title="Stock India's softest organic baby brand"
        subtitle="Low MOQs, transparent pricing, and a partner-first wholesale program built for boutiques, baby stores and online sellers."
        crumbs={[{ label: "Home", to: "/" }, { label: "Wholesale" }]}
      />

      {/* Perks */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {perks.map(({ Icon, title, sub }) => (
            <div key={title} className="glass-card rounded-3xl p-5">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--mint)]">
                <Icon className="h-5 w-5 text-[color:var(--organic-dark)]" />
              </div>
              <div className="mt-4 font-display text-base font-extrabold">{title}</div>
              <div className="text-xs text-muted-foreground mt-1">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-4 pb-12">
        <div className="rounded-[2rem] bg-[color:var(--beige)] p-6 sm:p-10 soft-shadow">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-center">How partnerships work</h2>
          <p className="mt-2 text-center text-muted-foreground">Four simple steps to get your shelves stocked.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s) => (
              <div key={s.n} className="glass-card rounded-2xl p-5">
                <div className="font-display text-xs font-bold text-[color:var(--organic-dark)]">{s.n}</div>
                <div className="mt-1 font-display text-lg font-extrabold">{s.title}</div>
                <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6 items-stretch">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[color:var(--mint)] to-[color:var(--sky)] p-8 soft-shadow">
            <img src={giraffeBoxes} alt="" aria-hidden className="absolute right-2 bottom-0 h-56 w-auto animate-float" />
            <h3 className="font-display text-2xl font-black max-w-xs">Become a Nyagrodha Dealer</h3>
            <p className="mt-2 text-sm text-foreground/80 max-w-xs">
              Fill the form and our wholesale team will reach out within one business day.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              {["No franchise fees", "Free product catalogue", "Dedicated account manager", "Seasonal incentives"].map((t) => (
                <li key={t} className="flex items-center gap-2 font-semibold">
                  <CheckCircle2 className="h-4 w-4 text-[color:var(--organic-dark)]" /> {t}
                </li>
              ))}
            </ul>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="glass-card rounded-[2rem] p-6 sm:p-8"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[color:var(--mint)]">
                  <CheckCircle2 className="h-8 w-8 text-[color:var(--organic-dark)]" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-black">Application received!</h3>
                <p className="mt-2 text-sm text-muted-foreground">Our team will be in touch within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="font-display text-xl font-black">Dealer Application</h3>
                <div className="mt-5 grid sm:grid-cols-2 gap-4">
                  <Field label="Full name"  placeholder="Your name" />
                  <Field label="Business"   placeholder="Store / brand name" />
                  <Field label="Email"      placeholder="you@example.com" type="email" />
                  <Field label="Phone"      placeholder="+91" />
                  <Field label="City"       placeholder="City" />
                  <Field label="GSTIN"      placeholder="Optional" />
                </div>
                <label className="mt-4 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Tell us about your store
                </label>
                <textarea
                  className="mt-2 w-full rounded-2xl border-2 border-[color:var(--border)] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[color:var(--organic)]"
                  rows={4}
                  placeholder="Categories of interest, monthly volume, store type..."
                />
                <button
                  type="submit"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-[color:var(--organic)] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_25px_-10px_color-mix(in_oklab,var(--organic)_70%,transparent)] hover:translate-y-[-1px] transition"
                >
                  Submit Application <Send className="h-4 w-4" />
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder?: string; type?: string }) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border-2 border-[color:var(--border)] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[color:var(--organic)]"
      />
    </div>
  );
}
