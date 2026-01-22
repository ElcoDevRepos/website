import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AlertTriangle, CheckCircle, LifeBuoy, TrendingUp, Clock, Shield } from "lucide-react"

export const metadata = {
  title: "Software Rescue Services | Elco Dev",
  description: "Stuck with an abandoned or failing project? We specialize in rescuing stalled software projects and getting them across the finish line.",
}

export default function RescuePage() {
  const commonScenarios = [
    {
      title: "Abandoned Projects",
      description: "Developer disappeared or stopped responding? We'll pick up where they left off and finish your project.",
      icon: AlertTriangle,
    },
    {
      title: "Technical Debt",
      description: "Code is messy, buggy, or unmaintainable? We'll refactor and modernize your codebase.",
      icon: Shield,
    },
    {
      title: "Stalled Development",
      description: "Project stuck for months with no progress? We'll identify blockers and push it to completion.",
      icon: Clock,
    },
    {
      title: "Failed Launches",
      description: "Attempted to launch but ran into critical issues? We'll fix bugs and get you live.",
      icon: TrendingUp,
    },
  ]

  const rescueProcess = [
    {
      step: "1",
      title: "Assessment",
      description: "We review your codebase, documentation, and project requirements to understand the full scope.",
    },
    {
      step: "2",
      title: "Rescue Plan",
      description: "We create a clear action plan with timeline and costs to get your project back on track.",
    },
    {
      step: "3",
      title: "Execution",
      description: "We fix critical issues, complete missing features, and refactor problematic code.",
    },
    {
      step: "4",
      title: "Launch",
      description: "We get your project across the finish line and provide ongoing support.",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <LifeBuoy className="h-4 w-4" />
              Software Rescue Specialists
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Stuck Project?<br />
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                We'll Rescue It.
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Developer disappeared? Project stalled for months? Code is a mess? We specialize in rescuing abandoned or failing software projects and getting them across the finish line.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                <Link href="#contact">Get a Free Assessment</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#process">How It Works</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Common Scenarios */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Common Rescue Scenarios</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've seen it all and know how to fix it
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {commonScenarios.map((scenario) => {
              const Icon = scenario.icon
              return (
                <Card key={scenario.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-red-600" />
                    </div>
                    <CardTitle>{scenario.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{scenario.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Rescue Process */}
      <section id="process" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Rescue Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven 4-step approach to get your project back on track
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {rescueProcess.map((phase, index) => (
              <div key={phase.step} className="relative">
                <Card className="h-full">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      {phase.step}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                    <p className="text-gray-600 text-sm">{phase.description}</p>
                  </CardContent>
                </Card>
                {index < rescueProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Rescue Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Projects we've brought back from the brink
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                company: "Healthcare SaaS",
                challenge: "6 months behind schedule, original developer stopped responding",
                result: "Completed in 4 weeks, successfully launched",
              },
              {
                company: "E-commerce Platform",
                challenge: "Major bugs preventing launch, unreliable payment processing",
                result: "Fixed all critical issues, launched within deadline",
              },
              {
                company: "Mobile App",
                challenge: "Code quality issues, crashes, poor performance",
                result: "Refactored, optimized, app store approved",
              },
            ].map((story, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2">{story.company}</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-red-600 mb-1">Challenge:</p>
                      <p className="text-sm text-gray-600">{story.challenge}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-green-600 mb-1 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Result:
                      </p>
                      <p className="text-sm text-gray-600">{story.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-red-600 to-orange-600 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <LifeBuoy className="h-16 w-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl font-bold mb-6">
            Let's Rescue Your Project
          </h2>
          <p className="text-xl mb-8 text-red-50">
            Get a free project assessment. No obligation, no pressure—just honest advice on how we can help.
          </p>
          <Button asChild size="xl" variant="secondary">
            <Link href="/#contact">Schedule Free Assessment</Link>
          </Button>
          <p className="mt-6 text-sm text-red-100">
            📞 Or call us directly: (615) 587-9346
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
