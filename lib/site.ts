import type { Metadata } from "next";

import { enSite } from "@/content/site/en";
import { nlSite } from "@/content/site/nl";
import type { Locale, RouteKey, SiteDictionary } from "@/types/site";

export const locales = ["nl", "en"] as const;
export const defaultLocale: Locale = "nl";
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://danielvanginneken.nl";
export const personName = "Daniël van Ginneken";
export const personEmail = "daniel@danielvanginneken.nl";
export const personLocation = "North Brabant, the Netherlands";
export const metadataImage = {
  width: 1200,
  height: 630,
  alt: "Daniël van Ginneken portfolio",
} as const;

export const localeMetadata = {
  nl: {
    htmlLang: "nl",
    ogLocale: "nl_NL",
    hrefLang: "nl-NL",
  },
  en: {
    htmlLang: "en",
    ogLocale: "en_GB",
    hrefLang: "en",
  },
} as const satisfies Record<
  Locale,
  {
    htmlLang: string;
    ogLocale: string;
    hrefLang: string;
  }
>;

export const routeMap = {
  home: "",
  about: "about",
  projects: "projects",
  journey: "journey",
  resume: "resume",
  contact: "contact",
} as const satisfies Record<RouteKey, string>;

const dictionaries: Record<Locale, SiteDictionary> = {
  nl: nlSite,
  en: enSite,
};

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "nl" || value === "en";
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export function getLocalizedPath(locale: Locale, route: RouteKey) {
  const segment = routeMap[route];

  return segment ? `/${locale}/${segment}` : `/${locale}`;
}

export function getAbsoluteUrl(path: string) {
  return `${siteUrl}${path}`;
}

export function getMetadataImageUrl(
  locale: Locale,
  kind: "opengraph" | "twitter" = "opengraph",
) {
  return getAbsoluteUrl(getLocalizedPath(locale, "home")) + `/${kind}-image`;
}

export function getAlternateLanguageUrls(route: RouteKey) {
  return {
    "nl-NL": getAbsoluteUrl(getLocalizedPath("nl", route)),
    en: getAbsoluteUrl(getLocalizedPath("en", route)),
    "x-default": getAbsoluteUrl(getLocalizedPath(defaultLocale, route)),
  };
}

export function buildPageMetadata({
  locale,
  title,
  description,
  route,
}: {
  locale: Locale;
  title: string;
  description: string;
  route: RouteKey;
}): Metadata {
  const localizedPath = getLocalizedPath(locale, route);
  const localeInfo = localeMetadata[locale];

  return {
    title,
    description,
    alternates: {
      canonical: getAbsoluteUrl(localizedPath),
      languages: getAlternateLanguageUrls(route),
    },
    openGraph: {
      type: "website",
      siteName: personName,
      title,
      description,
      url: getAbsoluteUrl(localizedPath),
      locale: localeInfo.ogLocale,
      alternateLocale: [localeMetadata[locale === "nl" ? "en" : "nl"].ogLocale],
      images: [
        {
          url: getMetadataImageUrl(locale, "opengraph"),
          width: metadataImage.width,
          height: metadataImage.height,
          alt: metadataImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: getMetadataImageUrl(locale, "twitter"),
          alt: metadataImage.alt,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
