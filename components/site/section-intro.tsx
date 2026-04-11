import { cn } from "@/lib/utils";

interface SectionIntroProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionIntroProps) {
  return (
    <div
      className={cn(
        "mb-10 flex flex-col gap-5 md:mb-12",
        align === "center" && "items-center text-center",
        className,
      )}>
      <div className={cn("signature-label", align === "center" && "justify-center")}>
        <p className="eyebrow">{eyebrow}</p>
      </div>
      <div
        className={cn(
          "section-intro-grid",
          align === "center" && "justify-items-center",
        )}>
        <h2 className="section-title max-w-3xl">{title}</h2>
        <p className="section-copy section-intro-copy">{description}</p>
      </div>
    </div>
  );
}
