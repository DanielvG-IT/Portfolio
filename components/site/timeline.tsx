import type { ExperienceEntry } from "@/types/site";

interface TimelineProps {
  items: ExperienceEntry[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative pl-6 md:pl-8">
      <div className="absolute bottom-0 left-[11px] top-0 w-px bg-border md:left-[15px]" />
      <div className="space-y-8">
        {items.map((item) => (
          <article key={`${item.period}-${item.title}`} className="relative surface-card p-6 md:p-7">
            <span className="absolute left-[-20px] top-8 h-3.5 w-3.5 rounded-full border-4 border-background bg-accent md:left-[-26px]" />
            <p className="eyebrow">{item.period}</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
              {item.title}
            </h3>
            <p className="mt-2 text-sm font-medium text-foreground-soft">
              {item.organization}
            </p>
            <p className="mt-4 text-base leading-7 text-foreground-soft">{item.summary}</p>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-foreground-soft">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
