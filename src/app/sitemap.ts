import type { MetadataRoute } from "next";

import { getAllArticles } from "@/lib/articles";
import { locales } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site-config";

const staticRoutePaths = ["", "/about", "/projects", "/journey", "/contact"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getAllArticles();
  const now = new Date();
  const localesWithArticles = new Set(
    articles.map((article) => article.locale),
  );

  const rootEntry: MetadataRoute.Sitemap[number] = {
    url: absoluteUrl("/"),
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1,
  };

  const staticEntries = locales.flatMap((locale) =>
    staticRoutePaths.map((path) => {
      const localizedPath = path ? `/${locale}${path}` : `/${locale}`;

      return {
        url: absoluteUrl(localizedPath),
        lastModified: now,
        changeFrequency: path ? "monthly" : "weekly",
        priority: path ? 0.7 : 0.9,
      } satisfies MetadataRoute.Sitemap[number];
    }),
  );

  const blogIndexEntries = locales
    .filter((locale) => localesWithArticles.has(locale))
    .map(
      (locale) =>
        ({
          url: absoluteUrl(`/${locale}/blog`),
          lastModified: now,
          changeFrequency: "monthly",
          priority: 0.68,
        }) satisfies MetadataRoute.Sitemap[number],
    );

  const dynamicEntries = articles.map((article) => ({
    url: absoluteUrl(`/${article.locale}/blog/${article.slug}`),
    lastModified: new Date(article.updatedAt ?? article.publishedAt),
    changeFrequency: "monthly",
    priority: 0.64,
  })) satisfies MetadataRoute.Sitemap;

  return [rootEntry, ...staticEntries, ...blogIndexEntries, ...dynamicEntries];
}
