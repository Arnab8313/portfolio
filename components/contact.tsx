"use client"
import { useEffect, useRef, useState } from "react"
import { Mail, Phone } from "lucide-react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section id="contact" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">Contact</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mb-8"></div>

          {/* Direct Email and Phone */}
          <div className="space-y-6">
            {/* Email */}
            <div className="p-8 bg-accent/5 border border-accent/10 rounded-lg text-center hover:border-accent/30 transition-all duration-300">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Mail size={28} className="text-cyan-400" />
                <span className="text-foreground/80">Email</span>
              </div>
              <a
                href="mailto:arnabchoudhuryofficial@gmail.com"
                className="text-2xl font-semibold text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
              >
                arnabchoudhuryofficial@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="p-8 bg-accent/5 border border-accent/10 rounded-lg text-center hover:border-accent/30 transition-all duration-300">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Phone size={28} className="text-violet-400" />
                <span className="text-foreground/80">Phone</span>
              </div>
              <a
                href="tel:+919999999999"
                className="text-2xl font-semibold text-violet-400 hover:text-violet-300 transition-colors duration-300"
              >
                +91 9999999999
              </a>
            </div>

            {/* Social Links Note */}
            <p className="text-center text-foreground/60 text-sm pt-4">
              You can also connect with me on{" "}
              <a
                href="https://www.linkedin.com/in/arnab-choudhury-2b55b331b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                LinkedIn
              </a>
              ,{" "}
              <a
                href="https://github.com/Arnab8313"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                GitHub
              </a>
              , or{" "}
              <a
                href="https://x.com/arnab_1711"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                X (Twitter)
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
