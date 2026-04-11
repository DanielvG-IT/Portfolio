import { cn } from "@/lib/utils";

interface SectionIntroProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  size?: "default" | "inner" | "compact";
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  className,
  size = "default",
}: SectionIntroProps) {
  const titleClass =
    size === "inner"
      ? "text-[clamp(42px,4.5vw,64px)]"
      : size === "compact"
        ? "text-[clamp(28px,3vw,40px)]"
        : "section-title";

  return (
    <div className={cn("mb-16 max-w-[680px]", className)}>
      <div className="signature-label">
        <p className="eyebrow">{eyebrow}</p>
      </div>
      <h2
        className={cn(
          "mt-4 font-normal leading-[1.08] tracking-[-0.02em] text-[#1A1A18]",
          titleClass,
        )}>
        {title}
      </h2>
      {description ? <p className="section-copy">{description}</p> : null}
    </div>
  );
}
