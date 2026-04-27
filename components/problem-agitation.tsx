"use client";

import { useEffect, useRef, useState } from "react";
import { AlertTriangle, Droplets, TrendingDown, Clock } from "lucide-react";

const painPoints = [
  {
    icon: Droplets,
    stat: "R15,000+",
    label: "Average water damage cost",
    detail: "from an untreated burst pipe",
    color: "from-red-500/20 to-red-900/20",
    iconBg: "bg-red-500/15",
    iconColor: "text-red-400",
    borderColor: "border-red-500/20 hover:border-red-500/40",
    glowColor: "hover:shadow-[0_0_40px_rgba(239,68,68,0.12)]",
  },
  {
    icon: Clock,
    stat: "10L / min",
    label: "Water wasted every minute",
    detail: "from a single leaking pipe",
    color: "from-orange-500/20 to-red-900/20",
    iconBg: "bg-orange-500/15",
    iconColor: "text-orange-400",
    borderColor: "border-orange-500/20 hover:border-orange-500/40",
    glowColor: "hover:shadow-[0_0_40px_rgba(249,115,22,0.12)]",
  },
  {
    icon: TrendingDown,
    stat: "23%",
    label: "Property value lost",
    detail: "from water damage & mould",
    color: "from-rose-500/20 to-red-900/20",
    iconBg: "bg-rose-500/15",
    iconColor: "text-rose-400",
    borderColor: "border-rose-500/20 hover:border-rose-500/40",
    glowColor: "hover:shadow-[0_0_40px_rgba(244,63,94,0.12)]",
  },
  {
    icon: AlertTriangle,
    stat: "4 in 5",
    label: "Homeowners wait too long",
    detail: "before calling a plumber",
    color: "from-amber-500/20 to-red-900/20",
    iconBg: "bg-amber-500/15",
    iconColor: "text-amber-400",
    borderColor: "border-amber-500/20 hover:border-amber-500/40",
    glowColor: "hover:shadow-[0_0_40px_rgba(245,158,11,0.12)]",
  },
];

export function ProblemAgitation() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative px-4 py-28 sm:py-36 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0C0810] to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(239,68,68,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(249,115,22,0.05),transparent_50%)]" />

      {/* Decorative accent line */}
      <div className="absolute left-1/2 top-0 h-32 w-px bg-gradient-to-b from-transparent via-red-500/30 to-transparent" />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`mb-5 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/[0.08] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-red-400 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-400" />
            </span>
            Don&apos;t wait until it&apos;s too late
          </div>

          <h2
            className={`mx-auto max-w-2xl font-[family-name:var(--font-jakarta)] font-extrabold leading-[1.1] tracking-tight text-white transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ fontSize: "var(--text-h2)" }}
          >
            Every minute you wait,
            <br />
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-orange-500 bg-clip-text text-transparent">
              water damage doubles.
            </span>
          </h2>
          <p
            className={`mx-auto mt-5 max-w-lg text-text-secondary transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ fontSize: "var(--text-body)" }}
          >
            What starts as a small drip can become a catastrophic failure
            overnight. The numbers don&apos;t lie.
          </p>
        </div>

        {/* Stats Grid — 2x2 with visual weight */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {painPoints.map((point, i) => (
            <div
              key={point.label}
              className={`group relative rounded-2xl border ${point.borderColor} bg-gradient-to-br ${point.color} p-7 sm:p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 ${point.glowColor}`}
              style={{
                transitionDelay: inView ? `${(i + 1) * 120}ms` : "0ms",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
              }}
            >
              {/* Icon */}
              <div
                className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${point.iconBg} transition-all duration-300 group-hover:scale-110`}
              >
                <point.icon className={`h-6 w-6 ${point.iconColor}`} />
              </div>

              {/* Stat */}
              <div
                className={`text-4xl sm:text-5xl font-extrabold font-[family-name:var(--font-jakarta)] ${point.iconColor} mb-2`}
              >
                {point.stat}
              </div>

              {/* Label */}
              <div className="text-base font-semibold text-white/90">
                {point.label}
              </div>
              <p className="mt-1 text-sm text-text-tertiary">{point.detail}</p>

              {/* Subtle corner accent */}
              <div className="absolute top-0 right-0 h-20 w-20 bg-gradient-to-bl from-white/[0.02] to-transparent rounded-tr-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
