"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

type Status = "idle" | "loading" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function WaitlistForm() {
  const { t, lang } = useLanguage();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = email.trim().toLowerCase();

    if (!EMAIL_RE.test(value)) {
      setStatus("error");
      setMessage(t.hero.errInvalid);
      return;
    }

    setStatus("loading");
    setMessage("");

    const { error } = await supabase.from("waitlist").insert({
      email: value,
      language: lang,
      source: "landing",
    });

    if (error) {
      // 23505 = unique_violation (email already exists).
      if (error.code === "23505") {
        setStatus("error");
        setMessage(t.hero.errDuplicate);
      } else {
        setStatus("error");
        setMessage(t.hero.errGeneric);
        console.error("Waitlist insert failed:", error);
      }
      return;
    }

    setStatus("success");
    setEmail("");
  }

  if (status === "success") {
    return (
      <div className="glass animate-fade-up mx-auto flex max-w-md items-center gap-3 rounded-2xl px-5 py-4 text-left">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-accent)]">
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="m5 13 4 4L19 7" />
          </svg>
        </span>
        <div>
          <p className="font-semibold text-white">{t.hero.success}</p>
          <p className="text-sm text-[var(--color-muted)]">{t.hero.successDesc}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <input
            type="email"
            inputMode="email"
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            placeholder={t.hero.emailPlaceholder}
            aria-label={t.hero.emailPlaceholder}
            className="glass h-12 w-full rounded-full px-5 text-sm text-white placeholder:text-[var(--color-muted)] outline-none transition-all focus:border-[var(--color-brand-light)] focus:ring-2 focus:ring-[var(--color-brand)]/40"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold"
        >
          {status === "loading" ? t.hero.ctaLoading : t.hero.cta}
        </button>
      </form>

      <p
        className={`mt-3 min-h-5 text-center text-sm transition-colors ${
          status === "error" ? "text-[var(--color-accent-pink)]" : "text-[var(--color-muted)]"
        }`}
      >
        {status === "error" ? message : t.hero.noSpam}
      </p>
    </div>
  );
}
