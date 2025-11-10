import { siteContent } from "@/content/site"

const marqueeItems = [
  { title: "TechOpal", caption: "Аппаратные стартапы" },
  { title: "Google for Startups", caption: "Акселерация" },
  { title: "Shopify", caption: "E-commerce" },
  { title: "Côte d'Or", caption: "FMCG" },
  { title: "Notion", caption: "SaaS" },
  { title: "Graphite.dev", caption: "Tech" },
  { title: "inDrive", caption: "Мобильность" },
  { title: siteContent.brand.name, caption: "Career advisory" },
]

export function LogoMarquee() {
  const rows = [0, 1]
  return (
    <section className="relative overflow-hidden border-y border-border/60 bg-white/50 py-12 backdrop-blur">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(51,147,255,0.12),_transparent_65%)]" />
      <div className="relative mx-auto max-w-[var(--page-max-width)] space-y-6 px-[var(--page-padding)]">
        <div className="flex items-center justify-between gap-6 text-sm text-muted-foreground/80">
          <span>Доверяют командам и экспертам по всему миру</span>
          <span>15+ отраслей</span>
        </div>
        {rows.map((index) => (
          <div key={index} className="flex overflow-hidden">
            <div
              className="flex min-w-full shrink-0 items-center justify-around gap-10 whitespace-nowrap pr-10 text-muted-foreground/80 [animation:marquee_28s_linear_infinite]
              [&>*]:flex [&>*]:w-max [&>*]:flex-col [&>*]:items-start [&>*]:gap-1"
              style={{ animationDelay: index === 1 ? "-14s" : undefined }}
            >
              {marqueeItems.map((item) => (
                <div key={`${item.title}-${index}`} className="group">
                  <span className="text-lg font-semibold text-foreground transition group-hover:text-primary">
                    {item.title}
                  </span>
                  <span className="text-xs text-muted-foreground/60">
                    {item.caption}
                  </span>
                </div>
              ))}
              {marqueeItems.map((item) => (
                <div key={`${item.title}-clone-${index}`} className="group">
                  <span className="text-lg font-semibold text-foreground transition group-hover:text-primary">
                    {item.title}
                  </span>
                  <span className="text-xs text-muted-foreground/60">
                    {item.caption}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
