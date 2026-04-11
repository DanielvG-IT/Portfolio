"use client";

import clsx from "clsx";
import type { Route } from "next";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import MobileNav from "@/components/layout/MobileNav";
import {
  localePath,
  switchLocaleInPath,
  type Locale,
  type Messages,
} from "@/lib/i18n";

interface HeaderProps {
  locale: Locale;
  nav: Messages["nav"];
}

export default function Header({ locale, nav }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/", label: nav.home },
    { href: "/about", label: nav.about },
    { href: "/projects", label: nav.projects },
    { href: "/journey", label: nav.journey },
    { href: "/contact", label: nav.contact },
  ];

  const switchLocale = (nextLocale: Locale) => {
    const target = switchLocaleInPath(pathname, nextLocale);
    router.push(target as Route);
  };

  return (
    <header
      className={clsx(
        "glass-surface fixed left-0 right-0 top-0 z-50 h-16 border-b transition-colors duration-300",
        scrolled ? "border-[rgba(212,206,196,0.6)]" : "border-transparent",
      )}>
      <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-page-x-sm md:px-page-x">
        <Link
          href={localePath(locale, "/")}
          className="text-[15px] font-medium tracking-[-0.01em] text-ink">
          Daniël van Ginneken
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => {
            const target = localePath(locale, link.href);
            const isHome = link.href === "/";
            const active = isHome
              ? pathname === target
              : pathname === target || pathname.startsWith(`${target}/`);

            return (
              <Link
                key={link.href}
                href={target}
                className={clsx(
                  "text-[15px] transition-colors duration-150",
                  active
                    ? "text-ink underline underline-offset-[6px] decoration-2 decoration-slate"
                    : "text-ink-2 hover:text-ink",
                )}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <span className="text-[14px] text-ink-2">
            <button
              type="button"
              onClick={() => switchLocale("nl")}
              className={
                locale === "nl" ? "font-medium text-ink" : "text-ink-3"
              }>
              NL
            </button>
            <span className="mx-1.5 text-ink-3">/</span>
            <button
              type="button"
              onClick={() => switchLocale("en")}
              className={
                locale === "en" ? "font-medium text-ink" : "text-ink-3"
              }>
              EN
            </button>
          </span>

          <div className="h-1.5 w-1.5 rounded-full bg-slate" />

          <Link
            href="/cv.pdf"
            className="text-[15px] font-medium text-slate transition-colors hover:text-ink">
            {nav.cv}
          </Link>
        </div>

        <MobileNav locale={locale} links={navLinks} />
      </div>
    </header>
  );
}
