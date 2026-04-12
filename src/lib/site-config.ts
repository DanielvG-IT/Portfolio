const FALLBACK_SITE_URL = "https://www.danielvanginneken.nl";

export const siteConfig = {
  name: "Daniël van Ginneken",
  applicationName: "Daniël van Ginneken Portfolio",
  description:
    "Portfolio van Daniël van Ginneken met software engineering, infrastructuurroots en moderne webbouw.",
  keywords: [
    "Daniël van Ginneken",
    "Portfolio",
    "Software Development",
    "Next.js",
    "TypeScript",
    "Frontend",
    "Infrastructure",
  ],
  authors: [{ name: "Daniël van Ginneken", url: FALLBACK_SITE_URL }],
  twitterHandle: "@danielvanginneken",
  sameAs: ["https://github.com/DanielvG-IT", "https://www.linkedin.com"],
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
