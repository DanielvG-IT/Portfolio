import Link from "next/link";

import { socialLinks } from "@/content/socials";
import { getLocalizedPath } from "@/lib/site";
import type { Locale, SiteDictionary } from "@/types/site";

interface SiteFooterProps {
  locale: Locale;
  dictionary: SiteDictionary;
}

export function SiteFooter({ locale, dictionary }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container mx-auto grid gap-10 py-10 md:grid-cols-[1.4fr_1fr_1fr] md:py-12">
        <div className="space-y-4">
          <p className="eyebrow">Daniël van Ginneken</p>
          <p className="max-w-md text-base leading-7 text-foreground-soft">
            {dictionary.footer.statement}
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-foreground-soft">
            {dictionary.footer.location}
          </p>
        </div>

        <div className="space-y-3">
          <p className="eyebrow">Navigation</p>
          <div className="flex flex-col gap-3 text-sm text-foreground-soft">
            {dictionary.nav.items.map((item) => (
              <Link
                key={item.key}
                href={getLocalizedPath(locale, item.key)}
                className="transition-colors hover:text-foreground">
                {item.label}
              </Link>
            ))}
            <Link
              href={getLocalizedPath(locale, "resume")}
              className="transition-colors hover:text-foreground">
              {dictionary.nav.resumeCta}
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <p className="eyebrow">Links</p>
          <div className="flex flex-col gap-3 text-sm text-foreground-soft">
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container mx-auto flex flex-col gap-2 py-4 text-xs text-foreground-soft md:flex-row md:items-center md:justify-between">
          <p>{year} © Daniël van Ginneken.</p>
          <p>{dictionary.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
