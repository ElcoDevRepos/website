import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { createClient } from "@/lib/supabase/server"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "Portfolio | Elco Dev",
  description: "Real-world applications we've built for clients across various industries",
}

export default async function PortfolioPage() {
  const supabase = await createClient()
  
  // Fetch all portfolio projects
  const { data: projects } = await supabase
    .from('portfolio_projects')
    .select('*')
    .order('created_at', { ascending: false })

  // Stock images for portfolio projects
  const portfolioImages = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80", // Analytics
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&q=80", // Mobile app
    "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&q=80", // Dashboard
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&q=80", // Mobile development
    "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&h=600&fit=crop&q=80", // Healthcare
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&q=80", // Business app
  ]

  // Group by category
  const categories = projects
    ? [...new Set(projects.map(p => p.category))]
    : []

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto text-center max-w-7xl px-6 md:px-8 lg:px-12">
          <Badge className="mb-4">Our Work</Badge>
          <h1 className="text-5xl font-bold mb-6">Project Portfolio</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            A selection of real-world applications we've built for clients across various industries
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
          {projects && projects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-blue-200 group">
                  {/* Project Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.images?.[0] || portfolioImages[index % portfolioImages.length]}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-gray-900 backdrop-blur-sm">{project.category}</Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-white text-xs font-semibold opacity-90">{project.year}</span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech: string) => (
                        <Badge key={tech} variant="outline" className="text-xs border-blue-200 text-blue-700">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs border-blue-200 text-blue-700">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>

                    {project.scope && (
                      <p className="text-sm text-gray-500 mb-4">
                        <strong>Scope:</strong> {project.scope}
                      </p>
                    )}

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm"
                      >
                        View Project
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg mb-6">
                No projects found. Please run the migration script to populate the database.
              </p>
              <code className="bg-gray-100 px-4 py-2 rounded">npm run migrate</code>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto text-center max-w-7xl px-6 md:px-8 lg:px-12">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss your requirements and see how we can help bring your vision to life.
          </p>
          <Button asChild size="lg">
            <Link href="/#contact" className="text-gray-700" >Get Started Today</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export const revalidate = 3600 // Revalidate every hour
