"use client";

import Link from "next/link";
import { Logo } from "./Logo";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--color-border)] px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo className="text-white" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--color-muted)]">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">{t.footer.product}</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-[var(--color-muted)]">
              <li><a href="/#features" className="transition-colors hover:text-white">{t.footer.features}</a></li>
              <li><a href="/#how" className="transition-colors hover:text-white">{t.nav.how}</a></li>
              <li><a href="/#faq" className="transition-colors hover:text-white">{t.footer.faq}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">{t.footer.legal}</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-[var(--color-muted)]">
              <li><Link href="/terms" className="transition-colors hover:text-white">{t.footer.terms}</Link></li>
              <li><Link href="/privacy" className="transition-colors hover:text-white">{t.footer.privacy}</Link></li>
              <li><Link href="/cookies" className="transition-colors hover:text-white">{t.footer.cookies}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--color-border)] pt-8 text-sm text-[var(--color-muted)] sm:flex-row">
          <p>© {year} Flexpay. {t.footer.rights}</p>
          <div className="flex items-center gap-5">
            <Link href="/terms" className="transition-colors hover:text-white">{t.footer.terms}</Link>
            <Link href="/privacy" className="transition-colors hover:text-white">{t.footer.privacy}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
