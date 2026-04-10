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
        <SectionIntro {...dictionary.contactPage.intro} />
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="surface-card p-7 md:p-8">
            <p className="eyebrow">
              {dictionary.contactPage.availabilityTitle}
            </p>
            <p className="mt-4 text-xl font-semibold tracking-[-0.03em]">
              {dictionary.contactPage.availabilityTitle}
            </p>
            <p className="mt-4 text-base leading-8 text-foreground-soft">
              {dictionary.contactPage.availabilityCopy}
            </p>

            <div className="mt-8 rounded-[1.6rem] bg-background-muted p-5">
              <p className="eyebrow">{dictionary.contactPage.bestRouteTitle}</p>
              <p className="mt-4 text-base leading-7 text-foreground-soft">
                {dictionary.contactPage.bestRouteCopy}
              </p>
            </div>
          </div>

          <div className="grid gap-5">
            {methods.map((method) => {
              const Icon = method.icon;

              return (
                <Link
                  key={method.label}
                  href={method.href}
                  target={
                    method.label === "Location"
                      ? "_blank"
                      : method.href.startsWith("mailto:")
                        ? undefined
                        : "_blank"
                  }
                  rel={
                    method.href.startsWith("mailto:") ? undefined : "noreferrer"
                  }
                  className="surface-card flex items-start gap-4 p-6 transition-transform hover:-translate-y-0.5">
                  <div className="rounded-full bg-background-muted p-3 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="eyebrow">{method.label}</p>
                    <p className="mt-3 text-lg font-medium">{method.value}</p>
                    <p className="mt-3 text-sm leading-6 text-foreground-soft">
                      {method.note}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <div className="surface-card grid gap-8 p-8 md:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="eyebrow">{dictionary.home.contact.eyebrow}</p>
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
