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

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <ProblemSolution />
      <Benefits />
      <ServicesOverview />
      <ServicesPricing />
      <Cases />
      <Testimonials />
      <FAQ />
      <CTASection />
      <ContactForm />
    </div>
  )
}
