import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Code2, ArrowRight, CheckCircle2, Zap, Shield, Layers } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "Custom Web Development | Elco Dev",
  description: "Modern, scalable web applications built with cutting-edge technologies. From enterprise solutions to startup MVPs.",
}

export default function WebDevelopmentPage() {
  const technologies = [
    "Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "MongoDB", 
    "GraphQL", "REST APIs", "Tailwind CSS", "AWS", "Vercel", "Docker"
  ]

  const features = [
    { icon: Zap, title: "Fast Performance", description: "Optimized for speed with modern frameworks and best practices" },
    { icon: Shield, title: "Secure & Reliable", description: "Built with security in mind, following industry standards" },
    { icon: Layers, title: "Scalable Architecture", description: "Clean code that grows with your business needs" },
  ]

  const process = [
    { step: "1", title: "Discovery", description: "We understand your requirements and business goals" },
    { step: "2", title: "Design", description: "Create wireframes and architecture plans" },
    { step: "3", title: "Development", description: "Build your application with modern tech stack" },
    { step: "4", title: "Launch", description: "Deploy, test, and go live with your new web app" },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
        <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-600">Web Development</Badge>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                Custom Web<br />Development
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Modern, scalable web applications built with cutting-edge technologies. From enterprise solutions to startup MVPs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600">
                  <a href="https://app.apollo.io/#/meet/austin_hunter_d4d" target="_blank" rel="noopener noreferrer">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80"
                alt="Web Development"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Our Web Development</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <Card key={i} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <h2 className="text-4xl font-bold text-center mb-6">Technologies We Use</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We work with modern, proven technologies to build robust web applications
          </p>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {technologies.map((tech: string) => (
              <Badge key={tech} variant="secondary" className="text-sm px-4 py-2">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <h2 className="text-4xl font-bold text-center mb-16">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((phase, i) => (
              <div key={i} className="relative">
                <Card className="text-center h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {phase.step}
                    </div>
                    <h3 className="font-bold mb-2">{phase.title}</h3>
                    <p className="text-sm text-gray-600">{phase.description}</p>
                  </CardContent>
                </Card>
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-6 -right-4 w-8 h-0.5 bg-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Web Application?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a solution that drives your business forward.
          </p>
          <Button asChild size="xl" variant="secondary">
            <a href="https://app.apollo.io/#/meet/austin_hunter_d4d" target="_blank" rel="noopener noreferrer">
              Schedule Free Consultation
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
