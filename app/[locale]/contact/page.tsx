import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

import { CTAGroup } from "@/components/site/cta-group";
import { SectionIntro } from "@/components/site/section-intro";
import { SectionShell } from "@/components/site/section-shell";
import { resumeFile } from "@/content/socials";
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
    route: "contact",
    title: dictionary.meta.contact.title,
    description: dictionary.meta.contact.description,
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const dictionary = getDictionary(localeParam);

  const methods = [
    {
      label: dictionary.common.email,
      value: "daniel@danielvanginneken.nl",
      href: "mailto:daniel@danielvanginneken.nl",
      note: dictionary.contactPage.bestRouteCopy,
      icon: Mail,
    },
    {
      label: dictionary.common.linkedin,
      value: "linkedin.com/in/daniel-v-ginneken",
      href: "https://linkedin.com/in/daniel-v-ginneken/",
      note:
        localeParam === "nl"
          ? "Handig voor professioneel contact in Nederland."
          : "A strong route for professional outreach in the Netherlands.",
      icon: ArrowUpRight,
    },
    {
      label: localeParam === "nl" ? "Locatie" : "Location",
      value:
        localeParam === "nl"
          ? "Noord-Brabant, Nederland"
          : "North Brabant, the Netherlands",
      href: "https://maps.google.com/?q=North+Brabant+Netherlands",
      note:
        localeParam === "nl"
          ? "Open voor stages en relevante softwarekansen."
          : "Open to internships and relevant software opportunities.",
      icon: MapPin,
    },
  ];

  return (
    <>
      <SectionShell>
        <div className="grid gap-8 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="space-y-8">
            <SectionIntro {...dictionary.contactPage.intro} className="mb-0" />
            <div className="space-y-6">
              <div>
                <div className="signature-label">
                  <p className="eyebrow">{dictionary.contactPage.availabilityTitle}</p>
                </div>
                <p className="mt-4 text-base leading-8 text-foreground-soft">
                  {dictionary.contactPage.availabilityCopy}
                </p>
              </div>
              <div>
                <div className="signature-label">
                  <p className="eyebrow">{dictionary.contactPage.bestRouteTitle}</p>
                </div>
                <p className="mt-4 text-base leading-8 text-foreground-soft">
                  {dictionary.contactPage.bestRouteCopy}
                </p>
              </div>
            </div>
          </div>

          <div className="surface-card px-6 py-2 md:px-8">
            <div className="detail-list">
            {methods.map((method) => {
              const Icon = method.icon;

              return (
                <Link
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    method.href.startsWith("mailto:") ? undefined : "noreferrer"
                  }
                  className="detail-row group">
                  <div className="flex items-start gap-4">
                  <div className="rounded-full border border-border bg-background-muted p-3 text-accent transition-colors group-hover:border-border-strong">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="signature-label">
                      <p className="eyebrow">{method.label}</p>
                    </div>
                    <p className="mt-3 text-lg font-medium tracking-[-0.02em]">
                      {method.value}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-foreground-soft">
                      {method.note}
                    </p>
                  </div>
                  </div>
                </Link>
              );
            })}
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-0">
        <div className="grid gap-8 border-t border-border pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <div className="signature-label">
              <p className="eyebrow">{dictionary.home.contact.eyebrow}</p>
            </div>
            <h2 className="section-title mt-4">
              {dictionary.home.contact.title}
            </h2>
            <p className="section-copy mt-5">
              {dictionary.home.contact.description}
            </p>
          </div>
          <div className="lg:justify-self-end">
            <CTAGroup
              items={[
                {
                  label: dictionary.common.email,
                  href: "mailto:daniel@danielvanginneken.nl",
                },
                {
                  label: dictionary.common.linkedin,
                  href: "https://linkedin.com/in/daniel-v-ginneken/",
                  variant: "secondary",
                  external: true,
                },
                {
                  label: dictionary.common.downloadResume,
                  href: resumeFile(localeParam),
                  variant: "secondary",
                  download: true,
                },
              ]}
            />
          </div>
        </div>
      </SectionShell>
    </>
  );
}
