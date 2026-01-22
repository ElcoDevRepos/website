import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase/admin'
import { z } from 'zod'

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  phone: z.string().optional(),
  projectType: z.string().optional(),
  budgetRange: z.string().optional(),
  timeline: z.string().optional(),
  source: z.string().default('website'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    const validatedData = contactSchema.parse(body)

    // Store lead in Supabase
    const { data, error } = await supabaseAdmin
      .from('leads')
      .insert([
        {
          name: validatedData.name,
          email: validatedData.email,
          company: validatedData.company,
          message: validatedData.message,
          phone: validatedData.phone,
          project_type: validatedData.projectType,
          budget_range: validatedData.budgetRange,
          timeline: validatedData.timeline,
          source: validatedData.source,
          status: 'new',
        },
      ])
      .select()
      .single()

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { error: 'Failed to save contact information' },
        { status: 500 }
      )
    }

    // TODO: Send notification emails
    // 1. Email to admin (austin@elcodev.com)
    // 2. Auto-response email to lead
    // You can use Resend here

    console.log('✅ New lead saved:', data.id)

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for contacting us! We\'ll get back to you soon.',
      },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }

    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
