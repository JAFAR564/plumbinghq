"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";

const regions = [
  { name: "Stellenbosch", slug: "plumber-in-stellenbosch", response: "~25 min", speed: "fast" },
  { name: "Durbanville", slug: "plumber-in-durbanville", response: "~30 min", speed: "fast" },
  { name: "Somerset West", slug: "plumber-in-somerset-west", response: "~35 min", speed: "medium" },
  { name: "Paarl", slug: "plumber-in-paarl", response: "~30 min", speed: "fast" },
  { name: "Franschhoek", slug: "plumber-in-franschhoek", response: "~40 min", speed: "medium" },
  { name: "Wellington", slug: "plumber-in-wellington", response: "~35 min", speed: "medium" },
];

const speedColor: Record<string, string> = {
  fast: "text-success-green bg-success-green/10 border-success-green/20",
  medium: "text-amber-400 bg-amber-400/10 border-amber-400/20",
};

export function Regions() {
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
    <section id="areas" className="relative px-4 py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl">
        <div
          className={`mb-4 text-sm font-semibold uppercase tracking-widest text-trust-indigo/80 transition-all duration-600 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Service areas
        </div>
        <h2
          className={`max-w-md font-[family-name:var(--font-jakarta)] font-bold leading-tight tracking-tight text-white transition-all duration-600 delay-100 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ fontSize: "var(--text-h2)" }}
        >
          Local plumbers.
          <br />
          <span className="text-trust-indigo">Not call centres.</span>
        </h2>
        <p
          className={`mt-4 max-w-lg text-text-secondary transition-all duration-600 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ fontSize: "var(--text-body)" }}
        >
          We live and work in the Cape Winelands. That means faster arrivals, local knowledge, and real accountability.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map((region, i) => (
            <a
              key={region.name}
              href={`/${region.slug}`}
              className="group flex items-center justify-between rounded-2xl border border-border-default bg-surface-glass px-6 py-5 backdrop-blur-sm transition-all duration-300 hover:border-trust-indigo/30 hover:bg-white/[0.05] hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(59,130,246,0.08)]"
              style={{
                transitionDelay: inView ? `${(i + 1) * 80}ms` : "0ms",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(12px)",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-trust-indigo/10 transition-colors group-hover:bg-trust-indigo/20">
                  <MapPin className="h-4 w-4 text-trust-indigo/70 transition-colors group-hover:text-trust-indigo" />
                </div>
                <span className="text-base font-medium text-text-secondary transition-colors group-hover:text-white">
                  {region.name}
                </span>
              </div>
              <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${speedColor[region.speed]}`}>
                {region.response}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
