import Link from "next/link";

import GlassCard from "@/components/ui/GlassCard";
import MotionReveal from "@/components/ui/MotionReveal";
import { localePath, type Locale } from "@/lib/i18n";

interface FeaturedProjectProps {
  locale: Locale;
  project: {
    category: string;
    name: string;
    description: string;
    linkLabel: string;
  };
}

export default function FeaturedProject({
  locale,
  project,
}: FeaturedProjectProps) {
  return (
    <MotionReveal delay={0.1} y={24} blur={10}>
      <GlassCard
        variant="float"
        padding="lg"
        className="transition-transform duration-700 ease-out hover:-translate-y-1">
        <div className="flex items-center justify-between gap-4">
          <p className="glass-chip rounded-pill px-3 py-1 text-label uppercase text-ink-3">
            {project.category}
          </p>
          <span className="inline-flex items-center gap-2 text-[13px] text-ink-3">
            <span className="animate-soft-pulse h-2 w-2 rounded-full bg-slate/70" />
            Active build
          </span>
        </div>

        <h2 className="mt-4 font-display text-display-md font-normal text-ink">
          {project.name}
        </h2>
        <p className="mt-4 max-w-[680px] text-body-md text-ink-2">
          {project.description}
        </p>
        <Link
          href={localePath(locale, "/projects")}
          className="mt-8 inline-flex items-center rounded-pill border border-slate/35 px-4 py-2 text-[15px] font-medium text-slate transition-all duration-300 hover:-translate-y-[1px] hover:border-slate hover:text-ink">
          {project.linkLabel}
        </Link>
      </GlassCard>
    </MotionReveal>
  );
}
