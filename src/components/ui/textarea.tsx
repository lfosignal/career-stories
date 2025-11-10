import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "placeholder:text-muted-foreground focus-visible:border-accent/50 focus-visible:ring-ring/70 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex field-sizing-content min-h-40 w-full rounded-[1.6rem] border border-border/60 bg-white/75 px-5 py-4 text-base leading-relaxed shadow-[0_18px_40px_rgba(51,147,255,0.12)] transition-all outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-60 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
