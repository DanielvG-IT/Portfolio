import type { Metadata } from "next";

import JsonLd from "@/components/seo/JsonLd";
import { absoluteUrl, getSiteUrl, siteConfig } from "@/lib/site-config";
import { organizationJsonLd } from "@/lib/structured-data";

import "./globals.css";

const metadataBase = getSiteUrl();
const defaultOgImage = absoluteUrl("/images/portrait.jpg");

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
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: siteConfig.applicationName,
    title: "Daniël van Ginneken — Portfolio",
    description: siteConfig.description,
    locale: "nl_NL",
    images: [
      {
        url: defaultOgImage,
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
    images: [defaultOgImage],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="h-full">
      <body className="min-h-full bg-ground text-ink font-sans">
        <JsonLd id="organization-schema" data={organizationJsonLd()} />
        {children}
      </body>
    </html>
  );
}
