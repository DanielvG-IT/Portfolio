import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { resumeFile } from "@/content/socials";
import type { HeroContent, Locale, SiteDictionary } from "@/types/site";

import { PortraitBlock } from "./portrait-block";

interface HeroProps {
  locale: Locale;
  content: HeroContent;
  dictionary: SiteDictionary;
  trustStrip: string[];
}

export function Hero({ locale, content, dictionary, trustStrip }: HeroProps) {
  return (
    <section className="container mx-auto pt-8 md:pt-10 xl:pt-12">
      <div className="hero-stage">
        <div className="hero-copy fade-up">
          <div className="hero-kicker-row">
            <p className="eyebrow">{content.eyebrow}</p>
            <span className="hero-kicker-meta">
              {locale === "nl"
                ? "Nederland • 19 • student software development"
                : "Netherlands • 19 • software development student"}
            </span>
          </div>

          <h1 className="hero-title font-semibold">{content.title}</h1>
          <p className="hero-intro">{content.intro}</p>

          <div className="hero-cta-row">
            <Button asChild size="lg">
              <Link href={resumeFile(locale)} download>
                {dictionary.common.downloadResume}
              </Link>
            </Button>

            <Link
              href="https://github.com/DanielvG-IT"
              target="_blank"
              rel="noreferrer"
              className="hero-inline-link">
              {dictionary.common.github}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>

            <Link
              href="https://linkedin.com/in/daniel-v-ginneken/"
              target="_blank"
              rel="noreferrer"
              className="hero-inline-link">
              {dictionary.common.linkedin}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="hero-trust-row">
            {trustStrip.map((item) => (
              <div key={item} className="hero-trust-item">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-module order-2 p-5 xl:absolute xl:left-0 xl:top-10 xl:w-[18.5rem]">
            <p className="eyebrow">
              {locale === "nl" ? "Hoofdrichting" : "Primary direction"}
            </p>
            <p className="hero-module-title mt-4">
              {locale === "nl"
                ? "Software eerst, met technische diepte erachter."
                : "Software first, with technical depth behind it."}
            </p>
            <p className="hero-module-copy">{content.detailLines[0]}</p>
          </div>

          <div className="order-1 xl:ml-[5.25rem]">
            <PortraitBlock
              variant="hero"
              priority
              badge={
                locale === "nl"
                  ? "Software / infrastructuur"
                  : "Software / infrastructure"
              }
              overlayLabel={
                locale === "nl" ? "Portret / identiteit" : "Portrait / identity"
              }
              caption=""
            />
          </div>

          <div className="hero-module order-3 p-5 xl:absolute xl:bottom-9 xl:left-0 xl:mt-0 xl:w-[20.5rem]">
            <p className="eyebrow">
              {locale === "nl" ? "Fundament" : "Roots"}
            </p>
            <p className="hero-module-title mt-4">
              {locale === "nl"
                ? "Troubleshooting, Linux en netwerken als basis."
                : "Troubleshooting, Linux, and networking as a base."}
            </p>
            <p className="hero-module-copy">{content.detailLines[1]}</p>
            <div className="hero-module-tags">
              <span className="hero-module-tag">Linux</span>
              <span className="hero-module-tag">
                {locale === "nl" ? "Netwerken" : "Networking"}
              </span>
              <span className="hero-module-tag">Troubleshooting</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
