import type { Metadata } from "next";
import { LegalShell, Section } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Cookie Policy · Flexpay",
  description: "How Flexpay uses cookies and local storage.",
};

export default function CookiesPage() {
  return (
    <LegalShell title="Cookie Policy" updated="June 18, 2026">
      <p>
        This Cookie Policy explains how Flexpay uses cookies and similar technologies (such as
        browser local storage) on our website.
      </p>

      <Section title="1. What we use">
        <p>
          We keep things minimal. Today the site uses a single piece of{" "}
          <strong>local storage</strong> to remember your chosen language so the site loads in your
          preferred language on your next visit. We do not currently use third-party advertising or
          cross-site tracking cookies.
        </p>
      </Section>

      <Section title="2. Why we use it">
        <ul className="list-disc space-y-1.5 ps-6">
          <li>
            <strong>Essential / preference:</strong> remembering your language selection so you don&rsquo;t
            have to choose it again.
          </li>
          <li>
            <strong>Analytics (if enabled):</strong> aggregated, privacy-respecting metrics that help us
            understand how the waitlist is performing.
          </li>
        </ul>
      </Section>

      <Section title="3. Managing cookies">
        <p>
          You can clear local storage and cookies at any time through your browser settings. Doing so
          will reset your saved language preference, after which the site will again detect your
          browser&rsquo;s language automatically.
        </p>
      </Section>

      <Section title="4. Changes">
        <p>
          If we introduce additional cookies in the future, we will update this policy and, where
          required, ask for your consent.
        </p>
      </Section>

      <Section title="5. Contact">
        <p>
          Questions about cookies? Email{" "}
          <a className="text-[var(--color-brand-light)] hover:underline" href="mailto:privacy@flexpay.app">
            privacy@flexpay.app
          </a>
          .
        </p>
      </Section>
    </LegalShell>
  );
}
