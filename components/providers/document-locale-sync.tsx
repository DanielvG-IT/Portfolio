"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { defaultLocale, localeMetadata, locales } from "@/lib/site";
import type { Locale } from "@/types/site";

export function DocumentLocaleSync() {
  const pathname = usePathname();

  useEffect(() => {
    const segment = pathname.split("/").filter(Boolean)[0];
    const locale = locales.includes(segment as Locale)
      ? (segment as Locale)
      : defaultLocale;

    document.documentElement.lang = localeMetadata[locale].htmlLang;
    document.documentElement.dataset.locale = locale;
  }, [pathname]);

  return null;
}
