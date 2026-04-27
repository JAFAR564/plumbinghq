import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "PlumbingHQ — 24/7 Emergency Plumbers in Cape Winelands | Call Now",
  description:
    "Burst pipe? Geyser failure? Blocked drain? PlumbingHQ provides fast 24/7 emergency plumbing across Stellenbosch, Paarl, Durbanville, Somerset West, Franschhoek & Wellington. 1-year work warranty. Call now.",
  keywords: [
    "plumber Stellenbosch",
    "emergency plumber Cape Winelands",
    "24/7 plumber",
    "geyser repair",
    "drain unblocking",
    "leak detection",
    "plumber Paarl",
    "plumber Durbanville",
    "burst pipe repair",
  ],
  openGraph: {
    title: "PlumbingHQ — 24/7 Emergency Plumbers in Cape Winelands",
    description:
      "Fast 24/7 emergency plumbing. Burst pipes, geysers, drains, leaks. 1-year warranty. Serving Stellenbosch, Paarl, Franschhoek & beyond.",
    type: "website",
    locale: "en_ZA",
  },
};

/** JSON-LD Structured Data for LocalBusiness (Google Rich Results) */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Plumber",
  name: "PlumbingHQ",
  description:
    "24/7 emergency plumbing services across the Cape Winelands. Burst pipes, geyser repair, drain unblocking, leak detection.",
  url: "https://plumbinghq.co.za",
  telephone: "+27213305781",
  email: "info@plumbinghq.co.za",
  areaServed: [
    { "@type": "City", name: "Stellenbosch" },
    { "@type": "City", name: "Paarl" },
    { "@type": "City", name: "Franschhoek" },
    { "@type": "City", name: "Wellington" },
    { "@type": "City", name: "Durbanville" },
    { "@type": "City", name: "Somerset West" },
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "Western Cape",
    addressCountry: "ZA",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jakarta.variable} h-full antialiased dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
