import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { getDictionary, isLocale, locales } from "@/lib/site";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const dictionary = getDictionary(localeParam);

  return (
    <div className="page-shell flex min-h-screen flex-col">
      <SiteHeader locale={localeParam} dictionary={dictionary} />
      <main className="flex-1">{children}</main>
      <SiteFooter locale={localeParam} dictionary={dictionary} />
    </div>
  );
}
