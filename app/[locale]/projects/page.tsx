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
  const developmentProjects = [
    ...getProjectsByStatus(localeParam, "exploration"),
    ...getProjectsByStatus(localeParam, "building"),
  ];

  return (
    <>
      <SectionShell>
        <div className="pt-20">
          <SectionIntro
            eyebrow={dictionary.projectsPage.intro.eyebrow}
            title={dictionary.projectsPage.intro.title}
            description={dictionary.projectsPage.intro.description}
            size="compact"
            className="mb-0"
          />
          <p className="mt-5 max-w-[48ch] text-[17px] text-[#6B6560]">
            {dictionary.projectsPage.honestyNote}
          </p>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <ProjectGrid
          eyebrow={dictionary.common.selectedBuilds}
          title={dictionary.common.selectedBuilds}
          description={undefined}
          projects={selectedProjects}
          dictionary={dictionary}
        />
      </SectionShell>

      <SectionShell className="pt-0">
        <ProjectGrid
          eyebrow={dictionary.common.currentlyBuilding}
          title={dictionary.common.currentlyBuilding}
          description={undefined}
          projects={developmentProjects}
          dictionary={dictionary}
        />
      </SectionShell>
    </>
  );
}
