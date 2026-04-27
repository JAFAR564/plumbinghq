import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck, CheckCircle } from "lucide-react";

const PHONE_NUMBER = "+27 21 330 5781";
const PHONE_HREF = "tel:+27213305781";
const WHATSAPP_HREF =
  "https://wa.me/27213305781?text=Hi%20PlumbingHQ%2C%20I%20need%20help%20with%20a%20plumbing%20issue.";

const guarantees = [
  "1-year warranty on every job",
  "No hidden call-out fees",
  "Certified & fully insured",
  "A real plumber answers your call",
];

export function CtaPhone() {
  return (
    <section id="quote" className="relative px-4 py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0A0810] to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.04),transparent_40%)]" />

      {/* Decorative lines */}
      <div className="absolute left-1/2 top-0 h-24 w-px bg-gradient-to-b from-transparent via-cta-orange/20 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Glass container */}
        <div className="relative rounded-3xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] via-cta-orange/[0.02] to-transparent p-10 sm:p-14 md:p-16 backdrop-blur-sm overflow-hidden">
          {/* Glow spots */}
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-cta-orange/[0.06] blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-blue-500/[0.04] blur-3xl" />

          <div className="relative z-10 text-center">
            {/* Tag */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cta-orange/20 bg-cta-orange/[0.08] px-5 py-2 text-xs font-semibold uppercase tracking-widest text-cta-orange">
              <Phone className="h-3 w-3" />
              Free call · No obligation
            </div>

            <h2
              className="font-[family-name:var(--font-jakarta)] font-extrabold leading-[1.1] tracking-tight text-white"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Don&apos;t guess. Don&apos;t wait.
              <br />
              <span className="bg-gradient-to-r from-cta-orange via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                Call the experts now.
              </span>
            </h2>

            <p
              className="mx-auto mt-6 max-w-md text-text-secondary"
              style={{ fontSize: "var(--text-body)" }}
            >
              A qualified plumber answers every call — not a receptionist, not a
              robot. Describe the problem, get a clear quote, and we dispatch
              immediately.
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

            {/* Guarantee list */}
            <div className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-2 max-w-md mx-auto">
              {guarantees.map((g) => (
                <div key={g} className="flex items-center gap-2 text-sm text-text-tertiary">
                  <CheckCircle className="h-4 w-4 text-emerald-400/70 flex-shrink-0" />
                  {g}
                </div>
              ))}
            </div>
          </div>

          {/* Corner accents */}
          <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-bl from-white/[0.02] to-transparent rounded-tr-3xl" />
          <div className="absolute bottom-0 left-0 h-32 w-32 bg-gradient-to-tr from-white/[0.02] to-transparent rounded-bl-3xl" />
        </div>
      </div>
    </section>
  );
}
