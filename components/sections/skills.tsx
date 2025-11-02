export function Skills() {
  const groups = [
    { label: "Core", items: ["HTML", "CSS", "JavaScript", "TypeScript"] },
    { label: "Frameworks", items: ["React", "Next.js", "Tailwind"] },
    { label: "Tooling", items: ["Vite", "Vitest", "Playwright", "Storybook"] },
  ]
  return (
    <section aria-label="Skills" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {groups.map((g) => (
          <div key={g.label} className="rounded-lg border border-border p-4 bg-secondary/40">
            <h3 className="text-sm tracking-wide text-muted-foreground">{g.label}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.items.map((i) => (
                <span
                  key={i}
                  className="rounded-full bg-primary/15 text-primary-foreground/90 px-3 py-1 text-xs border border-border"
                >
                  {i}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
