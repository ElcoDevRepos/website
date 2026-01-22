/**
 * Content Migration Script
 * Migrates existing portfolio, testimonials, and team data to Supabase
 * Usage: npx tsx scripts/migrate-content.ts
 */

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://orxxiidttuhasyjoahik.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9yeHhpaWR0dHVoYXN5am9haGlrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2OTA5MDkxNywiZXhwIjoyMDg0NjY2OTE3fQ.U5RtHKkknAeo9lMJL8Pg85_pii5KMjavruL-PAO_fj8"
console.log(process.env);
if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

// Portfolio projects from current site
const portfolioProjects = [
  {
    title: "Penalty Verdict",
    slug: "penalty-verdict",
    description: "Mobile app for NFL football fans and analysts to track penalties and game incidents. Features real-time data scraping and comprehensive game analytics.",
    technologies: ["Ionic", "Capacitor", "Node.js", "Firebase"],
    client: "Penalty Verdict",
    year: "2022",
    category: "Mobile App",
    scope: "Full-stack Development",
    link: "https://penaltyverdict.com",
    featured: true,
  },
  {
    title: "Canvenient",
    slug: "canvenient",
    description: "SaaS platform for apartment communities to manage valet trash services, featuring real-time service tracking and resident management.",
    technologies: ["Angular", "Firebase", "TypeScript", "Cloud Functions"],
    client: "Canvenient",
    year: "2021",
    category: "Web Application",
    scope: "Frontend & Backend",
    link: "https://canvenient.com",
    featured: true,
  },
  {
    title: "CCS Trash",
    slug: "ccs-trash",
    description: "Comprehensive valet trash management solution with route optimization, service verification, and customer portal for multi-family properties.",
    technologies: ["Flutter", "Next.js", "Firebase", "Google Maps API"],
    client: "CCS",
    year: "2022",
    category: "Mobile App",
    scope: "Full-stack Development",
    link: "https://go-ccs.com",
    featured: false,
  },
  {
    title: "LaurelCRM",
    slug: "laurel-crm",
    description: "Comprehensive internal CRM solution with advanced customer relationship management and analytics capabilities.",
    technologies: ["Angular", "TypeScript", "Material UI", "RESTful APIs"],
    client: "Laurel Medical",
    year: "2023",
    category: "Web Application",
    scope: "Frontend Development",
    link: "https://laurelcrm.com",
    featured: true,
  },
  {
    title: "MD Virtual Care",
    slug: "md-virtual-care",
    description: "Healthcare ecosystem with mobile apps and web portal, featuring secure patient data management and real-time communication.",
    technologies: ["Ionic", "Capacitor", "Next.js", "Node.js"],
    client: "MD Virtual Care",
    year: "2021",
    category: "Healthcare",
    scope: "Full-stack Development",
    link: "https://mdvirtualcare.com",
    featured: false,
  },
  {
    title: "SynctUp",
    slug: "synctup",
    description: "Contact synchronization and sharing platform enabling seamless contact management across devices with real-time updates.",
    technologies: ["Ionic", "Capacitor", "MongoDB", "Node.js"],
    client: "SynctUp",
    year: "2020",
    category: "Web Application",
    scope: "Full-stack Development",
    link: "https://app.synctup.com",
    featured: false,
  },
]

// Testimonials from current site
const testimonials = [
  {
    quote: "Austin is fantastic. I was really impressed with how well he handled everything, from the quality of his work to his problem-solving skills. His communication is spot on, he always keeps me informed and makes everything easy to understand.",
    author: "Jason Robinson",
    company: "Renew Music",
    rating: 5,
    featured: false,
  },
  {
    quote: "Austin managed front end, back end, and database development including integrating third party applications to execute payment processing, reporting, etc. I consider myself extremely lucky to have found Austin.",
    author: "Justin Garabed",
    company: "Bevvo",
    rating: 5,
    featured: true,
  },
  {
    quote: "These guys know code! I've had the opportunity to work with multiple companies over the years and Elco Dev is hands down the best. They treat every project as if it's their own no matter how big or small.",
    author: "Mike Nelson",
    company: "Ladder Suite",
    rating: 5,
    featured: true,
  },
  {
    quote: "My boss found Elco & Austin through a freelancing website. Austin has been building this from the ground up and we have been nothing but pleased with the progress. Austin is also available to talk if there is an issue or if we have a new idea.",
    author: "Marla Nesbella",
    company: "Laurel Medical",
    rating: 5,
    featured: false,
  },
  {
    quote: "As an entrepreneur without much money trying to get a minimum viable product into existence, Elco Development has been the perfect partner. Austin built the entire project for less than a big firm would have charged for a few planning meetings.",
    author: "Charles Lyons",
    company: "Daily Dashboard",
    rating: 5,
    featured: true,
  },
]

// Team members
const teamMembers = [
  {
    name: "Austin Hunter",
    role: "Founder, Lead Developer",
    bio: "Full-stack developer with expertise in React, Next.js, Node.js, and mobile development. Passionate about building quality software that drives business growth.",
    order_index: 1,
    active: true,
  },
  {
    name: "Ashley Hunter",
    role: "Founder, Office Manager",
    bio: "Manages operations and client relationships, ensuring smooth project delivery and client satisfaction.",
    order_index: 2,
    active: true,
  },
  {
    name: "Carter Williams",
    role: "Lead Developer",
    bio: "Expert in full-stack development with a focus on building scalable web applications.",
    order_index: 3,
    active: true,
  },
  {
    name: "Devin Kelly",
    role: "Full Stack Developer",
    bio: "Specializes in React, Node.js, and database design for modern web applications.",
    order_index: 4,
    active: true,
  },
  {
    name: "Joey Fenoglio",
    role: "Frontend Developer",
    bio: "Frontend specialist focused on creating beautiful, responsive user interfaces.",
    order_index: 5,
    active: true,
  },
]

async function migrateContent() {
  console.log('🚀 Starting content migration...\n')

  try {
    // Migrate Portfolio Projects
    console.log('📁 Migrating portfolio projects...')
    const { data: portfolioData, error: portfolioError } = await supabase
      .from('portfolio_projects')
      .insert(portfolioProjects)
      .select()

    if (portfolioError) {
      console.error('❌ Portfolio migration error:', portfolioError)
    } else {
      console.log(`✅ Migrated ${portfolioData.length} portfolio projects`)
    }

    // Migrate Testimonials
    console.log('\n💬 Migrating testimonials...')
    const { data: testimonialsData, error: testimonialsError } = await supabase
      .from('testimonials')
      .insert(testimonials)
      .select()

    if (testimonialsError) {
      console.error('❌ Testimonials migration error:', testimonialsError)
    } else {
      console.log(`✅ Migrated ${testimonialsData.length} testimonials`)
    }

    // Migrate Team Members
    console.log('\n👥 Migrating team members...')
    const { data: teamData, error: teamError } = await supabase
      .from('team_members')
      .insert(teamMembers)
      .select()

    if (teamError) {
      console.error('❌ Team members migration error:', teamError)
    } else {
      console.log(`✅ Migrated ${teamData.length} team members`)
    }

    console.log('\n✨ Content migration completed!')
    console.log('\n💡 Next steps:')
    console.log('  1. Upload team photos to Supabase Storage (team-photos bucket)')
    console.log('  2. Upload portfolio images to Supabase Storage (portfolio-images bucket)')
    console.log('  3. Update image_url fields in the database\n')

  } catch (error) {
    console.error('❌ Migration failed:', error)
    process.exit(1)
  }
}

migrateContent()
