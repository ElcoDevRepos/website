import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer re_C23qGfX2_FhLZH7PuqwZCoNmRmAmUC5LE`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'ELCO Development Studio <noreply@elcodev.com>',
        to: ['austin@elcodev.com'],
        subject: `New Contact from ${name} - ${company || 'No Company'}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9;">
            <div style="background: #fff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #333; margin-bottom: 20px; border-bottom: 3px solid #3B82F6; padding-bottom: 10px;">
                🚀 New Contact Form Submission 🚀
              </h2>
              
              <div style="margin-bottom: 20px;">
                <h3 style="color: #3B82F6; margin-bottom: 10px;">Contact Information:</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #3B82F6;">${email}</a></p>
                <p><strong>Company:</strong> ${company || 'Not specified'}</p>
              </div>
              
              <div style="margin-bottom: 20px;">
                <h3 style="color: #3B82F6; margin-bottom: 10px;">Message:</h3>
                <div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #3B82F6; border-radius: 4px;">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
              
              <div style="background: #e8f4fd; padding: 15px; border-radius: 5px; margin-top: 20px;">
                <p style="margin: 0; color: #666; font-size: 14px;">
                  <strong>📧 Sent from:</strong> ELCO Development Studio website<br>
                  <strong>⏰ Timestamp:</strong> ${new Date().toLocaleString()}<br>
                  <strong>🌐 Website:</strong> <a href="https://elcodev.com" style="color: #3B82F6;">elcodev.com</a><br>
                  <strong>👤 User Agent:</strong> ${request.headers.get('user-agent') || 'Unknown'}<br>
                  <strong>📍 IP Address:</strong> ${request.headers.get('x-forwarded-for') || request.ip || 'Unknown'}
                </p>
              </div>
            </div>
          </div>
        `,
        text: `
New Contact Form Submission

Contact Information:
- Name: ${name}
- Email: ${email}
- Company: ${company || 'Not specified'}

Message:
${message}

---
Sent from ELCO Development Studio website
Timestamp: ${new Date().toLocaleString()}
Website: elcodev.com
User Agent: ${request.headers.get('user-agent') || 'Unknown'}
IP Address: ${request.headers.get('x-forwarded-for') || request.ip || 'Unknown'}
        `
      }),
    });

    if (resendResponse.ok) {
      const result = await resendResponse.json();
      console.log('Email sent successfully via Resend:', result);
      
      return NextResponse.json(
        { 
          success: true, 
          message: 'Message sent successfully!' 
        },
        { status: 200 }
      );
    } else {
      const errorData = await resendResponse.json();
      console.error('Resend API error:', errorData);
      
      return NextResponse.json(
        { 
          error: `Failed to send email: ${errorData.message || 'Unknown error'}` 
        },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to send message. Please try again or email us directly.' 
      },
      { status: 500 }
    );
  }
} 