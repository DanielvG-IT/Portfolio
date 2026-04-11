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
      <div className="grid gap-6 border-t border-border pt-8 lg:grid-cols-[minmax(0,1fr)_12rem] lg:items-end">
        <SectionIntro
          eyebrow={eyebrow}
          title={title}
          description={description}
          className="mb-0"
        />
        <div className="surface-card p-5">
          <p className="eyebrow">
            {dictionary.localeLabel === "Nederlands" ? "Aantal" : "Count"}
          </p>
          <p className="mt-4 text-[2.1rem] font-semibold tracking-[-0.06em]">
            {projects.length}
          </p>
          <p className="mt-2 text-sm leading-6 text-foreground-soft">
            {projects.length === 1
              ? localeAwareLabel(dictionary, "entry")
              : localeAwareLabel(dictionary, "entries")}
          </p>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} dictionary={dictionary} />
        ))}
      </div>
    </div>
  );
}

function localeAwareLabel(dictionary: SiteDictionary, variant: "entry" | "entries") {
  const isDutch = dictionary.localeLabel === "Nederlands";

  if (variant === "entry") {
    return isDutch ? "project in deze categorie" : "project in this group";
  }

  return isDutch ? "projecten in deze categorie" : "projects in this group";
}
