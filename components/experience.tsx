"use client"

import { useEffect, useRef, useState } from "react"

export default function Experience() {
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
    <section id="experience" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">Experience</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mb-8"></div>

          <div className="space-y-6">
            {/* Current Position */}
            <div className="p-6 rounded-lg bg-gradient-to-r from-cyan-400/10 to-violet-500/10 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 group">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-cyan-400 transition-colors duration-300">
                    Front-End Web Development Intern
                  </h3>
                  <p className="text-sm text-foreground/60">Spark IIT</p>
                </div>
                <span className="text-sm font-medium text-cyan-400 px-3 py-1 bg-cyan-400/10 rounded-full">
                  Oct 2025 – Present
                </span>
              </div>
              <ul className="space-y-2 text-foreground/70 text-sm">
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Developing responsive user interfaces using React and modern web frameworks</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Enhancing user experiences through interactive design and smooth animations</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Collaborating with design and backend teams to deliver polished web solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
