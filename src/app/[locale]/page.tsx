import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import MotionReveal from "@/components/ui/MotionReveal";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SectionLabel from "@/components/ui/SectionLabel";
import { getMessages, isLocale, localePath } from "@/lib/i18n";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const home = getMessages(locale).home;

  return (
    <div className="px-page-x-sm pb-20 pt-[96px] md:px-page-x md:pb-28 md:pt-[124px]">
      <div className="mx-auto max-w-[1280px]">
        <section className="grid items-end gap-12 md:grid-cols-[56fr_44fr] md:gap-16">
          <div>
            <MotionReveal delay={0.02} y={14} blur={5}>
              <SectionLabel label={home.hero.eyebrow} />
            </MotionReveal>

            <MotionReveal delay={0.08} y={20} blur={7}>
              <h1 className="mt-8 max-w-[760px] font-display text-display-xl font-normal text-ink">
                {home.hero.headline}
              </h1>
            </MotionReveal>

            <MotionReveal delay={0.14} y={14} blur={6}>
              <p className="mt-5 max-w-[560px] text-body-lg text-ink-2">
                {home.hero.subline}
              </p>
            </MotionReveal>

            <MotionReveal
              delay={0.2}
              y={12}
              blur={4}
              className="mt-9 flex flex-wrap gap-4">
              <PrimaryButton href={localePath(locale, "/projects")}>
                {home.hero.ctaPrimary}
              </PrimaryButton>
              <Link
                href={localePath(locale, "/about")}
                className="ios-glass-pill inline-flex items-center justify-center px-6 py-[13px] text-[15px] font-medium text-ink transition-colors hover:text-slate">
                {home.hero.ctaSecondary}
              </Link>
            </MotionReveal>
          </div>

          <MotionReveal delay={0.12} y={24} blur={10}>
            <figure>
              <div className="ios-glass relative h-[520px] overflow-hidden md:h-[620px]">
                <Image
                  src="/images/portrait.jpg"
                  alt="Daniël van Ginneken"
                  fill
                  priority
                  sizes="(min-width: 768px) 42vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
              <figcaption className="mt-3 text-[13px] text-ink-3">
                {home.hero.portraitNote}
              </figcaption>
            </figure>
          </MotionReveal>
        </section>

        <section className="mt-20 border-t border-edge pt-14 md:mt-24">
          <MotionReveal delay={0.04} y={14} blur={6}>
            <SectionLabel label={home.foundation.heading} />
          </MotionReveal>

          <div className="mt-8 grid gap-6 md:max-w-[860px]">
            {home.foundation.paragraphs.map((paragraph, index) => (
              <MotionReveal key={paragraph} delay={0.1 + index * 0.06} y={14}>
                <p className="text-body-md text-ink-2">{paragraph}</p>
              </MotionReveal>
            ))}
          </div>
        </section>

        <section className="mt-20 border-t border-edge pt-14 md:mt-24">
          <MotionReveal delay={0.04} y={14} blur={6}>
            <SectionLabel label={home.capabilities.heading} />
            <p className="mt-6 max-w-[720px] text-body-md text-ink-2">
              {home.capabilities.intro}
            </p>
          </MotionReveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {home.capabilities.groups.map((group, index) => (
              <MotionReveal
                key={group.title}
                delay={0.1 + index * 0.05}
                y={14}
                blur={6}>
                <article className="ios-glass h-full p-6">
                  <h2 className="text-[18px] font-medium text-ink">
                    {group.title}
                  </h2>
                  <p className="mt-3 text-[12px] uppercase tracking-[0.13em] text-ink-3">
                    {group.prefix}
                  </p>
                  <p className="mt-2 text-[15px] leading-[1.7] text-ink-2">
                    {group.items.join(" • ")}
                  </p>
                  <p className="mt-4 text-[14px] leading-[1.65] text-ink-2">
                    {group.note}
                  </p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </section>

        <section className="mt-20 border-t border-edge pt-14 md:mt-24">
          <MotionReveal delay={0.04} y={14} blur={6}>
            <SectionLabel label={home.work.heading} />
            <p className="mt-6 max-w-[760px] text-body-md text-ink-2">
              {home.work.intro}
            </p>
          </MotionReveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {home.work.references.map((reference, index) => (
              <MotionReveal
                key={reference.title}
                delay={0.1 + index * 0.05}
                y={12}
                blur={5}>
                <article className="ios-glass p-6">
                  <p className="text-[12px] uppercase tracking-[0.13em] text-slate">
                    {reference.status}
                  </p>
                  <h2 className="mt-3 text-[19px] font-medium text-ink">
                    {reference.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-[1.7] text-ink-2">
                    {reference.summary}
                  </p>
                </article>
              </MotionReveal>
            ))}
          </div>

          <MotionReveal delay={0.18} y={10} blur={4} className="mt-10">
            <Link
              href={localePath(locale, "/projects")}
              className="ios-glass-pill inline-flex items-center px-4 py-2 text-[15px] font-medium text-slate transition-colors hover:text-ink">
              {home.work.cta}
            </Link>
          </MotionReveal>
        </section>
      </div>
    </div>
  );
}
