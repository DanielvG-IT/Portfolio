import type { Metadata } from "next";
import { notFound } from "next/navigation";

import GlassCard from "@/components/ui/GlassCard";
import MotionReveal from "@/components/ui/MotionReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { getMessages, isLocale } from "@/lib/i18n";
import { generatePageMetadata } from "@/lib/site-config";

interface ProjectsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: ProjectsPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { projects } = getMessages(locale);
  return generatePageMetadata(
    locale,
    "/projects",
    projects.headline,
    projects.opening,
  );
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const projects = getMessages(locale).projects;

  return (
    <section className="px-page-x-sm pb-24 pt-[130px] md:px-page-x md:pt-[150px]">
      <div className="mx-auto max-w-[1280px]">
        <MotionReveal delay={0.04} y={18} blur={7}>
          <SectionLabel label={projects.eyebrow} />
          <h1 className="mt-8 max-w-[840px] font-display text-display-lg font-semibold tracking-[-0.02em] text-text">
            {projects.headline}
          </h1>
          <p className="mt-5 max-w-[760px] text-body-md text-text-secondary">
            {projects.opening}
          </p>
        </MotionReveal>

        <div className="mt-14 space-y-14">
          {projects.categories.map((category, categoryIndex) => (
            <section
              key={category.label}
              className="border-t border-[var(--color-border-subtle)] pt-10">
              <MotionReveal delay={0.08 + categoryIndex * 0.04} y={14} blur={6}>
                <h2 className="font-display text-display-md font-semibold tracking-[-0.015em] text-text">
                  {category.label}
                </h2>
                <p className="mt-4 max-w-[760px] text-body-md text-text-secondary">
                  {category.intro}
                </p>
              </MotionReveal>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                {category.items.map((item, itemIndex) => {
                  const hasLink = Boolean(item.href);
                  const hasTechnologies = item.technologies.length > 0;

                  return (
                    <MotionReveal
                      key={item.title}
                      delay={0.12 + itemIndex * 0.04}
                      y={12}
                      blur={5}>
                      <GlassCard padding="sm" className="h-full">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <p className="text-[12px] uppercase tracking-[0.13em] text-text-muted">
                            {projects.fields.status}: {item.status}
                          </p>
                          {hasLink ? (
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[14px] font-medium text-text-secondary transition-colors hover:text-accent">
                              {item.linkLabel || projects.fields.link}
                            </a>
                          ) : (
                            <span className="text-[13px] text-text-muted">
                              {projects.empty.title}
                            </span>
                          )}
                        </div>

                        <h3 className="mt-4 font-display text-[22px] font-semibold tracking-[-0.01em] text-text">
                          {item.title}
                        </h3>

                        <dl className="mt-6 space-y-4">
                          <div>
                            <dt className="text-[12px] uppercase tracking-[0.13em] text-text-muted">
                              {projects.fields.what}
                            </dt>
                            <dd className="mt-2 text-[15px] leading-[1.7] text-text-secondary">
                              {item.what}
                            </dd>
                          </div>

                          <div>
                            <dt className="text-[12px] uppercase tracking-[0.13em] text-text-muted">
                              {projects.fields.why}
                            </dt>
                            <dd className="mt-2 text-[15px] leading-[1.7] text-text-secondary">
                              {item.why}
                            </dd>
                          </div>

                          <div>
                            <dt className="text-[12px] uppercase tracking-[0.13em] text-text-muted">
                              {projects.fields.tech}
                            </dt>
                            <dd className="mt-2 text-[15px] leading-[1.7] text-text-secondary">
                              {hasTechnologies
                                ? item.technologies.join(" • ")
                                : projects.empty.body}
                            </dd>
                          </div>

                          <div>
                            <dt className="text-[12px] uppercase tracking-[0.13em] text-text-muted">
                              {projects.fields.outcome}
                            </dt>
                            <dd className="mt-2">
                              <ul className="space-y-1">
                                {item.outcome.map((point) => (
                                  <li
                                    key={point}
                                    className="flex items-start gap-2 text-[15px] leading-[1.7] text-text-secondary"
                                  >
                                    <span className="mt-[0.6em] h-[5px] w-[5px] shrink-0 rounded-full bg-accent" aria-hidden />
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            </dd>
                          </div>
                        </dl>
                      </GlassCard>
                    </MotionReveal>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
