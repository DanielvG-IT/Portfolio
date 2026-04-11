interface ContentTeaserProps {
  eyebrow: string;
  title: string;
  description: string;
  note: string;
}

export function ContentTeaser({
  eyebrow,
  title,
  description,
  note,
}: ContentTeaserProps) {
  return (
    <div className="surface-card relative overflow-hidden p-8 md:p-10">
      <div className="hairline-grid absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute right-[10%] top-[12%] h-40 w-40 rounded-full bg-accent-soft blur-[90px]" />
      <div className="relative grid gap-8 lg:grid-cols-[1fr_18rem] lg:items-end">
        <div className="max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-title mt-4">{title}</h2>
          <p className="section-copy mt-5">{description}</p>
        </div>
        <p className="keyline-note px-4 py-4 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-foreground-soft">
          {note}
        </p>
      </div>
    </div>
  );
}
