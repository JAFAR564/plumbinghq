import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
