import Link from "next/link";

import { resumeFile } from "@/content/socials";
import { getLocalizedPath } from "@/lib/site";
import type { HeroContent, Locale, SiteDictionary } from "@/types/site";

import { CTAGroup } from "./cta-group";
import { PortraitBlock } from "./portrait-block";

interface HeroProps {
  locale: Locale;
  content: HeroContent;
  dictionary: SiteDictionary;
  portraitCaption: string;
}

export function Hero({
  locale,
  content,
  dictionary,
  portraitCaption,
}: HeroProps) {
  return (
    <section className="container mx-auto pt-10 md:pt-14 xl:pt-20">
      <div className="grid gap-8 xl:grid-cols-[minmax(0,1.2fr)_minmax(320px,440px)] xl:items-center">
        <div className="fade-up">
          <p className="eyebrow mb-5">{content.eyebrow}</p>
          <h1 className="max-w-4xl text-balance text-5xl font-semibold tracking-[-0.05em] md:text-6xl xl:text-[5.25rem] xl:leading-[0.95]">
            {content.title}
          </h1>
          <p className="section-copy mt-6 max-w-2xl">{content.intro}</p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {content.detailLines.map((line) => (
              <div
                key={line}
                className="rounded-[1.4rem] border border-border bg-surface px-4 py-4 text-sm leading-6 text-foreground-soft shadow-soft">
                {line}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <CTAGroup
              items={[
                {
                  label: dictionary.common.downloadResume,
                  href: resumeFile(locale),
                  download: true,
                },
                {
                  label: dictionary.common.github,
                  href: "https://github.com/DanielvG-IT",
                  variant: "secondary",
                  external: true,
                },
                {
                  label: dictionary.common.linkedin,
                  href: "https://linkedin.com/in/daniel-v-ginneken/",
                  variant: "secondary",
                  external: true,
                },
              ]}
            />
          </div>

          <div className="mt-10 rounded-[1.8rem] border border-border bg-surface p-5 shadow-soft">
            <p className="eyebrow mb-3">Headline directions</p>
            <ul className="space-y-3 text-sm leading-6 text-foreground-soft">
              {content.alternatives.map((alternative) => (
                <li key={alternative} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{alternative}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <Link
              href={getLocalizedPath(locale, "projects")}
              className="font-mono text-xs uppercase tracking-[0.2em] text-foreground-soft transition-colors hover:text-foreground">
              {dictionary.common.viewAllProjects}
            </Link>
          </div>
        </div>

        <PortraitBlock priority caption={portraitCaption} />
      </div>
    </section>
  );
}
