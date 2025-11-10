import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-accent/30 selection:text-foreground h-11 w-full min-w-0 rounded-[1.4rem] border border-border/60 bg-white/75 px-5 text-base shadow-[0_18px_40px_rgba(51,147,255,0.12)] transition-all outline-none file:inline-flex file:h-8 file:rounded-full file:border-0 file:bg-transparent file:px-3 file:text-xs file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60",
        "focus-visible:border-accent/50 focus-visible:ring-2 focus-visible:ring-ring/70",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Input }
