import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import type { ApiResponse, ContactFormData } from '@/lib/types'

// Rate limiting store (in production, use Redis or similar)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
  requestResume: z.boolean().optional(),
  honeypot: z.string().max(0),
})

function getClientIP(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0] ||
    request.headers.get('x-real-ip') ||
    'unknown'
  )
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = parseInt(process.env.RATE_LIMIT_MAX || '5')
  const windowMs = 60 * 1000 // 1 minute

  const record = rateLimitStore.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (record.count >= limit) {
    return false
  }

  record.count++
  return true
}

async function sendEmail(data: ContactFormData): Promise<boolean> {
  // In production, integrate with SendGrid, AWS SES, or similar
  // For now, we'll just log the message
  console.log('Contact form submission:', {
    name: data.name,
    email: data.email,
    message: data.message,
    requestResume: data.requestResume,
    timestamp: new Date().toISOString(),
  })

  // Simulate email sending
  // In production, replace with actual email service:
  /*
  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(process.env.EMAIL_API_KEY)
  
  const msg = {
    to: process.env.EMAIL_TO,
    from: process.env.EMAIL_FROM,
    subject: `Portfolio Contact: ${data.name}`,
    text: data.message,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
      ${data.requestResume ? '<p><em>Requested resume</em></p>' : ''}
    `,
  }
  
  await sgMail.send(msg)
  */

  return true
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = getClientIP(request)
    if (!checkRateLimit(ip)) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          error: 'Too many requests. Please try again later.',
        },
        { status: 429 }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validatedData = contactSchema.parse(body)

    // Check honeypot
    if (validatedData.honeypot) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          error: 'Invalid submission.',
        },
        { status: 400 }
      )
    }

    // Send email
    await sendEmail(validatedData as ContactFormData)

    return NextResponse.json<ApiResponse>(
      {
        success: true,
        message: 'Message sent successfully!',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          error: 'Invalid form data. Please check your inputs.',
        },
        { status: 400 }
      )
    }

    return NextResponse.json<ApiResponse>(
      {
        success: false,
        error: 'An error occurred. Please try again later.',
      },
      { status: 500 }
    )
  }
}

// Handle other methods
export async function GET() {
  return NextResponse.json<ApiResponse>(
    {
      success: false,
      error: 'Method not allowed',
    },
    { status: 405 }
  )
}
