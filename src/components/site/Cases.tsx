import { siteContent } from "@/content/site"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Cases() {
  function getCategory(challenge: string) {
    const text = challenge.toLowerCase()
    if (text.includes("смена")) return "Смена карьеры"
    if (text.includes("повышен")) return "Повышение"
    if (text.includes("переход")) return "Переход"
    return "Кейс"
  }

  return (
    <section className="py-24" id="cases">
      <div className="mx-auto max-w-[var(--page-max-width)] px-[var(--page-padding)]">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <span className="text-sm text-muted-foreground/80">Проверено практикой</span>
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">Истории успеха</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Несколько примеров, где стратегия, поддержка и дисциплина позволили получить качественный карьерный скачок.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-10 grid max-w-[var(--page-max-width)] gap-6 px-[var(--page-padding)] md:grid-cols-3">
        {siteContent.cases.map((c) => (
          <Card
            key={c.title}
            className="rounded-[2.2rem] border border-border/60 bg-white/80 p-0 backdrop-blur shadow-[0_34px_90px_rgба(51,147,255,0.18)]"
          >
            <CardHeader className="space-y-2 px-8 pt-10 pb-0">
              <div className="mb-2 flex items-center gap-2">
                <span className="rounded-full border border-border/60 bg-white/70 px-3 py-1 text-xs text-muted-foreground/80">
                  {getCategory(c.challenge)}
                </span>
              </div>
              <CardTitle className="text-xl font-semibold text-foreground">{c.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 px-8 pb-10 pt-6 text-sm leading-relaxed text-muted-foreground">
              <p>
                <span className="font-semibold text-foreground">Вызов:</span> {c.challenge}
              </p>
              <p>
                <span className="font-semibold text-foreground">Решение:</span> {c.solution}
              </p>
              <p>
                <span className="font-semibold text-foreground">Результат:</span>{' '}
                <span className="text-accent font-medium">{c.result}</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}


