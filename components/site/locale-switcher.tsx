"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { locales } from "@/lib/site";
import type { Locale } from "@/types/site";

interface LocaleSwitcherProps {
  locale: Locale;
  ariaLabel: string;
}

export function LocaleSwitcher({ locale, ariaLabel }: LocaleSwitcherProps) {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);
  const trailingSegments = locales.includes(segments[0] as Locale)
    ? segments.slice(1)
    : segments;

  return (
    <div
      aria-label={ariaLabel}
      className="flex items-center gap-1 text-[15px] font-normal text-[#6B6560]">
      {locales.map((entry, index) => {
        const href = `/${entry}${trailingSegments.length ? `/${trailingSegments.join("/")}` : ""}`;
        const active = entry === locale;

        return (
          <span key={entry} className="inline-flex items-center gap-1">
            {index > 0 ? <span aria-hidden>/</span> : null}
            <Link
              href={href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "uppercase transition-colors hover:text-[#1A1A18]",
                active ? "text-[#1A1A18]" : "text-[#6B6560]",
              )}>
              {entry}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
