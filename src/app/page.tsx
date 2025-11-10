import { Hero } from "@/components/site/Hero"
import { ProblemSolution } from "@/components/site/ProblemSolution"
import { ServicesPricing } from "@/components/site/ServicesPricing"
import { FAQ } from "@/components/site/FAQ"
import { ContactForm } from "@/components/site/ContactForm"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ProblemSolution />
      <ServicesPricing />
      <FAQ />
      <ContactForm />
    </div>
  )
}
