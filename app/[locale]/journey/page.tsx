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
        <div className="grid gap-8 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <SectionIntro {...dictionary.journeyPage.intro} className="mb-0" />
          <div className="journey-flow">
            {dictionary.journeyPage.transitionPoints.map((point, index) => (
              <div key={point.title} className="journey-flow-step">
                <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-foreground-muted">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-4 text-[1.3rem] font-semibold tracking-[-0.03em]">
                  {point.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-foreground-soft">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_18rem] xl:items-start">
          <Timeline items={timeline} />
          <div className="surface-card p-6">
            <div className="signature-label">
              <p className="eyebrow">{dictionary.journeyPage.transitionTitle}</p>
            </div>
            <p className="mt-4 text-sm leading-7 text-foreground-soft">
              {dictionary.journeyPage.transitionDescription}
            </p>
          </div>
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
