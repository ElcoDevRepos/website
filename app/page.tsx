import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { PortfolioPreview } from "@/components/sections/portfolio-preview"
import { Testimonials } from "@/components/sections/testimonials"
import { ContactCTA } from "@/components/sections/contact-cta"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <PortfolioPreview />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  )
}
