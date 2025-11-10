\"use client\"

import { useState } from \"react\"
import { useForm } from \"react-hook-form\"
import { z } from \"zod\"
import { zodResolver } from \"@hookform/resolvers/zod\"
import { Input } from \"@/components/ui/input\"
import { Textarea } from \"@/components/ui/textarea\"
import { Button } from \"@/components/ui/button\"
import { toast } from \"sonner\"
import { submitContact } from \"@/app/actions/contact\"

const schema = z.object({
  name: z.string().min(2, \"Минимум 2 символа\"),
  email: z.string().email(\"Некорректный email\"),
  phone: z.string().optional(),
  message: z.string().min(5, \"Опишите запрос подробнее\"),
})

type FormValues = z.infer<typeof schema>

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { name: \"\", email: \"\", phone: \"\", message: \"\" } })

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true)
    try {
      const ok = await submitContact(values)
      if (ok) {
        toast.success(\"Заявка отправлена. Я свяжусь с вами в ближайшее время.\")
        form.reset()
      } else {
        toast.error(\"Не удалось отправить. Попробуйте позже.\")
      }
    } catch {
      toast.error(\"Ошибка отправки. Попробуйте позже.\")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className=\"container mx-auto max-w-3xl px-6 py-16\" id=\"contact\">
      <h2 className=\"mb-6 text-2xl font-semibold tracking-tight\">Оставить заявку</h2>
      <form className=\"grid gap-4\" onSubmit={form.handleSubmit(onSubmit)}>
        <div className=\"grid gap-2\">
          <label className=\"text-sm font-medium\" htmlFor=\"name\">Имя</label>
          <Input id=\"name\" placeholder=\"Иван\" {...form.register(\"name\")} />
          {form.formState.errors.name && <p className=\"text-sm text-destructive\">{form.formState.errors.name.message}</p>}
        </div>
        <div className=\"grid gap-2\">
          <label className=\"text-sm font-medium\" htmlFor=\"email\">Email</label>
          <Input id=\"email\" type=\"email\" placeholder=\"you@example.com\" {...form.register(\"email\")} />
          {form.formState.errors.email && <p className=\"text-sm text-destructive\">{form.formState.errors.email.message}</p>}
        </div>
        <div className=\"grid gap-2\">
          <label className=\"text-sm font-medium\" htmlFor=\"phone\">Телефон</label>
          <Input id=\"phone\" placeholder=\"+7 900 000-00-00\" {...form.register(\"phone\")} />
        </div>
        <div className=\"grid gap-2\">
          <label className=\"text-sm font-medium\" htmlFor=\"message\">Сообщение</label>
          <Textarea id=\"message\" placeholder=\"Кратко опишите ваш запрос\" rows={5} {...form.register(\"message\")} />
          {form.formState.errors.message && <p className=\"text-sm text-destructive\">{form.formState.errors.message.message}</p>}
        </div>
        <Button type=\"submit\" disabled={isSubmitting}>{isSubmitting ? \"Отправка…\" : \"Отправить\"}</Button>
      </form>
    </section>
  )
}


