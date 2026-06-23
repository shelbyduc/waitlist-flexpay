"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Reveal } from "./Reveal";

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="how" className="relative px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-[var(--color-brand-light)]">
            {t.how.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{t.how.title}</h2>
          <p className="mt-4 text-[var(--color-muted)]">{t.how.subtitle}</p>
        </Reveal>

        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          {/* Connecting line on desktop */}
          <div className="absolute inset-x-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent md:block" />

          {t.how.steps.map((step, i) => (
            <Reveal key={i} delay={i * 0.12} className="relative text-center">
              <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--color-surface)] text-2xl font-semibold text-gradient ring-1 ring-[var(--color-border)]">
                {i + 1}
              </div>
              <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-[var(--color-muted)]">
                {step.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
