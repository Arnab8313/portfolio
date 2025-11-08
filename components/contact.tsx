"use client"

import { Mail, Phone } from "lucide-react"
import { useEffect, useState } from "react"

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-2">Get In Touch</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-violet-400"></div>
        </div>

        <div
          className={`grid md:grid-cols-2 gap-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Email */}
          <div className="p-8 bg-accent/5 border border-accent/10 rounded-lg text-center hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mail size={28} className="text-cyan-400" />
              <span className="text-foreground/80">Email</span>
            </div>
            <a
              href="mailto:arnab.choudhury2004@gmail.com"
              className="text-2xl font-semibold text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              arnab.choudhury2004@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="p-8 bg-accent/5 border border-accent/10 rounded-lg text-center hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-violet-400/20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Phone size={28} className="text-violet-400" />
              <span className="text-foreground/80">Phone</span>
            </div>
            <a
              href="tel:+919955674105"
              className="text-2xl font-semibold text-violet-400 hover:text-violet-300 transition-colors duration-300"
            >
              +91 9955674105
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-foreground/60 text-lg">
            Feel free to reach out via email or phone. I'm always excited to connect and discuss new opportunities!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
