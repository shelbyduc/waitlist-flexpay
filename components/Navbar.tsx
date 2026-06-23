"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-2xl px-4 py-3 transition-all duration-300 sm:px-6 ${
          scrolled ? "glass mx-3 shadow-lg sm:mx-auto" : ""
        }`}
      >
        <Link href="/" className="text-white">
          <Logo />
        </Link>

        <div className="hidden items-center gap-8 text-sm text-[var(--color-muted)] md:flex">
          <a href="/#features" className="transition-colors hover:text-white">{t.nav.features}</a>
          <a href="/#how" className="transition-colors hover:text-white">{t.nav.how}</a>
          <a href="/#faq" className="transition-colors hover:text-white">{t.nav.faq}</a>
        </div>

        <a
          href="/#waitlist"
          className="btn-primary rounded-full px-4 py-2 text-sm font-medium"
        >
          {t.nav.join}
        </a>
      </nav>
    </header>
  );
}
