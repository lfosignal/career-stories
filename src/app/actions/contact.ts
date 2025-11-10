'use server'

import { Resend } from "resend"

type ContactPayload = {
  name: string
  email: string
  phone?: string
  message: string
}

export async function submitContact(payload: ContactPayload): Promise<boolean> {
  // Если настроена почта через Resend — отправим письмо, иначе просто залогируем
  try {
    const apiKey = process.env.RESEND_API_KEY
    const to = process.env.CONTACT_TO
    const from = process.env.CONTACT_FROM || "no-reply@career-stories.local"

    if (!apiKey || !to) {
      console.log("[contact] received:", payload)
      return true
    }

    const resend = new Resend(apiKey)
    const subject = `Новая заявка (Career Stories) — ${payload.name}`
    const text = [
      `Имя: ${payload.name}`,
      `Email: ${payload.email}`,
      `Телефон: ${payload.phone || "—"}`,
      "",
      payload.message,
    ].join("\n")

    const { error } = await resend.emails.send({
      from,
      to,
      subject,
      text,
    })
    if (error) {
      console.error("[contact] email error:", error)
      return false
    }
    return true
  } catch (e) {
    console.error("[contact] unexpected error:", e)
    return false
  }
}


