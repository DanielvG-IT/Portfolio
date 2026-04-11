import type { ProjectEntry, SiteDictionary } from "@/types/site";

import Link from "next/link";

interface ProjectGridProps {
  eyebrow: string;
  title: string;
  description?: string;
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
    <div>
      <div className="mb-4">
        <div className="signature-label">
          <p className="eyebrow">{eyebrow}</p>
        </div>
        <h2 className="project-section-title mt-4">{title}</h2>
        {description ? (
          <p className="mt-3 max-w-[54ch] text-[15px] text-[#6B6560]">
            {description}
          </p>
        ) : null}
      </div>

      {projects.length === 0 ? (
        <p className="py-6 text-[15px] text-[#9E9892]">
          {dictionary.localeLabel === "Nederlands"
            ? "Hier verschijnen projecten zodra ze inhoudelijk klaar zijn voor publicatie."
            : "Projects will appear here as soon as they are mature enough for publication."}
        </p>
      ) : null}

      <div>
        {projects.map((project) => (
          <article key={project.slug} className="project-row">
            <h3 className="text-[20px] font-medium text-[#1A1A18]">
              {project.title}
            </h3>
            <p className="eyebrow">{project.category}</p>
            <p className="text-[15px] text-[#6B6560]">{project.year}</p>
            <p>
              {project.links.live || project.links.github ? (
                <Link
                  href={project.links.live ?? project.links.github ?? "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="text-link text-[13px]">
                  {dictionary.localeLabel === "Nederlands" ? "Bekijk" : "View"}
                </Link>
              ) : (
                <span className="text-[13px] text-[#9E9892]">-</span>
              )}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
