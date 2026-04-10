import type { Metadata } from "next";

import { enSite } from "@/content/site/en";
import { nlSite } from "@/content/site/nl";
import type { Locale, RouteKey, SiteDictionary } from "@/types/site";

export const locales = ["nl", "en"] as const;
export const defaultLocale: Locale = "nl";
export const siteUrl = "https://danielvanginneken.nl";

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

  return {
    title,
    description,
    alternates: {
      canonical: getAbsoluteUrl(localizedPath),
      languages: {
        nl: getAbsoluteUrl(getLocalizedPath("nl", route)),
        en: getAbsoluteUrl(getLocalizedPath("en", route)),
      },
    },
    openGraph: {
      title,
      description,
      url: getAbsoluteUrl(localizedPath),
      locale,
      alternateLocale: locale === "nl" ? "en" : "nl",
    },
    twitter: {
      title,
      description,
    },
  };
}
