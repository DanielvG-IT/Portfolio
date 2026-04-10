import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { ProjectEntry, SiteDictionary } from "@/types/site";

interface ProjectCardProps {
  project: ProjectEntry;
  dictionary: SiteDictionary;
}

export function ProjectCard({ project, dictionary }: ProjectCardProps) {
  return (
    <article className="surface-card flex h-full flex-col p-6 md:p-7">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="eyebrow">{project.category}</p>
          <p className="mt-2 text-sm text-foreground-soft">{project.year}</p>
        </div>
        <div className="rounded-full border border-border bg-background-muted px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-foreground-soft">
          {dictionary.common.statusLabels[project.status]}
        </div>
      </div>

      <h3 className="text-2xl font-semibold tracking-[-0.03em]">{project.title}</h3>
      <p className="mt-4 text-pretty text-base leading-7 text-foreground-soft">
        {project.summary}
      </p>
      <p className="mt-4 text-pretty text-sm leading-6 text-foreground-soft">
        {project.context}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border px-3 py-2 text-xs font-medium text-foreground-soft">
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 rounded-[1.2rem] bg-background-muted px-4 py-4 text-sm leading-6 text-foreground-soft">
        {project.note ?? dictionary.common.noPublicLinks}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {project.links.live ? (
          <Button asChild variant="secondary">
              <Link href={project.links.live} target="_blank" rel="noreferrer">
              {dictionary.common.liveSite}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        ) : null}

        {project.links.github ? (
          <Button asChild variant="secondary">
            <Link href={project.links.github} target="_blank" rel="noreferrer">
              {dictionary.common.github}
              <Github className="h-4 w-4" />
            </Link>
          </Button>
        ) : null}
      </div>
    </article>
  );
}
