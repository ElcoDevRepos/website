export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message, phone } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Get client IP and user agent
    const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const userAgent = req.headers['user-agent'] || 'Unknown';

    // Prepare email content
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>New Contact Form Submission</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #f4f4f4; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #555; }
          .value { background: #f9f9f9; padding: 10px; border-radius: 3px; margin-top: 5px; }
          .meta { background: #e8f4f8; padding: 15px; border-radius: 5px; margin-top: 20px; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>🎯 New Contact Form Submission</h2>
            <p><strong>From:</strong> ELCO Development Studio Website</p>
          </div>
          
          <div class="field">
            <div class="label">👤 Name:</div>
            <div class="value">${name}</div>
          </div>
          
          <div class="field">
            <div class="label">📧 Email:</div>
            <div class="value">${email}</div>
          </div>
          
          ${phone ? `
          <div class="field">
            <div class="label">📞 Phone:</div>
            <div class="value">${phone}</div>
          </div>
          ` : ''}
          
          <div class="field">
            <div class="label">💬 Message:</div>
            <div class="value">${message.replace(/\n/g, '<br>')}</div>
          </div>
          
          <div class="meta">
            <p><strong>📅 Submitted:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>🌐 IP Address:</strong> ${clientIP}</p>
            <p><strong>🔍 User Agent:</strong> ${userAgent}</p>
            <p><strong>🚀 Source:</strong> ELCO Development Studio Contact Form</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const textContent = `
New Contact Form Submission
==========================

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
Message: ${message}

Submitted: ${new Date().toLocaleString()}
IP Address: ${clientIP}
User Agent: ${userAgent}
Source: ELCO Development Studio Contact Form
    `;

    // Send email using Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer re_C23qGfX2_FhLZH7PuqwZCoNmRmAmUC5LE`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'ELCO Development Studio <noreply@elcodevstudio.com>',
        to: ['contact@elcodevstudio.com', 'austinhunter@elcodevstudio.com'],
        subject: `🎯 New Contact Form Submission from ${name}`,
        html: htmlContent,
        text: textContent,
        reply_to: email,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Resend API error:', errorData);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    const result = await response.json();
    console.log('Email sent successfully:', result);

    return res.status(200).json({ 
      success: true, 
      message: 'Thank you! Your message has been sent successfully.' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      error: 'An error occurred while sending your message. Please try again.' 
    });
  }
} 