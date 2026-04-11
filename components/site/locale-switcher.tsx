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
      className="flex items-center gap-2 font-mono text-[0.64rem] uppercase tracking-[0.24em]">
      {locales.map((entry) => {
        const href = `/${entry}${trailingSegments.length ? `/${trailingSegments.join("/")}` : ""}`;
        const active = entry === locale;

        return (
          <Link
            key={entry}
            href={href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "transition-colors",
              active ? "text-foreground" : "text-foreground-muted hover:text-foreground-soft",
            )}>
            {entry}
          </Link>
        );
      })}
    </div>
  );
}
