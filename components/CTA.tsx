"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { WaitlistForm } from "./WaitlistForm";
import { Reveal } from "./Reveal";

export function CTA() {
  const { t } = useLanguage();

  return (
    <Reveal className="relative px-4 py-20 sm:py-28">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-12 sm:py-20">
        {/* Gradient glow backdrop */}
        <div className="absolute inset-0 -z-10 bg-[var(--color-surface)]" />
        <div
          className="absolute inset-x-0 -top-24 -z-10 h-64 opacity-70 blur-[90px]"
          style={{ background: "radial-gradient(ellipse at center, #ff4dd8 0%, transparent 70%)" }}
        />
        <div className="absolute inset-0 -z-10 rounded-[2rem] ring-1 ring-inset ring-[var(--color-border)]" />

        <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          {t.cta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[var(--color-muted)]">{t.cta.subtitle}</p>

        <div className="mt-9">
          <WaitlistForm />
        </div>
      </div>
    </Reveal>
  );
}
