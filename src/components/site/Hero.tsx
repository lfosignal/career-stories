import Image from "next/image"
import { Button } from "@/components/ui/button"
import { siteContent } from "@/content/site"

type HeroProps = {
  onPrimaryCtaClick?: () => void
}

export function Hero({ onPrimaryCtaClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,theme(colors.primary)/12_0%,transparent_55%)]" />
      <div className="container mx-auto grid max-w-6xl items-center gap-8 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            {siteContent.hero.title}
          </h1>
          <p className="max-w-xl text-muted-foreground md:text-lg">
            {siteContent.hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="inline-flex items-center rounded-full bg-gradient-to-r from-primary to-teal-400 p-[1px]">
              <Button
                size="lg"
                className="rounded-full"
                onClick={onPrimaryCtaClick}
              >
                {siteContent.hero.primaryCta}
              </Button>
            </span>
            <Button size="lg" variant="outline" asChild>
              <a href="#services">{siteContent.hero.secondaryCta}</a>
            </Button>
          </div>
          <div className="flex flex-wrap gap-6 pt-4 text-sm text-muted-foreground">
            {siteContent.hero.metrics.map((m) => (
              <div key={m}>{m}</div>
            ))}
          </div>
        </div>
        <div className="relative h-64 md:h-96">
          <Image
            src="/window.svg"
            alt="Карьерный рост"
            fill
            className="object-contain dark:invert"
            priority
          />
        </div>
      </div>
    </section>
  )
}


