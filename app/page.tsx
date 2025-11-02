"use client"

import { useState, useEffect } from "react"
import NavBar from "@/components/nav-bar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Education from "@/components/education"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  return (
    <div className={`${isDark ? "dark" : ""} transition-colors duration-300`}>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/95 text-foreground">
        <NavBar isDark={isDark} setIsDark={setIsDark} />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
