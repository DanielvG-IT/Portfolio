import type { Metadata, Viewport } from "next";
import { Instrument_Sans, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";

import { DocumentLocaleSync } from "@/components/providers/document-locale-sync";
import { ThemeProvider } from "@/components/providers/theme-provider";
import {
  defaultLocale,
  getAlternateLanguageUrls,
  getMetadataImageUrl,
  localeMetadata,
  metadataImage,
  personName,
  siteUrl,
} from "@/lib/site";

import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: personName,
    template: `%s | ${personName}`,
  },
  description:
    "Bilingual portfolio of Daniël van Ginneken, a software developer with infrastructure roots, built for internships, long-term credibility, and serious technical growth.",
  applicationName: personName,
  authors: [{ name: personName, url: siteUrl }],
  creator: personName,
  publisher: personName,
  category: "technology",
  keywords: [
    "Daniël van Ginneken",
    "Daniel van Ginneken",
    "software developer",
    "software developer netherlands",
    "software development student",
    "software development internship",
    "portfolio",
    "Next.js portfolio",
    "infrastructure roots",
    "system support",
    "Linux",
    "networking",
    "Netherlands",
    "Nederland",
    "software developer nederland",
    "software development student netherlands",
    "portfolio software developer",
    "infrastructuurroots",
  ],
  referrer: "origin-when-cross-origin",
  manifest: "/manifest.webmanifest",
  alternates: {
    languages: getAlternateLanguageUrls("home"),
  },
  openGraph: {
    type: "website",
    siteName: personName,
    locale: localeMetadata.nl.ogLocale,
    alternateLocale: [localeMetadata.en.ogLocale],
    title: personName,
    description:
      "Software developer with infrastructure roots, building modern software on top of strong technical foundations.",
    url: `${siteUrl}/nl`,
    images: [
      {
        url: getMetadataImageUrl(defaultLocale, "opengraph"),
        width: metadataImage.width,
        height: metadataImage.height,
        alt: metadataImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: personName,
    description:
      "Software developer with infrastructure roots, building modern software on top of strong technical foundations.",
    images: [
      {
        url: getMetadataImageUrl(defaultLocale, "twitter"),
        alt: metadataImage.alt,
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eef3f8" },
    { media: "(prefers-color-scheme: dark)", color: "#090e14" },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang={localeMetadata[defaultLocale].htmlLang}
      suppressHydrationWarning>
      <body
        className={`${instrumentSans.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange>
          <DocumentLocaleSync />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
