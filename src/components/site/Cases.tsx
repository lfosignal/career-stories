import { siteContent } from "@/content/site"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Cases() {
  return (
    <section className="container mx-auto max-w-6xl px-6 py-16" id="cases">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight">Истории успеха</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {siteContent.cases.map((c) => (
          <Card key={c.title}>
            <CardHeader>
              <CardTitle>{c.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p>
                <span className="font-medium">Вызов:</span> {c.challenge}
              </p>
              <p>
                <span className="font-medium">Решение:</span> {c.solution}
              </p>
              <p>
                <span className="font-medium">Результат:</span> {c.result}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}


