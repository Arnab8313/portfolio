"use client"

import { useEffect, useRef, useState } from "react"
import { Users } from "lucide-react"

export default function Clubs() {
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
    <section id="clubs" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">Clubs & Communities</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full mb-8"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-accent/5 border border-accent/10 hover:border-violet-400/30 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <Users
                  size={32}
                  className="text-violet-400 flex-shrink-0 mt-1 group-hover:text-cyan-400 transition-colors"
                />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-violet-400 transition-colors">
                    Bengali Literary Society
                  </h3>
                  <p className="text-foreground/70 text-sm">Operations Team Member</p>
                  <p className="text-foreground/60 text-xs mt-2">
                    Contributing to cultural initiatives and community engagement through literary and cultural events.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
