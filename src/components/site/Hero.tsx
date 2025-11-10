import Image from "next/image"
import { Button } from "@/components/ui/button"

type HeroProps = {
  onPrimaryCtaClick?: () => void
}

export function Hero({ onPrimaryCtaClick }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container mx-auto grid max-w-6xl items-center gap-8 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Раскройте свой потенциал: ускорьте карьерный рост с экспертом
          </h1>
          <p className="text-muted-foreground md:text-lg">
            Помогаю найти работу мечты, сменить профессию и спланировать путь к
            успеху. Индивидуальные стратегии, проверенные инструменты, поддержка
            на каждом шаге.
          </p>
          <div className="flex gap-3">
            <Button size="lg" onClick={onPrimaryCtaClick}>
              Записаться на консультацию
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#services">Услуги и программы</a>
            </Button>
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


