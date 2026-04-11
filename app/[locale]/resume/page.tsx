import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CapabilityGrid } from "@/components/site/capability-grid";
import { SectionIntro } from "@/components/site/section-intro";
import { SectionShell } from "@/components/site/section-shell";
import { Timeline } from "@/components/site/timeline";
import { Button } from "@/components/ui/button";
import { resumeFile } from "@/content/socials";
import {
  getCapabilityClusters,
  getEducationEntries,
  getExperienceEntries,
  getTools,
} from "@/content/journey";
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
    route: "resume",
    title: dictionary.meta.resume.title,
    description: dictionary.meta.resume.description,
  });
}

export default async function ResumePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const dictionary = getDictionary(localeParam);
  const capabilities = getCapabilityClusters(localeParam);
  const experience = getExperienceEntries(localeParam);
  const education = getEducationEntries(localeParam);
  const tools = getTools(localeParam);

  return (
    <>
      <SectionShell>
        <div className="grid gap-8 xl:grid-cols-[minmax(0,0.95fr)_20rem] xl:items-end">
          <SectionIntro {...dictionary.resumePage.intro} className="mb-0" />
          <div className="surface-card p-5">
            <div className="signature-label">
              <p className="eyebrow">{localeParam === "nl" ? "Profiel" : "Profile"}</p>
            </div>
            <p className="mt-4 text-sm leading-7 text-foreground-soft">
              {localeParam === "nl"
                ? "Een compacte, evidence-first samenvatting van de huidige richting, ervaring en technische basis."
                : "A compact, evidence-first overview of the current direction, experience, and technical base."}
            </p>
          </div>
        </div>

        <div className="surface-card mt-8 grid gap-8 p-8 md:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="text-base leading-8 text-foreground-soft">
              {dictionary.resumePage.summary}
            </p>
          </div>
          <div className="space-y-5 lg:justify-self-end">
            <div className="detail-list">
              <div className="detail-row">
                <span className="detail-row-label">
                  {localeParam === "nl" ? "Richting" : "Direction"}
                </span>
                <span className="text-sm leading-7 text-foreground-soft">
                  {localeParam === "nl"
                    ? "Softwareontwikkeling, ondersteund door infrastructuur- en supportervaring."
                    : "Software development, backed by infrastructure and support experience."}
                </span>
              </div>
              <div className="detail-row">
                <span className="detail-row-label">
                  {localeParam === "nl" ? "Focus nu" : "Current focus"}
                </span>
                <span className="text-sm leading-7 text-foreground-soft">
                  {localeParam === "nl"
                    ? "Dieper bouwen in moderne webontwikkeling, architectuurdenken en technische communicatie."
                    : "Building deeper in modern web development, architecture thinking, and technical communication."}
                </span>
              </div>
            </div>
            <div>
              <Button asChild size="lg">
                <Link href={resumeFile(localeParam)} download>
                  {dictionary.common.downloadResume}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <SectionIntro
          eyebrow={dictionary.resumePage.experienceTitle}
          title={dictionary.resumePage.experienceTitle}
          description={dictionary.resumePage.summary}
        />
        <Timeline items={experience} />
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionIntro
            eyebrow={dictionary.resumePage.educationTitle}
            title={dictionary.resumePage.educationTitle}
            description={dictionary.resumePage.summary}
            className="mb-0"
          />
          <div className="surface-card px-6 py-2 md:px-8">
            <div className="detail-list">
              {education.map((entry) => (
                <article
                  key={`${entry.period}-${entry.title}`}
                  className="detail-row md:grid-cols-[9rem_1fr] md:gap-6">
                  <span className="meta-chip w-fit">{entry.period}</span>
                  <div>
                    <div className="signature-label">
                      <p className="eyebrow">{entry.organization}</p>
                    </div>
                    <h2 className="mt-4 text-[1.35rem] font-semibold tracking-[-0.03em]">
                      {entry.title}
                    </h2>
                    <p className="mt-3 text-base leading-7 text-foreground-soft">
                      {entry.summary}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <SectionIntro
          eyebrow={dictionary.resumePage.capabilitiesTitle}
          title={dictionary.resumePage.capabilitiesTitle}
          description={dictionary.home.capabilities.description}
        />
        <CapabilityGrid locale={localeParam} items={capabilities} />
      </SectionShell>

      <SectionShell>
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionIntro
            eyebrow={dictionary.resumePage.toolsTitle}
            title={dictionary.resumePage.toolsTitle}
            description={dictionary.resumePage.summary}
            className="mb-0"
          />
          <div className="surface-card px-6 py-2 md:px-8">
            <div className="detail-list sm:grid sm:grid-cols-2 sm:gap-x-6 sm:[&>*:nth-child(-n+2)]:border-t-0">
              {tools.map((tool) => (
                <div key={tool} className="detail-row">
                  <span className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-foreground-soft">
                    {tool}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>
    </>
  );
}
