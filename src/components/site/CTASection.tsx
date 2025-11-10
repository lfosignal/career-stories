import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="container mx-auto max-w-6xl px-6 py-16" id="cta">
      <div className="rounded-lg border p-8 text-center">
        <h2 className="text-2xl font-semibold tracking-tight">
          Готовы к изменениям? Сделаем первый шаг вместе.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          Запишитесь на бесплатную вводную встречу: обсудим цель и подберём формат работы.
        </p>
        <div className="mt-6 flex justify-center">
          <Button size="lg" asChild>
            <a href="#contact">Оставить заявку</a>
          </Button>
        </div>
      </div>
    </section>
  )
}


