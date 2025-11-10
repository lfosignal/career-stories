import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section className="container mx-auto max-w-6xl px-6 py-16" id="about">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div className="relative h-64 w-full md:h-80">
          <Image
            src="/globe.svg"
            alt="Портрет консультанта"
            fill
            className="object-contain dark:invert"
            priority
          />
        </div>
        <Card>
          <CardContent className="space-y-4 p-6">
            <h2 className="text-2xl font-semibold tracking-tight">О консультанте</h2>
            <p className="text-muted-foreground">
              Я карьерный консультант с 15+ годами опыта в HR, профориентации и обучении.
              Помогаю специалистам находить работу мечты, строить устойчивую «ресурсную» карьеру
              и реализовывать переходы между профессиями.
            </p>
            <p className="text-muted-foreground">
              Мой подход: диагностика сильных сторон, ясные цели, проверенные инструменты,
              поддержка в действии. Конкретика вместо теории, бережная работа вместо давления.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}


