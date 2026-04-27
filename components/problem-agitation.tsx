import { AlertTriangle, Droplets, TrendingDown, Clock } from "lucide-react";

const painPoints = [
  {
    icon: Droplets,
    stat: "R15,000+",
    label: "Average water damage cost from an untreated burst pipe",
  },
  {
    icon: Clock,
    stat: "Every 60 seconds",
    label: "A leaking pipe wastes 10 litres of water you pay for",
  },
  {
    icon: TrendingDown,
    stat: "23% property value loss",
    label: "From unresolved water damage and mould growth",
  },
  {
    icon: AlertTriangle,
    stat: "4 out of 5 homeowners",
    label: "Wait too long before calling a professional plumber",
  },
];

export function ProblemAgitation() {
  return (
    <section className="relative px-4 py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0C0C14] to-background" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-4 text-sm font-medium uppercase tracking-widest text-red-400/80">
          Don&apos;t wait until it&apos;s too late
        </div>
        <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          Every minute you wait,
          <br />
          <span className="text-red-400">water damage doubles.</span>
        </h2>
        <p className="mt-4 max-w-lg text-base text-white/50 sm:text-lg">
          What starts as a small drip can become a catastrophic failure overnight. The numbers don&apos;t lie.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map((point) => (
            <div
              key={point.label}
              className="group rounded-2xl border border-red-500/10 bg-red-500/[0.03] p-6 backdrop-blur-[8px] transition-all duration-300 hover:border-red-500/20 hover:bg-red-500/[0.06]"
            >
              <point.icon className="mb-4 h-6 w-6 text-red-400/70 transition-colors group-hover:text-red-400" />
              <div className="text-2xl font-bold text-red-400">{point.stat}</div>
              <p className="mt-2 text-sm leading-relaxed text-white/50">{point.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
