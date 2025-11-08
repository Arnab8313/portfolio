"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Trophy } from "lucide-react"

export default function Achievements() {
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

  const achievements = [
    {
      title: "Hackathon Participation",
      description: "Active participant in various hackathons and coding competitions, developing innovative solutions.",
      icon: Trophy,
    },
    {
      title: "Internship Experience",
      description:
        "Front-End Web Development Intern at Spark IIT, gaining hands-on experience in building responsive UIs.",
      icon: Award,
    },
  ]

  return (
    <section id="achievements" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">Certifications & Achievements</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-accent/5 border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <Icon size={32} className="text-cyan-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-foreground/70 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
