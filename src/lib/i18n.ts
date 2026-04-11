import en from "@/content/en.json";
import nl from "@/content/nl.json";

export const locales = ["nl", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "nl";

export type Messages = typeof nl;

const messagesByLocale: Record<Locale, Messages> = {
  nl,
  en,
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getMessages(locale: Locale): Messages {
  return messagesByLocale[locale];
}

export function localePath(locale: Locale, href: string): string {
  if (!href || href === "/") {
    return `/${locale}`;
  }

  const normalized = href.startsWith("/") ? href : `/${href}`;
  return `/${locale}${normalized}`;
}

export function switchLocaleInPath(pathname: string, locale: Locale): string {
  const segments = pathname.split("/");

  if (segments.length > 1 && isLocale(segments[1])) {
    segments[1] = locale;
  } else {
    segments.splice(1, 0, locale);
  }

  return segments.join("/") || `/${locale}`;
}
