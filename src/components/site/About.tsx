import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { siteContent } from "@/content/site"

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-[var(--page-max-width)] px-[var(--page-padding)]">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_1.1fr]">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] border border-border/60 bg-white/70 p-4 shadow-[0_40px_110px_rgba(62,109,176,0.18)] backdrop-blur">
            <Image
              src="/consultant.jpg"
              alt="Портрет консультанта"
              fill
              className="rounded-[2rem] object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-x-8 bottom-8 rounded-2xl border border-white/60 bg-white/70 px-6 py-4 text-[11px] uppercase tracking-[0.36em] text-muted-foreground/70 backdrop-blur">
              Партнёр вашей трансформации
            </div>
          </div>
          <Card className="rounded-[2.5rem] border border-border/60 bg-white/80 p-0 shadow-[0_34px_90px_rgba(51,147,255,0.14)] backdrop-blur">
            <CardContent className="space-y-6 p-10">
              <span className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.42em] text-muted-foreground">
                <span className="inline-flex size-1.5 rounded-full bg-primary shadow-[0_0_0_6px_rgba(251,65,31,0.2)]" />
                Кто рядом на каждом шаге
              </span>
              <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
                {siteContent.about.title}
              </h2>
              <div className="space-y-4 text-base text-muted-foreground">
                {siteContent.about.paragraphs.map((p, i) => (
                  <p key={i} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


