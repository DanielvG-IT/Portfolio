import { type Article } from "@/lib/articles";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: absoluteUrl("/nl"),
    jobTitle: "Software Developer",
    description: siteConfig.description,
    image: absoluteUrl("/images/portrait.jpg"),
    sameAs: siteConfig.sameAs,
    knowsAbout: [
      ".NET",
      "C#",
      "TypeScript",
      "React",
      "Next.js",
      "Infrastructure",
      "API Design",
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.applicationName,
    url: absoluteUrl("/"),
    description: siteConfig.description,
    inLanguage: ["nl-NL", "en-US"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${absoluteUrl("/nl/projects")}?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function articleJsonLd(article: Article, canonicalUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.seoTitle ?? article.title,
    description: article.seoDescription ?? article.excerpt,
    image: article.coverImage
      ? [
          {
            "@type": "ImageObject",
            url: article.coverImage,
            width: 1200,
            height: 630,
          },
        ]
      : undefined,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    inLanguage: article.locale,
    author: {
      "@type": "Person",
      name: article.authorName,
      url: absoluteUrl("/nl"),
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
      url: absoluteUrl("/nl"),
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  };
}
