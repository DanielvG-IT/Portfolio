import Link from "next/link";

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
    <div className="flex flex-wrap items-center gap-4">
      {items.map((item) => (
        <Button
          key={item.href + item.label}
          asChild
          size="lg"
          variant={item.variant ?? "primary"}>
          <Link
            href={item.href}
            target={item.external ? "_blank" : undefined}
            rel={item.external ? "noreferrer" : undefined}
            download={item.download}>
            <span>{item.label}</span>
          </Link>
        </Button>
      ))}
    </div>
  );
}
