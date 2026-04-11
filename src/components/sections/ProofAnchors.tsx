import clsx from "clsx";

import MotionReveal from "@/components/ui/MotionReveal";
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
          <MotionReveal
            key={anchor.title}
            delay={index * 0.08}
            y={18}
            blur={7}
            className={clsx(
              "rounded-card-sm px-5 py-5 transition-all duration-500 ease-out hover:-translate-y-[2px] hover:bg-[rgba(255,255,255,0.24)] md:rounded-none md:px-8 md:py-0 md:hover:translate-y-0 md:hover:bg-transparent",
              index > 0 &&
                "border-t border-edge pt-6 md:border-l md:border-t-0 md:pt-0",
              index === 0 && "md:pl-0",
              index === anchors.length - 1 && "md:pr-0",
            )}>
            <article>
              <SectionLabel label={anchor.label} />

              <div className="mt-4 flex items-center gap-2">
                <span className="animate-soft-pulse h-2 w-2 rounded-full bg-slate/50" />
                <span className="h-px w-10 bg-edge" />
              </div>

              <h3 className="mt-4 text-[17px] font-medium text-ink">
                {anchor.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-ink-2">
                {anchor.body}
              </p>
            </article>
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}
