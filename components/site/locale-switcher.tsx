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
      className="inline-flex items-center rounded-full border border-border bg-surface p-1 shadow-soft">
      {locales.map((entry) => {
        const href = `/${entry}${trailingSegments.length ? `/${trailingSegments.join("/")}` : ""}`;
        const active = entry === locale;

        return (
          <Link
            key={entry}
            href={href}
            className={cn(
              "rounded-full px-3 py-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground-soft transition-colors",
              active && "bg-background text-foreground shadow-soft",
            )}>
            {entry}
          </Link>
        );
      })}
    </div>
  );
}
