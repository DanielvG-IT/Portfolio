import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";

import { Button, type ButtonProps } from "@/components/ui/button";

interface CTAItem {
  label: string;
  href: string;
  variant?: ButtonProps["variant"];
  external?: boolean;
  download?: boolean;
}

interface CTAGroupProps {
  items: CTAItem[];
}

export function CTAGroup({ items }: CTAGroupProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {items.map((item) => (
        <Button key={item.href + item.label} asChild size="lg" variant={item.variant}>
          <Link
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noreferrer" : undefined}
            download={item.download}>
            <span>{item.label}</span>
            {item.download ? (
              <Download className="h-4 w-4" />
            ) : item.external ? (
              <ArrowUpRight className="h-4 w-4" />
            ) : null}
          </Link>
        </Button>
      ))}
    </div>
  );
}
