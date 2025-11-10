import Image from "next/image"
import { Button } from "@/components/ui/button"
import { siteContent } from "@/content/site"

type HeroProps = {
  onPrimaryCtaClick?: () => void
}

export function Hero({ onPrimaryCtaClick }: HeroProps) {
  const [titleMain, titleAccent] = siteContent.hero.title.split(":")
  const accentFallback = siteContent.hero.subtitle.split(".")[0]

  return (
    <section className="relative overflow-hidden pb-20 pt-24">
      <Image
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80"
        alt="Команда за совместной работой"
        fill
        className="-z-20 object-cover"
        priority
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-white/92 via-white/88 to-white/80" />
      <div className="relative mx-auto max-w-[var(--page-max-width)] px-[var(--page-padding)]">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/80 px-4 py-1 text-sm text-muted-foreground">
              <span className="inline-flex size-2 rounded-full bg-primary" />
              Карьерное консультирование
            </div>
            <div className="space-y-4">
              <h1 className="text-balance text-3xl font-semibold leading-tight text-foreground md:text-5xl">
                {titleMain}
                <span className="block font-normal text-foreground/85">
                  {titleAccent?.trim() ?? accentFallback}
                </span>
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
                {siteContent.hero.subtitle}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="lg" onClick={onPrimaryCtaClick}>
                {siteContent.hero.primaryCta}
              </Button>
              <Button size="lg" variant="ghost" className="border border-border/60 bg-white text-foreground/85 hover:bg-white" asChild>
                <a href="#services">{siteContent.hero.secondaryCta}</a>
              </Button>
            </div>
            <div className="grid gap-2 text-sm sm:grid-cols-2">
              {siteContent.hero.metrics.map((metric) => (
                <div key={metric} className="flex items-center gap-2 rounded-xl border border-border/50 bg-white/80 px-4 py-2 text-muted-foreground">
                  <span className="inline-flex size-1.5 rounded-full bg-accent/80" />
                  <span>{metric}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2.2rem] border border-border/60 bg-white/70 shadow-[0_32px_90px_rgба(62,109,176,0.18)]">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=960&q=80"
                alt="Наставник и специалист работают вместе"
                width={960}
                height={1200}
                className="h-full w-full object-cover"
                priority
              />
              <div className="absolute left-6 bottom-6 flex items-center gap-4 rounded-2xl border border-white/70 bg-white/85 px-6 py-4 shadow-[0_20px_50px_rgба(51,147,255,0.15)]">
                <div>
                  <p className="text-sm font-semibold text-foreground">4–8 недель до оффера</p>
                  <p className="text-xs text-muted-foreground">Индивидуальный план + поддержка</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


