"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  const nav = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="#" className="font-semibold tracking-tight">
          <span className="text-lg">Your Name</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="icon" variant="ghost" aria-label="Email">
            <a href="mailto:hello@example.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild size="icon" variant="ghost" aria-label="GitHub">
            <a href="https://github.com" target="_blank" rel="noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild size="icon" variant="ghost" aria-label="LinkedIn">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
