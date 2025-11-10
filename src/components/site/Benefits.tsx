import { siteContent } from "@/content/site"

const pillars = [
  {
    title: "Диагностика",
    headline: "Исследуем",
    description: "Карьерная оценка, карта навыков и целевая гипотеза за 7 дней.",
    metric: siteContent.benefits[0],
    tone: "from-primary/40 via-primary/20 to-transparent",
  },
  {
    title: "Оттачиваем",
    headline: "Стратегия",
    description: "Резюме, позиционирование, скрипты и тренировки до уверенности.",
    metric: siteContent.benefits[1],
    tone: "from-accent/40 via-accent/20 to-transparent",
  },
  {
    title: "Запускаем",
    headline: "Результаты",
    description: "Сопровождаем переговоры, выход на новую роль и первые 90 дней.",
    metric: siteContent.benefits[2],
    tone: "from-primary/60 via-accent/30 to-transparent",
  },
]

export function Benefits() {
  return (
    <section className="relative overflow-hidden py-24" id="benefits">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/10 to-white/0" />
      <div className="relative mx-auto max-w-[var(--page-max-width)] px-[var(--page-padding)]">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground/80">Процесс под ключ</p>
            <h2 className="text-balance text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              Генерируем идеи, шлифуем стратегию, ускоряем выход на новый уровень
            </h2>
          </div>
          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
            Каждая ступень работы усиливает предыдущую. Вы получаете измеримые результаты и экономите месяцы времени.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative overflow-hidden rounded-[2.3rem] border border-border/60 bg-white/75 p-9 backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_34px_90px_rgba(51,147,255,0.2)]"
            >
              <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${pillar.tone.replace("transparent", "rgba(255,255,255,0)")} opacity-60 transition duration-500 group-hover:opacity-95`} />
              <div className="flex h-full flex-col gap-8">
                <div className="space-y-3">
                  <span className="text-sm text-muted-foreground/75">{pillar.title}</span>
                  <h3 className="text-2xl font-semibold text-foreground">{pillar.headline}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{pillar.description}</p>
                </div>
                <div className="mt-auto text-sm text-muted-foreground/80">
                  <div className="text-4xl font-semibold text-foreground">{pillar.metric.kpi}</div>
                  <p className="mt-1 text-sm">{pillar.metric.label}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="relative overflow-hidden rounded-[2.3rem] border border-primary/40 bg-primary/12 p-9 text-foreground backdrop-blur">
            <div className="absolute -top-16 -right-10 h-40 w-40 rounded-full bg-primary/28 blur-3xl" />
            <div className="absolute -bottom-16 left-4 h-52 w-52 rounded-full bg-accent/30 blur-3xl" />
            <div className="relative flex h-full flex-col justify-between gap-6">
              <div className="space-y-3">
                <span className="text-sm text-foreground/70">Партнёрство</span>
                <h3 className="text-2xl font-semibold">Поддержка 360°</h3>
                <p className="text-sm leading-relaxed text-foreground/80">
                  {siteContent.benefits[3].label}: {siteContent.benefits[3].kpi}. У вас есть наставник, штурм командой и канал связи 24/5.
                </p>
              </div>
              <div className="text-sm text-foreground/60">Без шаблонных решений</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


