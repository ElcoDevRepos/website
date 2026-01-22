import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, ArrowRight, Clock, DollarSign, TrendingUp } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "MVP Development | Elco Development - Launch in 14 Days",
  description: "Get your MVP built and launched in just 14 days. Fast, affordable, and built to validate your business idea.",
}

export default function MVPDevelopmentPage() {
  const benefits = [
    { icon: Clock, title: "14-Day Launch", description: "From concept to live product in just 2 weeks" },
    { icon: DollarSign, title: "Fixed Pricing", description: "Starting at $7,000 - transparent, no surprises" },
    { icon: TrendingUp, title: "Market Ready", description: "Fully functional product ready to validate your idea" },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-orange-50 via-yellow-50 to-white">
        <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-600">MVP Development</Badge>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                Launch Your MVP<br />
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  In 14 Days
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get your minimum viable product built and launched quickly. Test your business idea without breaking the bank.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-600 to-red-600">
                <a href="https://app.apollo.io/#/meet/austin_hunter_d4d" target="_blank" rel="noopener noreferrer">
                  Start Your MVP Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&q=80"
                alt="MVP Development"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <h2 className="text-4xl font-bold text-center mb-16">Why Our MVP Service?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <Card key={i} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
