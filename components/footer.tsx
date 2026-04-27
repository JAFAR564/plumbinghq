import { Phone, Mail, MapPin } from "lucide-react";

const PHONE_NUMBER = "+27 21 330 5781";
const PHONE_HREF = "tel:+27213305781";

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
    <footer className="relative border-t border-border-subtle px-4 py-16 sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-[#050508]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cta-orange/10 border border-cta-orange/20">
                <svg className="h-4 w-4 text-cta-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <span className="font-[family-name:var(--font-jakarta)] text-lg font-bold text-white">
                PlumbingHQ
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-text-tertiary">
              Cape Winelands&apos; trusted 24/7 plumbing service. Certified, insured, and backed by a full 1-year work warranty.
            </p>
            <div className="mt-6 flex flex-col gap-2.5">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 text-sm font-medium text-cta-orange transition-colors hover:text-cta-orange-hover"
              >
                <Phone className="h-4 w-4" />
                {PHONE_NUMBER}
              </a>
              <a
                href="mailto:info@plumbinghq.co.za"
                className="flex items-center gap-2 text-sm text-text-tertiary transition-colors hover:text-text-secondary"
              >
                <Mail className="h-4 w-4" />
                info@plumbinghq.co.za
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-text-tertiary">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-tertiary transition-colors hover:text-text-secondary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-text-tertiary">
              Service Areas
            </h4>
            <ul className="flex flex-col gap-3">
              {areaLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-1.5 text-sm text-text-tertiary transition-colors hover:text-text-secondary"
                  >
                    <MapPin className="h-3 w-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency CTA */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-text-tertiary">
              Emergency? Call Now.
            </h4>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-xl bg-cta-orange/10 border border-cta-orange/20 px-5 py-3.5 text-sm font-bold text-cta-orange transition-all hover:bg-cta-orange/20 hover:border-cta-orange/30 hover:shadow-[0_0_20px_rgba(249,115,22,0.1)] active:translate-y-[1px]"
            >
              <Phone className="h-4 w-4" />
              {PHONE_NUMBER}
            </a>
            <p className="mt-3 text-xs text-text-muted">
              Available 24 hours, 7 days a week.
              <br />
              No call-out fee for emergencies.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border-subtle pt-8 sm:flex-row">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} PlumbingHQ. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-text-muted">
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
