import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flexpay · Payments for underserved markets",
  description:
    "Flexpay helps startups and businesses accept and collect payments in countries that global platforms don't serve yet. Join the waitlist for early access.",
  keywords: [
    "payments",
    "payment API",
    "fintech",
    "emerging markets",
    "underserved markets",
    "Flexpay",
    "waitlist",
  ],
  openGraph: {
    title: "Flexpay · Payments for underserved markets",
    description:
      "Flexpay helps startups and businesses accept and collect payments in countries that global platforms don't serve yet. Join the waitlist for early access.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flexpay · Payments for underserved markets",
    description:
      "Flexpay helps startups and businesses accept and collect payments in countries that global platforms don't serve yet.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
