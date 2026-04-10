import type { MetadataRoute } from "next";

import { locales, routeMap, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = Object.values(routeMap);

  return locales.flatMap((locale) =>
    paths.map((path) => {
      const suffix = path ? `/${path}` : "";

      return {
        url: `${siteUrl}/${locale}${suffix}`,
        lastModified: now,
      };
    }),
  );
}
