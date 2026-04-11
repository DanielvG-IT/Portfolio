import { notFound } from "next/navigation";

import MotionReveal from "@/components/ui/MotionReveal";
import ProjectRow from "@/components/ui/ProjectRow";
import SectionLabel from "@/components/ui/SectionLabel";
import { getMessages, isLocale } from "@/lib/i18n";

interface ProjectsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const projects = getMessages(locale).projects;
  const emptyText = locale === "nl" ? "In voorbereiding" : "In preparation";

  return (
    <section className="px-page-x-sm pb-section-sm pt-[140px] md:px-page-x">
      <div className="mx-auto max-w-[1280px]">
        <MotionReveal delay={0.04} y={18} blur={7}>
          <h1 className="max-w-[720px] font-display text-display-md font-normal text-ink">
            {projects.headline}
          </h1>
          <p className="mt-4 max-w-[620px] text-body-md text-ink-2">
            {projects.description}
          </p>
        </MotionReveal>

        <MotionReveal delay={0.1} y={14} blur={5}>
          <SectionLabel label={projects.selectedLabel} className="mt-12" />
        </MotionReveal>
        <div className="mt-6 border-b border-edge">
          {projects.selected.length > 0 ? (
            projects.selected.map((project, index) => (
              <ProjectRow
                key={`${project.name}-${project.year}`}
                name={project.name}
                category={project.category}
                year={project.year}
                href={project.href || undefined}
                linkLabel={project.linkLabel || undefined}
                fallbackText={emptyText}
                animationDelay={0.12 + index * 0.05}
              />
            ))
          ) : (
            <ProjectRow
              name={projects.placeholder.name}
              category={projects.placeholder.category}
              year={projects.placeholder.year}
              muted
              fallbackText={projects.placeholder.description}
              animationDelay={0.14}
            />
          )}
        </div>

        <MotionReveal delay={0.14} y={14} blur={5}>
          <SectionLabel label={projects.inDevelopmentLabel} className="mt-16" />
        </MotionReveal>
        <div className="mt-6 border-b border-edge">
          {projects.inDevelopment.length > 0 ? (
            projects.inDevelopment.map((project, index) => (
              <ProjectRow
                key={`${project.name}-${project.year}`}
                name={project.name}
                category={project.category}
                year={project.year}
                href={project.href || undefined}
                linkLabel={project.linkLabel || undefined}
                fallbackText={emptyText}
                animationDelay={0.18 + index * 0.05}
              />
            ))
          ) : (
            <ProjectRow
              name={projects.placeholder.name}
              category={projects.placeholder.category}
              year={projects.placeholder.year}
              muted
              fallbackText={projects.placeholder.description}
              animationDelay={0.2}
            />
          )}
        </div>
      </div>
    </section>
  );
}
