"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getLocalizedPath } from "@/lib/site";
import type { Locale, SiteDictionary } from "@/types/site";

import { LocaleSwitcher } from "./locale-switcher";

interface MobileNavProps {
  locale: Locale;
  dictionary: SiteDictionary;
}

export function MobileNav({ locale, dictionary }: MobileNavProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          aria-label={dictionary.nav.openMenu}
          className="header-icon-button xl:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/50 backdrop-blur-md" />
        <Dialog.Content
          className={cn(
            "fixed inset-x-4 top-4 z-50 overflow-hidden rounded-[1.8rem] border border-border bg-background p-5 shadow-lift",
            "focus:outline-none xl:hidden",
          )}>
          <div className="hairline-grid absolute inset-0 opacity-15" />
          <div className="relative mb-8 flex items-start justify-between gap-4">
            <div>
              <Dialog.Title className="header-brand-kicker">
                Daniël van Ginneken
              </Dialog.Title>
              <p className="mt-2 max-w-[16rem] text-sm leading-6 text-foreground-soft">
                {locale === "nl"
                  ? "Software developer met infrastructuurroots"
                  : "Software developer with infrastructure roots"}
              </p>
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label={dictionary.nav.closeMenu}
                className="header-icon-button">
                <X className="h-4 w-4" />
              </button>
            </Dialog.Close>
          </div>

          <nav className="relative flex flex-col">
            {dictionary.nav.items.map((item) => (
              <Dialog.Close asChild key={item.key}>
                <Link
                  href={getLocalizedPath(locale, item.key)}
                  className="border-b border-border px-0 py-4 text-[1.55rem] font-semibold tracking-[-0.05em] text-foreground transition-colors hover:text-accent">
                  {item.label}
                </Link>
              </Dialog.Close>
            ))}
          </nav>

          <div className="relative mt-8 flex items-center justify-between gap-4">
            <LocaleSwitcher locale={locale} ariaLabel={dictionary.nav.languageToggle} />
            <Dialog.Close asChild>
              <Button asChild size="lg">
                <Link href={getLocalizedPath(locale, "resume")}>
                  {dictionary.nav.resumeCta}
                </Link>
              </Button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
