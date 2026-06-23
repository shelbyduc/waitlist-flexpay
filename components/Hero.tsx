"use client";

import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { WaitlistForm } from "./WaitlistForm";
import { ProductPreview } from "./ProductPreview";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="waitlist" className="relative px-4 pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div className="mx-auto max-w-3xl text-center">
        <div className="animate-fade-up flex justify-center" style={{ animationDelay: "0.05s" }}>
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-[var(--color-muted)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
            </span>
            {t.hero.badge}
          </span>
        </div>

        <h1
          className="animate-fade-up mt-7 text-[2.2rem] font-semibold leading-[1.06] tracking-[-0.02em] sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "0.12s" }}
        >
          {t.hero.titlePre}
          <span className="text-gradient">{t.hero.titleHighlight}</span>
          {t.hero.titlePost}
        </h1>

        <p
          className="animate-fade-up mx-auto mt-6 max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg"
          style={{ animationDelay: "0.2s" }}
        >
          {t.hero.subtitle}
        </p>

        <div className="animate-fade-up mt-9" style={{ animationDelay: "0.28s" }}>
          <WaitlistForm />
        </div>

        <div
          className="animate-fade-up mt-8 flex items-center justify-center gap-2.5 text-sm text-[var(--color-muted)]"
          style={{ animationDelay: "0.36s" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand)]" />
          <p>{t.hero.trustedBy}</p>
        </div>
      </div>

      <div className="animate-fade-up mt-20 sm:mt-24" style={{ animationDelay: "0.46s" }}>
        <ProductPreview />
      </div>
    </section>
  );
}
