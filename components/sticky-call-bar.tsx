"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

const PHONE_HREF = "tel:+27213305781";

export function StickyCallBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center p-3 transition-transform duration-300 sm:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <a
        href={PHONE_HREF}
        className="flex w-full max-w-md items-center justify-center gap-3 rounded-2xl bg-orange-500 px-8 py-4 text-base font-bold text-white shadow-[0_-4px_24px_rgba(249,115,22,0.4),0_0_0_1px_rgba(255,255,255,0.05),inset_0_1px_0_rgba(255,255,255,0.15)] transition-all active:translate-y-[2px] active:shadow-[0_-2px_8px_rgba(249,115,22,0.3)]"
      >
        <Phone className="h-5 w-5" />
        Call Now — 24/7
      </a>
    </div>
  );
}
