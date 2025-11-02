"use client"

import { useEffect, useRef, useState } from "react"

export default function Education() {
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
    <section id="education" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">Education</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mb-8"></div>

          <div className="space-y-6">
            {/* VIT Chennai */}
            <div className="p-6 rounded-lg bg-accent/5 border border-accent/10 hover:border-cyan-400/30 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-cyan-400 transition-colors duration-300">
                    B.Tech in Computer Science and Engineering
                  </h3>
                  <p className="text-sm text-foreground/60">VIT Chennai</p>
                </div>
                <span className="text-sm font-medium text-violet-400">2024–2028</span>
              </div>
              <p className="text-foreground/70 text-sm">
                Focused on web development, data structures, and algorithms. Actively participated in hackathons and
                technical clubs. Developed strong foundations in software engineering principles.
              </p>
            </div>

            {/* IIT Madras */}
            <div className="p-6 rounded-lg bg-accent/5 border border-accent/10 hover:border-violet-400/30 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-violet-400 transition-colors duration-300">
                    BS in Data Science and Applications
                  </h3>
                  <p className="text-sm text-foreground/60">IIT Madras (Online)</p>
                </div>
                <span className="text-sm font-medium text-cyan-400">2025–2029</span>
              </div>
              <p className="text-foreground/70 text-sm">
                Building expertise in data analysis, machine learning, and statistical methods. Applying data science
                principles to real-world problems and projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
