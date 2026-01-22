# Elco Development - Next.js Website

Modern, AI-powered website for Elco Development featuring automated blog generation, lead capture, and portfolio showcase.

## 🚀 Features

- ✨ **Modern Design System** - Fresh brand identity with custom UI components
- 🤖 **AI Blog Generation** - Daily automated blog posts using OpenAI GPT-4
- 📊 **Supabase Backend** - PostgreSQL database for content and leads
- 📱 **Responsive Design** - Mobile-first, works beautifully on all devices
- ⚡ **Next.js 14 App Router** - Server Components, ISR, and optimal performance
- 🎯 **Lead Generation** - Enhanced contact forms with validation
- 📈 **SEO Optimized** - Metadata, structured data, sitemaps
- 🔐 **Secure** - Row-level security in Supabase

## 📋 Prerequisites

- Node.js 18+ installed
- Supabase account (free tier works)
- OpenAI API key (for blog generation)
- Resend API key (optional, for email notifications)

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
npm install -D tsx
```

### 2. Configure Environment Variables

The `.env.local` file has been created with your Supabase credentials. You need to add:

1. **Supabase Service Role Key**:
   - Go to: https://supabase.com/dashboard/project/orxxiidttuhasyjoahik/settings/api
   - Copy the `service_role` key (secret)
   - Replace `your_service_role_key_here` in `.env.local`

2. **OpenAI API Key**:
   - Get from: https://platform.openai.com/api-keys
   - Replace `your_openai_api_key_here`

3. **Cron Secret** (generate a random string):
   ```bash
   # Generate a random secret
   openssl rand -base64 32
   ```
   - Replace `your_cron_secret_here`

4. **Resend API Key** (optional, for email notifications):
   - Get from: https://resend.com/api-keys
   - Replace `your_resend_api_key_here`

### 3. Set Up Supabase Database

#### Option A: Using Supabase Dashboard (Recommended)

1. Go to your Supabase SQL Editor:
   ```
   https://supabase.com/dashboard/project/orxxiidttuhasyjoahik/sql
   ```

2. Copy the entire content from `supabase/schema.sql`

3. Paste and execute in the SQL Editor

4. Create Storage buckets:
   - Go to Storage → Create bucket
   - Create 3 buckets: `portfolio-images`, `blog-images`, `team-photos`
   - Make them public (for images)

#### Option B: Using Supabase CLI

```bash
# Install Supabase CLI
npm install -g supabase

# Link to your project
supabase link --project-ref orxxiidttuhasyjoahik

# Push the schema
supabase db push
```

### 4. Migrate Existing Content

Once the database is set up, run the migration script:

```bash
npm run migrate
```

This will populate your database with:
- 6 portfolio projects
- 10+ testimonials
- 5 team members

### 5. Upload Images to Supabase Storage

You need to upload images from the old site to Supabase Storage:

1. **Team Photos**: Upload to `team-photos` bucket
   - Austin, Ashley, Carter, Devin, Joey photos

2. **Portfolio Images**: Upload to `portfolio-images` bucket
   - Project screenshots from `public/portfolio/`

3. Update database with image URLs:
   ```sql
   -- Example: Update team member photo
   UPDATE team_members 
   SET image_url = 'https://[project-ref].supabase.co/storage/v1/object/public/team-photos/austin.png'
   WHERE name = 'Austin Hunter';
   ```

### 6. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
/
├── app/
│   ├── (marketing)/         # Marketing pages group
│   │   ├── page.tsx        # Home
│   │   ├── about/
│   │   ├── portfolio/
│   │   └── rescue/         # Software Rescue service page
│   ├── blog/
│   │   ├── page.tsx        # Blog listing
│   │   └── [slug]/         # Individual blog post
│   ├── api/
│   │   ├── contact/        # Contact form API
│   │   └── cron/           # Cron job for blog generation
│   └── layout.tsx
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── sections/           # Homepage sections
│   ├── navigation.tsx
│   └── footer.tsx
├── lib/
│   ├── supabase/          # Supabase clients
│   ├── ai/                # OpenAI blog generation
│   ├── types/             # TypeScript types
│   └── utils.ts
├── scripts/
│   ├── setup-database.ts  # Database setup helper
│   └── migrate-content.ts # Content migration
└── supabase/
    └── schema.sql         # Database schema
```

