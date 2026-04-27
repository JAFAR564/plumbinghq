import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck, Clock } from "lucide-react";

const PHONE_NUMBER = "+27 21 330 5781";
const PHONE_HREF = "tel:+27213305781";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 pt-8 pb-16">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-[#0D1117] to-[#111118]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(30,58,95,0.15),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-6 flex items-center justify-center gap-3">
          <Badge variant="destructive" className="animate-pulse text-xs tracking-wider uppercase">
            <Clock className="mr-1.5 h-3 w-3" />
            24/7 Emergency Response
          </Badge>
        </div>

        <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Burst pipe at 2AM?
          <br />
          <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
            We&apos;re there in 30.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-white/60 sm:text-xl">
          Cape Winelands&apos; fastest emergency plumbing. Drain unblocking, geyser repair, leak detection — all backed by our full 1-year work warranty.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button size="xl" asChild>
            <a href={PHONE_HREF} className="gap-3">
              <Phone className="h-5 w-5" />
              Call Now — {PHONE_NUMBER}
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#quote">Get a Free Quote</a>
          </Button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-white/40">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-4 w-4 text-orange-500/70" />
            1-Year Warranty
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-orange-500/70" />
            Avg 30min Response
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 text-orange-500/70" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            Certified & Insured
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
