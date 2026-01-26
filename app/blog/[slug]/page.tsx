import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { createClient } from "@/lib/supabase/server"
import { supabaseAdmin } from "@/lib/supabase/admin"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MarkdownContent } from "@/components/markdown-content"
import { formatDate } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const supabase = await createClient()
  
  const { data: post } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.seo_title || post.title,
    description: post.seo_description || post.excerpt,
    keywords: post.tags?.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt || undefined,
      type: 'article',
      publishedTime: post.published_at || undefined,
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const supabase = await createClient()
  
  // Fetch the blog post
  const { data: post } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  if (!post) {
    notFound()
  }

  // Fetch related posts
  const { data: relatedPosts } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('status', 'published')
    .eq('category', post.category)
    .neq('id', post.id)
    .limit(3)

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <article className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-600 hover:text-primary-600 mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          {/* Category & Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {post.category && <Badge>{post.category}</Badge>}
            {post.tags?.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline">{tag}</Badge>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{formatDate(post.published_at!)}</span>
            </div>
            <button className="flex items-center hover:text-primary-600 transition-colors ml-auto">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </button>
          </div>

          {/* Featured Image */}
          {post.featured_image_url && (
            <div className="relative w-full h-96 rounded-2xl overflow-hidden mb-12 shadow-2xl">
              <Image
                src={post.featured_image_url}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Excerpt */}
          {post.excerpt && (
            <div className="text-xl text-gray-700 leading-relaxed mb-12 p-6 bg-gray-50 rounded-xl border-l-4 border-primary-500">
              {post.excerpt}
            </div>
          )}

          {/* Content */}
          <MarkdownContent content={post.content} />

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-xl text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Need Help With Your Project?</h3>
            <p className="text-gray-600 mb-6">
              Whether you're building from scratch or rescuing an existing project, we're here to help.
            </p>
            <Button asChild size="lg">
              <Link href="/#contact">Get Started Today</Link>
            </Button>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mb-12">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">TAGS:</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((related) => (
                <Link
                  key={related.id}
                  href={`/blog/${related.slug}`}
                  className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 bg-gradient-to-br from-primary-400 to-accent-400" />
                  <div className="p-6">
                    {related.category && (
                      <Badge variant="secondary" className="mb-3">{related.category}</Badge>
                    )}
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {related.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {related.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}

export const revalidate = 3600 // Revalidate every hour

// Generate static params for published posts
export async function generateStaticParams() {
  // Use admin client since this runs at build time (no request context)
  const { data: posts } = await supabaseAdmin
    .from('blog_posts')
    .select('slug')
    .eq('status', 'published')
    .limit(100)

  if (!posts) return []

  return posts.map((post) => ({
    slug: post.slug,
  }))
}
