"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlertTriangle,
  Waves,
  Flame,
  Search,
  Wrench,
  ChevronDown,
} from "lucide-react";

const primaryServices = [
  {
    icon: AlertTriangle,
    title: "24/7 Emergency Repairs",
    description:
      "Burst pipes, flooding, gas leaks — we respond in under 30 minutes, day or night. No call-out fee for emergencies.",
    badge: "Most Urgent",
    badgeVariant: "destructive" as const,
    span: "sm:col-span-2 lg:row-span-2",
    featured: true,
  },
  {
    icon: Waves,
    title: "Drain Unblocking",
    description:
      "High-pressure jetting and CCTV inspections to clear and diagnose any blockage — kitchen, bathroom, or main line.",
    badge: "Popular",
    badgeVariant: "default" as const,
    span: "",
    featured: false,
  },
  {
    icon: Flame,
    title: "Geyser Installation & Repair",
    description:
      "Full geyser replacement, thermostat fixes, and anode rod inspection. We stock all major brands for same-day install.",
    badge: null,
    badgeVariant: "default" as const,
    span: "",
    featured: false,
  },
  {
    icon: Search,
    title: "Leak Detection",
    description:
      "Non-invasive acoustic and thermal leak detection. We find the hidden leak before it finds your foundation.",
    badge: null,
    badgeVariant: "default" as const,
    span: "sm:col-span-2",
    featured: false,
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
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="relative px-4 py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />

      <div ref={ref} className="relative z-10 mx-auto max-w-6xl">
        <div
          className={`mb-4 text-sm font-semibold uppercase tracking-widest text-trust-indigo/80 transition-all duration-600 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          What we fix
        </div>
        <h2
          className={`max-w-xl font-[family-name:var(--font-jakarta)] font-bold leading-tight tracking-tight text-white transition-all duration-600 delay-100 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ fontSize: "var(--text-h2)" }}
        >
          The 4 problems that
          <br />
          <span className="text-trust-indigo">can&apos;t wait till morning.</span>
        </h2>
        <p
          className={`mt-4 max-w-lg text-text-secondary transition-all duration-600 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ fontSize: "var(--text-body)" }}
        >
          We handle everything — but these are the calls that cost the most when delayed.
        </p>

        {/* True Bento Grid */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 auto-rows-min">
          {primaryServices.map((service, i) => (
            <Card
              key={service.title}
              className={`${service.span} group flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]`}
              style={{
                transitionDelay: inView ? `${(i + 1) * 120}ms` : "0ms",
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <CardHeader>
                <div className="mb-3 flex items-center justify-between">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 ${
                    service.featured
                      ? "bg-emergency-red/10 group-hover:bg-emergency-red/20 group-hover:shadow-[0_0_20px_rgba(239,68,68,0.15)]"
                      : "bg-white/[0.05] group-hover:bg-white/[0.08]"
                  }`}>
                    <service.icon className={`h-5 w-5 ${
                      service.featured ? "text-red-400" : "text-trust-indigo"
                    }`} />
                  </div>
                  {service.badge && (
                    <Badge variant={service.badgeVariant}>{service.badge}</Badge>
                  )}
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-text-tertiary">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Progressive Disclosure */}
        <details className="mt-6 group">
          <summary className="flex cursor-pointer items-center gap-2 text-sm text-text-tertiary transition-colors hover:text-text-secondary">
            <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
            View all services
          </summary>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {additionalServices.map((service) => (
              <div
                key={service.title}
                className="flex items-center gap-2.5 rounded-xl border border-border-subtle bg-surface-glass px-4 py-3 text-sm text-text-tertiary transition-all hover:border-border-default hover:text-text-secondary"
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
