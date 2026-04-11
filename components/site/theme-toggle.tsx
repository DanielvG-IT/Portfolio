"use client";

import { MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import type { Locale } from "@/types/site";

interface ThemeToggleProps {
  ariaLabel: string;
  locale: Locale;
}

export function ThemeToggle({ ariaLabel, locale }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );
  const nextTheme = mounted && resolvedTheme === "dark" ? "light" : "dark";
  const label =
    locale === "nl"
      ? nextTheme === "light"
        ? "Schakel naar licht thema"
        : "Schakel naar donker thema"
      : nextTheme === "light"
        ? "Switch to light theme"
        : "Switch to dark theme";
  const Icon = mounted && resolvedTheme === "dark" ? SunMedium : MoonStar;

  return (
    <button
      type="button"
      aria-label={`${ariaLabel}: ${label}`}
      title={label}
      onClick={() => setTheme(nextTheme)}
      className="header-icon-button">
      <Icon className="h-4 w-4" />
    </button>
  );
}
