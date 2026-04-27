import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, ShieldCheck } from "lucide-react";

const PHONE_NUMBER = "+27 21 330 5781";
const PHONE_HREF = "tel:+27213305781";

export function CtaPhone() {
  return (
    <section id="quote" className="relative px-4 py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0D1117] to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.06),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/[0.06] px-4 py-1.5 text-xs font-medium text-orange-400">
          <Phone className="h-3 w-3" />
          Free call &middot; No obligation
        </div>

        <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          Don&apos;t guess. Don&apos;t wait.
          <br />
          <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
            Call the experts now.
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-md text-base text-white/50 sm:text-lg">
          A qualified plumber answers every call &mdash; not a receptionist, not a robot. Describe the problem, get a clear quote, and we dispatch immediately.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button size="xl">
            <a href={PHONE_HREF} className="flex items-center gap-3">
              <Phone className="h-5 w-5" />
              Call {PHONE_NUMBER}
            </a>
          </Button>
          <Button variant="secondary" size="lg">
            <a href="mailto:info@plumbinghq.co.za?subject=PlumbingHQ%20Enquiry" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Email Us Instead
            </a>
          </Button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-white/30">
          <ShieldCheck className="h-3.5 w-3.5 text-orange-500/50" />
          1-year warranty on every job &middot; No hidden call-out fees &middot; Certified &amp; insured
        </div>
      </div>
    </section>
  );
}
