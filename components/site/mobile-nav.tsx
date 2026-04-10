"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getLocalizedPath } from "@/lib/site";
import type { Locale, SiteDictionary } from "@/types/site";

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
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-surface shadow-soft transition-colors hover:bg-surface-strong lg:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm" />
        <Dialog.Content
          className={cn(
            "fixed inset-x-4 top-4 z-50 rounded-[2rem] border border-border bg-background p-6 shadow-lift",
            "focus:outline-none lg:hidden",
          )}>
          <div className="mb-8 flex items-center justify-between">
            <Dialog.Title className="font-mono text-xs uppercase tracking-[0.24em] text-foreground-soft">
              Daniël van Ginneken
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label={dictionary.nav.closeMenu}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface">
                <X className="h-4 w-4" />
              </button>
            </Dialog.Close>
          </div>

          <nav className="flex flex-col gap-2">
            {dictionary.nav.items.map((item) => (
              <Dialog.Close asChild key={item.key}>
                <Link
                  href={getLocalizedPath(locale, item.key)}
                  className="rounded-[1.4rem] border border-transparent px-4 py-3 text-lg font-medium text-foreground transition-colors hover:border-border hover:bg-surface">
                  {item.label}
                </Link>
              </Dialog.Close>
            ))}
          </nav>

          <div className="mt-8 flex flex-col gap-3">
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
