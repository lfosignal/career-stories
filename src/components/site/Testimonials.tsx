\"use client\"

import useEmblaCarousel from \"embla-carousel-react\"
import { Card, CardContent } from \"@/components/ui/card\"

const testimonials = [
  {
    name: \"Анна, продуктовый дизайнер\",
    text:
      \"За 2 месяца перешла из смежной роли в дизайн. Получила оффер, собеседования перестали быть стрессом.\",
  },
  {
    name: \"Игорь, разработчик\",
    text:
      \"Переписали резюме и LinkedIn, отладили стратегию. Через 6 недель — новый оффер с ростом дохода на 35%.\",
  },
  {
    name: \"Мария, маркетолог\",
    text:
      \"Наконец-то появилось направление и план. Сняли тревогу, вернулась энергия. Спасибо за бережный формат.\",
  },
]

export function Testimonials() {
  const [viewportRef] = useEmblaCarousel({ loop: true, align: \"start\" })

  return (
    <section className=\"container mx-auto max-w-5xl px-6 py-16\" id=\"testimonials\">
      <h2 className=\"mb-6 text-2xl font-semibold tracking-tight\">Отзывы</h2>
      <div className=\"overflow-hidden\" ref={viewportRef}>
        <div className=\"-ml-4 flex\">
          {testimonials.map((t, i) => (
            <div key={i} className=\"min-w-0 flex-[0_0_100%] pl-4 md:flex-[0_0_50%]\">
              <Card className=\"h-full\">
                <CardContent className=\"space-y-3 p-6\">
                  <p className=\"text-sm text-muted-foreground\">{t.text}</p>
                  <p className=\"text-sm\">— {t.name}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


