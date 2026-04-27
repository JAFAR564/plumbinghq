import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck } from "lucide-react";

const PHONE_NUMBER = "+27 21 330 5781";
const PHONE_HREF = "tel:+27213305781";
const WHATSAPP_HREF =
  "https://wa.me/27213305781?text=Hi%20PlumbingHQ%2C%20I%20need%20help%20with%20a%20plumbing%20issue.";

export function CtaPhone() {
  return (
    <section id="quote" className="relative px-4 py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0D1117] to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.06),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Floating tag */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cta-orange/20 bg-cta-orange/[0.06] px-4 py-1.5 text-xs font-semibold text-cta-orange">
          <Phone className="h-3 w-3" />
          Free call · No obligation
        </div>

        <h2
          className="font-[family-name:var(--font-jakarta)] font-bold leading-tight tracking-tight text-white"
          style={{ fontSize: "var(--text-h2)" }}
        >
          Don&apos;t guess. Don&apos;t wait.
          <br />
          <span className="bg-gradient-to-r from-cta-orange via-orange-400 to-amber-400 bg-clip-text text-transparent">
            Call the experts now.
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-md text-text-secondary" style={{ fontSize: "var(--text-body)" }}>
          A qualified plumber answers every call — not a receptionist, not a robot. Describe the problem, get a clear quote, and we dispatch immediately.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button size="xl" asChild>
            <a href={PHONE_HREF} className="gap-3 animate-glow-pulse">
              <Phone className="h-5 w-5" />
              Call {PHONE_NUMBER}
            </a>
          </Button>
          <Button variant="whatsapp" size="lg" asChild>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </Button>
        </div>

        {/* Floating trust badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-text-muted">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="h-3.5 w-3.5 text-cta-orange/60" />
            1-year warranty on every job
          </span>
          <span className="hidden sm:inline text-border-default">·</span>
          <span>No hidden call-out fees</span>
          <span className="hidden sm:inline text-border-default">·</span>
          <span>Certified & insured</span>
        </div>
      </div>
    </section>
  );
}
