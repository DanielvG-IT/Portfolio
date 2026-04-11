import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "rounded-[4px] border-[1.5px] border-[#2D4A6B] bg-transparent text-[15px] font-medium text-[#2D4A6B] transition-[background,color] duration-180 ease-in hover:bg-[#2D4A6B] hover:text-[#F4EFE6]",
        secondary:
          "rounded-none border-0 bg-transparent p-0 text-[#2D4A6B] underline decoration-[#2D4A6B66] underline-offset-4 transition-colors hover:text-[#1A1A18]",
        soft: "rounded-[8px] border border-[#D5CFC4] bg-[#EDE8DF] text-[#1A1A18]",
        ghost: "bg-transparent text-[#6B6560] hover:text-[#1A1A18]",
      },
      size: {
        sm: "px-5 py-2.5",
        md: "px-6 py-3",
        lg: "px-7 py-[13px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
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
