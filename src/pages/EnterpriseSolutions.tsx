import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const EnterpriseSolutions: React.FC = () => {
  return (
    <div className="retro-container">
      <Navigation />
      <main>
        {/* Hero Section */}
        <div className="retro-section" style={{ 
          background: 'linear-gradient(135deg, var(--primary-600), var(--secondary-600))',
          color: '#ffffff',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h1 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
              fontWeight: '800',
              marginBottom: '1.5rem',
              fontFamily: 'Poppins, sans-serif',
              lineHeight: '1.2'
            }}>
              Enterprise Software Development Solutions
            </h1>
            
            <p style={{ 
              fontSize: '1.25rem', 
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.95)',
              marginBottom: '2rem'
            }}>
              Build scalable enterprise software that streamlines operations, improves productivity, and drives growth. 
              Custom CRMs, ERPs, and business automation tools designed for your organization.
            </p>

            <button
              onClick={() => window.location.href = '#contact'}
              className="retro-button"
              style={{
                background: '#ffffff',
                color: 'var(--primary-600)',
                padding: '1rem 2.5rem',
                fontSize: '1.0625rem',
                fontWeight: '600'
              }}
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="retro-section">
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
              <div>
                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700',
                  marginBottom: '1.5rem',
                  color: 'var(--gray-900)',
                  fontFamily: 'Poppins, sans-serif'
                }}>
                  Enterprise-Grade Software for Modern Businesses
                </h2>
                <p style={{ fontSize: '1.0625rem', lineHeight: '1.7', marginBottom: '1rem', color: 'var(--gray-700)' }}>
                  Off-the-shelf software can't keep up with your unique business processes. We build custom enterprise 
                  solutions that align perfectly with your workflows, integrate with your existing systems, and scale 
                  as your business grows.
                </p>
                <p style={{ fontSize: '1.0625rem', lineHeight: '1.7', color: 'var(--gray-700)' }}>
                  From customer relationship management to inventory tracking, financial reporting to workflow automation 
                  - we develop enterprise software that becomes your competitive advantage.
                </p>
              </div>
              <div className="retro-card" style={{ background: 'var(--primary-50)', border: '1px solid var(--primary-200)' }}>
                <h3 style={{ 
                  fontSize: '1.25rem', 
                  fontWeight: '600',
                  marginBottom: '1.25rem',
                  color: 'var(--gray-900)'
                }}>
                  Why Enterprise Software?
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, color: 'var(--gray-700)', fontSize: '0.9375rem' }}>
                  {[
                    'Automate repetitive tasks',
                    'Centralize business data',
                    'Improve decision making',
                    'Increase operational efficiency',
                    'Reduce human error',
                    'Scale without overhead'
                  ].map((item, i) => (
                    <li key={i} style={{ 
                      marginBottom: '0.75rem',
                      paddingLeft: '1.5rem',
                      position: 'relative'
                    }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--success-500)', fontWeight: '600' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise Solutions */}
        <div className="retro-section" style={{ background: 'var(--gray-50)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ 
              textAlign: 'center',
              fontSize: '2rem', 
              fontWeight: '700',
              marginBottom: '3rem',
              color: 'var(--gray-900)',
              fontFamily: 'Poppins, sans-serif'
            }}>
              Enterprise Solutions We Build
            </h2>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
              gap: '2rem'
            }}>
              {[
                {
                  title: 'Custom CRM Systems',
                  desc: 'Customer Relationship Management systems tailored to your sales process, pipeline management, and customer interaction tracking.',
                  features: ['Lead & opportunity tracking', 'Customer communication history', 'Sales pipeline management', 'Automated follow-ups', 'Reporting & analytics', 'Email integration']
                },
                {
                  title: 'ERP Solutions',
                  desc: 'Enterprise Resource Planning systems that unify all your business processes into one centralized platform.',
                  features: ['Inventory management', 'Order processing', 'Financial management', 'Supply chain tracking', 'Multi-location support', 'Real-time reporting']
                },
                {
                  title: 'Workflow Automation',
                  desc: 'Automate repetitive business processes to save time, reduce errors, and increase consistency.',
                  features: ['Process automation', 'Approval workflows', 'Document management', 'Task scheduling', 'Notification systems', 'Integration with existing tools']
                },
                {
                  title: 'Business Intelligence',
                  desc: 'Data analytics and reporting tools that turn your business data into actionable insights.',
                  features: ['Custom dashboards', 'Real-time analytics', 'Predictive modeling', 'Data visualization', 'KPI tracking', 'Automated reports']
                },
                {
                  title: 'Project Management',
                  desc: 'Custom project management solutions designed for your team\'s specific workflows and methodologies.',
                  features: ['Task management', 'Resource allocation', 'Time tracking', 'Budget management', 'Gantt charts', 'Team collaboration']
                },
                {
                  title: 'Internal Tools',
                  desc: 'Custom internal applications that solve your specific operational challenges and improve efficiency.',
                  features: ['Employee portals', 'HR management', 'Asset tracking', 'Knowledge bases', 'Admin panels', 'Reporting tools']
                }
              ].map((solution, index) => (
                <div key={index} className="retro-card">
                  <h3 style={{ 
                    fontSize: '1.375rem', 
                    fontWeight: '600',
                    marginBottom: '1rem',
                    color: 'var(--gray-900)'
                  }}>
                    {solution.title}
                  </h3>
                  <p style={{ marginBottom: '1.25rem', lineHeight: '1.6', color: 'var(--gray-700)', fontSize: '0.9375rem' }}>
                    {solution.desc}
                  </p>
                  <strong style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--gray-900)', fontSize: '0.875rem' }}>Features:</strong>
                  <ul style={{ listStyle: 'none', padding: 0, color: 'var(--gray-600)', fontSize: '0.875rem' }}>
                    {solution.features.map((feature, i) => (
                      <li key={i} style={{ 
                        marginBottom: '0.5rem',
                        paddingLeft: '1.5rem',
                        position: 'relative'
                      }}>
                        <span style={{ position: 'absolute', left: 0, color: 'var(--success-500)', fontWeight: '600' }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="retro-section" style={{ 
          background: 'linear-gradient(135deg, var(--primary-600), var(--secondary-600))',
          color: '#ffffff',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ 
              fontSize: '2rem', 
              fontWeight: '700',
              marginBottom: '1rem',
              fontFamily: 'Poppins, sans-serif'
            }}>
              Transform Your Enterprise Operations
            </h2>
            <p style={{ 
              fontSize: '1.125rem', 
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.95)',
              marginBottom: '2rem'
            }}>
              Let's build enterprise software that gives your business a competitive edge.
            </p>
            <button
              onClick={() => window.location.href = '#contact'}
              className="retro-button"
              style={{
                background: '#ffffff',
                color: 'var(--primary-600)',
                padding: '1rem 2.5rem',
                fontSize: '1.0625rem',
                fontWeight: '600'
              }}
            >
              Schedule Consultation
            </button>
          </div>
        </div>

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default EnterpriseSolutions;
