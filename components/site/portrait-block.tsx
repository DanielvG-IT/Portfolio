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
            <div className="relative h-full p-3 xl:p-4">
              <div className="relative h-full min-h-[34rem] overflow-hidden rounded-[1.45rem] bg-[#0a1017] xl:min-h-[43rem]">
                <div className="pointer-events-none absolute inset-y-0 left-5 z-10 w-px bg-white/8" />
                <div className="pointer-events-none absolute inset-y-0 right-5 z-10 w-px bg-white/6" />
                <Image
                  src="/assets/Daniel-picture.png"
                  alt="Portrait of Daniël van Ginneken"
                  width={980}
                  height={1320}
                  priority={priority}
                  className="h-full w-full scale-[1.03] object-cover object-[center_18%]"
                />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/24 to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/58 to-transparent" />
              </div>
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
            <div className="relative mt-4 signature-label">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-foreground-soft">
                {caption}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
