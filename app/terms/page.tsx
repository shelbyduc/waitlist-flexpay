import type { Metadata } from "next";
import { LegalShell, Section } from "@/components/LegalShell";

export const metadata: Metadata = {
  title: "Terms of Service · Flexpay",
  description: "The terms that govern your use of the Flexpay website and waitlist.",
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Service" updated="June 18, 2026">
      <p>
        Welcome to Flexpay. These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and
        use of the Flexpay website, waitlist, and related services (the &ldquo;Service&rdquo;). By
        joining the waitlist or using the Service, you agree to these Terms.
      </p>

      <Section title="1. The waitlist">
        <p>
          Flexpay is currently in a pre-launch phase. Joining the waitlist registers your interest
          in early access and does not create a payment-processing relationship, guarantee access,
          or constitute an offer of any financial service. Access is granted at our discretion and
          may be subject to additional terms at launch.
        </p>
      </Section>

      <Section title="2. Eligibility">
        <p>
          You must be at least 18 years old and able to form a binding contract to use the Service.
          By joining, you confirm that the information you provide is accurate and that you are
          submitting your own email address.
        </p>
      </Section>

      <Section title="3. Acceptable use">
        <p>
          You agree not to misuse the Service, including by submitting false information, attempting
          to disrupt or reverse engineer the Service, or using it for any unlawful purpose. We may
          suspend or remove any registration that violates these Terms.
        </p>
      </Section>

      <Section title="4. Intellectual property">
        <p>
          The Flexpay name, logo, and all content on this site are owned by Flexpay or its licensors
          and are protected by intellectual-property laws. You may not copy, modify, or distribute
          them without prior written permission.
        </p>
      </Section>

      <Section title="5. Disclaimers">
        <p>
          The Service is provided &ldquo;as is&rdquo; without warranties of any kind. We do not
          warrant that the Service will be uninterrupted, error-free, or available at any particular
          time. Pre-launch features and figures shown on this site are illustrative and subject to
          change.
        </p>
      </Section>

      <Section title="6. Limitation of liability">
        <p>
          To the maximum extent permitted by law, Flexpay shall not be liable for any indirect,
          incidental, or consequential damages arising from your use of the Service.
        </p>
      </Section>

      <Section title="7. Changes to these Terms">
        <p>
          We may update these Terms from time to time. Material changes will be reflected by the
          &ldquo;Last updated&rdquo; date above. Your continued use of the Service after changes
          take effect constitutes acceptance of the revised Terms.
        </p>
      </Section>

      <Section title="8. Contact">
        <p>
          Questions about these Terms? Email us at{" "}
          <a className="text-[var(--color-brand-light)] hover:underline" href="mailto:legal@flexpay.app">
            legal@flexpay.app
          </a>
          .
        </p>
      </Section>
    </LegalShell>
  );
}
