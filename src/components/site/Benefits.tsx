import { Card, CardContent } from "@/components/ui/card"
import { siteContent } from "@/content/site"

export function Benefits() {
  return (
    <section className="container mx-auto max-w-6xl px-6 py-16" id="benefits">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight">Почему со мной</h2>
      <div className="grid gap-6 md:grid-cols-4">
        {siteContent.benefits.map((it) => (
          <Card key={it.label}>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-semibold">{it.kpi}</div>
              <p className="mt-2 text-sm text-muted-foreground">{it.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}


