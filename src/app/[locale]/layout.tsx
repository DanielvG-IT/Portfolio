import { notFound } from "next/navigation";

import Header from "@/components/layout/Header";
import { getMessages, isLocale } from "@/lib/i18n";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const messages = getMessages(locale);

  return (
    <div className="min-h-screen bg-ground text-ink">
      <Header locale={locale} nav={messages.nav} />
      <main className="animate-page-fade">{children}</main>
    </div>
  );
}
