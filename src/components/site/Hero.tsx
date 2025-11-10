import { Button } from "@/components/ui/button"
import { siteContent } from "@/content/site"

type HeroProps = {
  onPrimaryCtaClick?: () => void
}

export function Hero({ onPrimaryCtaClick }: HeroProps) {
  const [titleMain, titleAccent] = siteContent.hero.title.split(":")
  const accentFallback = siteContent.hero.subtitle.split(".")[0]

  return (
    <section className="relative overflow-hidden pb-20 pt-28">
      <div className="absolute inset-0 -z-30 bg-gradient-to-r from-[#EFF5FF] via-[#D6E7FF] to-[#B7D3FF]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_center,_rgba(183,211,255,0.55)_0%,_rgba(231,243,255,0.15)_45%,_transparent_85%)]" />
      <div className="absolute inset-x-[18%] top-0 -z-10 h-48 rounded-b-[40%] bg-white/35 blur-3xl" />
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 px-[var(--page-padding)] text-center">
        <div className="space-y-6">
          <h1 className="text-balance text-4xl font-semibold leading-[1.35] text-foreground md:text-[44px] md:leading-[56px]">
            {titleMain.trim()}
            <span className="block font-semibold text-foreground">
              {titleAccent?.trim() ?? accentFallback}
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-base font-medium leading-8 text-black/80">
            Поиск работы мечты, смена профессии или построение плана карьерного развития. Персональные стратегии, которые дают
            реальные результаты за 90 дней или меньше.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" onClick={onPrimaryCtaClick}>
            Записаться на консультацию
          </Button>
          <Button
            size="lg"
            variant="secondary"
            className="border border-[#3E6DB0]/10 bg-white/30 text-black"
            asChild
          >
            <a href="#services">Посмотреть программы</a>
          </Button>
        </div>
      </div>
    </section>
  )
}


