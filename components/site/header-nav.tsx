"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { getLocalizedPath } from "@/lib/site";
import type { Locale, SiteDictionary } from "@/types/site";

interface HeaderNavProps {
  locale: Locale;
  dictionary: SiteDictionary;
}

export function HeaderNav({ locale, dictionary }: HeaderNavProps) {
  const pathname = usePathname();

  return (
    <>
      {dictionary.nav.items.map((item) => {
        const href = getLocalizedPath(locale, item.key);
        const active = pathname === href;

        return (
          <Link
            key={item.key}
            href={href}
            data-active={active}
            className="header-nav-link">
            {item.label}
          </Link>
        );
      })}
    </>
  );
}
