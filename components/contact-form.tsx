"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle")

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    // Simple mailto fallback
    const form = e.target as HTMLFormElement
    const data = new FormData(form)
    const subject = encodeURIComponent(`Portfolio inquiry from ${data.get("name")}`)
    const body = encodeURIComponent(`${data.get("message")}\n\nFrom: ${data.get("email")}`)
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`
    setStatus("sent")
  }

  return (
    <section id="contact" aria-label="Contact" className="mx-auto max-w-3xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold">Let’s work together</h2>
      <p className="mt-2 text-muted-foreground">
        Tell me about your project or say hi — I’ll get back within 1–2 days.
      </p>
      <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 gap-4">
        <div className="grid md:grid-cols-2 gap-4">
          <Input name="name" placeholder="Your name" required aria-label="Your name" />
          <Input name="email" type="email" placeholder="Email" required aria-label="Email" />
        </div>
        <Textarea name="message" placeholder="Your message" rows={6} required aria-label="Message" />
        <div>
          <Button type="submit">{status === "sent" ? "Thanks! Opened email…" : "Send message"}</Button>
        </div>
      </form>
    </section>
  )
}