## 🤖 AI Blog Generation

### How It Works

1. **Cron Job** runs daily at 6 AM EST (configured in `vercel.json`)
2. **Topic Selection** uses weighted categories (Technical 30%, Industry 25%, Case Studies 20%, etc.)
3. **Content Generation** via OpenAI GPT-4 (1200-1500 words)
4. **Draft Storage** posts are saved as drafts in Supabase
5. **Manual Review** you review and publish via Supabase dashboard

### Manual Blog Generation

To test blog generation locally:

```bash
# Create a test API route caller
curl -X GET http://localhost:3000/api/cron/generate-blog \
  -H "Authorization: Bearer YOUR_CRON_SECRET"
```

### Publishing Drafts

1. Go to Supabase dashboard → Table Editor → blog_posts
2. Find draft posts (status = 'draft')
3. Review content
4. Update status to 'published' and set published_at timestamp

## 📧 Contact Form & Leads

Leads are stored in Supabase `leads` table. To view:

1. Go to Supabase → Table Editor → leads
2. View all incoming leads with status tracking

### Lead Statuses
- `new` - Just submitted
- `contacted` - You've reached out
- `qualified` - Potential client
- `converted` - Became a client
- `lost` - Didn't convert

## 🚀 Deployment

### Deploy to Vercel

1. Push code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial Next.js rebuild"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. Import to Vercel:
   - Go to vercel.com
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. Configure Environment Variables in Vercel:
   - Add all variables from `.env.local`
   - The cron job will automatically be configured from `vercel.json`

4. Deploy!

### Custom Domain

1. Vercel Dashboard → Your Project → Settings → Domains
2. Add `elcodev.com`
3. Follow DNS configuration instructions

## 📊 What's Built

### ✅ Completed
- [x] Next.js 14 project with TypeScript & Tailwind
- [x] Modern design system with UI components
- [x] Supabase database schema
- [x] Content migration scripts
- [x] AI blog generation system
- [x] Cron job configuration
- [x] Homepage with all sections
- [x] Contact form API
- [x] Navigation & Footer
- [x] Apollo tracking integration

### 🚧 To Complete
- [ ] Run database schema in Supabase
- [ ] Run content migration
- [ ] Upload images to Supabase Storage
- [ ] Add service role & OpenAI keys to `.env.local`
- [ ] Create About page
- [ ] Create Portfolio page (with Supabase data)
- [ ] Create Software Rescue page
- [ ] Create Blog pages (listing & individual post)
- [ ] Add email notifications (Resend integration)
- [ ] Test blog generation
- [ ] Deploy to Vercel
- [ ] Configure custom domain

## 🔧 Common Tasks

### Generate a Blog Post Manually
```bash
# Will add a script for this
npm run generate-blog
```

### View Leads
```bash
# Direct Supabase dashboard:
# https://supabase.com/dashboard/project/orxxiidttuhasyjoahik/editor
```

### Update Team Photos
```bash
# Upload to Supabase Storage, then update URLs in database
```

## 📝 Next Steps

1. **Complete Environment Setup**
   - Add missing API keys to `.env.local`
   - Test Supabase connection

2. **Set Up Database**
   - Run schema SQL in Supabase
   - Run migration script
   - Upload images

3. **Build Remaining Pages**
   - About page
   - Portfolio page
   - Software Rescue page
   - Blog listing & post pages

4. **Test Everything**
   - Contact form submission
   - Blog generation
   - All pages render correctly

5. **Deploy**
   - Push to GitHub
   - Deploy to Vercel
   - Configure domain

## 🆘 Troubleshooting

### Database Connection Issues
- Verify Supabase URL and keys in `.env.local`
- Check RLS policies are enabled
- Ensure schema is executed in Supabase

### Blog Generation Fails
- Check OpenAI API key is valid
- Verify you have API credits
- Check Next.js logs for errors

### Contact Form Not Working
- Verify Supabase service role key
- Check network tab for API errors
- Look at Vercel/Next.js logs

## 📞 Support

For questions or issues:
- Email: austin@elcodev.com
- Phone: (615) 587-9346

---

Built with ❤️ by Elco Development
