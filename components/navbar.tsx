"use client";

import { useEffect, useState } from "react";
import { Phone, Menu, X } from "lucide-react";

const PHONE_HREF = "tel:+27213305781";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#trust" },
  { label: "Areas", href: "#areas" },
  { label: "Contact", href: "#quote" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border-subtle bg-background/80 backdrop-blur-lg shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cta-orange/10 border border-cta-orange/20">
            <svg className="h-5 w-5 text-cta-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <span className="font-[family-name:var(--font-jakarta)] text-lg font-bold text-white">
            PlumbingHQ
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-text-secondary transition-colors hover:text-white hover:bg-white/[0.04]"
            >
              {link.label}
            </a>
          ))}
          <a
            href={PHONE_HREF}
            className="ml-3 inline-flex items-center gap-2 rounded-xl bg-cta-orange px-5 py-2.5 text-sm font-bold text-white shadow-[0_2px_12px_rgba(249,115,22,0.35)] transition-all hover:bg-cta-orange-hover hover:shadow-[0_4px_20px_rgba(249,115,22,0.45)] active:translate-y-[1px]"
          >
            <Phone className="h-4 w-4" />
            Emergency Call
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-default bg-surface-glass text-white sm:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border-subtle bg-background/95 backdrop-blur-lg px-4 pb-6 pt-4 sm:hidden animate-fade-in">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-text-secondary transition-colors hover:bg-white/[0.04] hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href={PHONE_HREF}
            className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-cta-orange px-6 py-3.5 text-base font-bold text-white shadow-[0_2px_12px_rgba(249,115,22,0.35)]"
          >
            <Phone className="h-5 w-5" />
            Call Now — 24/7
          </a>
        </div>
      )}
    </nav>
  );
}
