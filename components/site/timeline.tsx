import type { ExperienceEntry, Locale } from "@/types/site";

interface TimelineProps {
  items: ExperienceEntry[];
  locale: Locale;
}

export function Timeline({ items, locale }: TimelineProps) {
  return (
    <div className="timeline-shell">
      {items.map((item) => (
        <article key={`${item.period}-${item.title}`} className="timeline-row">
          <p className="timeline-year">{item.period}</p>

          <div>
            <h2 className="timeline-title">{item.title}</h2>
            <p className="timeline-summary">{item.summary}</p>
            <p className="timeline-relevance">
              {(locale === "nl"
                ? "Waarom dit relevant is: "
                : "Why this matters: ") +
                (item.bullets[1]
                  ? `${item.bullets[0]} ${item.bullets[1]}`
                  : item.bullets[0])}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
