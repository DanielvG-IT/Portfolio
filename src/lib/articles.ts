import { cache } from "react";

import { type Locale } from "@/lib/i18n";

export interface Article {
  slug: string;
  locale: Locale;
  title: string;
  excerpt: string;
  content: string[];
  publishedAt: string;
  updatedAt?: string;
  authorName: string;
  coverImage: string;
  seoTitle?: string;
  seoDescription?: string;
}

const articleStore: Article[] = [];

export const getAllArticles = cache(async (): Promise<Article[]> => {
  return articleStore;
});

export const getArticleBySlug = cache(
  async (locale: Locale, slug: string): Promise<Article | null> => {
    return (
      articleStore.find(
        (article) => article.locale === locale && article.slug === slug,
      ) ?? null
    );
  },
);

export const getArticlesByLocale = cache(
  async (locale: Locale): Promise<Article[]> => {
    return articleStore.filter((article) => article.locale === locale);
  },
);
