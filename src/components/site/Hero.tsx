import { Button } from "@/components/ui/button"
import { siteContent } from "@/content/site"

type HeroProps = {
  onPrimaryCtaClick?: () => void
}

export function Hero({ onPrimaryCtaClick }: HeroProps) {
  const [titleMain, titleAccent] = siteContent.hero.title.split(":");
  const accentFallback = siteContent.hero.subtitle.split(".")[0];

  return (
    <section className="relative overflow-hidden pb-24 pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/60 to-white/20" />
        <div className="absolute -top-40 left-1/5 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute -bottom-36 right-[12%] h-96 w-96 rounded-full bg-accent/18 blur-[100px]" />
      </div>
      <div className="relative mx-auto max-w-[var(--page-max-width)] px-[var(--page-padding)]">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 rounded-full border border-border/60 bg-white/70 px-5 py-1.5 text-[12px] font-medium text-muted-foreground backdrop-blur">
              <span className="inline-flex size-2 rounded-full bg-primary shadow-[0_0_0_6px_rgba(251,65,31,0.2)]" />
              {siteContent.brand.tagline}
            </div>
            <div className="space-y-5">
              <h1 className="text-balance text-4xl font-semibold leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
                {titleMain}
                <span className="block bg-gradient-to-r from-primary via-[#ff6a44] to-accent bg-clip-text text-transparent">
                  {titleAccent?.trim() ?? accentFallback}
                </span>
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                {siteContent.hero.subtitle}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="lg" onClick={onPrimaryCtaClick}>
                {siteContent.hero.primaryCta}
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="border border-border/60 bg-white/60 text-foreground/85 hover:bg-white"
                asChild
              >
                <a href="#services">{siteContent.hero.secondaryCta}</a>
              </Button>
            </div>
            <div className="grid gap-3 text-sm sm:grid-cols-2">
              {siteContent.hero.metrics.map((metric) => (
                <div
                  key={metric}
                  className="flex items-center gap-3 rounded-2xl border border-border/60 bg-white/70 px-5 py-3 text-foreground/80 backdrop-blur transition hover:border-accent/40 hover:text-foreground"
                >
                  <span className="inline-flex size-1.5 rounded-full bg-accent shadow-[0_0_0_6px_rgba(51,147,255,0.24)]" />
                  <span>{metric}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-border/60 bg-gradient-card p-10 shadow-[0_40px_110px_rgba(62,109,176,0.18)] backdrop-blur-xl">
              <div className="absolute -top-9 right-10 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 px-5 py-1 text-[12px] font-medium text-primary shadow-[0_22px_60px_rgba(251,65,31,0.25)]">
                <span className="inline-flex size-1.5 rounded-full bg-primary shadow-[0_0_0_6px_rgba(251,65,31,0.25)]" />
                15+ лет экспертизы
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">Сделайте карьерный рывок</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Персональные стратегии, готовые шаблоны и поддержка наставника, которые убирают хаос из карьерных решений. Никаких случайных попыток — только системный рост.
                </p>
                <div className="grid gap-4 text-sm text-muted-foreground">
                  <div className="rounded-2xl border border-border/50 bg-white/65 p-5 backdrop-blur">
                    <div className="flex items-center justify-between text-[12px] text-muted-foreground/70">
                      <span>До программы</span>
                      <span>90 дней</span>
                    </div>
                    <p className="mt-3 text-base font-medium text-foreground">Неопределённость и выгорание</p>
                  </div>
                  <div className="rounded-2xl border border-primary/40 bg-primary/12 p-5 backdrop-blur">
                    <div className="flex items-center justify-between text-[12px] text-primary">
                      <span>После</span>
                      <span>4–8 недель</span>
                    </div>
                    <p className="mt-3 text-base font-medium text-foreground">Офферы, рост и уверенность</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -right-16 bottom-14 hidden rotate-90 text-[7rem] font-semibold uppercase tracking-[1.2rem] text-border/30 lg:block">
              карьерапро
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-1/2 justify-center">
        <div className="text-center text-[8vw] font-semibold uppercase tracking-[1.1rem] text-border/25 md:text-[5.5rem]">
          карьера • рост • стратегия •
        </div>
      </div>
    </section>
  )
}


