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
  const _unused = { badge, overlayLabel };
  void _unused;

  const isHero = variant === "hero";

  return (
    <div className={cn("relative", className)}>
      {isHero ? (
        <div className="hero-portrait">
          <Image
            src="/assets/Daniel-picture.png"
            alt="Portrait of Daniël van Ginneken"
            width={980}
            height={1320}
            priority={priority}
            className="h-full w-full object-cover object-top"
          />
        </div>
      ) : (
        <div>
          <div className="overflow-hidden">
            <Image
              src="/assets/Daniel-picture.png"
              alt="Portrait of Daniël van Ginneken"
              width={800}
              height={1000}
              priority={priority}
              className="h-full w-full max-h-[480px] object-cover object-top"
            />
          </div>
          {caption ? (
            <p className="mt-3 text-[13px] italic text-[#9E9892]">{caption}</p>
          ) : null}
        </div>
      )}
    </div>
  );
}
