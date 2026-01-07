import React, { useState } from 'react';
import { sendEmail, ContactFormData } from '../utils/emailService';

interface ReferralFormData extends ContactFormData {
  referralName: string;
  referralEmail: string;
  referralCompany: string;
}

const ReferralProgram: React.FC = () => {
  const [formData, setFormData] = useState<ReferralFormData>({
    name: '',
    email: '',
    company: '',
    message: '',
    referralName: '',
    referralEmail: '',
    referralCompany: ''
  });

  const [status, setStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({
    type: 'idle',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Submitting your referral...' });

    try {
      const emailData: ContactFormData = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: `REFERRAL SUBMISSION:\n\n` +
                `Referrer: ${formData.name} (${formData.email})\n` +
                `Referrer Company: ${formData.company || 'N/A'}\n\n` +
                `LEAD DETAILS:\n` +
                `Name: ${formData.referralName}\n` +
                `Email: ${formData.referralEmail}\n` +
                `Company: ${formData.referralCompany || 'N/A'}\n\n` +
                `Additional Info: ${formData.message || 'None provided'}`
      };

      const result = await sendEmail(emailData);

      if (result.success) {
        setStatus({
          type: 'success',
          message: 'Referral submitted successfully! We\'ll contact the lead and keep you updated on your commission.'
        });
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
          referralName: '',
          referralEmail: '',
          referralCompany: ''
        });
        
        setTimeout(() => {
          setStatus({ type: 'idle', message: '' });
        }, 5000);
      } else {
        // Fallback to mailto link
        const mailtoLink = `mailto:austin@elcodev.com?subject=Referral Program Submission&body=${encodeURIComponent(emailData.message)}`;
        window.open(mailtoLink, '_blank');
        
        setStatus({
          type: 'success',
          message: 'Email client opened! Please send the pre-filled referral email.'
        });
        
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            company: '',
            message: '',
            referralName: '',
            referralEmail: '',
            referralCompany: ''
          });
          setStatus({ type: 'idle', message: '' });
        }, 5000);
      }
    } catch (error) {
      console.error('Referral form error:', error);
      
      // Fallback to mailto link
      const mailtoLink = `mailto:austin@elcodev.com?subject=Referral Program Submission&body=${encodeURIComponent(emailData.message)}`;
      window.open(mailtoLink, '_blank');
      
      setStatus({
        type: 'success',
        message: 'Email client opened! Please send the pre-filled referral email.'
      });
      
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          message: '',
          referralName: '',
          referralEmail: '',
          referralCompany: ''
        });
        setStatus({ type: 'idle', message: '' });
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="referral" className="retro-section">
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1rem',
            background: 'linear-gradient(135deg, var(--secondary-600), var(--secondary-700))',
            color: '#ffffff',
            borderRadius: 'var(--radius-lg)',
            fontSize: '0.875rem',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '1rem'
          }}>
            Referral Program
          </div>
          
          <h2 style={{ 
            fontSize: 'clamp(2rem, 4vw, 3rem)', 
            marginBottom: '1rem', 
            color: 'var(--gray-900)',
            fontWeight: '800',
            fontFamily: 'Poppins, sans-serif',
            lineHeight: '1.2'
          }}>
            Earn $500+ Commission
          </h2>
          
          <p style={{ 
            fontSize: '1.125rem', 
            lineHeight: '1.7', 
            color: 'var(--gray-700)',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Know someone who needs custom software? Refer them to us and earn generous commissions when they become a client.
          </p>
        </div>

        {/* How it Works */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {[
            { 
              step: '1', 
              title: 'Submit Your Referral', 
              desc: 'Fill out the form with your contact info and the lead\'s details. Takes less than 2 minutes.' 
            },
            { 
              step: '2', 
              title: 'We Contact The Lead', 
              desc: 'We\'ll reach out to your referral and provide a free consultation to understand their needs.' 
            },
            { 
              step: '3', 
              title: 'You Get Paid', 
              desc: 'When they become a client, you receive 5-10% of the project value. Payments within 30 days.' 
            }
          ].map((item, index) => (
            <div key={index} className="retro-card" style={{ textAlign: 'center' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--secondary-600), var(--secondary-700))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem auto',
                color: '#ffffff',
                fontSize: '1.75rem',
                fontWeight: '800',
                fontFamily: 'Poppins, sans-serif'
              }}>
                {item.step}
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '0.75rem',
                color: 'var(--gray-900)'
              }}>
                {item.title}
              </h3>
              <p style={{
                color: 'var(--gray-700)',
                fontSize: '0.9375rem',
                lineHeight: '1.6'
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Commission Breakdown */}
        <div style={{
          background: 'linear-gradient(135deg, var(--primary-600), var(--secondary-600))',
          borderRadius: 'var(--radius-xl)',
          padding: '3rem',
          marginBottom: '3rem',
          color: '#ffffff'
        }}>
          <h3 style={{
            fontSize: '1.75rem',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: '2rem',
            fontFamily: 'Poppins, sans-serif'
          }}>
            Commission Structure
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {[
              { range: 'Under $10k', commission: '5%', example: 'Up to $500' },
              { range: '$10k - $25k', commission: '7%', example: '$700 - $1,750' },
              { range: '$25k - $50k', commission: '8%', example: '$2,000 - $4,000' },
              { range: 'Over $50k', commission: '10%', example: '$5,000+' }
            ].map((tier, index) => (
              <div key={index} style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  marginBottom: '0.5rem',
                  opacity: 0.9
                }}>
                  {tier.range}
                </div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  marginBottom: '0.25rem',
                  fontFamily: 'Poppins, sans-serif'
                }}>
                  {tier.commission}
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  opacity: 0.85
                }}>
                  {tier.example}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Referral Form */}
        <div style={{
          background: '#ffffff',
          borderRadius: 'var(--radius-xl)',
          padding: '3rem',
          boxShadow: 'var(--shadow-xl)',
          border: '1px solid var(--gray-200)'
        }}>
          <h3 style={{
            fontSize: '1.75rem',
            fontWeight: '700',
            marginBottom: '1.5rem',
            color: 'var(--gray-900)',
            textAlign: 'center',
            fontFamily: 'Poppins, sans-serif'
          }}>
            Submit Your Referral
          </h3>

          {status.message && (
            <div style={{
              padding: '1rem',
              marginBottom: '1.5rem',
              borderRadius: 'var(--radius-md)',
              background: status.type === 'success' ? 'var(--success-100)' : 
                         status.type === 'error' ? 'var(--error-100)' : 'var(--gray-100)',
              color: status.type === 'success' ? 'var(--success-700)' : 
                     status.type === 'error' ? 'var(--error-700)' : 'var(--gray-700)',
              border: `1px solid ${status.type === 'success' ? 'var(--success-200)' : 
                      status.type === 'error' ? 'var(--error-200)' : 'var(--gray-200)'}`,
              fontSize: '0.9375rem',
              textAlign: 'center'
            }}>
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '2rem' }}>
              <h4 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: 'var(--gray-900)'
              }}>
                Your Information
              </h4>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                    color: 'var(--gray-700)',
                    fontSize: '0.9375rem'
                  }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status.type === 'loading'}
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      border: '1px solid var(--gray-300)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '1rem',
                      fontFamily: 'Inter, sans-serif',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-600)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--gray-300)'}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                    color: 'var(--gray-700)',
                    fontSize: '0.9375rem'
                  }}>
                    Your Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status.type === 'loading'}
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      border: '1px solid var(--gray-300)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '1rem',
                      fontFamily: 'Inter, sans-serif',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-600)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--gray-300)'}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                    color: 'var(--gray-700)',
                    fontSize: '0.9375rem'
                  }}>
                    Your Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={status.type === 'loading'}
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      border: '1px solid var(--gray-300)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '1rem',
                      fontFamily: 'Inter, sans-serif',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-600)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--gray-300)'}
                  />
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: 'var(--gray-900)'
              }}>
                Lead Information
              </h4>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                    color: 'var(--gray-700)',
                    fontSize: '0.9375rem'
                  }}>
                    Lead Name *
                  </label>
                  <input
                    type="text"
                    name="referralName"
                    value={formData.referralName}
                    onChange={handleChange}
                    required
                    disabled={status.type === 'loading'}
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      border: '1px solid var(--gray-300)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '1rem',
                      fontFamily: 'Inter, sans-serif',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-600)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--gray-300)'}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                    color: 'var(--gray-700)',
                    fontSize: '0.9375rem'
                  }}>
                    Lead Email *
                  </label>
                  <input
                    type="email"
                    name="referralEmail"
                    value={formData.referralEmail}
                    onChange={handleChange}
                    required
                    disabled={status.type === 'loading'}
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      border: '1px solid var(--gray-300)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '1rem',
                      fontFamily: 'Inter, sans-serif',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-600)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--gray-300)'}
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    marginBottom: '0.5rem',
                    fontWeight: '500',
                    color: 'var(--gray-700)',
                    fontSize: '0.9375rem'
                  }}>
                    Lead Company
                  </label>
                  <input
                    type="text"
                    name="referralCompany"
                    value={formData.referralCompany}
                    onChange={handleChange}
                    disabled={status.type === 'loading'}
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      border: '1px solid var(--gray-300)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '1rem',
                      fontFamily: 'Inter, sans-serif',
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--primary-600)'}
                    onBlur={(e) => e.target.style.borderColor = 'var(--gray-300)'}
                  />
                </div>
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: '500',
                color: 'var(--gray-700)',
                fontSize: '0.9375rem'
              }}>
                Additional Details
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                disabled={status.type === 'loading'}
                placeholder="What does the lead need? Any background information that would help us..."
                style={{
                  width: '100%',
                  padding: '0.875rem',
                  border: '1px solid var(--gray-300)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '1rem',
                  fontFamily: 'Inter, sans-serif',
                  outline: 'none',
                  resize: 'vertical'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary-600)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--gray-300)'}
              />
            </div>

            <button
              type="submit"
              disabled={status.type === 'loading'}
              className="retro-button"
              style={{
                width: '100%',
                fontSize: '1.0625rem',
                padding: '1rem 2rem',
                opacity: status.type === 'loading' ? 0.6 : 1
              }}
            >
              {status.type === 'loading' ? 'Submitting...' : 'Submit Referral'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReferralProgram;
