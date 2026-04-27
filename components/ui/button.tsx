import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:translate-y-[2px] active:shadow-sm",
  {
    variants: {
      variant: {
        default:
          "bg-orange-500 text-white shadow-[0_2px_8px_rgba(249,115,22,0.4),0_1px_2px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.15)] hover:bg-orange-400 hover:shadow-[0_4px_16px_rgba(249,115,22,0.5),0_2px_4px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] active:shadow-[0_1px_2px_rgba(249,115,22,0.3)] focus-visible:ring-orange-500",
        secondary:
          "bg-indigo-600 text-white shadow-[0_2px_8px_rgba(79,70,229,0.3),0_1px_2px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-indigo-500 hover:shadow-[0_4px_16px_rgba(79,70,229,0.4),0_2px_4px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.15)] active:shadow-[0_1px_2px_rgba(79,70,229,0.2)] focus-visible:ring-indigo-500",
        outline:
          "border border-white/10 bg-transparent text-white shadow-[0_1px_2px_rgba(0,0,0,0.2)] hover:bg-white/5 hover:border-white/20 focus-visible:ring-white/30",
        ghost:
          "text-white/70 hover:text-white hover:bg-white/5",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-lg",
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
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
