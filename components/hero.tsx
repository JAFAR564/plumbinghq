import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck, Clock, Star, Zap } from "lucide-react";

const PHONE_NUMBER = "+27 21 330 5781";
const PHONE_HREF = "tel:+27213305781";

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden px-4 pt-24 pb-20">
      {/* ── Layered Background ── */}
      <div className="absolute inset-0 bg-[#050509]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.12),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(249,115,22,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent_70%)]" />

      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Vertical accent lines */}
      <div className="absolute left-[20%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.03] to-transparent hidden lg:block" />
      <div className="absolute right-[20%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/[0.03] to-transparent hidden lg:block" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* ── Left: Copy ── */}
        <div className="text-left">
          {/* Emergency tag */}
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-red-500/25 bg-red-500/[0.08] px-5 py-2 text-xs font-semibold uppercase tracking-widest text-red-400 animate-fade-up backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-400" />
            </span>
            24/7 Emergency Response
          </div>

          {/* Headline */}
          <h1
            className="font-[family-name:var(--font-jakarta)] font-extrabold leading-[1.05] tracking-tight text-white animate-fade-up stagger-1"
            style={{ fontSize: "clamp(2.75rem, 5.5vw + 1rem, 5rem)" }}
          >
            Burst pipe at 2AM?
            <br />
            <span className="bg-gradient-to-r from-cta-orange via-amber-400 to-orange-300 bg-clip-text text-transparent">
              We&apos;re there in 30.
            </span>
          </h1>

          {/* Proof point */}
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-text-secondary animate-fade-up stagger-2">
            Cape Winelands&apos; fastest emergency plumbing — drain unblocking,
            geyser repair, leak detection. Every job backed by our{" "}
            <span className="font-semibold text-white">
              1-year work warranty
            </span>
            .
          </p>

          {/* CTA group */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center animate-fade-up stagger-3">
            <Button size="xl" asChild>
              <a href={PHONE_HREF} className="gap-3 animate-glow-pulse">
                <Phone className="h-5 w-5" />
                Call Now — {PHONE_NUMBER}
              </a>
            </Button>
            <div className="flex items-center gap-2 text-sm text-text-tertiary">
              <Zap className="h-3.5 w-3.5 text-amber-400" />
              <span>
                Free call · A real plumber answers
              </span>
            </div>
          </div>

          {/* Trust anchors — glass cards */}
          <div className="mt-14 flex flex-wrap gap-3 animate-fade-up stagger-4">
            {[
              { icon: ShieldCheck, label: "1-Year Warranty", color: "text-emerald-400" },
              { icon: Clock, label: "Avg 30min Response", color: "text-blue-400" },
              { icon: Star, label: "4.9 ★ (127 reviews)", color: "text-amber-400" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-2.5 text-sm backdrop-blur-sm"
              >
                <item.icon className={`h-4 w-4 ${item.color}`} />
                <span className="text-text-secondary">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Hero Image ── */}
        <div className="relative hidden lg:block animate-fade-up stagger-3">
          {/* Glow behind image */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-cta-orange/10 via-transparent to-trust-indigo/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-surface-elevated shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-plumber.png"
              alt="Professional PlumbingHQ plumber repairing copper pipes in a modern Cape Winelands home"
              className="h-[560px] w-full object-cover"
            />
            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050509] via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050509]/40 to-transparent" />

            {/* Floating stat card */}
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/[0.08] bg-[#050509]/80 backdrop-blur-xl p-5">
              <div className="grid grid-cols-3 divide-x divide-white/[0.06]">
                {[
                  { label: "Response", value: "< 30 min", color: "text-emerald-400" },
                  { label: "Jobs Done", value: "2,400+", color: "text-white" },
                  { label: "Warranty", value: "1 Year", color: "text-cta-orange" },
                ].map((stat) => (
                  <div key={stat.label} className="px-4 text-center">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-text-muted mb-1">
                      {stat.label}
                    </p>
                    <p className={`text-xl font-bold font-[family-name:var(--font-jakarta)] ${stat.color}`}>
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
