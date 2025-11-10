import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { siteContent } from "@/content/site"

export function ProblemSolution() {
  const problems = [
    ...siteContent.problems,
  ]
  const solutions = [
    ...siteContent.solutions,
  ]
  return (
    <section className="container mx-auto max-w-6xl px-6 py-16" id="problems">
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Ваши проблемы</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {problems.map((p) => (
              <div className="flex items-start gap-2" key={p}>
                <span className="mt-0.5 text-muted-foreground">•</span>
                <p>{p}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Моё решение</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {solutions.map((s) => (
              <div className="flex items-start gap-2" key={s}>
                <Check className="mt-0.5 size-4 text-green-600" />
                <p>{s}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}


