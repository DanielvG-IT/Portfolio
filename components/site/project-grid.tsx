import type { ProjectEntry, SiteDictionary } from "@/types/site";

import { SectionIntro } from "./section-intro";
import { ProjectCard } from "./project-card";

interface ProjectGridProps {
  eyebrow: string;
  title: string;
  description: string;
  projects: ProjectEntry[];
  dictionary: SiteDictionary;
}

export function ProjectGrid({
  eyebrow,
  title,
  description,
  projects,
  dictionary,
}: ProjectGridProps) {
  return (
    <div className="space-y-8">
      <SectionIntro eyebrow={eyebrow} title={title} description={description} />

      <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} dictionary={dictionary} />
        ))}
      </div>
    </div>
  );
}
