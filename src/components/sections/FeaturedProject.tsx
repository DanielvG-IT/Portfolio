import Link from "next/link";

import GlassCard from "@/components/ui/GlassCard";
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
    <GlassCard variant="float" padding="lg">
      <p className="text-label uppercase text-ink-3">{project.category}</p>
      <h2 className="mt-4 font-display text-display-md font-normal text-ink">
        {project.name}
      </h2>
      <p className="mt-4 max-w-[680px] text-body-md text-ink-2">
        {project.description}
      </p>
      <Link
        href={localePath(locale, "/projects")}
        className="mt-6 inline-block text-[15px] font-medium text-slate transition-colors hover:text-ink">
        {project.linkLabel}
      </Link>
    </GlassCard>
  );
}
