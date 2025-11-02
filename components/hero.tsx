"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground">Arnab</h1>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
                Choudhury
              </h1>
            </div>

            <div className="space-y-3">
              <p className="text-xl md:text-2xl text-foreground/80 font-medium">Front-End Web Developer</p>
              <p className="text-lg text-foreground/60">Aspiring Data Scientist</p>
            </div>

            <p className="text-foreground/70 leading-relaxed max-w-md">
              I'm passionate about transforming ideas into interactive digital experiences. With a keen eye for design
              and curiosity for data, I craft interfaces that engage users and tell meaningful stories through
              technology.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/Arnab8313"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-accent/10 hover:bg-accent/20 text-foreground/80 hover:text-foreground transition-all duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/arnab-choudhury-2b55b331b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-accent/10 hover:bg-accent/20 text-foreground/80 hover:text-foreground transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://x.com/arnab_1711"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-accent/10 hover:bg-accent/20 text-foreground/80 hover:text-foreground transition-all duration-300 hover:scale-110"
              >
                <Twitter size={24} />
              </a>
              <a
                href="mailto:arnabchoudhuryofficial@gmail.com"
                className="p-3 rounded-lg bg-accent/10 hover:bg-accent/20 text-foreground/80 hover:text-foreground transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-2xl blur-lg opacity-30"></div>
              <div className="relative bg-background rounded-2xl p-1 overflow-hidden">
                <div className="bg-background/50 rounded-xl overflow-hidden">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/GMC31102025_094738-Ko80ofi92vRT8NJdsE0zBbzsKhFl70.jpg"
                    alt="Arnab Choudhury"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
