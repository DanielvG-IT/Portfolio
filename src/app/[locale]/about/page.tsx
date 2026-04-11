import Image from "next/image";
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
    <section className="px-page-x-sm pb-section-sm pt-[140px] md:px-page-x">
      <div className="mx-auto grid max-w-[1280px] gap-12 md:grid-cols-[58fr_42fr] md:gap-16">
        <div>
          <MotionReveal delay={0.02} y={14} blur={5}>
            <SectionLabel label={about.eyebrow} />
          </MotionReveal>
          <MotionReveal delay={0.1} y={20} blur={8}>
            <h1 className="mt-8 max-w-[700px] font-display text-display-lg font-normal text-ink">
              {about.headline}
            </h1>
          </MotionReveal>

          <MotionReveal delay={0.16} y={16} blur={7} className="mt-8 space-y-6">
            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-[690px] text-body-lg text-ink-2">
                {paragraph}
              </p>
            ))}
          </MotionReveal>

          <MotionReveal delay={0.22} y={18} blur={7} className="mt-14">
            <h2 className="font-display text-display-md font-normal text-ink">
              {about.takeawaysTitle}
            </h2>

            <div className="mt-8 border-t border-edge">
              {about.takeaways.map((item, index) => (
                <div key={item.title} className="border-b border-edge py-6">
                  <p className="text-[17px] font-medium text-ink">
                    <span className="mr-2 text-ink">
                      {String(index + 1).padStart(2, "0")}.
                    </span>
                    {item.title}
                  </p>
                  <p className="mt-2 max-w-[620px] text-body-md text-ink-2">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </MotionReveal>
        </div>

        <MotionReveal delay={0.12} y={26} blur={10} className="md:pl-10">
          <div className="relative h-[420px] max-h-[480px] overflow-hidden md:h-[480px]">
            <Image
              src="https://avatars.githubusercontent.com/u/72395437"
              alt="Daniël van Ginneken"
              fill
              sizes="(min-width: 768px) 35vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          <p className="mt-3 text-[13px] italic text-ink-3">
            {about.photoNote}
          </p>
        </MotionReveal>
      </div>
    </section>
  );
}
