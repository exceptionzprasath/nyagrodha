import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ChevronLeft, ChevronRight, Cloud, Shield, Wind, HandHeart, Leaf, MapPin,
  Award, Sparkles, Scissors, Users, ArrowRight, Download, BadgePercent, FileText,
  Truck, Package, Quote, Star,
} from "lucide-react";

import hero from "@/assets/hero-scene.jpg";
import hero2 from "@/assets/hero-scene-2.jpg";
import hero3 from "@/assets/hero-scene-3.jpg";
import elephantHeart from "@/assets/elephant-heart.png";
import giraffeBoxes from "@/assets/giraffe-boxes.png";

import { categories, products } from "@/lib/catalog";
import { ProductCard } from "@/components/product-card";
import { CategoryCard } from "@/components/category-card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nyagrodha Apparels — Premium Organic Muslin Baby Clothing" },
      { name: "description", content: "Made with love, wrapped in organic comfort. Premium 100% organic muslin cotton baby clothing handcrafted in Erode, India." },
      { property: "og:title", content: "Nyagrodha Apparels — Premium Organic Muslin Baby Clothing" },
      { property: "og:description", content: "Premium 100% organic muslin cotton baby clothing. AZO-free, skin friendly, made in India." },
    ],
  }),
  component: Home,
});

const trustIcons = [
  { Icon: Cloud,     title: "100% Organic", sub: "Muslin Cotton",  tint: "bg-[color:var(--mint)]" },
  { Icon: Shield,    title: "AZO Free",     sub: "Safe for Babies",tint: "bg-[color:var(--sky)]"  },
  { Icon: Wind,      title: "Breathable",   sub: "for Comfort",    tint: "bg-[color:var(--mint)]" },
  { Icon: HandHeart, title: "Skin Friendly",sub: "Anti Rash",      tint: "bg-[color:var(--pink)]" },
  { Icon: Leaf,      title: "Eco Friendly", sub: "Sustainable",    tint: "bg-[color:var(--mint)]" },
  { Icon: MapPin,    title: "Made in India",sub: "Proudly Local",  tint: "bg-[color:var(--beige)]"},
];

const whyChoose = [
  { Icon: Award,    title: "Premium Quality",    sub: "Checked with care" },
  { Icon: Leaf,     title: "Hypoallergenic",     sub: "Safe & Gentle" },
  { Icon: Scissors, title: "Perfect Stitching",  sub: "Made to Last" },
  { Icon: Users,    title: "Trusted by Parents", sub: "Loved by 1000+ families" },
];

const wholesalePerks = [
  { Icon: BadgePercent, title: "Bulk Discounts", sub: "Best Wholesale Prices" },
  { Icon: Package,      title: "Low MOQ",        sub: "Easy to Start" },
  { Icon: FileText,     title: "GST Invoice",    sub: "Billing Support" },
  { Icon: Truck,        title: "Fast Delivery",  sub: "Pan India" },
];

const testimonials = [
  { name: "Priya R.", city: "Bengaluru", rating: 5, text: "The muslin is impossibly soft. My newborn slept the moment I put her in the Jabla. Quality is on par with imported brands." },
  { name: "Aravind K.", city: "Chennai", rating: 5, text: "Beautiful packaging, lovely prints, and the breathability is amazing for our humid weather. Will buy again and again." },
  { name: "Sneha M.", city: "Coimbatore", rating: 5, text: "Bought the gift set for a baby shower — everyone asked where it was from. Nyagrodha is now our go-to baby brand." },
];

const heroSlides = [
  { img: hero,  headline: ["Made with Love,", "Wrapped in", "Organic Comfort"], eyebrow: "New season is here" },
  { img: hero2, headline: ["Softer than", "a Cherry", "Blossom Breeze"], eyebrow: "Spring drop" },
  { img: hero3, headline: ["Sweet Dreams in", "Breathable", "Muslin Cotton"], eyebrow: "Nursery essentials" },
];

