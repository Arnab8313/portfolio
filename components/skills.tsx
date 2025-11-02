"use client"

import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Next.js"],
  },
  {
    category: "Backend & Tools",
    skills: ["Python", "Git", "REST APIs", "Vercel", "npm", "VS Code"],
  },
  {
    category: "Data & Analysis",
    skills: ["Data Visualization", "Statistical Analysis", "Python Libraries", "Data Science"],
  },
]

export default function Skills() {
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
    <section id="skills" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">Skills</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-accent/5 border border-accent/10 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold text-foreground mb-4 text-transparent bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-gradient-to-r from-cyan-400/10 to-violet-500/10 text-foreground/80 text-sm rounded-full border border-accent/20 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
