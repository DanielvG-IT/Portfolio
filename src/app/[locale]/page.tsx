import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import GlassCard from "@/components/ui/GlassCard";
import MotionReveal from "@/components/ui/MotionReveal";
import PrimaryButton from "@/components/ui/PrimaryButton";
import RoleCycler from "@/components/ui/RoleCycler";
import { getMessages, isLocale, localePath } from "@/lib/i18n";
import { generatePageMetadata, getDescription } from "@/lib/site-config";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return generatePageMetadata(
    locale,
    "",
    "Daniël van Ginneken — Portfolio",
    getDescription(locale),
  );
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const { home } = getMessages(locale);

  return (
    <div>
      {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen items-center">
        {/* Gradient mesh background — orbs animate via globals.css mesh-drift keyframes */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="mesh-orb-1 absolute rounded-full blur-[100px]"
            style={{
              width: 760,
              height: 760,
              top: "-200px",
              left: "-160px",
              background:
                "radial-gradient(circle, rgba(10,132,255,0.55) 0%, transparent 70%)",
              opacity: 0.85,
            }}
          />
          <div
            className="mesh-orb-2 absolute rounded-full blur-[110px]"
            style={{
              width: 720,
              height: 720,
              top: "-60px",
              right: "-80px",
              background:
                "radial-gradient(circle, rgba(88,86,214,0.50) 0%, transparent 70%)",
              opacity: 0.8,
            }}
          />
          <div
            className="mesh-orb-3 absolute rounded-full blur-[100px]"
            style={{
              width: 620,
              height: 620,
              bottom: "-160px",
              right: "8%",
              background:
                "radial-gradient(circle, rgba(10,132,255,0.40) 0%, transparent 70%)",
              opacity: 0.7,
            }}
          />
          {/* Soft fill glow toward the empty right side */}
          <div
            className="absolute rounded-full blur-[120px]"
            style={{
              width: 520,
              height: 520,
              top: "30%",
              right: "22%",
              background:
                "radial-gradient(circle, rgba(120,90,255,0.22) 0%, transparent 70%)",
              opacity: 0.6,
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-page-x-sm pb-24 pt-[92px] md:px-page-x md:pt-[120px]">
          <MotionReveal delay={0.06} y={32} blur={12}>
            <h1 className="font-display text-display-xl font-semibold tracking-[-0.025em] text-text">
              {home.hero.name}
              <span className="text-accent">.</span>
            </h1>
          </MotionReveal>

          {/* Role cycler — absolute spans inside a sized container */}
          <MotionReveal delay={0.14} y={18} blur={8}>
            <div className="mt-3 font-display text-display-md font-medium tracking-[-0.015em] text-text-secondary">
              <RoleCycler roles={home.hero.roles} />
            </div>
          </MotionReveal>

          <MotionReveal delay={0.22} y={16} blur={6}>
            <p className="mt-6 max-w-[500px] text-body-lg text-text-secondary">
              {home.hero.subline}
            </p>
          </MotionReveal>

          <MotionReveal
            delay={0.3}
            y={12}
            blur={4}
            className="mt-10 flex flex-wrap gap-4"
          >
            <PrimaryButton href={localePath(locale, "/projects")}>
              {home.hero.ctaPrimary}
            </PrimaryButton>
            <Link
              href={localePath(locale, "/about")}
              className="inline-flex items-center justify-center rounded-pill border border-[var(--color-border-subtle)] bg-[var(--color-bg-overlay)] px-7 py-[13px] text-[14px] font-semibold tracking-[0.01em] text-text backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
            >
              {home.hero.ctaSecondary}
            </Link>
          </MotionReveal>
        </div>
      </section>

      {/* ── 2. What I build ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1280px] px-page-x-sm py-24 md:px-page-x md:py-32">
        <MotionReveal delay={0.04} y={14} blur={6}>
          <h2 className="font-display text-display-md font-semibold tracking-[-0.015em] text-text">
            {home.capabilities.heading}<span className="text-accent">.</span>
          </h2>
        </MotionReveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {home.capabilities.groups.map((group, index) => (
            <MotionReveal
              key={group.title}
              delay={0.08 + index * 0.06}
              y={20}
              blur={8}
            >
              <GlassCard padding="md" className="h-full">
                <p className="text-label uppercase text-text-muted">
                  {group.prefix}
                </p>
                <h3 className="mt-3 font-display text-[20px] font-semibold leading-tight tracking-[-0.01em] text-text">
                  {group.title}
                </h3>
                <p className="mt-3 text-[13px] leading-[1.7] text-text-secondary">
                  {group.items.join("  ·  ")}
                </p>
                <p className="mt-4 text-[14px] leading-[1.65] text-text-secondary">
                  {group.note}
                </p>
              </GlassCard>
            </MotionReveal>
          ))}
        </div>
      </section>

      {/* ── 3. Featured projects ────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1280px] px-page-x-sm pb-24 md:px-page-x md:pb-32">
        <MotionReveal delay={0.04} y={14} blur={6}>
          <h2 className="font-display text-display-md font-semibold tracking-[-0.015em] text-text">
            {home.work.heading}<span className="text-accent">.</span>
          </h2>
          <p className="mt-4 max-w-[640px] text-body-md text-text-secondary">
            {home.work.intro}
          </p>
        </MotionReveal>

        <div className="mt-10 flex flex-col gap-4">
          {home.work.references.map((reference, index) => (
            <MotionReveal
              key={reference.title}
              delay={0.08 + index * 0.07}
              y={18}
              blur={7}
            >
              <GlassCard padding="md" hoverLift={false} className="flex flex-col gap-3 md:flex-row md:items-start md:gap-8">
                {/* Status chip */}
                <div className="shrink-0">
                  <span className="inline-flex items-center rounded-pill bg-accent-subtle px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-accent">
                    {reference.status}
                  </span>
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-[22px] font-semibold tracking-[-0.01em] text-text">
                    {reference.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-[1.7] text-text-secondary">
                    {reference.summary}
                  </p>
                </div>
              </GlassCard>
            </MotionReveal>
          ))}
        </div>

        <MotionReveal delay={0.2} y={10} blur={4} className="mt-8">
          <Link
            href={localePath(locale, "/projects")}
            className="inline-flex items-center gap-2 text-[14px] font-semibold text-accent transition-opacity hover:opacity-75"
          >
            {home.work.cta}
            <span aria-hidden>→</span>
          </Link>
        </MotionReveal>
      </section>

      {/* ── 4. A bit about me ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1280px] px-page-x-sm pb-32 md:px-page-x">
        <MotionReveal delay={0.04} y={14} blur={6}>
          <h2 className="font-display text-display-md font-semibold tracking-[-0.015em] text-text">
            {home.foundation.heading}<span className="text-accent">.</span>
          </h2>
        </MotionReveal>

        <div className="mt-10 grid items-start gap-10 md:grid-cols-[44fr_56fr]">
          <MotionReveal delay={0.1} y={24} blur={10}>
            <div className="relative h-[480px] overflow-hidden rounded-card md:h-[560px]">
              <Image
                src="/images/portrait.jpg"
                alt="Daniël van Ginneken"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </MotionReveal>

          <div className="grid gap-5 pt-2">
            {home.foundation.paragraphs.map((paragraph, index) => (
              <MotionReveal key={paragraph} delay={0.14 + index * 0.07} y={14}>
                <p className="text-body-lg text-text-secondary">{paragraph}</p>
              </MotionReveal>
            ))}

            <MotionReveal delay={0.28} y={10} blur={4} className="mt-2">
              <Link
                href={localePath(locale, "/about")}
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-accent transition-opacity hover:opacity-75"
              >
                {home.hero.ctaSecondary}
                <span aria-hidden>→</span>
              </Link>
            </MotionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
