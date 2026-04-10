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
      <div className="hairline-grid absolute inset-0 opacity-25" />
      <div className="relative max-w-3xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="section-title mt-4">{title}</h2>
        <p className="section-copy mt-5">{description}</p>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-foreground-soft">
          {note}
        </p>
      </div>
    </div>
  );
}
