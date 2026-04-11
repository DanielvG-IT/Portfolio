import clsx from "clsx";
import Link from "next/link";

interface ProjectRowProps {
  name: string;
  category: string;
  year: string;
  href?: string;
  linkLabel?: string;
  muted?: boolean;
  fallbackText?: string;
}

export default function ProjectRow({
  name,
  category,
  year,
  href,
  linkLabel,
  muted,
  fallbackText,
}: ProjectRowProps) {
  const interactive = Boolean(href);

  return (
    <article
      className={clsx(
        "-mx-2 grid grid-cols-1 gap-3 border-t border-edge px-2 py-5 transition-colors duration-[120ms] md:grid-cols-[3fr_2fr_1fr_auto] md:items-center",
        interactive && "hover:bg-[rgba(43,72,101,0.05)]",
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
        {interactive ? (
          <Link
            href={href as string}
            className="text-[13px] text-slate transition-colors duration-150 hover:text-ink"
            target={href?.startsWith("http") ? "_blank" : undefined}
            rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}>
            {linkLabel}
          </Link>
        ) : (
          <span className="text-[13px] text-ink-3">{fallbackText}</span>
        )}
      </div>
    </article>
  );
}
