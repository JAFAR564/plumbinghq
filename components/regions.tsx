"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, ArrowUpRight } from "lucide-react";

const regions = [
  { name: "Stellenbosch", slug: "plumber-in-stellenbosch", response: "~25 min", speed: "fast" },
  { name: "Durbanville", slug: "plumber-in-durbanville", response: "~30 min", speed: "fast" },
  { name: "Paarl", slug: "plumber-in-paarl", response: "~30 min", speed: "fast" },
  { name: "Somerset West", slug: "plumber-in-somerset-west", response: "~35 min", speed: "medium" },
  { name: "Franschhoek", slug: "plumber-in-franschhoek", response: "~40 min", speed: "medium" },
  { name: "Wellington", slug: "plumber-in-wellington", response: "~35 min", speed: "medium" },
];

const speedStyles: Record<string, string> = {
  fast: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  medium: "text-amber-400 bg-amber-500/10 border-amber-500/20",
};

export function Regions() {
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
    <section id="areas" className="relative px-4 py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#080812] to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.04),transparent_60%)]" />

      <div className="absolute left-1/2 top-0 h-24 w-px bg-gradient-to-b from-transparent via-trust-indigo/20 to-transparent" />

      <div ref={ref} className="relative z-10 mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`mb-5 inline-flex items-center gap-2 rounded-full border border-trust-indigo/20 bg-trust-indigo/[0.08] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-trust-indigo transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <MapPin className="h-3 w-3" />
            Service Areas
          </div>
          <h2
            className={`mx-auto max-w-md font-[family-name:var(--font-jakarta)] font-extrabold leading-[1.1] tracking-tight text-white transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ fontSize: "var(--text-h2)" }}
          >
            Local plumbers.
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
              Not call centres.
            </span>
          </h2>
          <p
            className={`mx-auto mt-5 max-w-lg text-text-secondary transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ fontSize: "var(--text-body)" }}
          >
            We live and work in the Cape Winelands. Faster arrivals, local
            knowledge, real accountability.
          </p>
        </div>

        {/* Region Cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map((region, i) => (
            <a
              key={region.name}
              href={`/${region.slug}`}
              className="group relative flex items-center justify-between rounded-2xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-transparent px-6 py-5 backdrop-blur-sm transition-all duration-500 hover:border-trust-indigo/25 hover:-translate-y-0.5 hover:shadow-[0_8px_40px_rgba(59,130,246,0.08)] overflow-hidden"
              style={{
                transitionDelay: inView ? `${(i + 1) * 80}ms` : "0ms",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(16px)",
              }}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-trust-indigo/10 transition-all group-hover:bg-trust-indigo/20 group-hover:scale-110">
                  <MapPin className="h-4 w-4 text-trust-indigo/70 transition-colors group-hover:text-trust-indigo" />
                </div>
                <div>
                  <span className="text-base font-semibold text-white/90 transition-colors group-hover:text-white">
                    {region.name}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <span
                  className={`rounded-full border px-3 py-1 text-xs font-bold ${speedStyles[region.speed]}`}
                >
                  {region.response}
                </span>
                <ArrowUpRight className="h-4 w-4 text-text-muted transition-all group-hover:text-trust-indigo group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              <div className="absolute top-0 right-0 h-16 w-16 bg-gradient-to-bl from-white/[0.015] to-transparent rounded-tr-2xl" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
