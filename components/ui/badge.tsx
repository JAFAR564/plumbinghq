import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-cta-orange/30 bg-cta-orange/10 text-cta-orange",
        secondary:
          "border-trust-indigo/30 bg-trust-indigo/10 text-trust-indigo",
        destructive:
          "border-emergency-red/30 bg-emergency-red/10 text-red-400",
        emergency:
          "border-emergency-red/30 bg-emergency-red/10 text-red-400 shadow-[0_0_12px_rgba(239,68,68,0.15)]",
        success:
          "border-success-green/30 bg-success-green/10 text-success-green",
        outline:
          "border-border-default bg-surface-glass text-text-secondary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
