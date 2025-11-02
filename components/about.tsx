"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
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
    <section id="about" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">About</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                I'm Arnab Choudhury, a Front-End Web Developer and aspiring Data Scientist driven by a passion for
                transforming ideas into interactive digital experiences. With a keen eye for design and a curiosity for
                data, I strive to craft interfaces that not only engage users but also tell meaningful stories through
                technology and insight.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Currently, I'm pursuing my B.Tech in Computer Science and Engineering at VIT Chennai (2024–2028) and
                simultaneously pursuing a BS in Data Science and Applications from IIT Madras (Online) starting
                2025–2029.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-accent/5 border border-accent/10 hover:border-accent/30 transition-all duration-300">
                <h3 className="font-semibold text-foreground mb-2">Key Focus</h3>
                <p className="text-sm text-foreground/70">
                  Building responsive, intuitive user interfaces and exploring data-driven insights to create smarter
                  applications.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-accent/5 border border-accent/10 hover:border-accent/30 transition-all duration-300">
                <h3 className="font-semibold text-foreground mb-2">Approach</h3>
                <p className="text-sm text-foreground/70">
                  Combining modern design principles with clean code to deliver seamless digital experiences across all
                  devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
