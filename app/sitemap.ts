import type { MetadataRoute } from "next";

import {
  defaultLocale,
  getAbsoluteUrl,
  getAlternateLanguageUrls,
  getLocalizedPath,
  locales,
  routeMap,
} from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = Object.keys(routeMap) as Array<keyof typeof routeMap>;

  return locales.flatMap((locale) =>
    routes.map((route) => {
      const path = getLocalizedPath(locale, route);
      const isHome = route === "home";
      const isDefaultLocale = locale === defaultLocale;

      return {
        url: getAbsoluteUrl(path),
        lastModified: now,
        changeFrequency: isHome ? "monthly" : "weekly",
        priority: isHome ? (isDefaultLocale ? 1 : 0.9) : route === "contact" ? 0.7 : 0.8,
        alternates: {
          languages: getAlternateLanguageUrls(route),
        },
      };
    }),
  );
}
