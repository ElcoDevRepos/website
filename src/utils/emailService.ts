// Email service utility for contact form using Resend
// Resend is a modern email API for developers

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export const sendEmail = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    // Use Resend API to send email
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer re_C23qGfX2_FhLZH7PuqwZCoNmRmAmUC5LE`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'ELCO Development Studio <noreply@elcodev.com>',
        to: ['austin@elcodev.com'],
        subject: `New Contact from ${formData.name} - ${formData.company || 'No Company'}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9;">
            <div style="background: #fff; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h2 style="color: #333; margin-bottom: 20px; border-bottom: 3px solid #3B82F6; padding-bottom: 10px;">
                🚀 New Contact Form Submission 🚀
              </h2>
              
              <div style="margin-bottom: 20px;">
                <h3 style="color: #3B82F6; margin-bottom: 10px;">Contact Information:</h3>
                <p><strong>Name:</strong> ${formData.name}</p>
                <p><strong>Email:</strong> <a href="mailto:${formData.email}" style="color: #3B82F6;">${formData.email}</a></p>
                <p><strong>Company:</strong> ${formData.company || 'Not specified'}</p>
              </div>
              
              <div style="margin-bottom: 20px;">
                <h3 style="color: #3B82F6; margin-bottom: 10px;">Message:</h3>
                <div style="background: #f8f9fa; padding: 15px; border-left: 4px solid #3B82F6; border-radius: 4px;">
                  ${formData.message.replace(/\n/g, '<br>')}
                </div>
              </div>
              
              <div style="background: #e8f4fd; padding: 15px; border-radius: 5px; margin-top: 20px;">
                <p style="margin: 0; color: #666; font-size: 14px;">
                  <strong>📧 Sent from:</strong> ELCO Development Studio website<br>
                  <strong>⏰ Timestamp:</strong> ${new Date().toLocaleString()}<br>
                  <strong>🌐 Website:</strong> <a href="https://elcodev.com" style="color: #3B82F6;">elcodev.com</a>
                </p>
              </div>
            </div>
          </div>
        `,
        text: `
New Contact Form Submission

Contact Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Company: ${formData.company || 'Not specified'}

Message:
${formData.message}

---
Sent from ELCO Development Studio website
Timestamp: ${new Date().toLocaleString()}
Website: elcodev.com
        `
      }),
    });

    if (response.ok) {
      const result = await response.json();
      console.log('Email sent successfully:', result);
      return { success: true, message: 'Message sent successfully!' };
    } else {
      const errorData = await response.json();
      console.error('Resend API error:', errorData);
      throw new Error(`Resend API error: ${errorData.message || 'Unknown error'}`);
    }

  } catch (error) {
    console.error('Email sending error:', error);
    
    // Fallback: Return error so the form can handle it with mailto link
    return { 
      success: false, 
      message: 'Failed to send via email service. Falling back to email client...' 
    };
  }
};

// Alternative: Simple mailto link generator (fallback)
export const generateMailtoLink = (formData: ContactFormData): string => {
  const subject = encodeURIComponent(`New Contact from ${formData.name} - ${formData.company || 'No Company'}`);
  const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not specified'}

Message:
${formData.message}

---
Sent from ELCO Development Studio website
  `);
  
  return `mailto:austin@elcodev.com?subject=${subject}&body=${body}`;
};

// Validation functions
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateForm = (formData: ContactFormData): { valid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!formData.name.trim()) {
    errors.push('Name is required');
  }

  if (!formData.email.trim()) {
    errors.push('Email is required');
  } else if (!validateEmail(formData.email)) {
    errors.push('Please enter a valid email address');
  }

  if (!formData.message.trim()) {
    errors.push('Message is required');
  }

  return {
    valid: errors.length === 0,
    errors
  };
}; 