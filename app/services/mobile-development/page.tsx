import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Smartphone, ArrowRight, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "Mobile App Development | Elco Development",
  description: "Native and cross-platform mobile applications for iOS and Android. Seamless user experiences across all devices.",
}

export default function MobileDevelopmentPage() {
  const platforms = ["iOS", "Android", "React Native", "Ionic", "Capacitor", "Flutter"]
  
  const features = [
    "Cross-platform compatibility",
    "Native performance",
    "Offline functionality",
    "Push notifications",
    "In-app payments",
    "App Store & Play Store launch",
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
        <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-600">Mobile Development</Badge>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                Mobile App<br />Development
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Native and cross-platform mobile applications that provide seamless user experiences across all devices.
              </p>
              <div className="space-y-3 mb-8">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600">
                <a href="https://app.apollo.io/#/meet/austin_hunter_d4d" target="_blank" rel="noopener noreferrer">
                  Discuss Your App Idea
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&q=80"
                alt="Mobile Development"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12 text-center">
          <h2 className="text-4xl font-bold mb-12">Platforms We Support</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {platforms.map((platform: string) => (
              <Badge key={platform} variant="secondary" className="text-base px-6 py-3">
                {platform}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
