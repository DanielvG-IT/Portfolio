import clsx from "clsx";

interface GlassCardProps {
  variant?: "float" | "flat" | "inset";
  padding?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<NonNullable<GlassCardProps["variant"]>, string> = {
  float: "glass-surface rounded-card shadow-glass",
  flat: "flat-surface rounded-card-sm shadow-surface-1",
  inset:
    "rounded-[10px_10px_10px_0] border border-[rgba(28,26,23,0.08)] bg-[rgba(28,26,23,0.06)]",
};

const paddingClasses: Record<NonNullable<GlassCardProps["padding"]>, string> = {
  sm: "p-6",
  md: "p-7",
  lg: "p-8",
};

export default function GlassCard({
  variant = "float",
  padding = "lg",
  children,
  className,
}: GlassCardProps) {
  return (
    <div
      className={clsx(
        variantClasses[variant],
        paddingClasses[padding],
        className,
      )}>
      {children}
    </div>
  );
}
