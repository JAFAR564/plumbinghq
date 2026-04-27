import { ShieldCheck, Award, Clock, Users } from "lucide-react";

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
  },
  {
    before: "Recurring drain blockage every 3 months",
    after: "CCTV inspection + root cut — no blockage in 14 months",
    metric: "Permanent fix",
  },
  {
    before: "Hidden slab leak causing R4,200/month water bill",
    after: "Acoustic detection + 1-point repair — bill dropped to R680",
    metric: "84% savings",
  },
];

export function TrustBlock() {
  return (
    <section className="relative px-4 py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0C0E18] to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(30,58,95,0.1),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-4 text-sm font-medium uppercase tracking-widest text-orange-400/80">
          Why homeowners trust us
        </div>
        <h2 className="max-w-lg text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          Real fixes. Real warranty.
          <br />
          <span className="text-white/50">No comeback jobs.</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustSignals.map((signal) => (
            <div
              key={signal.label}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 backdrop-blur-[8px] transition-all duration-300 hover:border-white/[0.1] hover:bg-white/[0.05]"
            >
              <signal.icon className="mb-4 h-6 w-6 text-orange-400/70 transition-colors group-hover:text-orange-400" />
              <div className="text-base font-semibold text-white">{signal.label}</div>
              <p className="mt-2 text-sm leading-relaxed text-white/40">{signal.detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="mb-8 text-lg font-semibold text-white/70">
            Before → After
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {transformations.map((t) => (
              <div
                key={t.before}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-[8px]"
              >
                <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-red-400/60">
                  Before
                </div>
                <p className="text-sm text-white/50">{t.before}</p>

                <div className="my-4 flex items-center gap-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-red-500/20 to-orange-500/40" />
                  <span className="rounded-full bg-orange-500/10 px-2.5 py-0.5 text-xs font-bold text-orange-400">
                    {t.metric}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-l from-red-500/20 to-orange-500/40" />
                </div>

                <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-green-400/60">
                  After
                </div>
                <p className="text-sm text-white/70">{t.after}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
