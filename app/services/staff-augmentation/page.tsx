import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Users, ArrowRight, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "Staff Augmentation | Elco Dev",
  description: "Strengthen your team with experienced developers who integrate seamlessly with your workflow.",
}

export default function StaffAugmentationPage() {
  const benefits = [
    "Scale your team up or down as needed",
    "Access to specialized skill sets",
    "No recruitment or onboarding overhead",
    "Seamless integration with your workflow",
    "Flexible engagement models",
    "Ongoing support and communication",
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-green-50 via-emerald-50 to-white">
        <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-green-600">Staff Augmentation</Badge>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                Expert Developers<br />For Your Team
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Strengthen your team with experienced developers who integrate seamlessly with your existing workflow.
              </p>
              <div className="space-y-3 mb-8">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600">
                <a href="https://app.apollo.io/#/meet/austin_hunter_d4d" target="_blank" rel="noopener noreferrer">
                  Find Your Developer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80"
                alt="Staff Augmentation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
