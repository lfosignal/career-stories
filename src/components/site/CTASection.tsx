import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative py-28" id="cta">
      <div className="mx-auto max-w-[var(--page-max-width)] px-[var(--page-padding)]">
        <div className="relative overflow-hidden rounded-[3rem] border border-border/60 bg-white/70 px-8 py-16 text-center backdrop-blur shadow-[0_44px_120px_rgba(51,147,255,0.24)]">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(251,65,31,0.16),_transparent_60%)]" />
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_bottom,_rgba(51,147,255,0.22),_transparent_65%)]" />
          <h2 className="text-4xl font-semibold text-foreground md:text-5xl">
            Готовы к изменениям? Сделаем первый шаг вместе.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Запишитесь на бесплатную вводную встречу — обсудим ваши цели, проведём диагностику и соберём персональный план движения.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <a href="#contact">Оставить заявку</a>
            </Button>
            <Button size="lg" variant="ghost" className="border border-border/60 bg-white/60 hover:bg-white" asChild>
              <a href="#services">Посмотреть программы</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


