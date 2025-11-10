import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { siteContent } from "@/content/site"

export function FAQ() {
  const items = siteContent.faq
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


