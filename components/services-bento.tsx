"use client";

import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  AlertTriangle,
  Waves,
  Flame,
  Search,
  Wrench,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

const primaryServices = [
  {
    icon: AlertTriangle,
    title: "24/7 Emergency Repairs",
    description:
      "Burst pipes, flooding, gas leaks — we respond in under 30 minutes, day or night. No call-out fee for emergencies.",
    badge: "Most Urgent",
    badgeVariant: "destructive" as const,
    gradient: "from-red-500/15 via-red-900/10 to-transparent",
    iconBg: "bg-red-500/15 group-hover:bg-red-500/25",
    iconColor: "text-red-400",
    border: "border-red-500/15 hover:border-red-500/30",
    glow: "hover:shadow-[0_0_50px_rgba(239,68,68,0.08)]",
    span: "sm:col-span-2 sm:row-span-2",
    large: true,
  },
  {
    icon: Waves,
    title: "Drain Unblocking",
    description:
      "High-pressure jetting and CCTV inspections to clear and diagnose any blockage.",
    badge: "Popular",
    badgeVariant: "default" as const,
    gradient: "from-blue-500/15 via-blue-900/10 to-transparent",
    iconBg: "bg-blue-500/15 group-hover:bg-blue-500/25",
    iconColor: "text-blue-400",
    border: "border-blue-500/15 hover:border-blue-500/30",
    glow: "hover:shadow-[0_0_50px_rgba(59,130,246,0.08)]",
    span: "",
    large: false,
  },
  {
    icon: Flame,
    title: "Geyser Install & Repair",
    description:
      "Full replacement, thermostat fixes, anode rod inspection. Same-day install.",
    badge: null,
    badgeVariant: "default" as const,
    gradient: "from-orange-500/15 via-orange-900/10 to-transparent",
    iconBg: "bg-orange-500/15 group-hover:bg-orange-500/25",
    iconColor: "text-orange-400",
    border: "border-orange-500/15 hover:border-orange-500/30",
    glow: "hover:shadow-[0_0_50px_rgba(249,115,22,0.08)]",
    span: "",
    large: false,
  },
  {
    icon: Search,
    title: "Leak Detection",
    description:
      "Non-invasive acoustic and thermal detection. We find it before it finds your foundation.",
    badge: null,
    badgeVariant: "default" as const,
    gradient: "from-emerald-500/15 via-emerald-900/10 to-transparent",
    iconBg: "bg-emerald-500/15 group-hover:bg-emerald-500/25",
    iconColor: "text-emerald-400",
    border: "border-emerald-500/15 hover:border-emerald-500/30",
    glow: "hover:shadow-[0_0_50px_rgba(16,185,129,0.08)]",
    span: "sm:col-span-2",
    large: false,
  },
];

const additionalServices = [
  { icon: Wrench, title: "General Maintenance" },
  { icon: Flame, title: "Hot Water Systems" },
  { icon: Wrench, title: "Renovations & Remodels" },
  { icon: Wrench, title: "Fixture Installation" },
];

export function ServicesBento() {
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
    <section id="services" className="relative px-4 py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#080812] to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.04),transparent_60%)]" />

      {/* Decorative */}
      <div className="absolute left-1/2 top-0 h-24 w-px bg-gradient-to-b from-transparent via-trust-indigo/20 to-transparent" />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={`mb-5 inline-flex items-center gap-2 rounded-full border border-trust-indigo/20 bg-trust-indigo/[0.08] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-trust-indigo transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            What we fix
          </div>
          <h2
            className={`mx-auto max-w-xl font-[family-name:var(--font-jakarta)] font-extrabold leading-[1.1] tracking-tight text-white transition-all duration-700 delay-100 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ fontSize: "var(--text-h2)" }}
          >
            The 4 problems that
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent">
              can&apos;t wait till morning.
            </span>
          </h2>
          <p
            className={`mx-auto mt-5 max-w-lg text-text-secondary transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ fontSize: "var(--text-body)" }}
          >
            We handle everything — but these are the calls that cost the most
            when delayed.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 auto-rows-min">
          {primaryServices.map((service, i) => (
            <div
              key={service.title}
              className={`${service.span} group relative rounded-2xl border ${service.border} bg-gradient-to-br ${service.gradient} backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 ${service.glow} overflow-hidden`}
              style={{
                transitionDelay: inView ? `${(i + 1) * 120}ms` : "0ms",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
              }}
            >
              {/* Content */}
              <div className={`relative z-10 ${service.large ? "p-8 sm:p-10" : "p-6 sm:p-7"}`}>
                <div className="mb-4 flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${service.iconBg} transition-all duration-300 group-hover:scale-110`}
                  >
                    <service.icon className={`h-6 w-6 ${service.iconColor}`} />
                  </div>
                  {service.badge && (
                    <Badge variant={service.badgeVariant}>{service.badge}</Badge>
                  )}
                </div>
                <h3
                  className={`font-[family-name:var(--font-jakarta)] font-bold text-white mb-2 ${
                    service.large ? "text-2xl" : "text-lg"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`leading-relaxed text-text-tertiary ${
                    service.large ? "text-base max-w-md" : "text-sm"
                  }`}
                >
                  {service.description}
                </p>

                {service.large && (
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-red-400 group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-bl from-white/[0.02] to-transparent rounded-tr-2xl" />
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <details className="mt-8 group">
          <summary className="flex cursor-pointer items-center justify-center gap-2 text-sm text-text-tertiary transition-colors hover:text-text-secondary">
            <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
            View all services
          </summary>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {additionalServices.map((service) => (
              <div
                key={service.title}
                className="flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3.5 text-sm text-text-tertiary transition-all hover:border-white/[0.1] hover:bg-white/[0.04] hover:text-text-secondary"
              >
                <service.icon className="h-4 w-4 text-text-muted" />
                {service.title}
              </div>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
