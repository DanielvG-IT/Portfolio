"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Route } from "next";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import ThemeToggle from "@/components/ui/ThemeToggle";
import { localePath, switchLocaleInPath, type Locale } from "@/lib/i18n";

interface MobileNavLink {
  href: string;
  label: string;
}

interface MobileNavProps {
  locale: Locale;
  links: MobileNavLink[];
}

export default function MobileNav({ locale, links }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (nextLocale: Locale) => {
    const target = switchLocaleInPath(pathname, nextLocale);
    setOpen(false);
    router.push(target as Route);
  };

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setOpen(true)}
        className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-[var(--color-border-subtle)] bg-bg-elevated md:hidden"
      >
        <span className="flex w-[18px] flex-col gap-[4px]">
          <span className="h-[1.5px] w-full bg-text" />
          <span className="h-[1.5px] w-full bg-text" />
          <span className="h-[1.5px] w-[70%] bg-text" />
        </span>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="fixed inset-0 z-[100] bg-[var(--color-bg-overlay-heavy)] backdrop-blur-[20px]"
          >
            <div className="absolute right-5 top-4 flex items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-[var(--color-border-subtle)] bg-bg-elevated"
              >
                <span className="relative block h-[18px] w-[18px]">
                  <span className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 rotate-45 bg-text" />
                  <span className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 -rotate-45 bg-text" />
                </span>
              </button>
            </div>

            <div className="flex h-full items-center px-5">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
                className="w-full rounded-[16px] border border-[var(--color-border-subtle)] bg-bg-elevated px-8 py-12"
              >
                <nav className="flex flex-col gap-7">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={localePath(locale, link.href)}
                      onClick={() => setOpen(false)}
                      className="font-display text-[32px] font-semibold leading-none tracking-[-0.02em] text-text transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-10 flex items-center gap-4">
                  <div className="inline-flex items-center text-[12px] uppercase tracking-[0.13em] text-text-secondary">
                    <button
                      type="button"
                      onClick={() => switchLocale("nl")}
                      className={locale === "nl" ? "text-text" : "text-text-muted"}
                    >
                      NL
                    </button>
                    <span className="mx-2 text-text-muted">/</span>
                    <button
                      type="button"
                      onClick={() => switchLocale("en")}
                      className={locale === "en" ? "text-text" : "text-text-muted"}
                    >
                      EN
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
