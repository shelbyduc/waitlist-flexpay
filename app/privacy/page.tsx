import type { Metadata } from "next";
import { LegalShell, Section } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy · Flexpay",
  description: "How Flexpay collects, uses, and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" updated="June 18, 2026">
      <p>
        Your privacy matters to us. This Privacy Policy explains what information Flexpay
        (&ldquo;we&rdquo;, &ldquo;us&rdquo;) collects when you join our waitlist, how we use it, and
        the choices you have.
      </p>

      <Section title="1. Information we collect">
        <p>
          When you join the waitlist we collect the <strong>email address</strong> you submit, your
          preferred <strong>language</strong>, and basic technical metadata such as the time of
          submission. We do not ask for payment details, government IDs, or sensitive personal data
          at this stage.
        </p>
      </Section>

      <Section title="2. How we use your information">
        <p>We use the information you provide to:</p>
        <ul className="list-disc space-y-1.5 ps-6">
          <li>notify you when early access becomes available;</li>
          <li>send occasional product updates related to the launch;</li>
          <li>understand demand by region and language;</li>
          <li>prevent abuse and keep the waitlist secure.</li>
        </ul>
      </Section>

      <Section title="3. Where your data is stored">
        <p>
          Waitlist data is stored securely using Supabase, our database and infrastructure provider.
          Data is encrypted in transit and at rest. We retain your information only as long as needed
          to operate the waitlist and the launch communications described above.
        </p>
      </Section>

      <Section title="4. Sharing">
        <p>
          We do <strong>not</strong> sell your personal data. We share it only with service providers
          who help us operate the waitlist (such as our infrastructure and email providers), under
          agreements that require them to protect it, or where required by law.
        </p>
      </Section>

      <Section title="5. Your rights">
        <p>
          Depending on your location, you may have the right to access, correct, or delete your
          personal data, and to withdraw consent at any time. Every email we send includes an
          unsubscribe link, and you can request deletion by contacting us.
        </p>
      </Section>

      <Section title="6. Cookies">
        <p>
          This site uses minimal local storage to remember your language preference. For details,
          see our{" "}
          <a className="text-[var(--color-brand-light)] hover:underline" href="/cookies">
            Cookie Policy
          </a>
          .
        </p>
      </Section>

      <Section title="7. Contact">
        <p>
          To exercise your rights or ask a privacy question, email{" "}
          <a className="text-[var(--color-brand-light)] hover:underline" href="mailto:privacy@flexpay.app">
            privacy@flexpay.app
          </a>
          .
        </p>
      </Section>
    </LegalShell>
  );
}
