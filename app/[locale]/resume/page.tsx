import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CapabilityGrid } from "@/components/site/capability-grid";
import { SectionIntro } from "@/components/site/section-intro";
import { SectionShell } from "@/components/site/section-shell";
import { Timeline } from "@/components/site/timeline";
import { Button } from "@/components/ui/button";
import { resumeFile } from "@/content/socials";
import {
  getCapabilityClusters,
  getEducationEntries,
  getExperienceEntries,
  getTools,
} from "@/content/journey";
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
    route: "resume",
    title: dictionary.meta.resume.title,
    description: dictionary.meta.resume.description,
  });
}

export default async function ResumePage({
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
  const experience = getExperienceEntries(localeParam);
  const education = getEducationEntries(localeParam);
  const tools = getTools(localeParam);

  return (
    <>
      <SectionShell>
        <SectionIntro {...dictionary.resumePage.intro} />
        <div className="surface-card grid gap-8 p-8 md:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-base leading-8 text-foreground-soft">
              {dictionary.resumePage.summary}
            </p>
          </div>
          <div className="lg:justify-self-end">
            <Button asChild size="lg">
              <Link href={resumeFile} download>
                {dictionary.common.downloadResume}
              </Link>
            </Button>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <SectionIntro
          eyebrow={dictionary.resumePage.experienceTitle}
          title={dictionary.resumePage.experienceTitle}
          description={dictionary.resumePage.summary}
        />
        <Timeline items={experience} />
      </SectionShell>

      <SectionShell className="pt-0">
        <SectionIntro
          eyebrow={dictionary.resumePage.educationTitle}
          title={dictionary.resumePage.educationTitle}
          description={dictionary.resumePage.summary}
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {education.map((entry) => (
            <article key={`${entry.period}-${entry.title}`} className="surface-card p-6 md:p-7">
              <p className="eyebrow">{entry.period}</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">
                {entry.title}
              </h2>
              <p className="mt-2 text-sm font-medium text-foreground-soft">
                {entry.organization}
              </p>
              <p className="mt-4 text-base leading-7 text-foreground-soft">{entry.summary}</p>
            </article>
          ))}
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <SectionIntro
          eyebrow={dictionary.resumePage.capabilitiesTitle}
          title={dictionary.resumePage.capabilitiesTitle}
          description={dictionary.home.capabilities.description}
        />
        <CapabilityGrid locale={localeParam} items={capabilities} />
      </SectionShell>

      <SectionShell>
        <SectionIntro
          eyebrow={dictionary.resumePage.toolsTitle}
          title={dictionary.resumePage.toolsTitle}
          description={dictionary.resumePage.summary}
        />
        <div className="surface-card flex flex-wrap gap-3 p-6 md:p-7">
          {tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-border bg-background-muted px-4 py-3 text-sm text-foreground-soft">
              {tool}
            </span>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
