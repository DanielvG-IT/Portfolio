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
        "inline-flex items-center justify-center rounded-pill bg-accent px-7 py-[13px] text-[14px] font-semibold tracking-[0.01em] text-white transition-opacity duration-200 hover:opacity-85",
        className,
      )}
    >
      {children}
    </Link>
  );
}
