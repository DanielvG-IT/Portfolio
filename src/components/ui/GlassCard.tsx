import clsx from "clsx";

interface GlassCardProps {
  padding?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  hoverLift?: boolean;
}

const paddingClasses: Record<NonNullable<GlassCardProps["padding"]>, string> = {
  sm: "p-6",
  md: "p-7",
  lg: "p-8",
};

export default function GlassCard({
  padding = "lg",
  children,
  className,
  hoverLift = true,
}: GlassCardProps) {
  return (
    <div
      className={clsx(
        "liquid-glass rounded-card",
        hoverLift && "transition-transform duration-300 ease-out hover:-translate-y-1",
        paddingClasses[padding],
        className,
      )}
    >
      {children}
    </div>
  );
}
