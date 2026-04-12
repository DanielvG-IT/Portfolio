import type { Metadata } from "next";
import type { Route } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getArticlesByLocale } from "@/lib/articles";
import { isLocale } from "@/lib/i18n";

interface BlogIndexPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: BlogIndexPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const articles = await getArticlesByLocale(locale);
  const isEmpty = articles.length === 0;

  return {
    title: "Blog",
    description:
      locale === "nl"
        ? "Inzichten over software engineering, infrastructuur en bouwen met duurzame fundamenten."
        : "Insights on software engineering, infrastructure, and building sustainable foundations.",
    alternates: {
      canonical: `/${locale}/blog`,
    },
    robots: isEmpty ? { index: false, follow: true } : undefined,
  };
}

export default async function BlogIndexPage({ params }: BlogIndexPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const articles = await getArticlesByLocale(locale);
  const isEmpty = articles.length === 0;

  return (
    <main className="px-page-x-sm pb-section-sm pt-[140px] md:px-page-x">
      <section className="mx-auto max-w-[1280px]">
        <h1 className="font-display text-display-md font-normal text-ink">
          {locale === "nl" ? "Blog" : "Blog"}
        </h1>
        <p className="mt-4 max-w-[640px] text-body-md text-ink-2">
          {locale === "nl"
            ? "Korte artikelen over softwareontwikkeling, technische keuzes en fundamenten die meegroeien."
            : "Short articles about software development, technical decisions, and foundations that scale over time."}
        </p>

        {isEmpty ? (
          <div className="mt-10 rounded-card-sm border border-edge bg-white/55 px-6 py-8 text-body-md text-ink-2">
            {locale === "nl"
              ? "Er zijn nog geen artikelen gepubliceerd."
              : "No articles have been published yet."}
          </div>
        ) : (
          <div className="mt-10 divide-y divide-edge border-y border-edge">
            {articles.map((article) => (
              <article key={article.slug} className="py-6">
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

                <h2 className="mt-3 text-[28px] leading-[1.2] text-ink">
                  <Link
                    href={`/${locale}/blog/${article.slug}` as Route}
                    className="transition-colors hover:text-slate">
                    {article.title}
                  </Link>
                </h2>

                <p className="mt-3 max-w-[760px] text-body-md text-ink-2">
                  {article.excerpt}
                </p>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
