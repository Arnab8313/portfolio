"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink } from "lucide-react"

interface Project {
  title: string
  description: string
  tech: string[]
  link: string
  image: string
  gradient: string
}

const projects: Project[] = [
  {
    title: "Expense Tracker",
    description: "A responsive web app to track income and expenses in real time with intuitive charts and analytics.",
    tech: ["React", "Tailwind CSS", "Vercel"],
    link: "https://expense-tracker-eta-hazel.vercel.app/",
    image: "/expense-tracker-app-dashboard.jpg",
    gradient: "from-cyan-400/20 to-cyan-600/20",
  },
  {
    title: "Task Manager",
    description:
      "A modern task management app with drag-and-drop sorting and a clean, intuitive interface for productivity.",
    tech: ["React", "Tailwind CSS", "Local Storage", "Vercel"],
    link: "https://task-manager-eta-roan-15.vercel.app/",
    image: "/task-manager-app-interface.jpg",
    gradient: "from-violet-400/20 to-violet-600/20",
  },
  {
    title: "NovaSync Landing Page",
    description:
      "A futuristic AI startup landing page featuring smooth animations, gradients, and modern design principles.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    link: "https://novasync-startup-landing-page.vercel.app/",
    image: "/ai-startup-landing-page.jpg",
    gradient: "from-pink-400/20 to-violet-600/20",
  },
]

export default function Projects() {
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
    <section id="projects" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">Projects</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative bg-accent/5 border border-accent/10 rounded-xl overflow-hidden hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-2 ${`bg-gradient-to-br ${project.gradient} border-cyan-400/10 hover:border-cyan-400/30`}`}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-background/50">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">{project.description}</p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full border border-accent/20 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-gradient-to-r from-cyan-400 to-violet-500 text-background font-semibold rounded-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/50"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
