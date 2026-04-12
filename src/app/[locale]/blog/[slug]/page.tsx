import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import JsonLd from "@/components/seo/JsonLd";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { absoluteUrl } from "@/lib/site-config";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/structured-data";

interface BlogPostPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((article) => ({
    locale: article.locale,
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const article = await getArticleBySlug(locale, slug);

  if (!article) {
    return {
      title: locale === "nl" ? "Niet gevonden" : "Not found",
      robots: { index: false, follow: false },
    };
  }

  const canonicalPath = `/${locale}/blog/${article.slug}`;
  const ogImageUrl = absoluteUrl(
    `/api/og?title=${encodeURIComponent(article.title)}&subtitle=${encodeURIComponent(article.excerpt)}`,
  );

  const languageAlternates: Record<string, string> = {};

  for (const currentLocale of locales) {
    languageAlternates[currentLocale === "nl" ? "nl-NL" : "en-US"] =
      `/${currentLocale}/blog/${article.slug}`;
  }

  return {
    title: article.seoTitle ?? article.title,
    description: article.seoDescription ?? article.excerpt,
    alternates: {
      canonical: canonicalPath,
      languages: languageAlternates,
    },
    openGraph: {
      type: "article",
      url: canonicalPath,
      title: article.seoTitle ?? article.title,
      description: article.seoDescription ?? article.excerpt,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt ?? article.publishedAt,
      authors: [article.authorName],
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle ?? article.title,
      description: article.seoDescription ?? article.excerpt,
      images: [ogImageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const article = await getArticleBySlug(locale as Locale, slug);

  if (!article) {
    notFound();
  }

  const canonicalUrl = absoluteUrl(`/${locale}/blog/${article.slug}`);

  const articleSchema = articleJsonLd(article, canonicalUrl);
  const breadcrumbSchema = breadcrumbJsonLd([
    {
      name: locale === "nl" ? "Home" : "Home",
      url: absoluteUrl(`/${locale}`),
    },
    {
      name: "Blog",
      url: absoluteUrl(`/${locale}/blog`),
    },
    {
      name: article.title,
      url: canonicalUrl,
    },
  ]);

  return (
    <main className="px-page-x-sm pb-section-sm pt-[140px] md:px-page-x">
      <article className="mx-auto max-w-[880px]">
        <header>
          <p className="text-label uppercase text-ink-3">
            {new Date(article.publishedAt).toLocaleDateString(
              locale === "nl" ? "nl-NL" : "en-US",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
              },
            )}
          </p>

          <h1 className="mt-4 font-display text-display-lg font-normal text-ink">
            {article.title}
          </h1>

          <p className="mt-5 max-w-[760px] text-body-lg text-ink-2">
            {article.excerpt}
          </p>
        </header>

        <div className="relative mt-10 h-[420px] overflow-hidden rounded-card-sm">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            sizes="(min-width: 1024px) 880px, 100vw"
            className="object-cover"
            priority
          />
        </div>

        <section className="mt-10 space-y-5">
          {article.content.map((paragraph) => (
            <p key={paragraph} className="text-body-md text-ink-2">
              {paragraph}
            </p>
          ))}
        </section>
      </article>

      <JsonLd id="article-schema" data={articleSchema} />
      <JsonLd id="breadcrumb-schema" data={breadcrumbSchema} />
    </main>
  );
}
