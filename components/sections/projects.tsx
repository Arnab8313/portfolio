import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Design System",
    desc: "Foundations, tokens, and components for a multi-product platform.",
    tags: ["React", "TypeScript", "Storybook"],
    href: "#",
    img: "/design-system-dashboard.png",
  },
  {
    title: "E-commerce UI",
    desc: "High-converting storefront with semantic, accessible components.",
    tags: ["Next.js", "Tailwind CSS", "A11y"],
    href: "#",
    img: "/ecommerce-product-grid.png",
  },
  {
    title: "Analytics App",
    desc: "Realtime dashboards with delightful micro-interactions.",
    tags: ["React", "Recharts", "SWR"],
    href: "#",
    img: "/analytics-dashboard.png",
  },
]

export function Projects() {
  return (
    <section id="projects" aria-label="Projects" className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-pretty">Selected work</h2>
        <Button asChild variant="secondary">
          <a href="#contact">Work with me</a>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <Card key={p.title} className="overflow-hidden bg-card border-border">
            <CardHeader className="p-0">
              <Image
                src={p.img || "/placeholder.svg"}
                alt={p.title}
                width={640}
                height={360}
                className="h-44 w-full object-cover"
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-lg">{p.title}</CardTitle>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-primary/15 text-primary-foreground/90 px-3 py-1 text-xs border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <Button asChild size="sm">
                  <a href={p.href} target="_blank" rel="noreferrer">
                    Open
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
