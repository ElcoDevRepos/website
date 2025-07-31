// Email service utility for contact form using Resend
// Resend is a modern email API for developers

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  phone?: string;
  company?: string;
}

export const sendEmail = async (formData: ContactFormData): Promise<{ success: boolean; message: string }> => {
  try {
    // Use the Vercel API endpoint
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to send message');
    }

    return result;
  } catch (error) {
    console.error('Email service error:', error);
    
    // Fallback to mailto link
    const mailtoLink = generateMailtoLink(formData);
    window.open(mailtoLink, '_blank');
    
    return {
      success: true,
      message: 'Email client opened as fallback. Please send your message manually.'
    };
  }
};

export const generateMailtoLink = (formData: ContactFormData): string => {
  const subject = encodeURIComponent('🎯 New Contact Form Submission from ELCO Development Studio');
  const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
${formData.phone ? `Phone: ${formData.phone}` : ''}

Message:
${formData.message}

---
Sent from ELCO Development Studio Contact Form
  `);
  
  return `mailto:contact@elcodevstudio.com?subject=${subject}&body=${body}`;
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateForm = (formData: ContactFormData): { isValid: boolean; errors: string[] } => {
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
    isValid: errors.length === 0,
    errors
  };
}; 