function Home() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 4500);
    return () => window.clearInterval(t);
  }, []);

  const current = heroSlides[slide];
  const go = (dir: number) => setSlide((s) => (s + dir + heroSlides.length) % heroSlides.length);

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 pt-6 sm:pt-10">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-[color:var(--beige)] via-[color:var(--cream)] to-[color:var(--mint)]/60 soft-shadow">
            <div className="pointer-events-none absolute -left-16 -top-10 h-56 w-56 rounded-full bg-[color:var(--mint)] blur-3xl opacity-60" />
            <div className="pointer-events-none absolute -right-16 -bottom-10 h-72 w-72 rounded-full bg-[color:var(--sky)] blur-3xl opacity-60" />

            <div className="relative grid lg:grid-cols-2 gap-6 px-6 sm:px-10 lg:px-14 py-10 lg:py-14">
              <div className="relative z-10 flex flex-col justify-center max-w-xl">
                <span key={`eye-${slide}`} className="chip bg-white/80 border-[color:var(--organic)]/30 text-[color:var(--organic-dark)] w-fit animate-pop-in">
                  <Sparkles className="h-3.5 w-3.5" /> {current.eyebrow}
                </span>
                <h1 key={`h-${slide}`} className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] font-black animate-pop-in">
                  {current.headline[0]}<br />
                  {current.headline[1]}<br />
                  <span className="text-[color:var(--organic-dark)]">{current.headline[2]}</span>
                </h1>
                <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-md">
                  Premium 100% Organic Muslin Cotton, crafted in Erode for your little ones.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Link to="/shop" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--organic)] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_25px_-10px_color-mix(in_oklab,var(--organic)_70%,transparent)] hover:translate-y-[-1px] transition">
                    Shop Now <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/wholesale" className="inline-flex items-center gap-2 rounded-full border-2 border-[color:var(--organic)] bg-white/70 px-5 py-3 text-sm font-bold text-[color:var(--organic-dark)] hover:bg-white transition">
                    <Users className="h-4 w-4" /> Become a Dealer
                  </Link>
                </div>
                <Link to="/shop" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--organic-dark)] hover:underline">
                  <Download className="h-4 w-4" /> Browse Catalogue
                </Link>
              </div>

              <div className="relative">
                <div className="relative mx-auto w-full max-w-[640px] aspect-[3/2] overflow-hidden rounded-3xl soft-shadow">
                  {heroSlides.map((s, i) => (
                    <img
                      key={i}
                      src={s.img}
                      alt="Happy baby with Pixar-style animal friends in organic muslin cotton"
                      width={1536}
                      height={1024}
                      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === slide ? "opacity-100" : "opacity-0"}`}
                    />
                  ))}
                </div>
                <div className="absolute right-2 sm:right-4 top-3 z-[2] hidden sm:flex h-20 w-20 lg:h-24 lg:w-24 flex-col items-center justify-center rounded-full bg-white/95 border-4 border-[color:var(--beige)] shadow-lg animate-float text-center">
                  <span className="font-display text-[13px] font-extrabold text-[color:var(--organic-dark)] leading-none">100%</span>
                  <span className="font-display text-[11px] font-extrabold text-[color:var(--organic-dark)]">Organic</span>
                  <span className="mt-0.5 text-[8px] font-semibold text-muted-foreground">Made in India</span>
                </div>
                <button onClick={() => go(-1)} className="absolute left-2 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/90 backdrop-blur soft-shadow hover:scale-105 transition" aria-label="Previous">
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button onClick={() => go(1)} className="absolute right-2 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/90 backdrop-blur soft-shadow hover:scale-105 transition" aria-label="Next">
                  <ChevronRight className="h-5 w-5" />
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {heroSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSlide(i)}
                      aria-label={`Slide ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all ${i === slide ? "w-6 bg-[color:var(--organic)]" : "w-1.5 bg-[color:var(--brand-brown)]/30 hover:bg-[color:var(--brand-brown)]/50"}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="relative px-4 sm:px-8 pb-6">
              <div className="glass-card rounded-2xl px-3 sm:px-6 py-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {trustIcons.map(({ Icon, title, sub, tint }) => (
                    <div key={title} className="flex items-center gap-3 min-w-0">
                      <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${tint}`}>
                        <Icon className="h-5 w-5 text-[color:var(--organic-dark)]" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-bold truncate">{title}</div>
                        <div className="text-[11px] text-muted-foreground truncate">{sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="relative mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <SectionTitle>Shop by Category</SectionTitle>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {categories.map((c, i) => (
            <CategoryCard key={c.slug} category={c} index={i} />
          ))}
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="relative mx-auto max-w-7xl px-4 pb-16 sm:pb-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionTitle className="!mb-0">Best Sellers</SectionTitle>
          <Link to="/shop" className="chip border-[color:var(--organic)]/30 text-[color:var(--organic-dark)]">
            View All Products <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.slice(0, 5).map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="mx-auto max-w-7xl px-4 pb-10">
        <div className="relative overflow-hidden rounded-[2rem] bg-[color:var(--mint)]/70 p-5 sm:p-8 soft-shadow">
          <div className="grid lg:grid-cols-[1.1fr_2fr] items-center gap-6">
            <div className="relative flex items-center gap-4">
              <img src={elephantHeart} alt="Caring baby elephant mascot" loading="lazy" className="h-36 w-36 sm:h-44 sm:w-44 shrink-0 animate-float" />
              <div className="min-w-0">
                <h2 className="font-display text-2xl sm:text-3xl font-black leading-tight">Why Choose<br />Nyagrodha?</h2>
                <p className="mt-2 text-sm text-muted-foreground">We care for your baby like you do.</p>
                <Link to="/about" className="mt-3 inline-flex items-center gap-2 rounded-full bg-[color:var(--organic)] px-5 py-2.5 text-xs font-bold text-white">
                  Know More <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-4 sm:p-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {whyChoose.map(({ Icon, title, sub }) => (
                  <div key={title} className="text-center">
                    <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[color:var(--mint)]">
                      <Icon className="h-6 w-6 text-[color:var(--organic-dark)]" />
                    </div>
                    <div className="mt-3 font-display text-sm font-extrabold">{title}</div>
                    <div className="text-[11px] text-muted-foreground">{sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHOLESALE */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="relative overflow-hidden rounded-[2rem] bg-[color:var(--beige)] p-5 sm:p-8 soft-shadow">
          <div className="grid lg:grid-cols-[1.2fr_2fr] items-center gap-6">
            <div className="flex items-center gap-4">
              <img src={giraffeBoxes} alt="Wholesale delivery giraffe mascot" loading="lazy" className="h-40 w-40 sm:h-48 sm:w-48 shrink-0 animate-float" />
              <div className="min-w-0">
                <h2 className="font-display text-2xl sm:text-3xl font-black leading-tight">Join Our<br />Wholesale Family</h2>
                <p className="mt-2 text-sm text-muted-foreground">Great quality. Best prices. Timely delivery.</p>
                <Link to="/wholesale" className="mt-3 inline-flex items-center gap-2 rounded-full bg-[color:var(--organic)] px-5 py-2.5 text-xs font-bold text-white">
                  Become a Dealer Today <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {wholesalePerks.map(({ Icon, title, sub }) => (
                <div key={title} className="glass-card rounded-2xl px-4 py-4">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--mint)]">
                    <Icon className="h-5 w-5 text-[color:var(--organic-dark)]" />
                  </div>
                  <div className="mt-3 font-display text-sm font-extrabold leading-tight">{title}</div>
                  <div className="text-[11px] text-muted-foreground">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <SectionTitle>Loved by Parents</SectionTitle>
        <div className="mt-10 grid md:grid-cols-3 gap-4">
          {testimonials.map((t) => (
            <div key={t.name} className="glass-card rounded-3xl p-6 relative">
              <Quote className="h-7 w-7 text-[color:var(--organic)]/50" />
              <p className="mt-3 text-sm leading-relaxed">{t.text}</p>
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <div className="font-display text-sm font-extrabold">{t.name}</div>
                  <div className="text-[11px] text-muted-foreground">{t.city}</div>
                </div>
                <div className="flex">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <Leaf className="h-5 w-5 text-[color:var(--organic)] -scale-x-100" />
      <h2 className="font-display text-3xl sm:text-4xl font-black tracking-tight text-center">{children}</h2>
      <Leaf className="h-5 w-5 text-[color:var(--organic)]" />
    </div>
  );
}
