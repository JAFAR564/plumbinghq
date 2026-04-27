"use client";

import { useEffect, useRef, useState } from "react";
import { ShieldCheck, Award, Clock, Users, Star, ArrowRight } from "lucide-react";

const trustSignals = [
  {
    icon: ShieldCheck,
    value: "1 Year",
    label: "Work Warranty",
    detail: "Full 12-month guarantee on parts and labour",
    gradient: "from-emerald-500/15 via-emerald-900/10 to-transparent",
    iconBg: "bg-emerald-500/15 group-hover:bg-emerald-500/25",
    iconColor: "text-emerald-400",
    valueColor: "text-emerald-400",
    border: "border-emerald-500/15 hover:border-emerald-500/30",
    glow: "hover:shadow-[0_0_40px_rgba(16,185,129,0.1)]",
  },
  {
    icon: Award,
    value: "100%",
    label: "Certified & Insured",
    detail: "Licensed plumbers with comprehensive liability coverage",
    gradient: "from-blue-500/15 via-blue-900/10 to-transparent",
    iconBg: "bg-blue-500/15 group-hover:bg-blue-500/25",
    iconColor: "text-blue-400",
    valueColor: "text-blue-400",
    border: "border-blue-500/15 hover:border-blue-500/30",
    glow: "hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]",
  },
  {
    icon: Clock,
    value: "< 30",
    label: "Minute Response",
    detail: "Average emergency response across the Cape Winelands",
    gradient: "from-violet-500/15 via-violet-900/10 to-transparent",
    iconBg: "bg-violet-500/15 group-hover:bg-violet-500/25",
    iconColor: "text-violet-400",
    valueColor: "text-violet-400",
    border: "border-violet-500/15 hover:border-violet-500/30",
    glow: "hover:shadow-[0_0_40px_rgba(139,92,246,0.1)]",
  },
  {
    icon: Users,
    value: "2,400+",
    label: "Homes Served",
    detail: "Trusted across Stellenbosch, Paarl & Franschhoek since 2015",
    gradient: "from-cta-orange/15 via-orange-900/10 to-transparent",
    iconBg: "bg-cta-orange/15 group-hover:bg-cta-orange/25",
    iconColor: "text-cta-orange",
    valueColor: "text-cta-orange",
    border: "border-cta-orange/15 hover:border-cta-orange/30",
    glow: "hover:shadow-[0_0_40px_rgba(249,115,22,0.1)]",
  },
];

const transformations = [
  {
    before: "Ruptured geyser flooding ceiling at 11PM",
    after: "Replaced, tested, and cleaned up by midnight",
    metric: "< 2 hrs",
    customer: "Sarah M., Stellenbosch",
    rating: 5,
  },
  {
    before: "Recurring drain blockage every 3 months",
    after: "CCTV inspection + root cut — no blockage in 14 months",
    metric: "Permanent fix",
    customer: "Johan V., Paarl",
    rating: 5,
  },
  {
    before: "Hidden slab leak causing R4,200/month water bill",
    after: "Acoustic detection + 1-point repair — bill dropped to R680",
    metric: "84% savings",
    customer: "Anele K., Franschhoek",
    rating: 5,
  },
];

export function TrustBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="trust" className="relative px-4 py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#080810] to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(249,115,22,0.06),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.04),transparent_50%)]" />

      <div className="absolute left-1/2 top-0 h-24 w-px bg-gradient-to-b from-transparent via-cta-orange/20 to-transparent" />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`mb-5 inline-flex items-center gap-2 rounded-full border border-cta-orange/20 bg-cta-orange/[0.08] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cta-orange transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Why homeowners trust us
          </div>
          <h2
            className={`mx-auto max-w-lg font-[family-name:var(--font-jakarta)] font-extrabold leading-[1.1] tracking-tight text-white transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ fontSize: "var(--text-h2)" }}
          >
            Real fixes. Real warranty.
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
              No comeback jobs.
            </span>
          </h2>
        </div>

        {/* Trust Signal Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustSignals.map((signal, i) => (
            <div
              key={signal.label}
              className={`group relative rounded-2xl border ${signal.border} bg-gradient-to-br ${signal.gradient} p-6 sm:p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 ${signal.glow} overflow-hidden`}
              style={{
                transitionDelay: inView ? `${(i + 1) * 100}ms` : "0ms",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <div
                className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${signal.iconBg} transition-all duration-300 group-hover:scale-110`}
              >
                <signal.icon className={`h-6 w-6 ${signal.iconColor}`} />
              </div>

              <div className={`text-3xl font-extrabold font-[family-name:var(--font-jakarta)] ${signal.valueColor} mb-1`}>
                {signal.value}
              </div>
              <div className="text-base font-semibold text-white/90">{signal.label}</div>
              <p className="mt-2 text-sm leading-relaxed text-text-tertiary">
                {signal.detail}
              </p>

              <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-white/[0.02] to-transparent rounded-tr-2xl" />
            </div>
          ))}
        </div>

        {/* Before → After Section */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3
              className={`font-[family-name:var(--font-jakarta)] text-xl font-bold text-white transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Real results from real emergencies
            </h3>
            <p className="mt-2 text-sm text-text-tertiary">Verified customer outcomes</p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {transformations.map((t, i) => (
              <div
                key={t.before}
                className="group relative rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-transparent p-7 backdrop-blur-sm transition-all duration-500 hover:border-white/[0.12] hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.2)] overflow-hidden"
                style={{
                  transitionDelay: inView ? `${600 + i * 150}ms` : "0ms",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(20px)",
                }}
              >
                {/* Stars + Customer */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="h-4 w-4 text-amber-400 fill-amber-400"
                      />
                    ))}
                  </div>
                  <span className="text-xs text-text-muted">{t.customer}</span>
                </div>

                {/* Before */}
                <div className="mb-1 text-[10px] font-bold uppercase tracking-widest text-red-400/80">
                  Before
                </div>
                <p className="text-sm text-text-tertiary leading-relaxed">{t.before}</p>

                {/* Divider with metric */}
                <div className="my-5 flex items-center gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-red-500/20 to-cta-orange/20" />
                  <span className="rounded-full border border-cta-orange/20 bg-cta-orange/10 px-3.5 py-1 text-xs font-bold text-cta-orange flex items-center gap-1.5">
                    <ArrowRight className="h-3 w-3" />
                    {t.metric}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-l from-emerald-500/20 to-cta-orange/20" />
                </div>

                {/* After */}
                <div className="mb-1 text-[10px] font-bold uppercase tracking-widest text-emerald-400/80">
                  After
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">{t.after}</p>

                <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-white/[0.015] to-transparent rounded-tr-2xl" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
