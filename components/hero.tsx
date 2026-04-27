import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck, Clock, Star } from "lucide-react";

const PHONE_NUMBER = "+27 21 330 5781";
const PHONE_HREF = "tel:+27213305781";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden px-4 pt-24 pb-20">
      {/* ── Background Layers ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#07070D] via-[#0A0E1A] to-[#0E0E18]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,58,95,0.2),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(249,115,22,0.06),transparent_50%)]" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* ── Left: Copy ── */}
        <div className="text-left">
          {/* Emergency tag */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emergency-red/20 bg-emergency-red/[0.08] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-red-400 animate-fade-up">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-400" />
            </span>
            24/7 Emergency Response
          </div>

          {/* Headline */}
          <h1
            className="font-[family-name:var(--font-jakarta)] font-extrabold leading-[1.08] tracking-tight text-white animate-fade-up stagger-1"
            style={{ fontSize: "var(--text-hero)" }}
          >
            Burst pipe at 2AM?
            <br />
            <span className="bg-gradient-to-r from-cta-orange via-orange-400 to-amber-400 bg-clip-text text-transparent">
              We&apos;re there in 30.
            </span>
          </h1>

          {/* Proof point */}
          <p
            className="mt-6 max-w-lg text-text-secondary leading-relaxed animate-fade-up stagger-2"
            style={{ fontSize: "var(--text-body)" }}
          >
            Cape Winelands&apos; fastest emergency plumbing — drain unblocking, geyser repair, leak detection. Every job backed by our{" "}
            <span className="font-semibold text-white">1-year work warranty</span>.
          </p>

          {/* Single Dominant CTA */}
          <div className="mt-8 animate-fade-up stagger-3">
            <Button size="xl" asChild>
              <a href={PHONE_HREF} className="gap-3 animate-glow-pulse">
                <Phone className="h-5 w-5" />
                Call Now — {PHONE_NUMBER}
              </a>
            </Button>
            <p className="mt-3 text-xs text-text-muted">
              Free call · No obligation · A real plumber answers
            </p>
          </div>

          {/* Trust anchors */}
          <div className="mt-10 flex flex-wrap items-center gap-5 text-sm animate-fade-up stagger-4">
            <span className="flex items-center gap-2 text-text-secondary">
              <ShieldCheck className="h-4 w-4 text-cta-orange" />
              1-Year Warranty
            </span>
            <span className="flex items-center gap-2 text-text-secondary">
              <Clock className="h-4 w-4 text-cta-orange" />
              Avg 30min Response
            </span>
            <span className="flex items-center gap-2 text-text-secondary">
              <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
              4.9 Rating (127 reviews)
            </span>
          </div>
        </div>

        {/* ── Right: Hero Image ── */}
        <div className="relative hidden lg:block animate-fade-up stagger-3">
          <div className="relative overflow-hidden rounded-3xl border border-border-default bg-surface-elevated shadow-[0_8px_40px_rgba(0,0,0,0.5)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-plumber.png"
              alt="Professional PlumbingHQ plumber repairing copper pipes in a modern Cape Winelands home"
              className="h-[520px] w-full object-cover"
            />
            {/* Gradient overlay for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

            {/* Floating stat card */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl border border-border-default bg-background/70 backdrop-blur-lg px-5 py-4">
              <div>
                <p className="text-xs font-medium text-text-tertiary uppercase tracking-wider">Response Time</p>
                <p className="text-2xl font-bold text-white font-[family-name:var(--font-jakarta)]">&lt; 30 min</p>
              </div>
              <div className="h-10 w-px bg-border-default" />
              <div>
                <p className="text-xs font-medium text-text-tertiary uppercase tracking-wider">Jobs Completed</p>
                <p className="text-2xl font-bold text-white font-[family-name:var(--font-jakarta)]">2,400+</p>
              </div>
              <div className="h-10 w-px bg-border-default" />
              <div>
                <p className="text-xs font-medium text-text-tertiary uppercase tracking-wider">Warranty</p>
                <p className="text-2xl font-bold text-cta-orange font-[family-name:var(--font-jakarta)]">1 Year</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
