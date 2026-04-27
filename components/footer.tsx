import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const PHONE_NUMBER = "+27 21 330 5781";
const PHONE_HREF = "tel:+27213305781";
const WHATSAPP_HREF =
  "https://wa.me/27213305781?text=Hi%20PlumbingHQ%2C%20I%20need%20help%20with%20a%20plumbing%20issue.";

const serviceLinks = [
  { label: "Emergency Repairs", href: "#services" },
  { label: "Drain Unblocking", href: "#services" },
  { label: "Geyser Installation", href: "#services" },
  { label: "Leak Detection", href: "#services" },
  { label: "General Maintenance", href: "#services" },
];

const areaLinks = [
  { label: "Stellenbosch", href: "/plumber-in-stellenbosch" },
  { label: "Durbanville", href: "/plumber-in-durbanville" },
  { label: "Somerset West", href: "/plumber-in-somerset-west" },
  { label: "Paarl", href: "/plumber-in-paarl" },
  { label: "Franschhoek", href: "/plumber-in-franschhoek" },
  { label: "Wellington", href: "/plumber-in-wellington" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] px-4 py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-[#030306]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(249,115,22,0.03),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cta-orange/10 border border-cta-orange/20">
                <svg
                  className="h-5 w-5 text-cta-orange"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <span className="font-[family-name:var(--font-jakarta)] text-lg font-bold text-white">
                Plumbing<span className="text-cta-orange">HQ</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-text-tertiary max-w-xs">
              Cape Winelands&apos; trusted 24/7 plumbing service. Certified,
              insured, and backed by a full 1-year work warranty.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2.5 text-sm font-semibold text-cta-orange transition-colors hover:text-cta-orange-hover"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cta-orange/10">
                  <Phone className="h-4 w-4" />
                </div>
                {PHONE_NUMBER}
              </a>
              <a
                href="mailto:info@plumbinghq.co.za"
                className="flex items-center gap-2.5 text-sm text-text-tertiary transition-colors hover:text-text-secondary"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.04]">
                  <Mail className="h-4 w-4" />
                </div>
                info@plumbinghq.co.za
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-text-muted">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-1.5 text-sm text-text-tertiary transition-colors hover:text-text-secondary"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-text-muted">
              Service Areas
            </h4>
            <ul className="flex flex-col gap-3">
              {areaLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-text-tertiary transition-colors hover:text-text-secondary"
                  >
                    <MapPin className="h-3 w-3 text-text-muted group-hover:text-trust-indigo transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency CTA */}
          <div>
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-text-muted">
              Emergency? Call Now.
            </h4>
            <a
              href={PHONE_HREF}
              className="group inline-flex items-center gap-2.5 rounded-2xl bg-gradient-to-br from-cta-orange/15 to-orange-900/15 border border-cta-orange/20 px-6 py-4 text-sm font-bold text-cta-orange transition-all hover:border-cta-orange/35 hover:shadow-[0_0_30px_rgba(249,115,22,0.12)] active:translate-y-[1px]"
            >
              <Phone className="h-4 w-4 transition-transform group-hover:scale-110" />
              {PHONE_NUMBER}
            </a>
            <p className="mt-4 text-xs text-text-muted leading-relaxed">
              Available 24 hours, 7 days a week.
              <br />
              No call-out fee for emergencies.
            </p>

            {/* WhatsApp */}
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-400/70 hover:text-emerald-400 transition-colors"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp us instead
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/[0.04] pt-8 sm:flex-row">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} PlumbingHQ. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-xs text-text-muted">
            <a href="#" className="transition-colors hover:text-text-tertiary">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-text-tertiary">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
