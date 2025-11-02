type Role = {
  company: string
  title: string
  period: string
  summary: string
  links?: { label: string; href: string }[]
  keywords?: string[]
}

const roles: Role[] = [
  {
    company: "Acme Co.",
    title: "Senior Front-End Engineer",
    period: "2023 — Present",
    summary:
      "Lead UI engineer building accessible component libraries and performance-focused experiences across product surfaces.",
    keywords: ["React", "TypeScript", "Design Systems", "Accessibility"],
  },
  {
    company: "Startly",
    title: "Front-End Engineer",
    period: "2021 — 2023",
    summary:
      "Delivered multi-tenant dashboards, data visualizations, and end-to-end product features in a fast-paced environment.",
    keywords: ["Next.js", "SWR", "Recharts"],
  },
]

export function Experience() {
  return (
    <section id="experience" aria-label="Experience" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">Experience</h2>
      <ol className="relative border-l border-border/70 ml-3">
        {roles.map((r, i) => (
          <li key={r.company + i} className="mb-10 ml-6">
            <span className="absolute -left-3 mt-1.5 h-2.5 w-2.5 rounded-full bg-primary"></span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-medium">{r.title}</h3>
                <span className="text-muted-foreground">·</span>
                <p className="text-muted-foreground">{r.company}</p>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{r.period}</p>
              <p className="mt-3 leading-relaxed text-sm">{r.summary}</p>
              {r.keywords && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {r.keywords.map((k) => (
                    <span key={k} className="rounded-md border border-border px-2 py-1 text-xs text-muted-foreground">
                      {k}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
