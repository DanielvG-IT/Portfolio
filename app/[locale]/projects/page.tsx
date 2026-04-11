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
  const selectedProjects = getProjectsByStatus(localeParam, "selected");
  const exploratoryProjects = getProjectsByStatus(localeParam, "exploration");
  const buildingProjects = getProjectsByStatus(localeParam, "building");

  return (
    <>
      <SectionShell>
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_24rem] xl:items-end">
          <SectionIntro {...dictionary.projectsPage.intro} className="mb-0" />
          <div className="surface-card p-6">
            <div className="grid gap-5 sm:grid-cols-3 xl:grid-cols-1">
              <div>
                <div className="signature-label">
                  <p className="eyebrow">{dictionary.common.selectedBuilds}</p>
                </div>
                <p className="mt-3 text-[1.9rem] font-semibold tracking-[-0.05em]">
                  {selectedProjects.length}
                </p>
              </div>
              <div>
                <div className="signature-label">
                  <p className="eyebrow">{dictionary.common.technicalExplorations}</p>
                </div>
                <p className="mt-3 text-[1.9rem] font-semibold tracking-[-0.05em]">
                  {exploratoryProjects.length}
                </p>
              </div>
              <div>
                <div className="signature-label">
                  <p className="eyebrow">{dictionary.common.currentlyBuilding}</p>
                </div>
                <p className="mt-3 text-[1.9rem] font-semibold tracking-[-0.05em]">
                  {buildingProjects.length}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 keyline-note px-5 py-5 text-sm leading-7 text-foreground-soft">
          {dictionary.projectsPage.honestyNote}
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <ProjectGrid
          eyebrow={dictionary.common.selectedBuilds}
          title={dictionary.common.selectedBuilds}
          description={dictionary.projectsPage.sectionDescriptions.selected}
          projects={selectedProjects}
          dictionary={dictionary}
        />
      </SectionShell>

      <SectionShell className="pt-0">
        <ProjectGrid
          eyebrow={dictionary.common.technicalExplorations}
          title={dictionary.common.technicalExplorations}
          description={dictionary.projectsPage.sectionDescriptions.exploration}
          projects={exploratoryProjects}
          dictionary={dictionary}
        />
      </SectionShell>

      <SectionShell>
        <ProjectGrid
          eyebrow={dictionary.common.currentlyBuilding}
          title={dictionary.common.currentlyBuilding}
          description={dictionary.projectsPage.sectionDescriptions.building}
          projects={buildingProjects}
          dictionary={dictionary}
        />
      </SectionShell>
    </>
  );
}
