import { notFound } from "next/navigation";

import MotionReveal from "@/components/ui/MotionReveal";
import SectionLabel from "@/components/ui/SectionLabel";
import { getMessages, isLocale } from "@/lib/i18n";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const contact = getMessages(locale).contact;

  return (
    <section className="px-page-x-sm pb-24 pt-[130px] md:px-page-x md:pt-[150px]">
      <div className="mx-auto max-w-[640px]">
        <MotionReveal delay={0.03} y={16} blur={6}>
          <SectionLabel label={contact.eyebrow} />
          <h1 className="mt-8 font-display text-display-lg font-normal text-ink">
            {contact.headline}
          </h1>
          <p className="mt-6 text-body-md text-ink-2">{contact.intro}</p>
        </MotionReveal>

        <MotionReveal delay={0.1} y={14} blur={5}>
          <ul className="mt-8 space-y-3 border-t border-edge pt-6">
            {contact.welcome.map((entry) => (
              <li key={entry} className="text-[15px] leading-[1.65] text-ink-2">
                {entry}
              </li>
            ))}
          </ul>
        </MotionReveal>

        <MotionReveal delay={0.16} y={14} blur={5}>
          <div className="mt-10 border-t border-edge pt-6">
            <p className="text-[12px] uppercase tracking-[0.13em] text-ink-3">
              {contact.emailLabel}
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-2 block text-[24px] font-medium tracking-[-0.01em] text-ink transition-colors hover:text-slate">
              {contact.email}
            </a>

            <p className="mt-6 text-[12px] uppercase tracking-[0.13em] text-ink-3">
              {contact.linkedinLabel}
            </p>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex text-[15px] text-slate transition-colors hover:text-ink">
              {contact.linkedinLabel}
            </a>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.22} y={12} blur={4}>
          <p className="mt-10 text-[14px] text-ink-2">{contact.response}</p>
        </MotionReveal>
      </div>
    </section>
  );
}
