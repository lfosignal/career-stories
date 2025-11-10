'use client'

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { submitContact } from "@/app/actions/contact"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2 } from "lucide-react"
import { siteContent } from "@/content/site"

const schema = z.object({
  name: z.string().min(2, "Минимум 2 символа"),
  email: z.string().email("Некорректный email"),
  phone: z.string().optional(),
  message: z.string().min(5, "Опишите запрос подробнее"),
})

type FormValues = z.infer<typeof schema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { name: "", email: "", phone: "", message: "" } })

  const quickLinks = [
    { label: "Запись в календаре", href: siteContent.contact.quick.calendly },
    { label: "Telegram", href: siteContent.contact.quick.telegram },
    { label: "WhatsApp", href: siteContent.contact.quick.whatsapp },
    { label: "Instagram", href: siteContent.contact.quick.instagram },
  ]

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true)
    try {
      const ok = await submitContact(values)
      if (ok) {
        toast.success("Заявка отправлена. Я свяжусь с вами в ближайшее время.")
        form.reset()
      } else {
        toast.error("Не удалось отправить. Попробуйте позже.")
      }
    } catch {
      toast.error("Ошибка отправки. Попробуйте позже.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative py-28" id="contact">
      <div className="mx-auto grid max-w-[var(--page-max-width)] gap-12 px-[var(--page-padding)] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <span className="text-[11px] uppercase tracking-[0.42em] text-muted-foreground/80">Контакт</span>
          <h2 className="text-4xl font-semibold text-foreground md:text-5xl">
            Оставьте заявку или назначьте встречу
          </h2>
          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
            Опишите запрос или сразу забронируйте время. На вводной встрече оценим ситуацию, поставим цель и подберём формат работы.
          </p>
          <div className="rounded-[2rem] border border-border/60 bg-white/70 p-6 backdrop-blur shadow-[0_28px_70px_rgba(51,147,255,0.16)]">
            <div className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground/70">
              Быстрые способы связи
            </div>
            <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
              {quickLinks.map((link) => (
                <Button
                  key={link.label}
                  variant={link.label === "Запись в календаре" ? "default" : "secondary"}
                  className="justify-between"
                  asChild
                >
                  <a href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                </Button>
              ))}
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              Или напишите на <a className="text-accent underline" href={`mailto:${siteContent.contact.email}`}>{siteContent.contact.email}</a>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-[2.6rem] border border-border/60 bg-white/80 p-10 backdrop-blur shadow-[0_44px_120px_rgba(51,147,255,0.2)]">
          <form className="grid gap-5" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="name">Имя</label>
              <Input id="name" placeholder="Иван" {...form.register("name")} />
              {form.formState.errors.name && <p className="text-sm text-destructive">{form.formState.errors.name.message}</p>}
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="email">Email</label>
              <Input id="email" type="email" placeholder="you@example.com" {...form.register("email")} />
              {form.formState.errors.email && <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>}
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="phone">Телефон</label>
              <Input id="phone" placeholder="+7 900 000-00-00" {...form.register("phone")} />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="message">Сообщение</label>
              <Textarea id="message" placeholder="Кратко опишите ваш запрос" rows={5} {...form.register("message")} />
              {form.formState.errors.message && <p className="text-sm text-destructive">{form.formState.errors.message.message}</p>}
            </div>
            <div className="flex items-start gap-3">
              <Checkbox id="consent" required className="mt-1" />
              <label htmlFor="consent" className="text-sm leading-relaxed text-muted-foreground">
                Я согласен(а) с обработкой персональных данных
              </label>
            </div>
            <Button type="submit" disabled={isSubmitting} className="mt-4 justify-center">
              {isSubmitting && <Loader2 className="mr-2 size-4 animate-spin" />}
              {isSubmitting ? "Отправка…" : "Отправить"}
            </Button>
          </form>
          <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-accent/15 blur-3xl" />
        </div>
      </div>
    </section>
  )
}


