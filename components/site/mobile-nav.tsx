"use client";

import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";

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
          className="flex h-8 w-8 items-center justify-center xl:hidden">
          <span className="sr-only">{dictionary.nav.openMenu}</span>
          <span className="flex flex-col gap-1">
            <span className="block h-[2px] w-5 bg-[#1A1A18]" />
            <span className="block h-[2px] w-5 bg-[#1A1A18]" />
            <span className="block h-[2px] w-5 bg-[#1A1A18]" />
          </span>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/20" />
        <Dialog.Content className="fixed inset-0 z-50 bg-[#F4EFE6] px-6 pb-12 pt-5 opacity-0 data-[state=open]:translate-y-0 data-[state=open]:opacity-100 data-[state=closed]:-translate-y-2 data-[state=closed]:opacity-0 data-[state=open]:duration-200 data-[state=open]:ease-out focus:outline-none xl:hidden">
          <div className="mb-10 flex items-center justify-between">
            <Dialog.Title className="text-[15px] font-medium text-[#1A1A18]">
              Daniël van Ginneken
            </Dialog.Title>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label={dictionary.nav.closeMenu}
                className="flex h-8 w-8 items-center justify-center">
                <span className="sr-only">{dictionary.nav.closeMenu}</span>
                <span className="relative block h-5 w-5">
                  <span className="absolute left-0 top-1/2 block h-[2px] w-5 -translate-y-1/2 rotate-45 bg-[#1A1A18]" />
                  <span className="absolute left-0 top-1/2 block h-[2px] w-5 -translate-y-1/2 -rotate-45 bg-[#1A1A18]" />
                </span>
              </button>
            </Dialog.Close>
          </div>

          <nav className="flex min-h-[70vh] flex-col justify-center pl-12">
            {dictionary.nav.items.map((item) => (
              <Dialog.Close asChild key={item.key}>
                <Link
                  href={getLocalizedPath(locale, item.key)}
                  className="mobile-menu-link py-4 transition-colors hover:text-[#2D4A6B]">
                  {item.label}
                </Link>
              </Dialog.Close>
            ))}

            <div className="mt-8 text-[16px] text-[#6B6560]">
              <LocaleSwitcher
                locale={locale}
                ariaLabel={dictionary.nav.languageToggle}
              />
            </div>
          </nav>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
