import clsx from "clsx";

interface SectionLabelProps {
  label: string;
  className?: string;
}

export default function SectionLabel({ label, className }: SectionLabelProps) {
  return (
    <div className={clsx("flex items-center gap-[10px]", className)}>
      <div className="h-px w-8 bg-slate/45" />
      <span className="ios-glass-pill px-3 py-1 text-label uppercase text-slate">
        {label}
      </span>
    </div>
  );
}
