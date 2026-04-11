import clsx from "clsx";

import SectionLabel from "@/components/ui/SectionLabel";

interface AnchorItem {
  label: string;
  title: string;
  body: string;
}

interface ProofAnchorsProps {
  anchors: AnchorItem[];
}

export default function ProofAnchors({ anchors }: ProofAnchorsProps) {
  return (
    <section className="mt-16 bg-surface px-page-x-sm py-16 md:px-page-x">
      <div className="mx-auto grid max-w-[1280px] gap-6 md:grid-cols-3 md:gap-0">
        {anchors.map((anchor, index) => (
          <article
            key={anchor.title}
            className={clsx(
              "md:px-8",
              index > 0 &&
                "border-t border-edge pt-6 md:border-l md:border-t-0 md:pt-0",
              index === 0 && "md:pl-0",
              index === anchors.length - 1 && "md:pr-0",
            )}>
            <SectionLabel label={anchor.label} />
            <h3 className="mt-4 text-[17px] font-medium text-ink">
              {anchor.title}
            </h3>
            <p className="mt-3 text-[15px] leading-[1.7] text-ink-2">
              {anchor.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
