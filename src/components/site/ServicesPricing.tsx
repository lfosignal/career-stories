import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { siteContent } from "@/content/site"

type Plan = {
  name: string
  price: string
  features: string[]
  cta?: string
}

const plans: Plan[] = [
  {
    name: "Базовый",
    price: "5 900 ₽",
    features: ["1 консультация 60 мин", "Аудит резюме/LinkedIn", "Рекомендации по улучшению"],
    cta: "Записаться",
  },
  {
    name: "Оптимальный",
    price: "15 900 ₽",
    features: ["3 сессии по 60 мин", "План поиска работы", "Мока-интервью"],
    cta: "Выбрать",
  },
  {
    name: "Премиум",
    price: "29 900 ₽",
    features: ["6 сессий по 60 мин", "Стратегия перехода/роста", "Сопровождение 30 дней"],
    cta: "Начать",
  },
]

export function ServicesPricing() {
  return (
    <section className="container mx-auto max-w-6xl px-6 py-16" id="services">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight">Услуги и программы</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {siteContent.plans.map((plan) => {
          const featured = Boolean((plan as any).featured)
          return (
          <Card key={plan.name} className={`flex flex-col ${featured ? "ring-1 ring-primary/30 shadow-[0_10px_40px_-12px_rgba(16,185,129,.45)]" : ""}`}>
            <CardHeader className="space-y-2">
              <div className="flex items-center justify-between">
                <CardTitle>{plan.name}</CardTitle>
                {featured && <Badge>Популярно</Badge>}
              </div>
              <div className="text-3xl font-semibold">{plan.price}</div>
            </CardHeader>
            <CardContent className="space-y-2">
              {plan.features.map((f) => (
                <div key={f} className="flex items-start gap-2">
                  <Check className="mt-0.5 size-4 text-primary" />
                  <p>{f}</p>
                </div>
              ))}
            </CardContent>
            <CardFooter className="mt-auto">
              <Button className="w-full" asChild>
                <a href="#contact">{plan.cta ?? "Оставить заявку"}</a>
              </Button>
            </CardFooter>
          </Card>
        )})}
      </div>
    </section>
  )
}


