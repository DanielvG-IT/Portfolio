"use client";

import clsx from "clsx";
import type { Route } from "next";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import MobileNav from "@/components/layout/MobileNav";
import ThemeToggle from "@/components/ui/ThemeToggle";
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
    const onScroll = () => setScrolled(window.scrollY > 60);
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
        "fixed left-0 right-0 top-0 z-50 h-[68px] transition-all duration-300",
        scrolled
          ? "border-b border-[var(--color-border-subtle)] bg-[var(--color-bg-overlay-heavy)] backdrop-blur-md"
          : "border-b border-transparent bg-[var(--color-bg-overlay)]",
      )}
    >
      <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-page-x-sm md:px-page-x">
        {/*
          Logo — "Daniël." with the period as accent punctuation.
          If you prefer the full name, swap to "Daniël van Ginneken" and remove the span.
        */}
        <Link
          href={localePath(locale, "/")}
          className="font-display text-[22px] font-semibold leading-none tracking-[-0.02em] text-text"
        >
          Daniël<span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {/* Nav pill — liquid glass surface */}
          <nav className="liquid-glass flex items-center gap-5 rounded-[12px] px-4 py-2">
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
                    active
                      ? "text-text underline decoration-1 underline-offset-[5px] decoration-[var(--color-border-subtle)]"
                      : "text-text-secondary hover:text-text",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Locale toggle */}
          <span className="inline-flex items-center rounded-[10px] border border-[var(--color-border-subtle)] bg-bg-elevated px-3 py-1 text-[12px] uppercase tracking-[0.13em] text-text-secondary">
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
          </span>

          <ThemeToggle />

          <Link
            href="/cv.pdf"
            className="rounded-[10px] border border-[var(--color-border-subtle)] bg-bg-elevated px-3 py-[7px] text-[12px] font-semibold uppercase tracking-[0.09em] text-text transition-colors hover:border-accent hover:text-accent"
          >
            {nav.cv}
          </Link>
        </div>

        <MobileNav locale={locale} links={navLinks} />
      </div>
    </header>
  );
}
