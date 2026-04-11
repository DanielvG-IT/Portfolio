import Link from "next/link";

import { Button } from "@/components/ui/button";
import { getLocalizedPath } from "@/lib/site";
import type { HeroContent, Locale, SiteDictionary } from "@/types/site";

import { PortraitBlock } from "./portrait-block";

interface HeroProps {
  locale: Locale;
  content: HeroContent;
  dictionary: SiteDictionary;
}

export function Hero({ locale, content, dictionary }: HeroProps) {
  const proofBlocks =
    locale === "nl"
      ? [
          {
            label: "Software focus",
            title: "Softwareontwikkeling als hoofdrichting",
            copy: "Ik bouw bewust aan een sterker softwareprofiel. Rustig, gestructureerd en met aandacht voor kwaliteit op lange termijn.",
          },
          {
            label: "Infrastructure background",
            title: "Gegrond in systemen en troubleshooting",
            copy: "Mijn achtergrond in support en infrastructuur maakt het makkelijker om software te bouwen die ook buiten ideale omstandigheden klopt.",
          },
          {
            label: "Current status",
            title: "Beschikbaar voor stagegesprekken",
            copy: "Ik zoek omgevingen waar technisch vakmanschap en softwaregroei samenkomen. E-mail of LinkedIn werkt het snelst voor contact.",
          },
        ]
      : [
          {
            label: "Software focus",
            title: "Software development as primary direction",
            copy: "I am intentionally building a stronger software profile with calm execution, clear structure, and long-term quality standards.",
          },
          {
            label: "Infrastructure background",
            title: "Grounded in systems and troubleshooting",
            copy: "My support and infrastructure background helps me build software that behaves better outside ideal conditions.",
          },
          {
            label: "Current status",
            title: "Open to internship conversations",
            copy: "I am looking for teams where technical depth and software growth are both valued. Email or LinkedIn is the fastest way to connect.",
          },
        ];

  return (
    <>
      <section className="hero-shell">
        <div className="container mx-auto">
          <div className="hero-grid">
            <div className="hero-copy">
              <div className="signature-label">
                <p className="eyebrow">{content.eyebrow}</p>
              </div>

              <h1 className="hero-title mt-4">
                {content.titleLines[0]}
                <br />
                {content.titleLines[1]}
                <br />
                {content.titleLines[2]}
              </h1>

              <p className="hero-intro">{content.intro}</p>

              <div className="mt-9">
                <Button asChild>
                  <Link href={getLocalizedPath(locale, "projects")}>
                    {locale === "nl" ? "Bekijk mijn werk" : "View my work"}
                  </Link>
                </Button>
              </div>
            </div>

            <div className="hero-media">
              <PortraitBlock variant="hero" priority caption="" />
            </div>
          </div>
        </div>
      </section>

      <section className="proof-row">
        <div className="container mx-auto">
          <div className="proof-grid">
            {proofBlocks.map((block) => (
              <article key={block.title} className="proof-item">
                <p className="eyebrow">{block.label}</p>
                <h2 className="proof-title">{block.title}</h2>
                <p className="proof-copy">{block.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
