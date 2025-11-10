import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-tight transition-all duration-200 disabled:pointer-events-none disabled:opacity-60 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-primary via-[#ff6844] to-accent text-primary-foreground shadow-[0_18px_46px_rgba(51,147,255,0.24)] hover:-translate-y-0.5 hover:shadow-[0_26px_60px_rgba(51,147,255,0.28)] active:translate-y-0",
        destructive:
          "bg-destructive text-white shadow-[0_16px_36px_rgba(224,75,58,0.3)] hover:bg-destructive/90",
        outline:
          "border border-border/60 bg-transparent text-foreground shadow-[0_2px_6px_rgba(62,109,176,0.12)] hover:bg-white/60 hover:text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-[0_12px_30px_rgba(51,147,255,0.18)] hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(51,147,255,0.24)]",
        ghost:
          "bg-transparent text-foreground hover:bg-secondary hover:text-secondary-foreground",
        link: "text-accent underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-3 has-[>svg]:px-5",
        sm: "h-9 gap-1.5 px-5 has-[>svg]:px-4",
        lg: "h-12 px-8 has-[>svg]:px-6 text-base",
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
