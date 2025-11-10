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
    <section className="container mx-auto max-w-5xl px-6 py-16" id="testimonials">
      <h2 className="mb-2 text-2xl font-semibold tracking-tight">Реальные результаты</h2>
      <p className="mb-6 text-sm text-muted-foreground">Не только мои слова — что говорят клиенты</p>
      <div className="overflow-hidden" ref={viewportRef}>
        <div className="-ml-4 flex">
          {testimonials.map((t, i) => (
            <div key={i} className="min-w-0 flex-[0_0_100%] pl-4 md:flex-[0_0_50%]">
              <Card className="h-full">
                <CardContent className="space-y-3 p-6">
                  <div className="flex items-center gap-1 text-primary">
                    <Star className="size-4 fill-current" />
                    <Star className="size-4 fill-current" />
                    <Star className="size-4 fill-current" />
                    <Star className="size-4 fill-current" />
                    <Star className="size-4 fill-current" />
                  </div>
                  <p className="text-sm text-muted-foreground">{t.text}</p>
                  <div className="flex items-center gap-3">
                    <Avatar className="size-8">
                      <AvatarImage src={t.avatar} />
                      <AvatarFallback>★</AvatarFallback>
                    </Avatar>
                    <p className="text-sm">— {t.name}</p>
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


