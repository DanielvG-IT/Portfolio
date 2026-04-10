"use client";

import { Monitor, MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import { cn } from "@/lib/utils";

const themeOptions = [
  { value: "light", icon: SunMedium, label: "Light" },
  { value: "dark", icon: MoonStar, label: "Dark" },
  { value: "system", icon: Monitor, label: "System" },
] as const;

interface ThemeToggleProps {
  ariaLabel: string;
}

export function ThemeToggle({ ariaLabel }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  return (
    <div
      aria-label={ariaLabel}
      className="inline-flex items-center rounded-full border border-border bg-surface p-1 shadow-soft">
      {themeOptions.map(({ value, icon: Icon, label }) => {
        const active = mounted ? theme === value : value === "system";

        return (
          <button
            key={value}
            type="button"
            aria-label={label}
            onClick={() => setTheme(value)}
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground-soft transition-colors hover:text-foreground",
              active && "bg-background text-foreground shadow-soft",
            )}>
            <Icon className="h-4 w-4" />
          </button>
        );
      })}
    </div>
  );
}
