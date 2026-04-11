import clsx from "clsx";
import { notFound } from "next/navigation";

import TimelineEntry from "@/components/sections/TimelineEntry";
import MotionReveal from "@/components/ui/MotionReveal";
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
          <MotionReveal
            delay={0.03}
            y={16}
            blur={6}
            className="overflow-hidden">
            <SectionLabel label={journey.eyebrow} />
            <h1 className="mt-8 font-display text-display-lg font-normal text-ink">
              {journey.headline}
            </h1>
          </MotionReveal>

          <MotionReveal
            delay={0.1}
            y={16}
            blur={6}
            className="overflow-hidden md:pt-[52px]">
            <p className="max-w-[560px] text-body-md text-ink-2">
              {journey.intro}
            </p>
          </MotionReveal>
        </div>

        <MotionReveal
          delay={0.14}
          y={20}
          blur={7}
          className="mt-16 border border-edge bg-surface px-6 py-8 md:px-10 md:py-10">
          <div className="grid gap-6 md:grid-cols-3 md:gap-0">
            {journey.band.map((item, index) => (
              <MotionReveal
                key={item.title}
                delay={0.18 + index * 0.07}
                y={14}
                blur={5}
                className={clsx(
                  "md:px-7",
                  index > 0 &&
                    "border-t border-edge pt-6 md:border-l md:border-t-0 md:pt-0",
                  index === 0 && "md:pl-0",
                  index === journey.band.length - 1 && "md:pr-0",
                )}>
                <article>
                  <SectionLabel label={item.label} />
                  <h2 className="mt-4 text-[17px] font-medium text-ink">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-[15px] leading-[1.65] text-ink-2">
                    {item.body}
                  </p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </MotionReveal>

        <div className="mt-16">
          {journey.entries.map((entry, index) => (
            <TimelineEntry
              key={`${entry.year}-${entry.title}`}
              year={entry.year}
              title={entry.title}
              description={entry.description}
              relevance={entry.relevance}
              animationDelay={0.04 + index * 0.04}
            />
          ))}
          <div className="border-t border-edge" />
        </div>
      </div>
    </section>
  );
}
