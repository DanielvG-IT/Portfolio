const FALLBACK_SITE_URL = "https://danielvanginneken.nl";

export const siteConfig = {
  name: "Daniël van Ginneken",
  applicationName: "Daniël van Ginneken Portfolio",
  description:
    "Early-career software developer with infrastructure roots, focused on .NET, TypeScript, React, and systems-aware software development.",
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
    "https://www.linkedin.com/in/daniel-v-ginneken",
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
