"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { getLocalizedPath } from "@/lib/site";
import type { Locale, SiteDictionary } from "@/types/site";

import { LocaleSwitcher } from "./locale-switcher";
import { MobileNav } from "./mobile-nav";
import { HeaderNav } from "./header-nav";

interface SiteHeaderProps {
  locale: Locale;
  dictionary: SiteDictionary;
}

export function SiteHeader({ locale, dictionary }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-40"
      style={{
        backgroundColor: scrolled
          ? "rgba(244, 239, 230, 0.97)"
          : "rgba(244, 239, 230, 0.92)",
        backdropFilter: "blur(10px)",
      }}>
      <div className="container mx-auto">
        <div className="header-shell">
          <Link
            href={getLocalizedPath(locale, "home")}
            className="justify-self-start text-[15px] font-medium text-[#1A1A18]">
            Daniël van Ginneken
          </Link>

          <nav className="hidden items-center justify-center gap-9 xl:flex">
            <HeaderNav locale={locale} dictionary={dictionary} />
          </nav>

          <div className="hidden items-center justify-self-end xl:flex">
            <LocaleSwitcher
              locale={locale}
              ariaLabel={dictionary.nav.languageToggle}
            />
            <span className="mx-3 h-[6px] w-[6px] rounded-full bg-[#2D4A6B]" />
            <Link
              href={getLocalizedPath(locale, "resume")}
              className="header-resume-link">
              {dictionary.nav.resumeCta}
            </Link>
          </div>

          <div className="flex items-center justify-self-end xl:hidden">
            <MobileNav locale={locale} dictionary={dictionary} />
          </div>
        </div>
      </div>
    </header>
  );
}
