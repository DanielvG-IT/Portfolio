import clsx from "clsx";
import Link from "next/link";

interface PrimaryButtonProps {
  href: string;
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
        "inline-flex items-center justify-center rounded-btn border-[1.5px] border-slate bg-transparent px-7 py-[13px] text-[15px] font-medium text-slate transition-colors duration-200 ease-out hover:bg-slate hover:text-ground",
        className,
      )}>
      {children}
    </Link>
  );
}
