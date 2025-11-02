export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground flex items-center justify-between">
        <p>© {new Date().getFullYear()} Your Name</p>
        <p>Built with Next.js & Tailwind</p>
      </div>
    </footer>
  )
}
