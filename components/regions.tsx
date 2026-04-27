import { MapPin } from "lucide-react";

const regions = [
  {
    name: "Stellenbosch",
    slug: "plumber-in-stellenbosch",
    response: "~25 min",
  },
  {
    name: "Durbanville",
    slug: "plumber-in-durbanville",
    response: "~30 min",
  },
  {
    name: "Somerset West",
    slug: "plumber-in-somerset-west",
    response: "~35 min",
  },
  {
    name: "Paarl",
    slug: "plumber-in-paarl",
    response: "~30 min",
  },
  {
    name: "Franschhoek",
    slug: "plumber-in-franschhoek",
    response: "~40 min",
  },
  {
    name: "Wellington",
    slug: "plumber-in-wellington",
    response: "~35 min",
  },
];

export function Regions() {
  return (
    <section id="areas" className="relative px-4 py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-4 text-sm font-medium uppercase tracking-widest text-trust-indigo/80">
          Service areas
        </div>
        <h2 className="max-w-md text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          Local plumbers.
          <br />
          <span className="text-trust-indigo">Not call centres.</span>
        </h2>
        <p className="mt-4 max-w-lg text-base text-white/50 sm:text-lg">
          We live and work in the Cape Winelands. That means faster arrivals, local knowledge, and real accountability.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map((region) => (
            <a
              key={region.name}
              href={`/${region.slug}`}
              className="group flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.03] px-6 py-5 backdrop-blur-[8px] transition-all duration-300 hover:border-trust-indigo/30 hover:bg-white/[0.05]"
            >
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-white/30 transition-colors group-hover:text-trust-indigo" />
                <span className="text-base font-medium text-white/80 transition-colors group-hover:text-white">
                  {region.name}
                </span>
              </div>
              <span className="rounded-full bg-white/[0.05] px-3 py-1 text-xs font-medium text-white/40 transition-colors group-hover:bg-trust-indigo/10 group-hover:text-trust-indigo">
                {region.response}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
