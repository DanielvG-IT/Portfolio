"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Route } from "next";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

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
        className="ios-glass-pill flex h-10 w-10 items-center justify-center md:hidden">
        <span className="flex w-[20px] flex-col gap-[4px]">
          <span className="h-[2px] w-full bg-ink" />
          <span className="h-[2px] w-full bg-ink" />
          <span className="h-[2px] w-full bg-ink" />
        </span>
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-[100] bg-[rgba(243,238,228,0.7)] backdrop-blur-[22px]">
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="ios-glass-pill absolute right-6 top-5 flex h-10 w-10 items-center justify-center">
              <span className="relative block h-[20px] w-[20px]">
                <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rotate-45 bg-ink" />
                <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 -rotate-45 bg-ink" />
              </span>
            </button>

            <div className="flex h-full items-center px-5">
              <div className="ios-glass-strong w-full px-8 py-12">
                <nav className="flex flex-col gap-8">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      href={localePath(locale, link.href)}
                      onClick={() => setOpen(false)}
                      className="font-display text-[34px] font-normal leading-none tracking-[-0.02em] text-ink">
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-12 inline-flex items-center text-[12px] uppercase tracking-[0.13em] text-ink-2">
                  <button
                    type="button"
                    onClick={() => switchLocale("nl")}
                    className={locale === "nl" ? "text-slate" : "text-ink-2"}>
                    NL
                  </button>
                  <span className="mx-2 text-ink-3">/</span>
                  <button
                    type="button"
                    onClick={() => switchLocale("en")}
                    className={locale === "en" ? "text-slate" : "text-ink-2"}>
                    EN
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
