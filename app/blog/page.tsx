import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { createClient } from "@/lib/supabase/server"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import { Calendar, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Blog | Elco Dev",
  description: "Insights on custom software development, MVP creation, and software rescue",
}

export default async function BlogPage() {
  const supabase = await createClient()
  
  // Fetch published blog posts
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('status', 'published')
    .not('published_at', 'is', null)
    .order('published_at', { ascending: false })
    .limit(50)

  // Get unique categories
  const categories = posts
    ? [...new Set(posts.map(p => p.category).filter(Boolean))]
    : []

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary-50 to-white">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4">Insights & Tutorials</Badge>
          <h1 className="text-5xl font-bold mb-6">Development Blog</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Expert insights on custom software development, MVP strategies, and lessons learned from real projects
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          {posts && posts.length > 0 ? (
            <>
              {/* Featured Post */}
              {posts[0] && (
                <Card className="mb-12 overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/2 h-64 md:h-auto relative">
                      {posts[0].featured_image_url ? (
                        <Image
                          src={posts[0].featured_image_url}
                          alt={posts[0].title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary-500 to-accent-500" />
                      )}
                    </div>
                    <CardContent className="md:w-1/2 p-8">
                      {posts[0].category && (
                        <Badge className="mb-4">{posts[0].category}</Badge>
                      )}
                      <h2 className="text-3xl font-bold mb-4 leading-tight">
                        <Link href={`/blog/${posts[0].slug}`} className="hover:text-primary-600 transition-colors">
                          {posts[0].title}
                        </Link>
                      </h2>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {posts[0].excerpt || posts[0].content.substring(0, 200) + '...'}
                      </p>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <Calendar className="h-4 w-4 mr-2" />
                        {formatDate(posts[0].published_at!)}
                        <span className="mx-2">•</span>
                        <span>{posts[0].author}</span>
                      </div>
                      <Link
                        href={`/blog/${posts[0].slug}`}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </div>
                </Card>
              )}

              {/* Recent Posts Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.slice(1).map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                    <div className="relative h-48 overflow-hidden">
                      {post.featured_image_url ? (
                        <Image
                          src={post.featured_image_url}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary-400 to-accent-400" />
                      )}
                    </div>
                    <CardContent className="p-6">
                      {post.category && (
                        <Badge variant="secondary" className="mb-3">{post.category}</Badge>
                      )}
                      <h3 className="text-xl font-bold mb-2 leading-tight">
                        <Link href={`/blog/${post.slug}`} className="group-hover:text-primary-600 transition-colors line-clamp-2">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt || post.content.substring(0, 150) + '...'}
                      </p>
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(post.published_at!)}
                      </div>
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {post.tags.slice(0, 3).map((tag: string) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg mb-4">
                No blog posts yet. Blog posts will appear here once generated or published.
              </p>
              <p className="text-sm text-gray-500">
                The AI will generate daily blog posts automatically via cron job.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

export const revalidate = 3600 // Revalidate every hour
