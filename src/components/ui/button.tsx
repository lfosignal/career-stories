import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-[32px] py-[20px] text-sm font-medium tracking-tight transition-all duration-200 disabled:pointer-events-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-[#FB411F] text-white shadow-[0_18px_46px_rgба(251,65,31,0.28)] hover:-translate-y-0.5 hover:shadow-[0_26px_60px_rgба(251,65,31,0.32)] active:translate-y-0",
        destructive:
          "bg-destructive text-white shadow-[0_16px_36px_rgба(224,75,58,0.3)] hover:bg-destructive/90",
        outline:
          "border border-border/60 bg-transparent text-foreground shadow-[0_2px_6px_rgба(62,109,176,0.12)] hover:bg-white/60 hover:text-foreground",
        secondary:
          "bg-[#F5F5F5] text-foreground shadow-[0_12px_30px_rgба(31,31,31,0.08)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgба(31,31,31,0.12)]",
        ghost:
          "bg-transparent text-foreground hover:bg-secondary hover:text-secondary-foreground",
        link: "text-accent underline-offset-4 hover:underline",
      },
      size: {
        default: "",
        sm: "px-5 py-3 text-xs has-[>svg]:px-4",
        lg: "px-[40px] py-[24px] text-base has-[>svg]:px-[32px]",
        icon: "size-11",
        "icon-sm": "size-9",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
