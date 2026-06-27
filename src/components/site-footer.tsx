import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Lock, RotateCcw, Headphones, Truck, Instagram, Facebook, Youtube } from "lucide-react";
import logo from "@/assets/nyagrodha-logo.png";

const footerStrip = [
  { Icon: Lock,       title: "Secure Payment", sub: "100% Safe & Secure" },
  { Icon: RotateCcw,  title: "Easy Returns",   sub: "Hassle Free Returns" },
  { Icon: Headphones, title: "24/7 Support",   sub: "We're Here to Help" },
  { Icon: Truck,      title: "Track Order",    sub: "Real-time Tracking" },
];

export function SiteFooter() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-12 pt-6">
        <div className="glass-card rounded-2xl px-4 py-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {footerStrip.map(({ Icon, title, sub }) => (
              <div key={title} className="flex items-center gap-3 min-w-0">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[color:var(--mint)]">
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
      </section>

      <footer className="bg-[color:var(--organic-dark)] text-white/90">
        <div className="mx-auto max-w-7xl px-4 py-14 grid gap-10 md:grid-cols-4">
          <div>
            <div className="inline-flex items-center gap-3 rounded-2xl bg-white/95 p-2">
              <img src={logo} alt="Nyagrodha" className="h-10 w-auto" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              Babies, Kids Clothing & Accessories — crafted in Erode, Tamil Nadu
              with 100% organic muslin cotton, AZO-free dyes and natural fastenings.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20 transition"><Instagram className="h-4 w-4" /></a>
              <a href="#" aria-label="Facebook"  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20 transition"><Facebook className="h-4 w-4" /></a>
              <a href="#" aria-label="YouTube"   className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-white/20 transition"><Youtube className="h-4 w-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-display text-base font-bold">Shop</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/category/$slug" params={{ slug: "jablas" }} className="hover:text-white">Jablas</Link></li>
              <li><Link to="/category/$slug" params={{ slug: "frocks" }} className="hover:text-white">Frocks</Link></li>
              <li><Link to="/category/$slug" params={{ slug: "co-ord-sets" }} className="hover:text-white">Co-ord Sets</Link></li>
              <li><Link to="/category/$slug" params={{ slug: "swaddles" }} className="hover:text-white">Swaddles</Link></li>
              <li><Link to="/shop" className="hover:text-white">View All</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display text-base font-bold">Company</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/wholesale" className="hover:text-white">Wholesale</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              <li><Link to="/wishlist" className="hover:text-white">Wishlist</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-display text-base font-bold">Get in touch</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 90429 14202</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 95008 50717</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info.nyagrodha@gmail.com</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Erode, Tamil Nadu, India</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-white/70 flex flex-wrap items-center justify-between gap-3">
            <span>© {new Date().getFullYear()} Nyagrodha Apparels. All rights reserved.</span>
            <span>Made with 💚 in India</span>
          </div>
        </div>
      </footer>
    </>
  );
}
