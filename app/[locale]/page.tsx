import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CapabilityGrid } from "@/components/site/capability-grid";
import { ContentTeaser } from "@/components/site/content-teaser";
import { CTAGroup } from "@/components/site/cta-group";
import { Hero } from "@/components/site/hero";
import { ProjectCard } from "@/components/site/project-card";
import { SectionIntro } from "@/components/site/section-intro";
import { SectionShell } from "@/components/site/section-shell";
import { Timeline } from "@/components/site/timeline";
import { resumeFile } from "@/content/socials";
import { getCapabilityClusters, getJourneyTimeline } from "@/content/journey";
import { getProjectsByStatus } from "@/content/projects";
import {
  buildPageMetadata,
  getDictionary,
  getLocalizedPath,
  isLocale,
} from "@/lib/site";

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
    route: "home",
    title: dictionary.meta.home.title,
    description: dictionary.meta.home.description,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const dictionary = getDictionary(localeParam);
  const previewProjects = [
    ...getProjectsByStatus(localeParam, "selected"),
    ...getProjectsByStatus(localeParam, "exploration").slice(0, 2),
  ];
  const journeyPreview = getJourneyTimeline(localeParam).slice(0, 3);
  const capabilities = getCapabilityClusters(localeParam);

  return (
    <>
      <Hero
        locale={localeParam}
        content={dictionary.home.hero}
        dictionary={dictionary}
        portraitCaption={dictionary.about.portraitNote}
      />

      <div className="container mx-auto mt-10">
        <div className="grid gap-3 rounded-[2rem] border border-border bg-surface p-4 shadow-soft md:grid-cols-3 md:p-5">
          {dictionary.home.trustStrip.map((item) => (
            <div
              key={item}
              className="rounded-[1.4rem] bg-background-muted px-4 py-3 text-sm text-foreground-soft">
              {item}
            </div>
          ))}
        </div>
      </div>

      <SectionShell>
        <SectionIntro
          eyebrow={dictionary.home.infrastructure.eyebrow}
          title={dictionary.home.infrastructure.title}
          description={dictionary.home.infrastructure.description}
        />
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-5 md:grid-cols-3">
            {dictionary.home.infrastructure.points.map((point) => (
              <article key={point.title} className="surface-card p-6">
                <h3 className="text-xl font-semibold tracking-[-0.03em]">
                  {point.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-foreground-soft">
                  {point.description}
                </p>
              </article>
            ))}
          </div>
          <aside className="surface-card p-7">
            <p className="eyebrow">{dictionary.home.infrastructure.eyebrow}</p>
            <p className="mt-5 text-2xl font-semibold tracking-[-0.03em]">
              {dictionary.home.infrastructure.asideTitle}
            </p>
            <p className="mt-5 text-base leading-7 text-foreground-soft">
              {dictionary.home.infrastructure.asideDescription}
            </p>
          </aside>
        </div>
      </SectionShell>

      <SectionShell>
        <SectionIntro
          eyebrow={dictionary.home.projects.eyebrow}
          title={dictionary.home.projects.title}
          description={dictionary.home.projects.description}
        />
        <div className="mb-8 rounded-[1.8rem] border border-border bg-background-muted px-5 py-5 text-sm leading-6 text-foreground-soft">
          {dictionary.home.projects.honestyNote}
        </div>
        <div className="grid gap-5 xl:grid-cols-3">
          {previewProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              dictionary={dictionary}
            />
          ))}
        </div>
        <div className="mt-8">
          <Link
            href={getLocalizedPath(localeParam, "projects")}
            className="font-mono text-xs uppercase tracking-[0.2em] text-foreground-soft transition-colors hover:text-foreground">
            {dictionary.common.viewAllProjects}
          </Link>
        </div>
      </SectionShell>

      <SectionShell>
        <SectionIntro
          eyebrow={dictionary.home.journey.eyebrow}
          title={dictionary.home.journey.title}
          description={dictionary.home.journey.description}
        />
        <Timeline items={journeyPreview} />
        <div className="mt-8">
          <Link
            href={getLocalizedPath(localeParam, "journey")}
            className="font-mono text-xs uppercase tracking-[0.2em] text-foreground-soft transition-colors hover:text-foreground">
            {dictionary.common.viewJourney}
          </Link>
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

      <SectionShell>
        <ContentTeaser {...dictionary.home.contentTeaser} />
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="surface-card grid gap-8 p-8 md:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="eyebrow">{dictionary.home.contact.eyebrow}</p>
            <h2 className="section-title mt-4">
              {dictionary.home.contact.title}
            </h2>
            <p className="section-copy mt-5">
              {dictionary.home.contact.description}
            </p>
          </div>
          <div className="lg:justify-self-end">
            <CTAGroup
              items={[
                {
                  label: dictionary.common.email,
                  href: "mailto:daniel@danielvanginneken.nl",
                },
                {
                  label: dictionary.common.linkedin,
                  href: "https://linkedin.com/in/daniel-v-ginneken/",
                  variant: "secondary",
                  external: true,
                },
                {
                  label: dictionary.common.downloadResume,
                  href: resumeFile(localeParam),
                  variant: "secondary",
                  download: true,
                },
              ]}
            />
          </div>
        </div>
      </SectionShell>
    </>
  );
}
