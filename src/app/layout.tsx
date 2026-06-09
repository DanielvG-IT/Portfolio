import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";

import JsonLd from "@/components/seo/JsonLd";
import ThemeProvider from "@/components/ui/ThemeProvider";
import {
  absoluteUrl,
  getDescription,
  getSiteUrl,
  siteConfig,
} from "@/lib/site-config";
import { personJsonLd, websiteJsonLd } from "@/lib/structured-data";

import "./globals.css";

// Self-hosted at build time (served same-origin from /_next/static) so the
// strict CSP/COEP in next.config.ts needs no Google Fonts allowance. Exposed
// as a CSS variable that Tailwind's font-sans/display tokens resolve.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const metadataBase = getSiteUrl();

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Daniël van Ginneken — Portfolio",
    template: "%s | Daniël van Ginneken",
  },
  description: siteConfig.description,
  applicationName: siteConfig.applicationName,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: "Daniël van Ginneken",
  publisher: "Daniël van Ginneken",
  alternates: {
    canonical: absoluteUrl("/nl"),
    languages: {
      "nl-NL": "/nl",
      "en-US": "/en",
      "x-default": "/nl",
    },
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.applicationName,
    title: "Daniël van Ginneken — Portfolio",
    description: siteConfig.description,
    locale: "nl_NL",
    alternateLocale: ["en_US"],
    images: [
      {
        url: absoluteUrl(
          `/api/og?title=${encodeURIComponent("Daniël van Ginneken")}&subtitle=${encodeURIComponent(siteConfig.description)}`,
        ),
        width: 1200,
        height: 630,
        alt: "Daniël van Ginneken Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniël van Ginneken — Portfolio",
    description: siteConfig.description,
    creator: siteConfig.twitterHandle,
    images: [
      absoluteUrl(
        `/api/og?title=${encodeURIComponent("Daniël van Ginneken")}&subtitle=${encodeURIComponent(siteConfig.description)}`,
      ),
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

// Next 16 requires theme-color in the viewport export, not metadata. Defined
// once here on the root layout; inherited by every route.
export const viewport: Viewport = {
  themeColor: "#0A84FF",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const locale = headersList.get("x-locale") ?? "nl";
  const description = getDescription(locale);

  return (
    <html
      lang={locale}
      className={`h-full ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta
          name="description"
          content={description}
          key="locale-description"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className="min-h-full bg-bg text-text font-sans">
        <ThemeProvider>
          <JsonLd id="person-schema" data={personJsonLd()} />
          <JsonLd id="website-schema" data={websiteJsonLd()} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
