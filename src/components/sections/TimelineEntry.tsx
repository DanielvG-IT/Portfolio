interface TimelineEntryProps {
  year: string;
  title: string;
  description: string;
  relevance: string;
}

export default function TimelineEntry({
  year,
  title,
  description,
  relevance,
}: TimelineEntryProps) {
  return (
    <article className="grid gap-6 border-t border-edge py-9 md:grid-cols-[120px_1fr] md:gap-12">
      <p className="pt-[2px] text-[13px] font-semibold text-slate">{year}</p>

      <div>
        <h3 className="text-[21px] font-medium text-ink">{title}</h3>
        <p className="mt-2 max-w-[560px] text-[15px] leading-[1.65] text-ink-2">
          {description}
        </p>
        <p className="mt-3 text-[13px] italic text-ink-3">{relevance}</p>
      </div>
    </article>
  );
}
