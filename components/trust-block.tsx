"use client";

import { useEffect, useRef, useState } from "react";
import { ShieldCheck, Award, Clock, Users, Star } from "lucide-react";

const trustSignals = [
  {
    icon: ShieldCheck,
    label: "1-Year Work Warranty",
    detail: "Every job backed by a full 12-month guarantee on parts and labour",
  },
  {
    icon: Award,
    label: "Certified & Insured",
    detail: "Licensed plumbers with comprehensive liability coverage",
  },
  {
    icon: Clock,
    label: "Under 30min Response",
    detail: "Average emergency response time across the Cape Winelands",
  },
  {
    icon: Users,
    label: "2,400+ Homes Served",
    detail: "Trusted by homeowners across Stellenbosch, Paarl & Franschhoek since 2015",
  },
];

const transformations = [
  {
    before: "Ruptured geyser flooding ceiling at 11PM",
    after: "Replaced, tested, and cleaned up by midnight",
    metric: "< 2 hrs",
    rating: 5,
  },
  {
    before: "Recurring drain blockage every 3 months",
    after: "CCTV inspection + root cut — no blockage in 14 months",
    metric: "Permanent fix",
    rating: 5,
  },
  {
    before: "Hidden slab leak causing R4,200/month water bill",
    after: "Acoustic detection + 1-point repair — bill dropped to R680",
    metric: "84% savings",
    rating: 5,
  },
];

export function TrustBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="trust" className="relative px-4 py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0C0E18] to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(30,58,95,0.1),transparent_60%)]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl">
        <div
          className={`mb-4 text-sm font-semibold uppercase tracking-widest text-cta-orange/80 transition-all duration-600 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Why homeowners trust us
        </div>
        <h2
          className={`max-w-lg font-[family-name:var(--font-jakarta)] font-bold leading-tight tracking-tight text-white transition-all duration-600 delay-100 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ fontSize: "var(--text-h2)" }}
        >
          Real fixes. Real warranty.
          <br />
          <span className="text-text-tertiary">No comeback jobs.</span>
        </h2>

        {/* Trust Signal Grid */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustSignals.map((signal, i) => (
            <div
              key={signal.label}
              className="group rounded-2xl border border-border-default bg-surface-glass p-6 backdrop-blur-sm transition-all duration-300 hover:border-border-hover hover:bg-white/[0.05] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
              style={{
                transitionDelay: inView ? `${(i + 1) * 100}ms` : "0ms",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(16px)",
              }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cta-orange/10 transition-all group-hover:bg-cta-orange/15 group-hover:shadow-[0_0_16px_rgba(249,115,22,0.1)]">
                <signal.icon className="h-5 w-5 text-cta-orange" />
              </div>
              <div className="text-base font-semibold text-white">{signal.label}</div>
              <p className="mt-2 text-sm leading-relaxed text-text-tertiary">{signal.detail}</p>
            </div>
          ))}
        </div>

        {/* Before → After Transformations */}
        <div className="mt-20">
          <h3
            className={`mb-10 font-[family-name:var(--font-jakarta)] text-lg font-semibold text-text-secondary transition-all duration-600 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Real results from real emergencies
          </h3>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {transformations.map((t, i) => (
              <div
                key={t.before}
                className="group rounded-2xl border border-border-default bg-surface-glass p-6 backdrop-blur-sm transition-all duration-300 hover:border-border-hover"
                style={{
                  transitionDelay: inView ? `${600 + i * 150}ms` : "0ms",
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(16px)",
                }}
              >
                {/* Star Rating */}
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-red-400/70">
                  Before
                </div>
                <p className="text-sm text-text-tertiary">{t.before}</p>

                <div className="my-4 flex items-center gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-red-500/20 to-cta-orange/30" />
                  <span className="rounded-full border border-cta-orange/20 bg-cta-orange/10 px-3 py-1 text-xs font-bold text-cta-orange">
                    {t.metric}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-l from-red-500/20 to-cta-orange/30" />
                </div>

                <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-success-green/70">
                  After
                </div>
                <p className="text-sm text-text-secondary">{t.after}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
