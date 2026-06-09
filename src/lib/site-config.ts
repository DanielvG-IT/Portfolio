import type { Metadata } from "next";

const FALLBACK_SITE_URL = "https://danielvanginneken.nl";

export const siteConfig = {
  name: "Daniël van Ginneken",
  applicationName: "Daniël van Ginneken Portfolio",
  description:
    "Early-career software developer with infrastructure roots, focused on .NET, TypeScript, React, and systems-aware software development.",
  descriptionNl:
    "Early-career software developer met infrastructuurroots, gericht op .NET, TypeScript, React en systems-aware software development.",
  keywords: [
    "Daniël van Ginneken",
    "Portfolio",
    "Software developer",
    "Infrastructure roots",
    "Systems thinking",
    ".NET",
    "C#",
    "Next.js",
    "TypeScript",
    "React",
    "API development",
  ],
  authors: [{ name: "Daniël van Ginneken", url: FALLBACK_SITE_URL }],
  twitterHandle: "@danielvanginneken",
  sameAs: [
    "https://www.linkedin.com/in/danielvanginneken",
    "https://github.com/DanielvG-IT",
  ],
};

export function getSiteUrl(): URL {
  const raw = process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_SITE_URL;

  try {
    return new URL(raw);
  } catch {
    return new URL(FALLBACK_SITE_URL);
  }
}

export function absoluteUrl(pathname: string): string {
  const base = getSiteUrl();
  return new URL(pathname, base).toString();
}

export function getDescription(locale: string): string {
  return locale === "nl" ? siteConfig.descriptionNl : siteConfig.description;
}

export function generatePageMetadata(
  locale: string,
  path: string,
  title: string,
  description: string,
): Metadata {
  const ogImageUrl = absoluteUrl(
    `/api/og?title=${encodeURIComponent(title)}&subtitle=${encodeURIComponent(description.slice(0, 160))}`,
  );
  const ogLocale = locale === "nl" ? "nl_NL" : "en_US";
  const alternateLocale = locale === "nl" ? "en_US" : "nl_NL";

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: {
        "nl-NL": `/nl${path}`,
        "en-US": `/en${path}`,
        "x-default": `/nl${path}`,
      },
    },
    openGraph: {
      type: "website",
      url: absoluteUrl(`/${locale}${path}`),
      siteName: siteConfig.applicationName,
      locale: ogLocale,
      alternateLocale: [alternateLocale],
      title,
      description,
      images: [{ url: ogImageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: siteConfig.twitterHandle,
      images: [ogImageUrl],
    },
  };
}
