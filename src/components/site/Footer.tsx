import { siteContent } from "@/content/site"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} {siteContent.brand.name}</p>
        <div className="flex items-center gap-4">
          {siteContent.socials.map((s) => (
            <a key={s.name} href={s.href} className="hover:text-foreground" target={s.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}


