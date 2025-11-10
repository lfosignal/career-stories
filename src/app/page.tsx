import { Hero } from "@/components/site/Hero"
import { ProblemSolution } from "@/components/site/ProblemSolution"
import { ServicesPricing } from "@/components/site/ServicesPricing"
import { FAQ } from "@/components/site/FAQ"
import { ContactForm } from "@/components/site/ContactForm"
import { About } from "@/components/site/About"
import { Benefits } from "@/components/site/Benefits"
import { Testimonials } from "@/components/site/Testimonials"
import { CTASection } from "@/components/site/CTASection"
import { ServicesOverview } from "@/components/site/ServicesOverview"
import { Cases } from "@/components/site/Cases"
import { SectionDivider } from "@/components/site/SectionDivider"
import { LogoMarquee } from "@/components/site/LogoMarquee"
import { siteContent } from "@/content/site"

export default function Home() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": siteContent.faq.map((q) => ({
      "@type": "Question",
      "name": q.q,
      "acceptedAnswer": { "@type": "Answer", "text": q.a },
    })),
  }
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <LogoMarquee />
      <About />
      <SectionDivider />
      <ProblemSolution />
      <SectionDivider />
      <Benefits />
      <ServicesOverview />
      <SectionDivider />
      <ServicesPricing />
      <SectionDivider />
      <Cases />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <FAQ />
      <CTASection />
      <ContactForm />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
    </div>
  )
}
