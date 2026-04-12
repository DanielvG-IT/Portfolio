import { notFound } from "next/navigation";

import MotionReveal from "@/components/ui/MotionReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { getMessages, isLocale } from "@/lib/i18n";

interface ProjectsPageProps {
  params: Promise<{ locale: string }>;
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
          <h1 className="mt-8 max-w-[840px] font-display text-display-lg font-normal text-ink">
            {projects.headline}
          </h1>
          <p className="mt-5 max-w-[760px] text-body-md text-ink-2">
            {projects.opening}
          </p>
        </MotionReveal>

        <div className="mt-14 space-y-14">
          {projects.categories.map((category, categoryIndex) => (
            <section
              key={category.label}
              className="border-t border-edge pt-10">
              <MotionReveal delay={0.08 + categoryIndex * 0.04} y={14} blur={6}>
                <h2 className="font-display text-display-md font-normal text-ink">
                  {category.label}
                </h2>
                <p className="mt-4 max-w-[760px] text-body-md text-ink-2">
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
                      <article className="ios-glass h-full p-6">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                          <p className="text-[12px] uppercase tracking-[0.13em] text-slate">
                            {projects.fields.status}: {item.status}
                          </p>
                          {hasLink ? (
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[14px] font-medium text-slate transition-colors hover:text-ink">
                              {item.linkLabel || projects.fields.link}
                            </a>
                          ) : (
                            <span className="text-[13px] text-ink-3">
                              {projects.empty.title}
                            </span>
                          )}
                        </div>

                        <h3 className="mt-4 text-[22px] font-medium tracking-[-0.01em] text-ink">
                          {item.title}
                        </h3>

                        <dl className="mt-6 space-y-4">
                          <div>
                            <dt className="text-[12px] uppercase tracking-[0.13em] text-ink-3">
                              {projects.fields.what}
                            </dt>
                            <dd className="mt-2 text-[15px] leading-[1.7] text-ink-2">
                              {item.what}
                            </dd>
                          </div>

                          <div>
                            <dt className="text-[12px] uppercase tracking-[0.13em] text-ink-3">
                              {projects.fields.why}
                            </dt>
                            <dd className="mt-2 text-[15px] leading-[1.7] text-ink-2">
                              {item.why}
                            </dd>
                          </div>

                          <div>
                            <dt className="text-[12px] uppercase tracking-[0.13em] text-ink-3">
                              {projects.fields.tech}
                            </dt>
                            <dd className="mt-2 text-[15px] leading-[1.7] text-ink-2">
                              {hasTechnologies
                                ? item.technologies.join(" • ")
                                : projects.empty.body}
                            </dd>
                          </div>

                          <div>
                            <dt className="text-[12px] uppercase tracking-[0.13em] text-ink-3">
                              {projects.fields.outcome}
                            </dt>
                            <dd className="mt-2 text-[15px] leading-[1.7] text-ink-2">
                              {item.outcome}
                            </dd>
                          </div>
                        </dl>
                      </article>
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
