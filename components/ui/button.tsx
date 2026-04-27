import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-cta-orange text-white shadow-[0_2px_12px_rgba(249,115,22,0.35),0_1px_2px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.15)] hover:bg-cta-orange-hover hover:shadow-[0_4px_20px_rgba(249,115,22,0.45),0_2px_4px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] active:translate-y-[2px] active:shadow-[0_1px_4px_rgba(249,115,22,0.2)] focus-visible:ring-cta-orange",
        secondary:
          "bg-trust-indigo text-white shadow-[0_2px_12px_rgba(59,130,246,0.25),0_1px_2px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-blue-500 hover:shadow-[0_4px_20px_rgba(59,130,246,0.35)] active:translate-y-[2px] focus-visible:ring-trust-indigo",
        outline:
          "border border-border-default bg-transparent text-white shadow-[0_1px_2px_rgba(0,0,0,0.2)] hover:bg-white/[0.04] hover:border-border-hover focus-visible:ring-white/30",
        ghost:
          "text-text-secondary hover:text-white hover:bg-white/[0.04]",
        whatsapp:
          "bg-[#25D366] text-white shadow-[0_2px_12px_rgba(37,211,102,0.3),inset_0_1px_0_rgba(255,255,255,0.15)] hover:bg-[#22c55e] hover:shadow-[0_4px_20px_rgba(37,211,102,0.4)] active:translate-y-[2px] focus-visible:ring-[#25D366]",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-lg rounded-2xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
