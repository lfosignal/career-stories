import { siteContent } from "@/content/site"

const modules = [
  {
    tag: "Диагностика",
    title: "Мы изучаем ваш карьерный стиль и контекст",
    description:
      "15+ лет опыта помогают мгновенно разложить хаос на стратегию. Мы исследуем рынок, сильные стороны и препятствия, чтобы увидеть карту возможностей.",
    items: siteContent.problems.slice(0, 4),
  },
  {
    tag: "AI-студия",
    title: "Готовим стратегию и инструменты роста",
    description:
      "Создаём персональную платформу: резюме, позиционирование, сценарии интервью и план нетворкинга. Всё адаптируется под ваш темп и отрасль.",
    items: siteContent.solutions.slice(0, 4),
  },
  {
    tag: "Pro support",
    title: "Ускоряем реализацию и держим курс",
    description:
      "Сопровождаем на каждом шаге: ревью материалов, подготовка к сложным встречам, корректировки плана в реальном времени.",
    items: siteContent.solutions.slice(4).concat(siteContent.problems.slice(4)),
  },
]

export function ProblemSolution() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/10 to-white/0" />
      <div className="relative mx-auto max-w-[var(--page-max-width)] px-[var(--page-padding)]">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm text-muted-foreground/80">Новый творческий процесс карьеры</p>
            <h2 className="text-balance text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              Генерируйте идеи, оттачивайте стратегию, выходите на старт за недели, а не месяцы
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            Вместо бесконечных итераций и выгорания — системный подход, где вы контролируете время, качество и результат. Мы держим бренд вашей карьеры цельным и узнаваемым.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {modules.map((module, index) => (
            <div
              key={module.tag}
              className="group relative overflow-hidden rounded-[2.4rem] border border-border/60 bg-white/75 p-9 backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-accent/45 hover:shadow-[0_34px_90px_rgba(51,147,255,0.2)]"
            >
              <div className="absolute -top-16 right-0 hidden h-32 w-32 rounded-full bg-primary/18 blur-3xl md:block" />
              <div className="absolute -bottom-16 left-6 hidden h-36 w-36 rounded-full bg-accent/22 blur-3xl md:block" />
              <div className="relative flex flex-col gap-6">
                <span className="w-max rounded-full border border-border/50 bg-white/70 px-4 py-1 text-[12px] text-muted-foreground/70">
                  {module.tag}
                </span>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">{module.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{module.description}</p>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {module.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 leading-relaxed transition group-hover:text-foreground">
                      <span className="mt-2 inline-flex h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_0_6px_rgba(51,147,255,0.26)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center gap-2 text-sm text-muted-foreground/70">
                  <span>0{index + 1}</span>
                  <span>Модуль программы</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


