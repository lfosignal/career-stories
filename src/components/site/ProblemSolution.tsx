import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export function ProblemSolution() {
  const problems = [
    "Неудовлетворенность работой, стагнация",
    "Сложности с поиском работы и собеседованиями",
    "Выгорание, отсутствие ясности и фокуса",
    "Хочу сменить профессию, но не знаю как",
  ]
  const solutions = [
    "Диагностика, профиль сильных сторон и сценарии роста",
    "Стратегия поиска, резюме/LinkedIn, подготовка к интервью",
    "Практики энергоменеджмента и ресурсной карьеры",
    "План перехода: обучение, портфолио, мостовые роли",
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


