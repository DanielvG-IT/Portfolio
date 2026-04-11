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
    <div className="relative min-h-screen overflow-x-clip bg-ground text-ink">
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="animate-ambient-float absolute -top-24 left-[7%] h-72 w-72 rounded-full bg-[rgba(43,72,101,0.16)] blur-3xl" />
        <div className="absolute right-[4%] top-[18%] h-80 w-80 rounded-full bg-[rgba(255,255,255,0.52)] blur-3xl" />
        <div className="animate-ambient-float absolute bottom-[-8%] left-[36%] h-72 w-72 rounded-full bg-[rgba(28,26,23,0.08)] blur-3xl [animation-delay:-4s]" />
        <div className="ambient-grid absolute inset-0 opacity-40" />
      </div>

      <Header locale={locale} nav={messages.nav} />
      <main className="relative">{children}</main>
    </div>
  );
}
