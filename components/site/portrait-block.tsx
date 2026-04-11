import Image from "next/image";

import { cn } from "@/lib/utils";

interface PortraitBlockProps {
  caption: string;
  className?: string;
  priority?: boolean;
  badge?: string;
  overlayLabel?: string;
  variant?: "hero" | "default";
}

export function PortraitBlock({
  caption,
  className,
  priority = false,
  badge,
  overlayLabel,
  variant = "default",
}: PortraitBlockProps) {
  const isHero = variant === "hero";

  return (
    <div className={cn("relative isolate", className)}>
      {isHero ? (
        <div className="hero-portrait-shell">
          <div className="hero-portrait-frame">
            {badge ? <div className="hero-portrait-badge">{badge}</div> : null}
            {overlayLabel ? (
              <div className="hero-portrait-label">{overlayLabel}</div>
            ) : null}
            <div className="relative h-full min-h-[34rem] overflow-hidden rounded-[2rem] xl:min-h-[43rem]">
              <Image
                src="/assets/Daniel-picture.png"
                alt="Portrait of Daniël van Ginneken"
                width={980}
                height={1320}
                priority={priority}
                className="h-full w-full object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/22 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/56 to-transparent" />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div
            className={cn(
              "pointer-events-none absolute inset-x-[14%] top-[8%] z-0 h-[44%] rounded-full blur-3xl",
              "bg-accent-soft opacity-80",
            )}
          />
          <div className="surface-card relative z-10 p-4 md:p-5">
            <div className="hairline-grid absolute inset-0 opacity-20" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-border bg-surface-strong">
              <div className="aspect-[4/5]">
                <Image
                  src="/assets/Daniel-picture.png"
                  alt="Portrait of Daniël van Ginneken"
                  width={800}
                  height={1000}
                  priority={priority}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
            <p className="relative mt-4 max-w-sm font-mono text-xs uppercase tracking-[0.18em] text-foreground-soft">
              {caption}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
