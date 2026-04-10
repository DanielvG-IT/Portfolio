import Link from "next/link";

import { Button } from "@/components/ui/button";
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
    <header className="sticky top-0 z-30 border-b border-border bg-background backdrop-blur">
      <div className="container mx-auto flex h-20 items-center justify-between gap-6">
        <Link href={getLocalizedPath(locale, "home")} className="shrink-0">
          <span className="font-mono text-xs uppercase tracking-[0.26em] text-foreground-soft">
            Daniël van Ginneken
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {dictionary.nav.items.map((item) => (
            <Link
              key={item.key}
              href={getLocalizedPath(locale, item.key)}
              className="text-sm font-medium text-foreground-soft transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LocaleSwitcher locale={locale} ariaLabel={dictionary.nav.languageToggle} />
          <ThemeToggle ariaLabel={dictionary.nav.themeToggle} />
          <Button asChild variant="secondary">
            <Link href={getLocalizedPath(locale, "resume")}>{dictionary.nav.resumeCta}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle ariaLabel={dictionary.nav.themeToggle} />
          <MobileNav locale={locale} dictionary={dictionary} />
        </div>
      </div>
    </header>
  );
}
