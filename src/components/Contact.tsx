import React, { useState } from 'react';
import { sendEmail, generateMailtoLink, validateForm, ContactFormData } from '../utils/emailService';

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);
    setStatus({ type: 'loading', message: '🚀 SENDING YOUR MESSAGE... 🚀' });

    // Validate form
    const validation = validateForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setStatus({ type: 'error', message: '❌ Please fix the errors below ❌' });
      return;
    }

    try {
      // Try to send via email service
      const result = await sendEmail(formData);

      if (result.success) {
        setStatus({ 
          type: 'success', 
          message: '🎉 THANKS FOR CONTACTING US! We will get back to you soon! 🎉' 
        });
        setFormData({ name: '', email: '', company: '', message: '' });
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setStatus({ type: 'idle', message: '' });
        }, 5000);
      } else {
        // Fallback to mailto link
        const mailtoLink = generateMailtoLink(formData);
        window.open(mailtoLink, '_blank');
        
        setStatus({ 
          type: 'success', 
          message: '📧 EMAIL CLIENT OPENED! Please send the pre-filled email to complete your message! 📧' 
        });
        
        // Reset form after a delay
        setTimeout(() => {
          setFormData({ name: '', email: '', company: '', message: '' });
          setStatus({ type: 'idle', message: '' });
        }, 5000);
      }
    } catch (error) {
      console.error('Contact form error:', error);
      
      // Fallback to mailto link
      const mailtoLink = generateMailtoLink(formData);
      window.open(mailtoLink, '_blank');
      
      setStatus({ 
        type: 'success', 
        message: '📧 EMAIL CLIENT OPENED! Please send the pre-filled email to complete your message! 📧' 
      });
      
      // Reset form after a delay
      setTimeout(() => {
        setFormData({ name: '', email: '', company: '', message: '' });
        setStatus({ type: 'idle', message: '' });
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    // Clear errors when user starts typing
    if (errors.length > 0) {
      setErrors([]);
      setStatus({ type: 'idle', message: '' });
    }
  };

  const getStatusStyle = () => {
    switch (status.type) {
      case 'loading':
        return {
          background: '#000',
          color: '#ffff00',
          border: '3px solid #ffff00',
          animation: 'blink 1s infinite'
        };
      case 'success':
        return {
          background: '#000',
          color: '#00ff00',
          border: '3px solid #00ff00'
        };
      case 'error':
        return {
          background: '#000',
          color: '#ff0000',
          border: '3px solid #ff0000'
        };
      default:
        return {};
    }
  };

  const getInputStyle = (fieldName: string) => {
    const hasError = errors.some(error => error.toLowerCase().includes(fieldName.toLowerCase()));
    return {
      width: '100%',
      padding: '12px',
      border: hasError ? '3px solid #ff0000' : '3px solid #000',
      background: status.type === 'loading' ? '#f0f0f0' : '#ffffcc',
      fontFamily: 'Comic Neue, cursive',
      fontSize: '16px',
      borderRadius: '0',
      minHeight: '44px'
    };
  };

  return (
    <div id="contact" className="retro-section">
      <h2 className="retro-title" style={{ textAlign: 'center', marginBottom: '30px' }}>
        📞 CONTACT US TODAY! 📞
      </h2>
      
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '20px',
        flexDirection: 'column'
      }}>
        {/* Contact Form */}
        <div className="retro-card" style={{ flex: '1', minWidth: '300px' }}>
          <h3 style={{ 
            color: '#ff0000', 
            fontSize: '1.5em', 
            marginBottom: '20px',
            textAlign: 'center',
            textShadow: '2px 2px 0px #000'
          }}>
            🚀 GET YOUR FREE QUOTE! 🚀
          </h3>
          
          {status.message && (
            <div style={{
              padding: '15px',
              marginBottom: '20px',
              fontFamily: 'Courier New, monospace',
              fontSize: '14px',
              textAlign: 'center',
              ...getStatusStyle()
            }}>
              {status.message}
            </div>
          )}

          {errors.length > 0 && (
            <div style={{
              padding: '15px',
              marginBottom: '20px',
              background: '#000',
              color: '#ff0000',
              border: '3px solid #ff0000',
              fontFamily: 'Courier New, monospace',
              fontSize: '12px'
            }}>
              <strong>❌ ERRORS FOUND:</strong>
              <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div>
                <label style={{ 
                  fontWeight: 'bold', 
                  color: '#0000ff',
                  display: 'block',
                  marginBottom: '5px',
                  fontSize: '16px'
                }}>
                  👤 NAME:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status.type === 'loading'}
                  style={getInputStyle('name')}
                  placeholder="Enter your name here..."
                />
              </div>

              <div>
                <label style={{ 
                  fontWeight: 'bold', 
                  color: '#00ff00',
                  display: 'block',
                  marginBottom: '5px',
                  fontSize: '16px'
                }}>
                  📧 EMAIL:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status.type === 'loading'}
                  style={getInputStyle('email')}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label style={{ 
                  fontWeight: 'bold', 
                  color: '#ff00ff',
                  display: 'block',
                  marginBottom: '5px',
                  fontSize: '16px'
                }}>
                  🏢 COMPANY:
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  disabled={status.type === 'loading'}
                  style={getInputStyle('company')}
                  placeholder="Your company name (optional)"
                />
              </div>

              <div>
                <label style={{ 
                  fontWeight: 'bold', 
                  color: '#ffff00',
                  display: 'block',
                  marginBottom: '5px',
                  fontSize: '16px'
                }}>
                  💬 MESSAGE:
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  disabled={status.type === 'loading'}
                  style={{
                    ...getInputStyle('message'),
                    resize: 'vertical',
                    minHeight: '120px'
                  }}
                  placeholder="Tell us about your project! We want to hear all about it!"
                />
              </div>

              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button
                  type="submit"
                  disabled={status.type === 'loading'}
                  className="retro-button"
                  style={{
                    fontSize: '18px',
                    padding: '15px 30px',
                    minHeight: '50px',
                    background: status.type === 'loading' 
                      ? 'linear-gradient(45deg, #666, #999)' 
                      : 'linear-gradient(45deg, #ff0000, #00ff00, #0000ff)',
                    color: '#fff',
                    textShadow: '2px 2px 0px #000',
                    opacity: status.type === 'loading' ? 0.7 : 1,
                    width: '100%',
                    maxWidth: '300px'
                  }}
                >
                  {status.type === 'loading' ? '⏳ SENDING... ⏳' : '🚀 SEND MESSAGE NOW! 🚀'}
                </button>
              </div>
            </div>
          </form>

          <div style={{ 
            marginTop: '20px', 
            padding: '15px', 
            background: '#ffffcc', 
            border: '2px solid #000',
            fontSize: '12px',
            textAlign: 'center'
          }}>
            <strong>💡 TIP:</strong> If the form doesn't work, you can also email us directly at{' '}
            <a 
              href="mailto:austin@elcodev.com" 
              style={{ color: '#0000ff', textDecoration: 'underline' }}
            >
              austin@elcodev.com
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="retro-card" style={{ flex: '1', minWidth: '250px' }}>
          <h3 style={{ 
            color: '#0000ff', 
            fontSize: '1.3em', 
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            📞 CONTACT INFO 📞
          </h3>
          
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ color: '#ff0000', marginBottom: '10px' }}>🎯 WHAT YOU'LL GET:</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '5px' }}>✅ Custom project scope assessment</li>
              <li style={{ marginBottom: '5px' }}>✅ Technology recommendations</li>
              <li style={{ marginBottom: '5px' }}>✅ Timeline and budget estimates</li>
              <li style={{ marginBottom: '5px' }}>✅ Development roadmap</li>
              <li style={{ marginBottom: '5px' }}>✅ No-pressure conversation</li>
            </ul>
          </div>

          <div style={{ 
            background: '#000', 
            color: '#00ff00', 
            padding: '15px', 
            border: '3px solid #00ff00',
            fontFamily: 'Courier New, monospace',
            fontSize: '12px',
            marginBottom: '20px'
          }}>
            <h4 style={{ color: '#ffff00', marginBottom: '10px' }}>📞 DIRECT CONTACT:</h4>
            <div style={{ marginBottom: '10px' }}>
              📱 Phone: <a href="tel:+16155879346" style={{ color: '#00ff00' }}>(615) 587-9346</a>
            </div>
            <div style={{ marginBottom: '10px' }}>
              📧 Email: <a href="mailto:austin@elcodev.com" style={{ color: '#00ff00' }}>austin@elcodev.com</a>
            </div>
            <div>
              🌐 Website: www.elcodev.com
            </div>
          </div>

          <div style={{ 
            background: '#ffffcc', 
            border: '2px solid #000', 
            padding: '15px',
            fontStyle: 'italic'
          }}>
            <h4 style={{ color: '#ff0000', marginBottom: '10px' }}>💬 TESTIMONIAL:</h4>
            <p style={{ fontSize: '12px' }}>
              "Austin managed front end, back end, and database development including integrating third party applications to execute payment processing, reporting, etc. I consider myself extremely lucky to have found Austin." - Justin Garabed, Bevvo
            </p>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <div className="retro-counter">
          🔒 100% CONFIDENTIAL | 🔐 SSL ENCRYPTED | ⚡ RESPONSE TIME: &lt; 24 HOURS 🔒
        </div>
      </div>
    </div>
  );
};

export default Contact;
