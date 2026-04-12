import { notFound } from "next/navigation";

import MotionReveal from "@/components/ui/MotionReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { getMessages, isLocale } from "@/lib/i18n";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const about = getMessages(locale).about;

  return (
    <section className="px-page-x-sm pb-24 pt-[130px] md:px-page-x md:pt-[150px]">
      <div className="mx-auto max-w-[900px]">
        <MotionReveal delay={0.02} y={14} blur={5}>
          <SectionLabel label={about.eyebrow} />
        </MotionReveal>

        <MotionReveal delay={0.08} y={18} blur={7}>
          <h1 className="mt-8 max-w-[820px] font-display text-display-lg font-normal text-ink">
            {about.headline}
          </h1>
        </MotionReveal>

        <MotionReveal delay={0.14} y={14} blur={6}>
          <p className="mt-8 max-w-[780px] text-body-lg text-ink-2">
            {about.opening}
          </p>
        </MotionReveal>

        <div className="mt-14 space-y-14">
          {about.sections.map((section, sectionIndex) => (
            <MotionReveal
              key={section.title}
              delay={0.18 + sectionIndex * 0.05}
              y={14}
              blur={6}>
              <section className="border-t border-edge pt-8">
                <h2 className="font-display text-display-md font-normal text-ink">
                  {section.title}
                </h2>
                <div className="mt-5 space-y-5">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-body-md text-ink-2">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            </MotionReveal>
          ))}
        </div>

        <MotionReveal delay={0.3} y={12} blur={5} className="mt-14">
          <section className="border-t border-edge pt-8">
            <h2 className="font-display text-display-md font-normal text-ink">
              {about.personalTitle}
            </h2>
            <p className="mt-5 text-body-md text-ink-2">{about.personal}</p>
          </section>
        </MotionReveal>
      </div>
    </section>
  );
}
