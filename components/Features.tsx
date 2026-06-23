"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Reveal } from "./Reveal";

const icons = [
  // Global
  <svg key="g" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3c2.6 2.8 2.6 15.2 0 18M12 3c-2.6 2.8-2.6 15.2 0 18" />
  </svg>,
  // Developers
  <svg key="d" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13 5l-2 14" />
  </svg>,
  // Security
  <svg key="s" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3 5 6v6c0 4.4 3 7.6 7 9 4-1.4 7-4.6 7-9V6l-7-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>,
  // Pricing
  <svg key="p" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2v20M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>,
];

// Asymmetric bento spans (applied at lg). Alternating wide/narrow tiles.
const spans = ["lg:col-span-3", "lg:col-span-2", "lg:col-span-2", "lg:col-span-3"];

export function Features() {
  const { t } = useLanguage();

  return (
    <section id="features" className="relative px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-[var(--color-brand-light)]">
            {t.features.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.features.title}
          </h2>
          <p className="mt-4 text-[var(--color-muted)]">{t.features.subtitle}</p>
        </Reveal>

        {/* Bento grid: 1 col on mobile, 2 on tablet, asymmetric 5-col on desktop */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {t.features.items.map((item, i) => (
            <Reveal key={i} delay={i * 0.08} className={spans[i]}>
              <div className="card group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 sm:p-8">
                <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-brand)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                {/* Faint number marker for an editorial, less-templated feel */}
                <span className="absolute end-6 top-5 text-5xl font-semibold text-white/[0.04]">
                  0{i + 1}
                </span>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-brand)]/25 to-[var(--color-accent)]/15 text-[var(--color-brand-light)]">
                  <span className="h-6 w-6">{icons[i]}</span>
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-[var(--color-muted)]">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Principles — what we commit to, instead of invented metrics. */}
        <Reveal>
          <div className="glass mt-5 grid gap-8 rounded-3xl p-8 sm:grid-cols-3 sm:gap-10 sm:p-10">
            {t.principles.items.map((p, i) => (
              <div key={i} className="relative ps-4">
                <span className="absolute start-0 top-1 h-[calc(100%-0.5rem)] w-0.5 rounded-full bg-gradient-to-b from-[var(--color-brand)] to-[var(--color-accent)]" />
                <h3 className="font-semibold text-white">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-muted)]">{p.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
