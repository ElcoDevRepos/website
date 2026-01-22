export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content: string
  author: string
  published_at: string | null
  category: string | null
  tags: string[] | null
  seo_title: string | null
  seo_description: string | null
  featured_image_url: string | null
  status: 'draft' | 'published'
  created_at: string
  updated_at: string
}

export interface PortfolioProject {
  id: string
  title: string
  slug: string
  description: string
  technologies: string[]
  client: string
  year: string
  category: string
  scope: string | null
  link: string | null
  images: string[] | null
  testimonial_id: string | null
  featured: boolean
  created_at: string
}

export interface Lead {
  id: string
  name: string
  email: string
  company: string | null
  message: string
  phone: string | null
  project_type: string | null
  budget_range: string | null
  timeline: string | null
  source: string
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost'
  created_at: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string | null
  image_url: string | null
  linkedin_url: string | null
  order_index: number | null
  active: boolean
  created_at: string
}

export interface Testimonial {
  id: string
  quote: string
  author: string
  company: string
  rating: number
  featured: boolean
  created_at: string
}
