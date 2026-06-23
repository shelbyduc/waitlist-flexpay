# Flexpay — Waitlist

A premium, fully-translated waitlist landing page for **Flexpay** — payment infrastructure for underserved markets (think "Stripe for the countries the global platforms don't serve yet"). In private development. Built with Next.js (App Router), TypeScript, Tailwind CSS v4, and Supabase. Distinctive "Aurora Plum" identity (deep plum base + electric coral-pink and lilac), deliberately not the usual fintech blue.

![Flexpay](https://img.shields.io/badge/Next.js-15-black) ![Tailwind](https://img.shields.io/badge/Tailwind-v4-38bdf8) ![Supabase](https://img.shields.io/badge/Supabase-emails-3ecf8e)

## ✨ Features

- **Stunning fintech design** — animated aurora gradient background, glassmorphism, the Stripe "blurple" accent, smooth scroll-reveal animations.
- **Automatic translation** — detects the visitor's **country by IP geolocation** (via geojs.io, no API key) and renders the whole page in their language, falling back to browser language, then English. The choice is saved to a cookie + localStorage. No language button to fiddle with. **14 languages** (English, Spanish, French, German, Portuguese, Italian, Dutch, Russian, Turkish, Arabic (RTL), Hindi, Chinese, Japanese, Korean).
- **Supabase-backed waitlist** — emails are stored in Supabase with the visitor's language and source. Duplicate detection, inline validation, loading/success/error states.
- **Multiple pages** — Landing, Terms of Service, Privacy Policy, Cookie Policy.
- **Responsive + accessible** — works on mobile, keyboard-navigable, respects `prefers-reduced-motion`, RTL-aware.

## 🚀 Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Environment variables

`.env.local` is already created with your Supabase project. To use a different project, copy the example:

```bash
cp .env.example .env.local
```

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-publishable-or-anon-key
```

### 3. Create the Supabase table

Open your Supabase dashboard → **SQL Editor** → paste the contents of [`supabase-setup.sql`](./supabase-setup.sql) → **Run**.

This creates a `waitlist` table with Row Level Security configured so the public site can **insert** signups but never **read** the list.

### 4. Run it

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 📦 Build for production

```bash
npm run build
npm start
```

Deploy easily to **Vercel**: push to a Git repo, import it, and add the two `NEXT_PUBLIC_*` environment variables.

## 🌍 Adding a language

1. Add a new dictionary entry (matching the `en` shape) in `lib/i18n/translations.ts`.
2. Add a row to the `languages` array (with `dir: "rtl"` for right-to-left languages).

Then map the relevant country codes to it in the `countryToLang` table in the same file. Auto-detection picks it up automatically.

## 🗂 Project structure

```
app/
  layout.tsx          Root layout, fonts, <LanguageProvider>
  page.tsx            Landing page
  terms/ privacy/ cookies/   Legal pages
  globals.css         Design system (Tailwind v4 theme + animations)
components/            Navbar, Hero, Features, FAQ, CTA, Footer, WaitlistForm, …
lib/
  supabase.ts         Supabase client
  i18n/               translations + LanguageProvider
supabase-setup.sql    Run once in Supabase
```

## 🔒 A note on keys

`NEXT_PUBLIC_SUPABASE_ANON_KEY` is a **publishable** key — it is meant to be exposed in the browser. Security is enforced by the Row Level Security policy in `supabase-setup.sql`, which is why the table allows inserts but no reads.
