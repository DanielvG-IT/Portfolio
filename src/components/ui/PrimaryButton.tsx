import clsx from "clsx";
import type { Route } from "next";
import Link from "next/link";

interface PrimaryButtonProps {
  href: Route;
  children: React.ReactNode;
  className?: string;
}

export default function PrimaryButton({
  href,
  children,
  className,
}: PrimaryButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "ios-glass-pill ios-accent-glow inline-flex items-center justify-center px-7 py-[13px] text-[15px] font-medium text-slate transition-transform duration-200 hover:-translate-y-[1px]",
        className,
      )}>
      {children}
    </Link>
  );
}
