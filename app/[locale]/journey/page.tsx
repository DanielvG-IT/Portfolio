import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SectionIntro } from "@/components/site/section-intro";
import { SectionShell } from "@/components/site/section-shell";
import { Timeline } from "@/components/site/timeline";
import { getJourneyTimeline } from "@/content/journey";
import { buildPageMetadata, getDictionary, isLocale } from "@/lib/site";

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
        <div className="journey-intro-grid pt-[100px]">
          <SectionIntro
            {...dictionary.journeyPage.intro}
            size="inner"
            className="mb-0"
          />
          <p className="max-w-[52ch] text-[17px] leading-[1.7] text-[#6B6560]">
            {dictionary.journeyPage.transitionDescription}
          </p>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="journey-bands">
          {dictionary.journeyPage.transitionPoints.map((point) => (
            <article key={point.title} className="journey-band-item">
              <p className="eyebrow">
                {dictionary.journeyPage.transitionTitle}
              </p>
              <h2 className="mt-3 text-[18px] font-medium text-[#1A1A18]">
                {point.title}
              </h2>
              <p className="mt-3 text-[15px] leading-[1.7] text-[#6B6560]">
                {point.description}
              </p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <Timeline items={timeline} locale={localeParam} />
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="max-w-[900px] border-t border-[#D5CFC4] pt-10">
          <SectionIntro
            eyebrow={dictionary.home.contact.eyebrow}
            title={dictionary.home.contact.title}
            description={dictionary.home.contact.description}
            className="mb-0"
          />
        </div>
      </SectionShell>
    </>
  );
}
