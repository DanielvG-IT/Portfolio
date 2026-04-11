import clsx from "clsx";
import { notFound } from "next/navigation";

import TimelineEntry from "@/components/sections/TimelineEntry";
import SectionLabel from "@/components/ui/SectionLabel";
import { getMessages, isLocale } from "@/lib/i18n";

interface JourneyPageProps {
  params: Promise<{ locale: string }>;
}

export default async function JourneyPage({ params }: JourneyPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const journey = getMessages(locale).journey;

  return (
    <section className="px-page-x-sm pb-section-sm pt-[140px] md:px-page-x">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:gap-16">
          <div className="overflow-hidden">
            <SectionLabel label={journey.eyebrow} />
            <h1 className="mt-8 font-display text-display-lg font-normal text-ink">
              {journey.headline}
            </h1>
          </div>

          <div className="overflow-hidden md:pt-[52px]">
            <p className="max-w-[560px] text-body-md text-ink-2">
              {journey.intro}
            </p>
          </div>
        </div>

        <div className="mt-16 border border-edge bg-surface px-6 py-8 md:px-10 md:py-10">
          <div className="grid gap-6 md:grid-cols-3 md:gap-0">
            {journey.band.map((item, index) => (
              <article
                key={item.title}
                className={clsx(
                  "md:px-7",
                  index > 0 &&
                    "border-t border-edge pt-6 md:border-l md:border-t-0 md:pt-0",
                  index === 0 && "md:pl-0",
                  index === journey.band.length - 1 && "md:pr-0",
                )}>
                <SectionLabel label={item.label} />
                <h2 className="mt-4 text-[17px] font-medium text-ink">
                  {item.title}
                </h2>
                <p className="mt-2 text-[15px] leading-[1.65] text-ink-2">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16">
          {journey.entries.map((entry) => (
            <TimelineEntry
              key={`${entry.year}-${entry.title}`}
              year={entry.year}
              title={entry.title}
              description={entry.description}
              relevance={entry.relevance}
            />
          ))}
          <div className="border-t border-edge" />
        </div>
      </div>
    </section>
  );
}
