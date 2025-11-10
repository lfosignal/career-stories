import { siteContent } from "@/content/site"
import { CheckCircle } from "lucide-react"

export function ServicesOverview() {
  const s = siteContent.servicesOverview
  return (
    <section className="py-24">
      <div className="mx-auto max-w-[var(--page-max-width)] px-[var(--page-padding)]">
        <h2 className="text-3xl font-semibold text-foreground md:text-4xl">{s.title}</h2>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-muted-foreground">{s.subtitle}</p>
      </div>
      <div className="mx-auto mt-10 grid max-w-[var(--page-max-width)] grid-cols-1 gap-6 px-[var(--page-padding)] md:grid-cols-2">
        {s.items.map((item) => (
          <div
            key={item.title}
            className="rounded-[1.8rem] border border-border/60 bg-white/75 p-7 shadow-[0_28px_70px_rgba(51,147,255,0.14)] backdrop-blur"
          >
            <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {item.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 size-4 text-accent" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}


