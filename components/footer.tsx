"use client"

import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-accent/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent mb-2">
              Arnab Choudhury
            </h3>
            <p className="text-foreground/60 text-sm">Front-End Web Developer & Aspiring Data Scientist</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-400 transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/Arnab8313"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-accent/10 hover:bg-cyan-400/20 text-foreground/60 hover:text-cyan-400 transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/arnab-choudhury-2b55b331b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-accent/10 hover:bg-cyan-400/20 text-foreground/60 hover:text-cyan-400 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://x.com/arnab_1711"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-accent/10 hover:bg-cyan-400/20 text-foreground/60 hover:text-cyan-400 transition-all duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:arnabchoudhuryofficial@gmail.com"
                className="p-2 rounded-lg bg-accent/10 hover:bg-cyan-400/20 text-foreground/60 hover:text-cyan-400 transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent/10 pt-8 text-center text-sm text-foreground/60">
          <p>© 2025 Arnab Choudhury. All rights reserved. Built with React, Next.js & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
