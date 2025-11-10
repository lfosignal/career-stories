import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { siteContent } from "@/content/site"

export function FAQ() {
  const items = siteContent.faq
  return (
    <section className="py-24" id="faq">
      <div className="mx-auto max-w-[var(--page-max-width)] px-[var(--page-padding)]">
        <div className="mb-8 space-y-3">
          <span className="text-[11px] uppercase tracking-[0.42em] text-muted-foreground/80">Часто спрашивают</span>
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">Частые вопросы</h2>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Ответы на ключевые вопросы о форматах работы, сроках и результате. Если не нашли нужного — свяжитесь, обсудим ваш случай.
          </p>
        </div>
        <div className="rounded-[2.4rem] border border-border/60 bg-white/80 p-2 backdrop-blur shadow-[0_32px_88px_rgba(51,147,255,0.14)]">
          <Accordion type="single" collapsible>
            {items.map((it, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-[1.8rem] border border-transparent px-6 py-2 transition hover:border-accent/30"
              >
                <AccordionTrigger className="rounded-[1.5rem] bg-white/70 px-4 py-5 text-base font-medium text-foreground">
                  {it.q}
                </AccordionTrigger>
                <AccordionContent className="px-4 text-sm leading-relaxed text-muted-foreground">
                  {it.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}


