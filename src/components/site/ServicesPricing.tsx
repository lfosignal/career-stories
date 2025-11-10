import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { siteContent } from "@/content/site"

export function ServicesPricing() {
  return (
    <section className="relative py-28" id="services">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/35 to-white/0" />
      <div className="relative mx-auto max-w-[var(--page-max-width)] px-[var(--page-padding)]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <span className="text-sm text-muted-foreground/80">
              Программы под вашу цель
            </span>
            <h2 className="text-4xl font-semibold text-foreground md:text-5xl">
              Услуги и программы
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Выберите формат поддержи: от экспресс-диагностики до полного сопровождения с фокусом на результат.
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {siteContent.plans.map((plan) => {
            const featured = Boolean(plan.featured)
            return (
              <Card
                key={plan.name}
                className={`relative flex h-full flex-col overflow-hidden rounded-[2.4rem] border border-border/60 bg-white/80 p-0 backdrop-blur transition duration-500 hover:-translate-y-1 hover:shadow-[0_44px_120px_rgба(51,147,255,0.22)] ${featured ? "border-primary/45 shadow-[0_38px_120px_rgба(251,65,31,0.28)]" : ""}`}
              >
                <CardHeader className="space-y-4 px-10 pt-12 pb-0">
                  <div className="flex items-center justify-between text-sm text-muted-foreground/70">
                    <span>{plan.name}</span>
                    {featured && <Badge className="rounded-full bg-primary/15 text-primary">Популярно</Badge>}
                  </div>
                  <div className="text-4xl font-semibold text-foreground">{plan.price}</div>
                </CardHeader>
                <CardContent className="space-y-3 px-10 pb-10 pt-8 text-sm leading-relaxed text-muted-foreground">
                  {plan.features.map((f) => (
                    <div key={f} className="flex items-start gap-3">
                      <Check className="mt-1 size-4 text-accent" />
                      <p>{f}</p>
                    </div>
                  ))}
                </CardContent>
                <CardFooter className="mt-auto px-10 pb-10 pt-0">
                  <Button className="w-full" variant={featured ? "default" : "secondary"} asChild>
                    <a href="#contact">Записаться</a>
                  </Button>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}


