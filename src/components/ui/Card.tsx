import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { forwardRef, type HTMLAttributes } from "react";

const cardVariants = cva("rounded-lg border transition-colors", {
  variants: {
    variant: {
      default: "border-border bg-surface",
      elevated: "border-border bg-surface-raised shadow-md",
      subtle: "border-border bg-muted",
      ghost: "border-transparent bg-transparent",
    },
    padding: {
      none: "p-0",
      sm: "p-3",
      md: "p-4",
      lg: "p-6",
    },
  },
  defaultVariants: {
    variant: "default",
    padding: "md",
  },
});

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, padding, className }))}
      {...props}
    />
  ),
);

Card.displayName = "Card";

export default Card;
