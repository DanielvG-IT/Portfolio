import clsx from "clsx";

interface SectionLabelProps {
  label: string;
  className?: string;
}

export default function SectionLabel({ label, className }: SectionLabelProps) {
  return (
    <div className={clsx("flex items-center gap-[10px]", className)}>
      <div className="h-px w-6 bg-[var(--color-border-subtle)]" />
      <span className="rounded-btn border border-[var(--color-border-subtle)] bg-bg-elevated px-2.5 py-1 text-label uppercase text-text-muted">
        {label}
      </span>
    </div>
  );
}
