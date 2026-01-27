import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { createClient } from "@/lib/supabase/server"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, Home, Users, ArrowRight } from "lucide-react"

export const metadata = {
  title: "About Us | Elco Development",
  description: "Family-owned software development agency bringing small-town values to the digital world",
}

export default async function AboutPage() {
  const supabase = await createClient()
  
  // Fetch team members
  const { data: teamMembers } = await supabase
    .from('team_members')
    .select('*')
    .eq('active', true)
    .order('order_index')

  const values = [
    {
      icon: Heart,
      title: "Family-First Approach",
      description: "As a family-owned business, we understand the importance of trust and treating every client like they're part of our extended family.",
    },
    {
      icon: Home,
      title: "Small-Town Values",
      description: "We bring small-town hospitality to the digital world, ensuring personal attention and genuine care for every project we undertake.",
    },
    {
      icon: Users,
      title: "Equal Partnership",
      description: "Whether you're a startup or an established business, you'll receive the same dedicated attention and exceptional service from our team.",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl font-bold mb-6">More Than Just an Agency</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're a family-owned business bringing small-town values and personal attention to every digital project we touch.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <Card key={value.title} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The faces behind your next project - a close-knit team that treats every client's vision as our own.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            {teamMembers?.map((member) => (
              <Card key={member.id} className="text-center hover:shadow-lg transition-shadow group">
                <div className="overflow-hidden">
                  {member.image_url ? (
                    <img
                      src={member.image_url}
                      alt={member.name}
                      className="w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full aspect-square bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">
                        {member.name.split(' ').map((n: string) => n[0]).join('')}
                      </span>
                    </div>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-sm text-primary-600 font-medium">{member.role}</p>
                  {member.bio && (
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">{member.bio}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl mb-8 text-primary-50">
            You'll be treated like family every step of the way.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/#contact" className="group">
              Start a Conversation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
