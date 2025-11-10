import { siteContent } from "@/content/site"

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-[var(--page-max-width)] flex-col gap-4 px-[var(--page-padding)] py-8 text-xs uppercase tracking-[0.28em] text-muted-foreground/80 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {siteContent.brand.name}</p>
        <div className="flex flex-wrap items-center gap-6">
          {siteContent.socials.map((s) => (
            <a key={s.name} href={s.href} className="transition hover:text-foreground" target={s.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}


