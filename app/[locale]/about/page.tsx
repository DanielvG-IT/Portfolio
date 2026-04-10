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
        <SectionIntro {...dictionary.about.intro} />
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_420px]">
          <div className="surface-card space-y-6 p-7 md:p-8">
            {dictionary.about.narrative.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-foreground-soft">
                {paragraph}
              </p>
            ))}
          </div>
          <PortraitBlock caption={dictionary.about.portraitNote} />
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="grid gap-5 lg:grid-cols-3">
          {dictionary.about.principles.map((principle) => (
            <article key={principle.title} className="surface-card p-6 md:p-7">
              <p className="eyebrow">{dictionary.about.principlesLabel}</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                {principle.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-foreground-soft">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="surface-card grid gap-8 p-8 md:p-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="eyebrow">{dictionary.about.currentFocus.title}</p>
            <h2 className="section-title mt-4">{dictionary.about.currentFocus.title}</h2>
            <p className="section-copy mt-5">{dictionary.about.currentFocus.description}</p>
          </div>
          <ul className="space-y-4 text-base leading-7 text-foreground-soft">
            {dictionary.about.currentFocus.items.map((item) => (
              <li key={item} className="flex gap-3 rounded-[1.4rem] bg-background-muted px-4 py-4">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
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
