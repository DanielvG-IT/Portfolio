import { notFound } from "next/navigation";

import FeaturedProject from "@/components/sections/FeaturedProject";
import Hero from "@/components/sections/Hero";
import ProofAnchors from "@/components/sections/ProofAnchors";
import { getMessages, isLocale } from "@/lib/i18n";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const messages = getMessages(locale);

  return (
    <div>
      <Hero
        locale={locale}
        eyebrow={messages.home.eyebrow}
        headline={messages.home.headline}
        body={messages.home.body}
        cta={messages.home.cta}
      />

      <ProofAnchors anchors={messages.home.anchors} />

      <section className="px-page-x-sm py-16 md:px-page-x md:py-24">
        <div className="mx-auto max-w-[1280px]">
          <FeaturedProject
            locale={locale}
            project={messages.home.featuredProject}
          />
        </div>
      </section>
    </div>
  );
}
