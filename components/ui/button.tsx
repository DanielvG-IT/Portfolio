import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[0.92rem] text-sm font-medium transition-[background-color,border-color,color,box-shadow,transform] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border border-foreground bg-foreground text-background shadow-soft hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-accent-foreground",
        secondary:
          "border border-border bg-transparent text-foreground hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface",
        soft:
          "border border-border bg-surface text-foreground-soft hover:-translate-y-0.5 hover:border-border-strong hover:text-foreground",
        ghost:
          "text-foreground-soft hover:-translate-y-0.5 hover:bg-surface-strong hover:text-foreground",
      },
      size: {
        sm: "h-10 px-4",
        md: "h-11 px-5",
        lg: "h-11 px-4.5 font-mono text-[0.68rem] uppercase tracking-[0.2em]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
