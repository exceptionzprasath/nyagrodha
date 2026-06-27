import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2, Package, Mail, ArrowRight } from "lucide-react";
import { z } from "zod";

export const Route = createFileRoute("/checkout/success")({
  validateSearch: z.object({ o: z.string().optional() }),
  head: () => ({
    meta: [
      { title: "Order Confirmed — Nyagrodha Apparels" },
      { name: "description", content: "Thank you for your order." },
    ],
  }),
  component: SuccessPage,
});

function SuccessPage() {
  const { o } = Route.useSearch();
  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("nyagrodha-last-order");
      if (raw) setOrder(JSON.parse(raw));
    } catch {}
  }, []);

  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <div className="glass-card rounded-[2rem] p-8 sm:p-10 text-center">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[color:var(--mint)] animate-pop-in">
          <CheckCircle2 className="h-10 w-10 text-[color:var(--organic-dark)]" />
        </div>
        <h1 className="mt-6 font-display text-3xl sm:text-4xl font-black">Order confirmed!</h1>
        <p className="mt-2 text-muted-foreground">
          Thank you{order?.name ? `, ${order.name}` : ""}. Your little one's organic essentials are on the way.
        </p>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold">
          <Package className="h-4 w-4 text-[color:var(--organic)]" /> Order #{o ?? order?.orderId ?? "—"}
        </div>

        {order && (
          <div className="mt-6 text-left rounded-2xl bg-white/70 p-5">
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Shipping to</div>
            <div className="mt-1 text-sm">{order.address}</div>
            <div className="mt-4 flex items-center justify-between border-t border-[color:var(--border)] pt-3">
              <span className="text-sm text-muted-foreground">Total paid</span>
              <span className="font-display text-xl font-black">₹{order.total}</span>
            </div>
          </div>
        )}

        <p className="mt-6 text-sm text-muted-foreground inline-flex items-center gap-1.5">
          <Mail className="h-4 w-4" /> A confirmation email is on its way.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link to="/shop" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--organic)] px-6 py-3 text-sm font-bold text-white">
            Continue shopping <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 rounded-full border-2 border-[color:var(--organic)] bg-white px-6 py-3 text-sm font-bold text-[color:var(--organic-dark)]">
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}
