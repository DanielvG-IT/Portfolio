import clsx from "clsx";

interface SectionLabelProps {
  label: string;
  className?: string;
}

export default function SectionLabel({ label, className }: SectionLabelProps) {
  return (
    <div className={clsx("flex items-center gap-[10px]", className)}>
      <div className="h-px w-8 bg-slate/35" />
      <span className="text-label uppercase text-ink-3">{label}</span>
    </div>
  );
}
