"use client"

import { useState, useEffect } from "react"
import NavBar from "@/components/nav-bar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Education from "@/components/education"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Achievements from "@/components/achievements"
import Clubs from "@/components/clubs"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const shouldBeDark = savedTheme ? savedTheme === "dark" : prefersDark
    setIsDark(shouldBeDark)
  }, [])

  useEffect(() => {
    if (!mounted) return
    localStorage.setItem("theme", isDark ? "dark" : "light")
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark, mounted])

  if (!mounted) {
    return null
  }

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
        <Achievements />
        <Clubs />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
