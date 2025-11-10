import { siteContent } from "@/content/site"
import { CheckCircle } from "lucide-react"

export function ServicesOverview() {
  const s = siteContent.servicesOverview
  return (
    <section className="container mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">{s.title}</h2>
      <p className="mt-2 max-w-3xl text-muted-foreground">{s.subtitle}</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {s.items.map((item) => (
          <div key={item.title} className="rounded-lg border p-6">
            <h3 className="font-medium">{item.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {item.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 size-4 text-primary" />
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


