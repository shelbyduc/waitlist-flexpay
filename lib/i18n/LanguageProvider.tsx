"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import {
  dictionaries,
  languages,
  resolveLang,
  langFromCountry,
  DEFAULT_LANG,
  type Dictionary,
} from "./translations";

type LanguageContextValue = {
  lang: string;
  setLang: (code: string) => void;
  t: Dictionary;
  dir: "ltr" | "rtl";
  ready: boolean;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "flexpay-lang";
const COOKIE_KEY = "flexpay_lang";

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  return match ? decodeURIComponent(match[1]) : null;
}

function writeCookie(name: string, value: string) {
  if (typeof document === "undefined") return;
  // One year, site-wide.
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=31536000; samesite=lax`;
}

// Resolve country -> language via IP geolocation. No API key required.
async function detectCountryLang(): Promise<string | null> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2500);
    const res = await fetch("https://get.geojs.io/v1/ip/country.json", {
      signal: controller.signal,
    });
    clearTimeout(timeout);
    if (!res.ok) return null;
    const data = (await res.json()) as { country?: string };
    return langFromCountry(data.country);
  } catch {
    return null;
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Render the default first so SSR matches the initial client render
  // (no hydration mismatch); detection runs in the effect below.
  const [lang, setLangState] = useState<string>(DEFAULT_LANG);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    function apply(code: string, persist: boolean) {
      const resolved = resolveLang(code);
      if (cancelled) return;
      setLangState(resolved);
      setReady(true);
      if (persist) {
        try {
          localStorage.setItem(STORAGE_KEY, resolved);
        } catch {
          /* private mode — ignore */
        }
        writeCookie(COOKIE_KEY, resolved);
      }
    }

    // 1. Honor a previous choice (cookie or localStorage).
    const saved = readCookie(COOKIE_KEY) ?? localStorage.getItem(STORAGE_KEY);
    if (saved) {
      apply(saved, false);
      return;
    }

    // 2. Detect by location, then fall back to browser language.
    detectCountryLang().then((byCountry) => {
      if (cancelled) return;
      const fallback = navigator.language ?? navigator.languages?.[0];
      apply(byCountry ?? fallback ?? DEFAULT_LANG, true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  const dir = languages.find((l) => l.code === lang)?.dir ?? "ltr";

  // Keep the document's lang/dir in sync for accessibility and RTL layout.
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const setLang = useCallback((code: string) => {
    const resolved = resolveLang(code);
    setLangState(resolved);
    try {
      localStorage.setItem(STORAGE_KEY, resolved);
    } catch {
      /* ignore */
    }
    writeCookie(COOKIE_KEY, resolved);
  }, []);

  const value: LanguageContextValue = {
    lang,
    setLang,
    t: dictionaries[lang] ?? dictionaries[DEFAULT_LANG],
    dir,
    ready,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
