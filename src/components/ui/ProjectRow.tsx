import clsx from "clsx";
import type { Route } from "next";
import Link from "next/link";

import MotionReveal from "@/components/ui/MotionReveal";

interface ProjectRowProps {
  name: string;
  category: string;
  year: string;
  href?: string;
  linkLabel?: string;
  muted?: boolean;
  fallbackText?: string;
  animationDelay?: number;
}

export default function ProjectRow({
  name,
  category,
  year,
  href,
  linkLabel,
  muted,
  fallbackText,
  animationDelay = 0,
}: ProjectRowProps) {
  const interactive = Boolean(href);
  const isExternal = href?.startsWith("http");

  return (
    <MotionReveal delay={animationDelay} y={16} blur={6}>
      <article
        className={clsx(
          "-mx-2 grid grid-cols-1 gap-3 border-t border-edge px-2 py-5 transition-all duration-200 ease-out md:grid-cols-[3fr_2fr_1fr_auto] md:items-center",
          interactive &&
            "hover:translate-x-[1px] hover:bg-[rgba(43,72,101,0.05)]",
        )}>
        <p
          className={clsx(
            "text-[19px] font-medium",
            muted ? "text-ink-3" : "text-ink",
          )}>
          {name}
        </p>
        <p className="text-label uppercase text-ink-3">{category}</p>
        <p className={clsx("text-[15px]", muted ? "text-ink-3" : "text-ink-2")}>
          {year}
        </p>
        <div>
          {interactive && isExternal ? (
            <a
              href={href}
              className="text-[13px] text-slate transition-colors duration-150 hover:text-ink"
              target="_blank"
              rel="noopener noreferrer">
              {linkLabel}
            </a>
          ) : interactive ? (
            <Link
              href={href as Route}
              className="text-[13px] text-slate transition-colors duration-150 hover:text-ink">
              {linkLabel}
            </Link>
          ) : (
            <span className="text-[13px] text-ink-3">{fallbackText}</span>
          )}
        </div>
      </article>
    </MotionReveal>
  );
}
