import OpenAI from 'openai'
import { slugify } from '../utils'

function getOpenAIClient() {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY environment variable is required')
  }
  return new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  })
}

// Unsplash API for fetching blog images
const UNSPLASH_ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY || 'demo'

async function fetchBlogImage(title: string, category: string): Promise<string> {
  try {
    // Extract keywords for image search
    const searchQuery = `${category.toLowerCase()} software development technology`.replace(/\s+/g, '+')
    
    const response = await fetch(
      `https://api.unsplash.com/photos/random?query=${searchQuery}&orientation=landscape&content_filter=high`,
      {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
        },
      }
    )

    if (response.ok) {
      const data = await response.json()
      return data.urls.regular || data.urls.full
    }
  } catch (error) {
    console.error('Failed to fetch Unsplash image:', error)
  }

  // Fallback to a curated set of tech images
  const fallbackImages = [
    'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop&q=80', // Code on screen
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop&q=80', // Developer workspace
    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800&fit=crop&q=80', // Code close-up
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop&q=80', // Team coding
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=800&fit=crop&q=80', // Startup office
  ]
  
  return fallbackImages[Math.floor(Math.random() * fallbackImages.length)]
}

export interface BlogTopicCategory {
  name: string
  weight: number // percentage weight for topic rotation
  keywords: string[]
}

export const topicCategories: BlogTopicCategory[] = [
  {
    name: 'Technical Tutorials',
    weight: 30,
    keywords: ['React', 'Next.js', 'TypeScript', 'Node.js', 'API design', 'Database optimization'],
  },
  {
    name: 'Industry Insights',
    weight: 25,
    keywords: ['software trends', 'MVP strategy', 'startup tech stack', 'development best practices'],
  },
  {
    name: 'Case Studies',
    weight: 20,
    keywords: ['client success', 'project challenges', 'problem solving', 'development journey'],
  },
  {
    name: 'Software Rescue',
    weight: 15,
    keywords: ['legacy code', 'project recovery', 'tech debt', 'failed projects', 'code refactoring'],
  },
  {
    name: 'Company Updates',
    weight: 10,
    keywords: ['team growth', 'new services', 'technology adoption', 'client partnerships'],
  },
]

export function selectTopicCategory(): BlogTopicCategory {
  const random = Math.random() * 100
  let cumulative = 0

  for (const category of topicCategories) {
    cumulative += category.weight
    if (random <= cumulative) {
      return category
    }
  }

  return topicCategories[0]
}

export async function generateBlogTopic(category: BlogTopicCategory): Promise<string> {
  const openai = getOpenAIClient()
  const prompt = `Generate a compelling, SEO-friendly blog post title for a software development agency blog. 
  
Category: ${category.name}
Keywords to consider: ${category.keywords.join(', ')}

The title should:
- Be engaging and clickable
- Include relevant keywords naturally
- Be between 50-70 characters
- Appeal to entrepreneurs, CTOs, and business owners
- Focus on practical value

Generate only the title, no additional text.`

  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.8,
    max_tokens: 100,
  })

  return response.choices[0].message.content?.trim() || 'Untitled Post'
}

export async function generateBlogContent(title: string, category: BlogTopicCategory): Promise<{
  content: string
  excerpt: string
  seoTitle: string
  seoDescription: string
  tags: string[]
  featuredImage: string
}> {
  const contentPrompt = `Write a comprehensive, professional blog post for a software development agency website.

Title: ${title}
Category: ${category.name}
Target Audience: Entrepreneurs, CTOs, business owners looking for software development services

Requirements:
- Write 1200-1500 words
- Use markdown formatting (headings, lists, code blocks where appropriate)
- Include practical examples and actionable insights
- Maintain a professional but approachable tone
- Focus on providing genuine value
- Include relevant technical details without being overly complex
- Naturally incorporate keywords: custom software development, MVP development, software rescue
- End with a soft call-to-action mentioning Elco Development's services

Structure:
1. Engaging introduction
2. 3-4 main sections with practical insights
3. Real-world examples or scenarios
4. Conclusion with key takeaways
5. Brief mention of how Elco Development can help

Write the complete blog post in markdown format:`

  const excerptPrompt = `Generate a compelling 2-3 sentence excerpt (150-160 characters) for this blog post title: "${title}". Make it engaging and summarize the key value proposition.`

  const seoPrompt = `For the blog post titled "${title}", generate:
1. SEO Title (50-60 characters, keyword-rich)
2. Meta Description (150-160 characters, compelling and keyword-rich)
3. 5 relevant tags (comma-separated)

Format your response as:
SEO_TITLE: [title]
META_DESC: [description]
TAGS: [tag1, tag2, tag3, tag4, tag5]`

  const openai = getOpenAIClient()
  
  // Generate all content in parallel (including image fetch)
  const [contentResponse, excerptResponse, seoResponse, featuredImage] = await Promise.all([
    openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: contentPrompt }],
      temperature: 0.7,
      max_tokens: 2500,
    }),
    openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: excerptPrompt }],
      temperature: 0.7,
      max_tokens: 100,
    }),
    openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: seoPrompt }],
      temperature: 0.6,
      max_tokens: 200,
    }),
    fetchBlogImage(title, category.name),
  ])

  const content = contentResponse.choices[0].message.content?.trim() || ''
  const excerpt = excerptResponse.choices[0].message.content?.trim() || ''
  const seoText = seoResponse.choices[0].message.content?.trim() || ''

  // Parse SEO response
  const seoLines = seoText.split('\n')
  const seoTitle = seoLines.find(l => l.startsWith('SEO_TITLE:'))?.replace('SEO_TITLE:', '').trim() || title
  const seoDescription = seoLines.find(l => l.startsWith('META_DESC:'))?.replace('META_DESC:', '').trim() || excerpt
  const tagsLine = seoLines.find(l => l.startsWith('TAGS:'))?.replace('TAGS:', '').trim() || ''
  const tags = tagsLine.split(',').map(t => t.trim()).filter(Boolean)

  return {
    content,
    excerpt,
    seoTitle,
    seoDescription,
    tags,
    featuredImage,
  }
}

export async function generateCompleteBlogPost() {
  console.log('🤖 Generating blog post...')

  // Select category
  const category = selectTopicCategory()
  console.log(`📂 Selected category: ${category.name}`)

  // Generate topic
  const title = await generateBlogTopic(category)
  console.log(`📝 Generated title: ${title}`)

  // Generate content
  const { content, excerpt, seoTitle, seoDescription, tags, featuredImage } = await generateBlogContent(title, category)
  console.log(`✅ Generated ${content.length} characters of content`)
  console.log(`🖼️ Featured image: ${featuredImage}`)

  // Create slug
  const slug = slugify(title)

  return {
    title,
    slug,
    excerpt,
    content,
    category: category.name,
    tags,
    seoTitle,
    seoDescription,
    featuredImage,
    author: 'Austin Hunter',
    status: 'draft' as const,
  }
}
