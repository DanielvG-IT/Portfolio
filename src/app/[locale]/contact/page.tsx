import { notFound } from "next/navigation";

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
    <section className="pb-section-sm pl-page-x-sm pt-[140px] md:pl-page-x">
      <div className="max-w-[560px]">
        <p className="max-w-[520px] text-[16px] leading-[1.7] text-ink-2">
          {contact.intro}
        </p>

        <a
          href={`mailto:${contact.email}`}
          className="mt-8 block text-[22px] font-medium text-slate transition-colors hover:underline">
          {contact.email}
        </a>

        <div className="mt-10 flex flex-col gap-3">
          <a
            href={contact.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] text-ink-2 transition-colors hover:text-ink">
            LinkedIn
          </a>
          <a
            href={contact.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] text-ink-2 transition-colors hover:text-ink">
            GitHub
          </a>
        </div>

        <p className="mt-14 text-[13px] italic text-ink-3">
          {contact.availability}
        </p>
      </div>
    </section>
  );
}
