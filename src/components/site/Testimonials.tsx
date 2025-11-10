'use client'

import useEmblaCarousel from "embla-carousel-react"
import { Card, CardContent } from "@/components/ui/card"
import { siteContent } from "@/content/site"
import { Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  ...siteContent.testimonials,
]

export function Testimonials() {
  const [viewportRef] = useEmblaCarousel({ loop: true, align: "start" })

  return (
    <section className="py-24" id="testimonials">
      <div className="mx-auto max-w-[var(--page-max-width)] px-[var(--page-padding)]">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <span className="text-sm text-muted-foreground/80">Голоса клиентов</span>
            <h2 className="text-3xl font-semibold text-foreground md:text-4xl">Реальные результаты</h2>
          </div>
          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
            Не только мои слова — что говорят выпускники программ и карьерные коучи, с которыми мы шли путь.
          </p>
        </div>
      </div>
      <div className="overflow-hidden" ref={viewportRef}>
        <div className="-ml-4 flex">
          {testimonials.map((t, i) => (
            <div key={i} className="min-w-0 flex-[0_0_100%] pl-4 md:flex-[0_0_50%]">
              <Card className="relative h-full rounded-[2.1rem] border border-border/60 bg-white/80 backdrop-blur shadow-[0_32px_88px_rgba(51,147,255,0.16)]">
                <CardContent className="space-y-5 px-9 py-12">
                  <div className="flex items-center gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} className="size-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-base leading-relaxed text-muted-foreground">{t.text}</p>
                  <div className="flex items-center gap-4">
                    <Avatar className="size-10">
                      <AvatarImage src={t.avatar} />
                      <AvatarFallback>★</AvatarFallback>
                    </Avatar>
                    <div className="text-sm text-muted-foreground">
                      <p className="font-semibold text-foreground">{t.name}</p>
                      <p>{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


