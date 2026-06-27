import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Heart, Leaf, MapPin, Scissors, Sparkles, Users, ArrowRight } from "lucide-react";
import elephantHeart from "@/assets/elephant-heart.png";
import catGiraffe from "@/assets/cat-giraffe.png";
import { PageHero } from "./shop";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Nyagrodha Apparels" },
      { name: "description", content: "From Erode, Tamil Nadu. The story behind Nyagrodha — a family making the softest organic muslin clothing for babies." },
      { property: "og:title", content: "Our Story — Nyagrodha Apparels" },
      { property: "og:description", content: "We craft 100% organic muslin baby clothing with love, in Erode, India." },
    ],
  }),
  component: AboutPage,
});

const journey = [
  { Icon: Leaf,     title: "Organic Cotton Farms",  text: "We source long-staple cotton from certified organic farms." },
  { Icon: Sparkles, title: "Weaving & Dyeing",       text: "Loomed into airy muslin, then dyed with AZO-free prints." },
  { Icon: Scissors, title: "Cutting & Stitching",    text: "Hand-finished by skilled artisans in Erode, Tamil Nadu." },
  { Icon: Award,    title: "Quality Check",          text: "Every piece is inspected before it reaches your baby." },
];

const values = [
  { Icon: Heart,  title: "Made with love",  text: "We are parents too. Every garment is what we want for our own babies." },
  { Icon: Leaf,   title: "Gentle on earth", text: "Organic fibres, AZO-free dyes and minimal packaging." },
  { Icon: Users,  title: "Family-owned",    text: "A small, founder-led team building a brand parents can trust." },
  { Icon: MapPin, title: "Proudly Indian",  text: "Designed and made in Erode, Tamil Nadu — proudly local." },
];

function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="Our Story"
        title="A little brand with a big love for little ones"
        subtitle="Nyagrodha was born in a small workshop in Erode, Tamil Nadu — with a simple idea: make organic baby clothing the way we'd want for our own children."
        crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />

      {/* Story */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 items-center">
          <div className="relative rounded-[2rem] bg-[color:var(--mint)]/70 aspect-square overflow-hidden flex items-center justify-center">
            <img src={elephantHeart} alt="Nyagrodha mascot" className="h-3/4 w-auto animate-float" />
          </div>
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-black leading-tight">Hello, dear reader 👋</h2>
            <div className="mt-5 space-y-4 text-foreground/85 leading-relaxed">
              <p>We are Nyagrodha Apparels from Erode, Tamil Nadu. We craft pure, quality and comfortable baby clothing from 100% organic muslin cotton.</p>
              <p>Each product is crafted with love, care and eco-friendly fabrics — ensuring softness, baby safety and parents' trust.</p>
              <p>Our mission is simple: comfortable clothes for babies, and complete peace of mind for the people who love them.</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/shop" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--organic)] px-5 py-2.5 text-sm font-bold text-white">
                Shop the Collection <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/wholesale" className="inline-flex items-center gap-2 rounded-full border-2 border-[color:var(--organic)] bg-white px-5 py-2.5 text-sm font-bold text-[color:var(--organic-dark)]">
                Become a Dealer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="mx-auto max-w-7xl px-4 pb-12">
        <div className="rounded-[2rem] bg-[color:var(--beige)] p-6 sm:p-10 soft-shadow">
          <div className="text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-black">From farm to baby</h2>
            <p className="mt-2 text-muted-foreground">Every piece passes through these four caring hands.</p>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {journey.map(({ Icon, title, text }, i) => (
              <div key={title} className="glass-card rounded-2xl p-5 relative">
                <div className="absolute -top-3 -right-3 grid h-9 w-9 place-items-center rounded-full bg-[color:var(--organic)] text-white font-display font-extrabold text-sm">
                  {i + 1}
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--mint)]">
                  <Icon className="h-5 w-5 text-[color:var(--organic-dark)]" />
                </div>
                <h3 className="mt-4 font-display font-extrabold">{title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-6 items-center">
          <div className="relative">
            <img src={catGiraffe} alt="" aria-hidden className="mx-auto h-72 w-auto animate-float" />
          </div>
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-black">What we stand for</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {values.map(({ Icon, title, text }) => (
                <div key={title} className="glass-card rounded-2xl p-5">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--mint)]">
                    <Icon className="h-5 w-5 text-[color:var(--organic-dark)]" />
                  </div>
                  <h3 className="mt-3 font-display font-extrabold">{title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
