import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectGrid } from "@/components/site/project-grid";
import { SectionIntro } from "@/components/site/section-intro";
import { SectionShell } from "@/components/site/section-shell";
import { getProjectsByStatus } from "@/content/projects";
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
    route: "projects",
    title: dictionary.meta.projects.title,
    description: dictionary.meta.projects.description,
  });
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const dictionary = getDictionary(localeParam);

  return (
    <>
      <SectionShell>
        <SectionIntro {...dictionary.projectsPage.intro} />
        <div className="surface-card p-7 text-base leading-8 text-foreground-soft md:p-8">
          {dictionary.projectsPage.honestyNote}
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <ProjectGrid
          eyebrow={dictionary.common.selectedBuilds}
          title={dictionary.common.selectedBuilds}
          description={dictionary.projectsPage.sectionDescriptions.selected}
          projects={getProjectsByStatus(localeParam, "selected")}
          dictionary={dictionary}
        />
      </SectionShell>

      <SectionShell className="pt-0">
        <ProjectGrid
          eyebrow={dictionary.common.technicalExplorations}
          title={dictionary.common.technicalExplorations}
          description={dictionary.projectsPage.sectionDescriptions.exploration}
          projects={getProjectsByStatus(localeParam, "exploration")}
          dictionary={dictionary}
        />
      </SectionShell>

      <SectionShell>
        <ProjectGrid
          eyebrow={dictionary.common.currentlyBuilding}
          title={dictionary.common.currentlyBuilding}
          description={dictionary.projectsPage.sectionDescriptions.building}
          projects={getProjectsByStatus(localeParam, "building")}
          dictionary={dictionary}
        />
      </SectionShell>
    </>
  );
}
