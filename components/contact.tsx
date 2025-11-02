"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Mail, Send } from "lucide-react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send to a backend or email service
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">Get In Touch</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mb-8"></div>

          <p className="text-foreground/70 mb-8 text-lg">
            I'm always open to connecting with interesting people and exploring new opportunities. Feel free to reach
            out!
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-accent/5 border border-accent/10 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-accent/5 border border-accent/10 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-accent/5 border border-accent/10 rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-violet-500 text-background font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Send Message <Send size={18} />
            </button>

            {submitted && (
              <div className="text-center p-3 bg-green-400/10 border border-green-400/30 rounded-lg text-green-400 text-sm animate-in fade-in">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
          </form>

          {/* Direct Email */}
          <div className="mt-8 p-6 bg-accent/5 border border-accent/10 rounded-lg text-center">
            <div className="flex items-center justify-center gap-2 text-foreground/80 mb-2">
              <Mail size={20} />
              <span>Or email me directly at</span>
            </div>
            <a
              href="mailto:arnabchoudhuryofficial@gmail.com"
              className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300"
            >
              arnabchoudhuryofficial@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
