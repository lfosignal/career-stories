import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const items = [
    {
      q: "Как проходит консультация?",
      a: "Онлайн, 60 минут. По итогам — персональные рекомендации и план дальнейших шагов.",
    },
    {
      q: "Нужна ли подготовка?",
      a: "Желательно заранее прислать резюме/ссылку на LinkedIn и коротко описать запрос.",
    },
    {
      q: "Можно ли вернуть деньги?",
      a: "Если не подошёл формат — верну оплату за первую сессию без вопросов.",
    },
  ]
  return (
    <section className="container mx-auto max-w-4xl px-6 py-16" id="faq">
      <h2 className="mb-6 text-2xl font-semibold tracking-tight">Частые вопросы</h2>
      <Accordion type="single" collapsible>
        {items.map((it, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger>{it.q}</AccordionTrigger>
            <AccordionContent>{it.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}


