import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import type { ProjectEntry, SiteDictionary } from "@/types/site";

interface ProjectCardProps {
  project: ProjectEntry;
  dictionary: SiteDictionary;
}

export function ProjectCard({ project, dictionary }: ProjectCardProps) {
  return (
    <article className="surface-card flex h-full flex-col p-6 md:p-7">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <div className="signature-label">
            <p className="eyebrow">{project.category}</p>
          </div>
          <p className="mt-2 text-sm text-foreground-soft">{project.year}</p>
        </div>
        <div className="meta-chip">
          {dictionary.common.statusLabels[project.status]}
        </div>
      </div>

      <h3 className="text-[1.7rem] font-semibold tracking-[-0.04em]">
        {project.title}
      </h3>
      <p className="mt-4 text-pretty text-base leading-7 text-foreground-soft">
        {project.summary}
      </p>
      <div className="detail-list mt-6">
        <div className="detail-row">
          <p className="detail-row-label">
            {dictionary.localeLabel === "Nederlands" ? "Context" : "Context"}
          </p>
          <p className="text-pretty text-sm leading-6 text-foreground-soft">
            {project.context}
          </p>
        </div>
        <div className="detail-row">
          <p className="detail-row-label">
            {dictionary.localeLabel === "Nederlands" ? "Stack" : "Stack"}
          </p>
          <p className="text-sm leading-7 text-foreground-soft">
            {project.stack.join(" / ")}
          </p>
        </div>
      </div>

      <div className="keyline-note mt-6 px-4 py-4 text-sm leading-6 text-foreground-soft">
        {project.note ?? dictionary.common.noPublicLinks}
      </div>

      <div className="mt-auto flex flex-wrap gap-5 pt-6">
        {project.links.live ? (
          <Link href={project.links.live} target="_blank" rel="noreferrer" className="action-link">
            {dictionary.common.liveSite}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        ) : null}

        {project.links.github ? (
          <Link href={project.links.github} target="_blank" rel="noreferrer" className="action-link">
            {dictionary.common.github}
            <Github className="h-3.5 w-3.5" />
          </Link>
        ) : null}
      </div>
    </article>
  );
}
