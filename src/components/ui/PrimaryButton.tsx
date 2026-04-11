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
        "inline-flex items-center justify-center rounded-btn border-[1.5px] border-slate bg-transparent px-7 py-[13px] text-[15px] font-medium text-slate transition-all duration-200 ease-out hover:-translate-y-[1px] hover:bg-slate hover:text-ground active:translate-y-0",
        className,
      )}>
      {children}
    </Link>
  );
}
