import Image from "next/image";

import { cn } from "@/lib/utils";

interface PortraitBlockProps {
  caption: string;
  className?: string;
  priority?: boolean;
}

export function PortraitBlock({
  caption,
  className,
  priority = false,
}: PortraitBlockProps) {
  return (
    <div
      className={cn(
        "surface-card relative overflow-hidden p-4 md:p-6",
        className,
      )}>
      <div className="hairline-grid absolute inset-0 opacity-30" />
      <div className="relative overflow-hidden rounded-[1.6rem] bg-surface-strong">
        <div className="aspect-[4/5]">
          <Image
            src="/assets/Daniel-picture.png"
            alt="Portrait of Daniël van Ginneken"
            width={800}
            height={1000}
            priority={priority}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <p className="relative mt-4 max-w-sm font-mono text-xs uppercase tracking-[0.18em] text-foreground-soft">
        {caption}
      </p>
    </div>
  );
}
