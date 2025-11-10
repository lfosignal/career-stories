import { Card, CardContent } from "@/components/ui/card"

const items = [
  { kpi: "90%", label: "клиентов выходят на новую работу ≤ 3 мес" },
  { kpi: "500+", label: "консультаций и карьерных сессий" },
  { kpi: "15 лет", label: "опыта в HR и образовании" },
  { kpi: "1‑на‑1", label: "индивидуальная стратегия и поддержка" },
]

export function Benefits() {
  return (
    <section className="container mx-auto max-w-6xl px-6 py-16" id="benefits">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight">Почему со мной</h2>
      <div className="grid gap-6 md:grid-cols-4">
        {items.map((it) => (
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


