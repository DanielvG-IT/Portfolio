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
  const navigationLabel = locale === "nl" ? "Navigatie" : "Navigation";
  const linksLabel = locale === "nl" ? "Links" : "Links";

  return (
    <footer className="pb-6 pt-4 md:pb-8">
      <div className="container mx-auto">
        <div className="site-frame px-6 py-8 md:px-8 md:py-10">
          <div className="grid gap-10 md:grid-cols-[1.45fr_0.85fr_0.85fr]">
            <div className="space-y-4">
              <div className="signature-label">
                <p className="eyebrow">Daniël van Ginneken</p>
              </div>
              <p className="max-w-md text-base leading-7 text-foreground-soft">
                {dictionary.footer.statement}
              </p>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-foreground-soft">
                {dictionary.footer.location}
              </p>
            </div>

            <div className="space-y-3">
              <div className="signature-label">
                <p className="eyebrow">{navigationLabel}</p>
              </div>
              <div className="flex flex-col gap-3 pt-2 text-sm text-foreground-soft">
                {dictionary.nav.items.map((item) => (
                  <Link
                    key={item.key}
                    href={getLocalizedPath(locale, item.key)}
                    className="action-link w-fit !text-[0.68rem] !tracking-[0.2em]">
                    {item.label}
                  </Link>
                ))}
                <Link
                  href={getLocalizedPath(locale, "resume")}
                  className="action-link w-fit !text-[0.68rem] !tracking-[0.2em]">
                  {dictionary.nav.resumeCta}
                </Link>
              </div>
            </div>

            <div className="space-y-3">
              <div className="signature-label">
                <p className="eyebrow">{linksLabel}</p>
              </div>
              <div className="flex flex-col gap-3 pt-2 text-sm text-foreground-soft">
                {socialLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="action-link w-fit !text-[0.68rem] !tracking-[0.2em]">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-border pt-4">
            <div className="flex flex-col gap-2 text-xs text-foreground-soft md:flex-row md:items-center md:justify-between">
              <p>{year} © Daniël van Ginneken.</p>
              <p>{dictionary.footer.rights}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
