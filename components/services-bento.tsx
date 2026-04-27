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
    span: "sm:col-span-2",
  },
  {
    icon: Waves,
    title: "Drain Unblocking",
    description:
      "High-pressure jetting and CCTV inspections to clear and diagnose any blockage — kitchen, bathroom, or main line.",
    badge: "Popular",
    badgeVariant: "default" as const,
    span: "",
  },
  {
    icon: Flame,
    title: "Geyser Installation & Repair",
    description:
      "Full geyser replacement, thermostat fixes, and anode rod inspection. We stock all major brands for same-day install.",
    badge: null,
    badgeVariant: "default" as const,
    span: "",
  },
  {
    icon: Search,
    title: "Leak Detection",
    description:
      "Non-invasive acoustic and thermal leak detection. We find the hidden leak before it finds your foundation.",
    badge: null,
    badgeVariant: "default" as const,
    span: "",
  },
];

const additionalServices = [
  { icon: Wrench, title: "General Maintenance" },
  { icon: Flame, title: "Hot Water Systems" },
  { icon: Wrench, title: "Renovations & Remodels" },
  { icon: Wrench, title: "Fixture Installation" },
];

export function ServicesBento() {
  return (
    <section id="services" className="relative px-4 py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-4 text-sm font-medium uppercase tracking-widest text-trust-indigo/80">
          What we fix
        </div>
        <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          The 4 problems that
          <br />
          <span className="text-trust-indigo">can&apos;t wait till morning.</span>
        </h2>
        <p className="mt-4 max-w-lg text-base text-white/50 sm:text-lg">
          We handle everything — but these are the calls that cost the most when delayed.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {primaryServices.map((service) => (
            <Card
              key={service.title}
              className={`${service.span} group flex flex-col justify-between`}
            >
              <CardHeader>
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] transition-colors group-hover:bg-white/[0.08]">
                    <service.icon className="h-5 w-5 text-trust-indigo" />
                  </div>
                  {service.badge && (
                    <Badge variant={service.badgeVariant}>{service.badge}</Badge>
                  )}
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-white/50">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <details className="mt-6 group">
          <summary className="flex cursor-pointer items-center gap-2 text-sm text-white/40 transition-colors hover:text-white/60">
            <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
            View all services
          </summary>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {additionalServices.map((service) => (
              <div
                key={service.title}
                className="flex items-center gap-2 rounded-xl border border-white/[0.04] bg-white/[0.02] px-4 py-3 text-sm text-white/50"
              >
                <service.icon className="h-4 w-4 text-white/30" />
                {service.title}
              </div>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
