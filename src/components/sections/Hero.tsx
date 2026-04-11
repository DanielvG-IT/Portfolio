import Image from "next/image";

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
  return (
    <section className="px-page-x-sm pt-24 md:px-page-x">
      <div className="mx-auto grid min-h-screen max-w-[1280px] items-start gap-10 md:grid-cols-[55fr_45fr]">
        <div className="pt-6 md:pt-10">
          <SectionLabel label={eyebrow} />

          <h1 className="mt-8 font-display text-display-xl font-normal tracking-[-0.025em] text-ink">
            {headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-7 max-w-[460px] text-[17px] leading-[1.7] text-ink-2">
            {body}
          </p>

          <PrimaryButton
            href={localePath(locale, "/projects")}
            className="mt-9">
            {cta}
          </PrimaryButton>
        </div>

        <div className="relative min-h-[420px] md:min-h-[calc(100vh-96px)]">
          <Image
            src="https://avatars.githubusercontent.com/u/72395437"
            alt="Daniël van Ginneken"
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
    </section>
  );
}
