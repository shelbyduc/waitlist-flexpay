import Link from "next/link";
import { Background } from "./Background";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Background />
      <Navbar />
      <main className="px-4 pt-36 pb-24 sm:pt-44">
        <article className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="text-sm text-[var(--color-muted)] transition-colors hover:text-white"
          >
            ← Flexpay
          </Link>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-3 text-sm text-[var(--color-muted)]">Last updated: {updated}</p>

          <div className="legal-prose mt-10 space-y-8 text-[var(--color-muted)]">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <div className="mt-3 space-y-3 leading-relaxed">{children}</div>
    </section>
  );
}
