import { socialLinks } from "@/content/socials";
import {
  getAbsoluteUrl,
  getLocalizedPath,
  personEmail,
  personLocation,
  personName,
} from "@/lib/site";
import type { Locale, SiteDictionary } from "@/types/site";

interface StructuredDataProps {
  locale: Locale;
  dictionary: SiteDictionary;
}

export function StructuredData({
  locale,
  dictionary,
}: StructuredDataProps) {
  const sameAs = socialLinks
    .map((link) => link.href)
    .filter((href) => href.startsWith("https://"));

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${getAbsoluteUrl(getLocalizedPath(locale, "home"))}#person`,
    name: personName,
    url: getAbsoluteUrl(getLocalizedPath(locale, "home")),
    image: getAbsoluteUrl("/assets/Daniel-picture.png"),
    email: `mailto:${personEmail}`,
    address: {
      "@type": "PostalAddress",
      addressRegion: "North Brabant",
      addressCountry: "NL",
    },
    description: dictionary.meta.home.description,
    knowsAbout: [
      "Software development",
      "Next.js",
      "TypeScript",
      "React",
      "Linux",
      "Networking",
      "Troubleshooting",
      "Infrastructure",
    ],
    jobTitle:
      locale === "nl"
        ? "Software developer met infrastructuurroots"
        : "Software developer with infrastructure roots",
    sameAs,
    homeLocation: {
      "@type": "Place",
      name: personLocation,
    },
  };

  const webSiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${getAbsoluteUrl(getLocalizedPath(locale, "home"))}#website`,
    name: personName,
    url: getAbsoluteUrl(getLocalizedPath(locale, "home")),
    inLanguage: locale,
    description: dictionary.meta.home.description,
    publisher: {
      "@id": `${getAbsoluteUrl(getLocalizedPath(locale, "home"))}#person`,
    },
  };

  const jsonLd = JSON.stringify([personJsonLd, webSiteJsonLd]).replace(
    /</g,
    "\\u003c",
  );

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
}
