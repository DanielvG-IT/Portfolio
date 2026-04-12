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
        "fixed left-0 right-0 top-0 z-50 h-[72px] border-b transition-colors duration-300",
        scrolled
          ? "border-edge bg-ground/96 backdrop-blur-sm"
          : "border-transparent bg-ground/88",
      )}>
      <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-page-x-sm md:px-page-x">
        <Link
          href={localePath(locale, "/")}
          className="font-display text-[28px] leading-none tracking-[-0.01em] text-ink">
          Daniël van Ginneken
        </Link>

        <div className="hidden items-center gap-4 md:flex">
          <nav className="ios-glass-pill flex items-center gap-7 px-5 py-2">
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
                    "text-[12px] uppercase tracking-[0.13em] transition-colors duration-150",
                    active ? "text-slate" : "text-ink-2 hover:text-ink",
                  )}>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <span className="ios-glass-pill inline-flex items-center px-3 py-1 text-[12px] uppercase tracking-[0.13em] text-ink-2">
            <button
              type="button"
              onClick={() => switchLocale("nl")}
              className={locale === "nl" ? "text-slate" : "text-ink-3"}>
              NL
            </button>
            <span className="mx-2 text-ink-3">/</span>
            <button
              type="button"
              onClick={() => switchLocale("en")}
              className={locale === "en" ? "text-slate" : "text-ink-3"}>
              EN
            </button>
          </span>

          <Link
            href="/cv.pdf"
            className="ios-glass-pill px-3 py-[7px] text-[12px] font-medium uppercase tracking-[0.09em] text-slate transition-colors hover:text-ink">
            {nav.cv}
          </Link>
        </div>

        <MobileNav locale={locale} links={navLinks} />
      </div>
    </header>
  );
}
