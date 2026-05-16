import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { headers } from "next/headers";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://qawave.ai";

export const metadata: Metadata = {
  title: {
    default: "QAWave — Ride the AI wave in QA",
    template: "%s | QAWave",
  },
  description:
    "Custom AI agents that live in your CI/CD. Generate tests, heal flakiness, triage bugs 24/7. Book a 20-min discovery call.",
  keywords: [
    "AI test automation",
    "flaky test detection",
    "QA agents",
    "test automation AI",
    "Claude QA agent",
    "agentic testing",
    "QAWave",
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    languages: {
      en: "/en",
      cs: "/cs",
    },
  },
  openGraph: {
    type: "website",
    siteName: "QAWave",
    title: "QAWave — Ride the AI wave in QA",
    description:
      "Custom AI agents that live in your CI/CD. Generate tests, heal flakiness, triage bugs 24/7.",
    url: siteUrl,
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "QAWave — Ride the AI wave in QA",
    description:
      "Custom AI agents that live in your CI/CD. Generate tests, heal flakiness, triage bugs 24/7.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "QAWave",
  description:
    "Custom AI agents that live in your CI/CD. Generate tests, heal flakiness, triage bugs 24/7.",
  url: siteUrl,
  logo: `${siteUrl}/favicon.svg`,
  sameAs: ["https://github.com/qawave", "https://x.com/qawave"],
  serviceType: "AI-native QA Studio",
  areaServed: "Worldwide",
  knowsAbout: [
    "Agentic AI Testing",
    "Test Automation",
    "QA Engineering",
    "Autonomous Testing",
    "Software Quality Assurance",
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Detect locale from middleware-set header so /design/* (locale-free)
  // and /<locale>/* both render with a correct <html lang>.
  const h = await headers();
  const headerLocale = h.get("x-next-intl-locale");
  const lang = headerLocale === "cs" ? "cs" : "en";

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
