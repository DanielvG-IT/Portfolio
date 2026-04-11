import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PortraitBlock } from "@/components/site/portrait-block";
import { SectionIntro } from "@/components/site/section-intro";
import { SectionShell } from "@/components/site/section-shell";
import { buildPageMetadata, getDictionary, isLocale } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    return {};
  }

  const dictionary = getDictionary(localeParam);

  return buildPageMetadata({
    locale: localeParam,
    route: "about",
    title: dictionary.meta.about.title,
    description: dictionary.meta.about.description,
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const dictionary = getDictionary(localeParam);

  return (
    <>
      <SectionShell>
        <div className="pt-[100px]">
          <SectionIntro
            eyebrow={dictionary.about.intro.eyebrow}
            title={dictionary.about.intro.title}
            description={dictionary.about.intro.description}
            size="inner"
            className="mb-10"
          />

          <div className="grid gap-10 xl:grid-cols-[64%_36%] xl:items-start">
            <div className="space-y-7">
              {dictionary.about.narrative.map((paragraph) => (
                <p
                  key={paragraph}
                  className="max-w-[60ch] text-[17px] leading-[1.7] text-[#6B6560]">
                  {paragraph}
                </p>
              ))}
            </div>

            <div>
              <PortraitBlock caption={dictionary.about.portraitNote} />
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <p className="eyebrow">{dictionary.about.principlesLabel}</p>
            <h2 className="section-title mt-4">
              {localeParam === "nl"
                ? "De standaarden achter hoe ik werk."
                : "The standards behind how I work."}
            </h2>
          </div>
          <div className="border-t border-[#D5CFC4]">
            {dictionary.about.principles.map((principle) => (
              <article
                key={principle.title}
                className="border-b border-[#D5CFC4] py-6">
                <h3 className="text-[22px] font-medium text-[#1A1A18]">
                  {principle.title}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.65] text-[#6B6560]">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div>
          <p className="eyebrow">{dictionary.about.currentFocus.title}</p>
          <h2 className="section-title mt-4">
            {dictionary.about.currentFocus.title}
          </h2>
          <p className="section-copy">
            {dictionary.about.currentFocus.description}
          </p>

          <ul className="mt-7 max-w-[760px] border-t border-[#D5CFC4]">
            {dictionary.about.currentFocus.items.map((item) => (
              <li
                key={item}
                className="border-b border-[#D5CFC4] py-4 text-[16px] text-[#6B6560]">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </SectionShell>
    </>
  );
}
