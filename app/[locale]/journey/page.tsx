import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CTAGroup } from "@/components/site/cta-group";
import { SectionIntro } from "@/components/site/section-intro";
import { SectionShell } from "@/components/site/section-shell";
import { Timeline } from "@/components/site/timeline";
import { getJourneyTimeline } from "@/content/journey";
import { buildPageMetadata, getDictionary, getLocalizedPath, isLocale } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    return {};
  }

  const dictionary = getDictionary(localeParam);

  return buildPageMetadata({
    locale: localeParam,
    route: "journey",
    title: dictionary.meta.journey.title,
    description: dictionary.meta.journey.description,
  });
}

export default async function JourneyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const dictionary = getDictionary(localeParam);
  const timeline = getJourneyTimeline(localeParam);

  return (
    <>
      <SectionShell>
        <SectionIntro {...dictionary.journeyPage.intro} />
        <Timeline items={timeline} />
      </SectionShell>

      <SectionShell className="pt-0">
        <SectionIntro
          eyebrow={dictionary.journeyPage.transitionTitle}
          title={dictionary.journeyPage.transitionTitle}
          description={dictionary.journeyPage.transitionDescription}
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {dictionary.journeyPage.transitionPoints.map((point) => (
            <article key={point.title} className="surface-card p-6 md:p-7">
              <h2 className="text-2xl font-semibold tracking-[-0.03em]">{point.title}</h2>
              <p className="mt-4 text-base leading-7 text-foreground-soft">
                {point.description}
              </p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <div className="surface-card grid gap-8 p-8 md:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="eyebrow">{dictionary.home.contact.eyebrow}</p>
            <h2 className="section-title mt-4">{dictionary.home.contact.title}</h2>
            <p className="section-copy mt-5">{dictionary.home.contact.description}</p>
          </div>
          <CTAGroup
            items={[
              {
                label: dictionary.common.viewResume,
                href: getLocalizedPath(localeParam, "resume"),
              },
              {
                label: dictionary.common.email,
                href: "mailto:daniel@danielvanginneken.nl",
                variant: "secondary",
              },
            ]}
          />
        </div>
      </SectionShell>
    </>
  );
}
