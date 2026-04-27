"use client";

import { useEffect, useRef, useState } from "react";
import { AlertTriangle, Droplets, TrendingDown, Clock } from "lucide-react";

const painPoints = [
  {
    icon: Droplets,
    stat: "R15,000+",
    label: "Average water damage cost from an untreated burst pipe",
  },
  {
    icon: Clock,
    stat: "10L / min",
    label: "Water wasted every minute from a leaking pipe you pay for",
  },
  {
    icon: TrendingDown,
    stat: "23%",
    label: "Property value loss from unresolved water damage and mould",
  },
  {
    icon: AlertTriangle,
    stat: "4 in 5",
    label: "Homeowners wait too long before calling a professional",
  },
];

function AnimatedStat({ value, inView }: { value: string; inView: boolean }) {
  return (
    <div
      className={`text-3xl font-extrabold font-[family-name:var(--font-jakarta)] text-red-400 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      {value}
    </div>
  );
}

export function ProblemAgitation() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative px-4 py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0C0C14] to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(239,68,68,0.06),transparent_50%)]" />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl">
        <div
          className={`mb-4 text-sm font-semibold uppercase tracking-widest text-red-400/80 transition-all duration-600 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Don&apos;t wait until it&apos;s too late
        </div>
        <h2
          className={`max-w-2xl font-[family-name:var(--font-jakarta)] font-bold leading-tight tracking-tight text-white transition-all duration-600 delay-100 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ fontSize: "var(--text-h2)" }}
        >
          Every minute you wait,
          <br />
          <span className="text-red-400">water damage doubles.</span>
        </h2>
        <p
          className={`mt-4 max-w-lg text-text-secondary transition-all duration-600 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ fontSize: "var(--text-body)" }}
        >
          What starts as a small drip can become a catastrophic failure overnight. The numbers don&apos;t lie.
        </p>

        {/* Asymmetric grid: 2 large + 2 small */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((point, i) => (
            <div
              key={point.label}
              className={`group rounded-2xl border border-red-500/10 bg-red-500/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:border-red-500/20 hover:bg-red-500/[0.06] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(239,68,68,0.08)] ${
                i === 0 ? "sm:col-span-2 lg:col-span-2" : ""
              }`}
              style={{
                transitionDelay: inView ? `${(i + 1) * 100}ms` : "0ms",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(16px)",
              }}
            >
              <point.icon className="mb-4 h-6 w-6 text-red-400/60 transition-colors group-hover:text-red-400" />
              <AnimatedStat value={point.stat} inView={inView} />
              <p className="mt-2 text-sm leading-relaxed text-text-tertiary">{point.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
