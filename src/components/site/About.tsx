import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { siteContent } from "@/content/site"

export function About() {
  return (
    <section className="container mx-auto max-w-6xl px-6 py-16" id="about">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div className="relative h-64 w-full md:h-80">
          <Image
            src="/consultant.jpg"
            alt="Портрет консультанта"
            fill
            className="rounded-lg object-cover"
            priority
          />
        </div>
        <Card>
          <CardContent className="space-y-4 p-6">
            <h2 className="text-2xl font-semibold tracking-tight">{siteContent.about.title}</h2>
            {siteContent.about.paragraphs.map((p, i) => (
              <p key={i} className="text-muted-foreground">
                {p}
              </p>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}


