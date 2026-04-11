import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

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

  const copy =
    localeParam === "nl"
      ? {
          intro:
            "Ik sta open voor stagegesprekken, technische samenwerkingen en vragen over mijn werk.",
          preface: "Je kunt me bereiken via:",
          availability:
            "Momenteel beschikbaar voor stageplaatsen en korte samenwerkingen.",
        }
      : {
          intro:
            "I am open to internship conversations, technical collaborations, and questions about my work.",
          preface: "You can reach me via:",
          availability:
            "Currently available for internships and short collaborations.",
        };

  return (
    <SectionShell>
      <div className="pt-[120px]">
        <div className="max-w-[560px] space-y-0">
          <p className="max-w-[52ch] text-[16px] leading-[1.7] text-[#6B6560]">
            {copy.intro}
          </p>
          <p className="mt-8 text-[14px] text-[#6B6560]">{copy.preface}</p>

          <Link
            href="mailto:daniel@danielvanginneken.nl"
            className="mt-2 inline-block text-[22px] font-medium text-[#2D4A6B] hover:underline hover:underline-offset-4">
            daniel@danielvanginneken.nl
          </Link>

          <div className="mt-8 space-y-3 text-[15px] text-[#6B6560]">
            <Link
              href="https://linkedin.com/in/daniel-v-ginneken/"
              target="_blank"
              rel="noreferrer"
              className="block transition-colors hover:text-[#1A1A18]">
              LinkedIn
            </Link>
            <Link
              href="https://github.com/DanielvG-IT"
              target="_blank"
              rel="noreferrer"
              className="block transition-colors hover:text-[#1A1A18]">
              GitHub
            </Link>
          </div>

          <p className="mt-12 text-[13px] italic text-[#9E9892]">
            {copy.availability}
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
