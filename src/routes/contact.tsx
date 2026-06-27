import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { PageHero } from "./shop";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Nyagrodha Apparels" },
      { name: "description", content: "Get in touch with Nyagrodha Apparels — phone, email and address in Erode, Tamil Nadu." },
      { property: "og:title", content: "Contact Us — Nyagrodha Apparels" },
      { property: "og:description", content: "Questions, wholesale enquiries or just a hello — we'd love to hear from you." },
    ],
  }),
  component: ContactPage,
});

const channels = [
  { Icon: Phone, title: "Call us",      lines: ["+91 90429 14202", "+91 95008 50717", "+91 96007 57327"] },
  { Icon: Mail,  title: "Email",        lines: ["info.nyagrodha@gmail.com"] },
  { Icon: MapPin,title: "Visit",        lines: ["Erode, Tamil Nadu", "India"] },
  { Icon: Clock, title: "Hours",        lines: ["Mon – Sat", "10:00 AM – 7:00 PM IST"] },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="We'd love to hear from you"
        subtitle="Questions about a product, your order, or a wholesale partnership — we typically respond within one business day."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 grid lg:grid-cols-[1fr_1.4fr] gap-6">
        {/* Channels */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
          {channels.map(({ Icon, title, lines }) => (
            <div key={title} className="glass-card rounded-2xl p-5">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--mint)]">
                <Icon className="h-5 w-5 text-[color:var(--organic-dark)]" />
              </div>
              <div className="mt-3 font-display font-extrabold">{title}</div>
              <div className="mt-1 text-sm text-muted-foreground space-y-0.5">
                {lines.map((l) => <div key={l}>{l}</div>)}
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <form
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="glass-card rounded-[2rem] p-6 sm:p-8"
        >
          {sent ? (
            <div className="text-center py-12">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[color:var(--mint)]">
                <CheckCircle2 className="h-8 w-8 text-[color:var(--organic-dark)]" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-black">Message sent!</h3>
              <p className="mt-2 text-sm text-muted-foreground">We'll get back to you within one business day.</p>
            </div>
          ) : (
            <>
              <h3 className="font-display text-2xl font-black">Send us a message</h3>
              <div className="mt-5 grid sm:grid-cols-2 gap-4">
                <Field label="Name"  placeholder="Your name" />
                <Field label="Email" placeholder="you@example.com" type="email" />
                <Field label="Phone" placeholder="+91" />
                <Field label="Subject" placeholder="What's this about?" />
              </div>
              <label className="mt-4 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="How can we help?"
                className="mt-2 w-full rounded-2xl border-2 border-[color:var(--border)] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[color:var(--organic)]"
              />
              <button
                type="submit"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[color:var(--organic)] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_25px_-10px_color-mix(in_oklab,var(--organic)_70%,transparent)] hover:translate-y-[-1px] transition"
              >
                Send Message <Send className="h-4 w-4" />
              </button>
            </>
          )}
        </form>
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
