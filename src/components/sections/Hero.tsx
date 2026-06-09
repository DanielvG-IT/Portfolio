import Image from "next/image";

import GlassCard from "@/components/ui/GlassCard";
import MotionReveal from "@/components/ui/MotionReveal";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SectionLabel from "@/components/ui/SectionLabel";
import { localePath, type Locale } from "@/lib/i18n";

interface HeroProps {
  locale: Locale;
  eyebrow: string;
  headline: string[];
  body: string;
  cta: string;
}

export default function Hero({
  locale,
  eyebrow,
  headline,
  body,
  cta,
}: HeroProps) {
  const quickTiles =
    locale === "nl"
      ? [
          { label: "Focus", value: "Software engineering" },
          { label: "Stack", value: "Next.js + TypeScript" },
          { label: "Status", value: "Open voor stage" },
        ]
      : [
          { label: "Focus", value: "Software engineering" },
          { label: "Stack", value: "Next.js + TypeScript" },
          { label: "Status", value: "Open to internships" },
        ];

  return (
    <section className="px-page-x-sm pt-24 md:px-page-x">
      <div className="mx-auto grid min-h-screen max-w-[1280px] items-start gap-10 md:grid-cols-[55fr_45fr]">
        <div className="pt-6 md:pt-10">
          <MotionReveal delay={0.02} y={14} blur={5}>
            <SectionLabel label={eyebrow} />
          </MotionReveal>

          <MotionReveal delay={0.1} y={26} blur={10}>
            <h1 className="mt-8 font-display text-display-xl font-normal tracking-[-0.025em] text-ink">
              {headline.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h1>
          </MotionReveal>

          <MotionReveal delay={0.18} y={20} blur={8}>
            <p className="mt-7 max-w-[460px] text-[17px] leading-[1.7] text-ink-2">
              {body}
            </p>
          </MotionReveal>

          <MotionReveal delay={0.24} y={16} blur={4}>
            <PrimaryButton
              href={localePath(locale, "/projects")}
              className="mt-9">
              {cta}
            </PrimaryButton>
          </MotionReveal>

          <MotionReveal delay={0.32} y={24} blur={10}>
            <GlassCard
              padding="sm"
              className="mt-10 max-w-[520px]">
              <div className="grid gap-3 md:grid-cols-3">
                {quickTiles.map((tile, index) => (
                  <MotionReveal
                    key={tile.label}
                    delay={0.38 + index * 0.07}
                    y={12}
                    blur={6}>
                    <article className="rounded-card-sm border border-white/55 bg-[rgba(255,255,255,0.22)] p-4 transition-transform duration-500 ease-out hover:-translate-y-1">
                      <p className="text-label uppercase text-ink-3">
                        {tile.label}
                      </p>
                      <p className="mt-2 text-[14px] font-medium text-ink">
                        {tile.value}
                      </p>
                    </article>
                  </MotionReveal>
                ))}
              </div>
            </GlassCard>
          </MotionReveal>
        </div>

        <MotionReveal
          className="animate-tilt-float relative min-h-[420px] md:min-h-[calc(100vh-96px)]"
          delay={0.1}
          y={30}
          blur={12}
          duration={0.9}>
          <Image
            src="https://avatars.githubusercontent.com/u/72395437"
            alt="Daniël van Ginneken"
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover object-top saturate-[1.04]"
            priority
          />
        </MotionReveal>
      </div>
    </section>
  );
}
