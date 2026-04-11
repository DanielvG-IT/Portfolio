import Link from "next/link";

import { getLocalizedPath } from "@/lib/site";
import type { Locale, SiteDictionary } from "@/types/site";

import { LocaleSwitcher } from "./locale-switcher";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";

interface SiteHeaderProps {
  locale: Locale;
  dictionary: SiteDictionary;
}

export function SiteHeader({ locale, dictionary }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40">
      <div className="container mx-auto">
        <div className="header-shell">
          <Link href={getLocalizedPath(locale, "home")} className="min-w-0 max-w-[18rem]">
            <span className="block header-brand-kicker">Daniël van Ginneken</span>
            <span className="mt-1 block truncate text-[0.82rem] text-foreground-soft">
              {locale === "nl"
                ? "Software developer met infrastructuurroots"
                : "Software developer with infrastructure roots"}
            </span>
          </Link>

          <nav className="hidden items-center justify-center gap-7 xl:flex">
            {dictionary.nav.items.map((item) => (
              <Link
                key={item.key}
                href={getLocalizedPath(locale, item.key)}
                className="header-nav-link">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-5 xl:flex">
            <LocaleSwitcher locale={locale} ariaLabel={dictionary.nav.languageToggle} />
            <ThemeToggle ariaLabel={dictionary.nav.themeToggle} locale={locale} />
            <Link
              href={getLocalizedPath(locale, "resume")}
              className="inline-flex items-center text-sm font-medium text-foreground transition-colors hover:text-accent">
              {dictionary.nav.resumeCta}
            </Link>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <ThemeToggle ariaLabel={dictionary.nav.themeToggle} locale={locale} />
            <MobileNav locale={locale} dictionary={dictionary} />
          </div>
        </div>
      </div>
    </header>
  );
}
