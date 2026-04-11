import type { ExperienceEntry } from "@/types/site";

interface TimelineProps {
  items: ExperienceEntry[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-9">
      {items.map((item, index) => (
        <article
          key={`${item.period}-${item.title}`}
          className="grid gap-4 lg:grid-cols-[8rem_minmax(0,1fr)] lg:gap-8">
          <div className="flex items-start gap-4 lg:flex-col lg:gap-3">
            <div className="meta-chip">{item.period}</div>
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-foreground-muted">
              {String(index + 1).padStart(2, "0")}
            </div>
          </div>

          <div className="surface-card p-6 md:p-7">
            <div className="signature-label">
              <p className="eyebrow">{item.organization}</p>
            </div>
            <h3 className="mt-4 text-[1.8rem] font-semibold tracking-[-0.04em]">
              {item.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-foreground-soft">{item.summary}</p>
            <ul className="detail-list mt-6">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="detail-row text-sm leading-6 text-foreground-soft">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
