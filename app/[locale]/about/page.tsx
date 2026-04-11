import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CapabilityGrid } from "@/components/site/capability-grid";
import { PortraitBlock } from "@/components/site/portrait-block";
import { SectionIntro } from "@/components/site/section-intro";
import { SectionShell } from "@/components/site/section-shell";
import { getCapabilityClusters } from "@/content/journey";
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
    route: "about",
    title: dictionary.meta.about.title,
    description: dictionary.meta.about.description,
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const dictionary = getDictionary(localeParam);
  const capabilities = getCapabilityClusters(localeParam);

  return (
    <>
      <SectionShell>
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1.08fr)_420px]">
          <div className="space-y-8">
            <SectionIntro {...dictionary.about.intro} className="mb-0" />
            <div className="surface-card p-7 md:p-8">
              <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                <p className="text-[1.28rem] leading-[1.9] tracking-[-0.02em] text-foreground">
                  {dictionary.about.narrative[0]}
                </p>
                <div className="detail-list">
                  {dictionary.about.narrative.slice(1).map((paragraph) => (
                    <p
                      key={paragraph}
                      className="detail-row text-base leading-8 text-foreground-soft">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <PortraitBlock caption={dictionary.about.portraitNote} />
            <div className="surface-card p-5">
              <div className="signature-label">
                <p className="eyebrow">
                  {localeParam === "nl" ? "Werkhouding" : "Working style"}
                </p>
              </div>
              <p className="mt-4 text-sm leading-7 text-foreground-soft">
                {localeParam === "nl"
                  ? "Rustig, systematisch en gericht op werk dat op lange termijn standhoudt."
                  : "Calm, systematic, and oriented toward work that holds up over time."}
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <div className="signature-label">
              <p className="eyebrow">{dictionary.about.principlesLabel}</p>
            </div>
            <h2 className="section-title mt-4">
              {localeParam === "nl"
                ? "De onderliggende standaarden achter het werk."
                : "The standards behind the work."}
            </h2>
          </div>
          <div className="surface-card px-6 py-2 md:px-8">
            <div className="detail-list">
              {dictionary.about.principles.map((principle, index) => (
                <div key={principle.title} className="detail-row md:grid-cols-[3rem_1fr] md:gap-6">
                  <span className="font-mono text-[0.72rem] uppercase tracking-[0.24em] text-foreground-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h2 className="text-[1.35rem] font-semibold tracking-[-0.03em]">
                      {principle.title}
                    </h2>
                    <p className="mt-3 text-base leading-7 text-foreground-soft">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="surface-card grid gap-8 p-8 md:p-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="signature-label">
              <p className="eyebrow">{dictionary.about.currentFocus.title}</p>
            </div>
            <h2 className="section-title mt-4">{dictionary.about.currentFocus.title}</h2>
            <p className="section-copy mt-5">{dictionary.about.currentFocus.description}</p>
          </div>
          <ul className="detail-list">
            {dictionary.about.currentFocus.items.map((item) => (
              <li key={item} className="detail-row text-base leading-7 text-foreground-soft">
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionShell>

      <SectionShell>
        <SectionIntro
          eyebrow={dictionary.home.capabilities.eyebrow}
          title={dictionary.home.capabilities.title}
          description={dictionary.home.capabilities.description}
        />
        <CapabilityGrid locale={localeParam} items={capabilities} />
      </SectionShell>
    </>
  );
}
