import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase/admin'
import { generateCompleteBlogPost } from '@/lib/ai/blog-generator'

export const runtime = 'nodejs'
export const maxDuration = 60 // 60 seconds max

export async function GET(request: NextRequest) {
  // Verify cron secret
  // const authHeader = request.headers.get('authorization')
  // const cronSecret = process.env.CRON_SECRET

  // if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
  //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  // }

  try {
    console.log('🚀 Starting automated blog generation...')

    // Generate blog post using AI
    const blogPost = await generateCompleteBlogPost()

    // Check if slug already exists
    const { data: existing } = await supabaseAdmin
      .from('blog_posts')
      .select('id')
      .eq('slug', blogPost.slug)
      .single()

    if (existing) {
      // Append timestamp to make slug unique
      blogPost.slug = `${blogPost.slug}-${Date.now()}`
    }

    // Insert into database as draft
    const { data, error } = await supabaseAdmin
      .from('blog_posts')
      .insert([
        {
          title: blogPost.title,
          slug: blogPost.slug,
          excerpt: blogPost.excerpt,
          content: blogPost.content,
          author: blogPost.author,
          category: blogPost.category,
          tags: blogPost.tags,
          seo_title: blogPost.seoTitle,
          seo_description: blogPost.seoDescription,
          featured_image_url: blogPost.featuredImage,
          published_at: new Date().toISOString(),
          status: 'published',
        },
      ])
      .select()
      .single()

    if (error) {
      console.error('❌ Database error:', error)
      return NextResponse.json(
        { error: 'Failed to save blog post', details: error.message },
        { status: 500 }
      )
    }

    console.log('✅ Blog post generated and saved:', data.id)

    // TODO: Send notification email to admin
    // You can use Resend here to notify austin@elcodev.com

    return NextResponse.json(
      {
        success: true,
        post: {
          id: data.id,
          title: data.title,
          slug: data.slug,
          status: data.status,
        },
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('❌ Blog generation failed:', error)
    return NextResponse.json(
      { error: 'Blog generation failed', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
