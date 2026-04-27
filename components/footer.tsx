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
    <footer className="relative border-t border-white/[0.04] px-4 py-16 sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-[#080810]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-xl font-bold text-white">PlumbingHQ</div>
            <p className="mt-3 text-sm leading-relaxed text-white/40">
              Cape Winelands&apos; trusted 24/7 plumbing service. Certified, insured, and backed by a full 1-year work warranty.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 text-sm text-orange-400 transition-colors hover:text-orange-300"
              >
                <Phone className="h-4 w-4" />
                {PHONE_NUMBER}
              </a>
              <a
                href="mailto:info@plumbinghq.co.za"
                className="flex items-center gap-2 text-sm text-white/40 transition-colors hover:text-white/60"
              >
                <Mail className="h-4 w-4" />
                info@plumbinghq.co.za
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/60">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 transition-colors hover:text-white/70"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/60">
              Service Areas
            </h4>
            <ul className="flex flex-col gap-2.5">
              {areaLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-1.5 text-sm text-white/40 transition-colors hover:text-white/70"
                  >
                    <MapPin className="h-3 w-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/60">
              Emergency? Call Now.
            </h4>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-xl bg-orange-500/10 border border-orange-500/20 px-5 py-3 text-sm font-semibold text-orange-400 transition-all hover:bg-orange-500/20 hover:border-orange-500/30 active:translate-y-[1px]"
            >
              <Phone className="h-4 w-4" />
              {PHONE_NUMBER}
            </a>
            <p className="mt-3 text-xs text-white/30">
              Available 24 hours, 7 days a week. No call-out fee for emergencies.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.04] pt-8 sm:flex-row">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} PlumbingHQ. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/25">
            <a href="#" className="transition-colors hover:text-white/40">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-white/40">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
