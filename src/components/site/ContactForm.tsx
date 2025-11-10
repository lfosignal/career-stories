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
    <section className="container mx-auto max-w-3xl px-6 py-16" id="contact">
      <h2 className="mb-6 text-2xl font-semibold tracking-tight">Оставить заявку</h2>
      <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
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
        <div className="flex items-center gap-2">
          <Checkbox id="consent" required />
          <label htmlFor="consent" className="text-sm text-muted-foreground">
            Я согласен(а) с обработкой персональных данных
          </label>
        </div>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="mr-2 size-4 animate-spin" />}
          {isSubmitting ? "Отправка…" : "Отправить"}
        </Button>
      </form>
      <div className="mt-8 grid gap-3 rounded-lg border p-4 text-sm">
        <div className="text-muted-foreground">Быстрые способы связи:</div>
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 p-[1px]">
            <Button asChild className="rounded-full">
              <a href="https://cal.com" target="_blank" rel="noreferrer">Запись в календаре</a>
            </Button>
          </span>
          <span className="inline-flex items-center rounded-full bg-gradient-to-r from-sky-500 to-blue-600 p-[1px]">
            <Button asChild className="rounded-full">
              <a href="https://t.me/your_telegram_username" target="_blank" rel="noreferrer">Telegram</a>
            </Button>
          </span>
          <Button variant="outline" asChild>
            <a href="https://wa.me/79501234567" target="_blank" rel="noreferrer">WhatsApp</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="https://instagram.com/your_instagram_username" target="_blank" rel="noreferrer">Instagram</a>
          </Button>
        </div>
      </div>
    </section>
  )
}


