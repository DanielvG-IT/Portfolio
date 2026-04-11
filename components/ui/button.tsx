import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[1rem] text-sm font-medium transition-[background-color,border-color,color,box-shadow,transform] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border border-transparent bg-accent text-accent-foreground shadow-soft hover:-translate-y-0.5 hover:bg-accent-strong",
        secondary:
          "border border-border bg-surface text-foreground hover:-translate-y-0.5 hover:border-border-strong hover:bg-surface-strong",
        soft:
          "border border-transparent bg-accent-soft text-accent-strong hover:-translate-y-0.5 hover:bg-surface-strong",
        ghost:
          "text-foreground-soft hover:-translate-y-0.5 hover:bg-surface-strong hover:text-foreground",
      },
      size: {
        sm: "h-10 px-4",
        md: "h-11 px-5",
        lg: "h-12 px-5 text-[0.92rem]",
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
