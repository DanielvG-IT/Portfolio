import type { CapabilityCluster, Locale } from "@/types/site";

const capabilityStateLabels: Record<Locale, Record<CapabilityCluster["state"], string>> = {
  en: {
    workingWith: "Working with",
    foundationIn: "Foundation in",
    deepening: "Currently deepening",
  },
  nl: {
    workingWith: "Werkt met",
    foundationIn: "Fundament in",
    deepening: "Verdiept nu",
  },
};

interface CapabilityGridProps {
  locale: Locale;
  items: CapabilityCluster[];
}

export function CapabilityGrid({ locale, items }: CapabilityGridProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className="surface-card flex h-full flex-col p-6 md:p-7">
          <div className="signature-label">
            <p className="eyebrow">{capabilityStateLabels[locale][item.state]}</p>
          </div>
          <h3 className="mt-4 text-[1.7rem] font-semibold tracking-[-0.04em]">
            {item.title}
          </h3>
          <p className="mt-4 text-base leading-7 text-foreground-soft">{item.description}</p>
          <p className="keyline-note mt-5 px-4 py-4 text-sm leading-6 text-foreground-soft">
            {item.evidence}
          </p>
          <ul className="detail-list mt-6">
            {item.items.map((tag) => (
              <li
                key={tag}
                className="detail-row text-sm leading-6 text-foreground-soft">
                {tag}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
