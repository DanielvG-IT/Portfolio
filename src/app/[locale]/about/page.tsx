import Image from "next/image";
import { notFound } from "next/navigation";

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
          <SectionLabel label={about.eyebrow} />
          <h1 className="mt-8 max-w-[700px] font-display text-display-lg font-normal text-ink">
            {about.headline}
          </h1>

          <div className="mt-8 space-y-6">
            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-[690px] text-body-lg text-ink-2">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-14">
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
          </div>
        </div>

        <div className="md:pl-10">
          <div className="relative h-[420px] max-h-[480px] overflow-hidden md:h-[480px]">
            <Image
              src="/images/portrait.jpg"
              alt="Daniël van Ginneken"
              fill
              sizes="(min-width: 768px) 35vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          <p className="mt-3 text-[13px] italic text-ink-3">
            {about.photoNote}
          </p>
        </div>
      </div>
    </section>
  );
}
