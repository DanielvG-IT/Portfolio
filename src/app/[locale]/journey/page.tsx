import type { Metadata } from "next";
import { notFound } from "next/navigation";

import MotionReveal from "@/components/ui/MotionReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { getMessages, isLocale } from "@/lib/i18n";
import { generatePageMetadata } from "@/lib/site-config";

interface JourneyPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: JourneyPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { journey } = getMessages(locale);
  return generatePageMetadata(
    locale,
    "/journey",
    journey.headline,
    journey.opening,
  );
}

export default async function JourneyPage({ params }: JourneyPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const journey = getMessages(locale).journey;

  return (
    <section className="px-page-x-sm pb-24 pt-[130px] md:px-page-x md:pt-[150px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 md:grid-cols-[7fr_5fr] md:gap-16">
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
              {journey.opening}
            </p>
          </MotionReveal>
        </div>

        <ol className="mt-16 border-l border-edge pl-7">
          {journey.entries.map((entry, index) => (
            <MotionReveal
              key={`${entry.period}-${entry.title}`}
              delay={0.12 + index * 0.04}
              y={14}
              blur={6}>
              <li className="relative pb-12 last:pb-1">
                <span className="absolute -left-[34px] top-2 h-3 w-3 rounded-full border border-slate bg-ground" />
                <p className="text-[12px] uppercase tracking-[0.13em] text-slate">
                  {entry.period}
                </p>
                <h2 className="mt-3 font-display text-display-md font-normal text-ink">
                  {entry.title}
                </h2>
                <p className="mt-4 max-w-[820px] text-body-md text-ink-2">
                  {entry.narrative}
                </p>
                <p className="mt-4 text-[14px] text-slate">{entry.forward}</p>
              </li>
            </MotionReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
