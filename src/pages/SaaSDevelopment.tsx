import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const SaaSDevelopment: React.FC = () => {
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
              SaaS Platform Development
            </h1>
            
            <p style={{ 
              fontSize: '1.25rem', 
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.95)',
              marginBottom: '2rem'
            }}>
              Turn your software idea into a profitable SaaS business. We build complete SaaS platforms with subscription 
              billing, user management, analytics, and everything you need to launch and scale.
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
              Start Your SaaS
            </button>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="retro-section">
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="retro-card" style={{ padding: '3rem' }}>
              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: '700',
                marginBottom: '1.5rem',
                color: 'var(--gray-900)',
                fontFamily: 'Poppins, sans-serif',
                textAlign: 'center'
              }}>
                Launch Your SaaS Product Fast
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
                <div>
                  <p style={{ fontSize: '1.0625rem', lineHeight: '1.7', marginBottom: '1rem', color: 'var(--gray-700)' }}>
                    Building a SaaS product is complex. You need subscription billing, user authentication, multi-tenant 
                    architecture, admin panels, payment processing, email notifications, and more.
                  </p>
                  <p style={{ fontSize: '1.0625rem', lineHeight: '1.7', color: 'var(--gray-700)' }}>
                    We've built multiple successful SaaS platforms. We know the common pitfalls and best practices to get 
                    your product to market quickly while building on a solid foundation that scales.
                  </p>
                </div>
                <div style={{ 
                  background: 'var(--primary-50)',
                  border: '1px solid var(--primary-200)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.5rem'
                }}>
                  <h4 style={{ 
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    marginBottom: '1rem',
                    color: 'var(--gray-900)'
                  }}>
                    What We Build:
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, color: 'var(--gray-700)', fontSize: '0.9375rem' }}>
                    {[
                      'Complete SaaS applications',
                      'Multi-tenant architecture',
                      'Subscription billing systems',
                      'User dashboards & admin panels',
                      'Analytics & reporting',
                      'API integrations'
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
        </div>

        {/* Core Features */}
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
              Complete SaaS Platform Features
            </h2>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
              gap: '2rem'
            }}>
              {[
                {
                  title: 'Subscription Billing',
                  desc: 'Integrated payment processing with Stripe or PayPal. Handle monthly/yearly subscriptions, trials, and upgrades automatically.',
                  features: ['Stripe/PayPal integration', 'Multiple pricing tiers', 'Trial periods', 'Upgrade/downgrade flows', 'Invoice generation', 'Payment history']
                },
                {
                  title: 'User Management',
                  desc: 'Complete user authentication and authorization system with role-based access control.',
                  features: ['Email/password auth', 'Social login (Google, GitHub)', 'Role-based permissions', 'Team/organization support', 'User profiles', 'Activity logs']
                },
                {
                  title: 'Multi-Tenant Architecture',
                  desc: 'Secure data isolation where each customer\'s data is completely separate and protected.',
                  features: ['Data isolation', 'Tenant management', 'Custom domains', 'White labeling options', 'Per-tenant settings', 'Scalable architecture']
                },
                {
                  title: 'Admin Dashboard',
                  desc: 'Powerful admin panel to manage users, monitor system health, and access analytics.',
                  features: ['User management', 'System monitoring', 'Analytics dashboard', 'Support tickets', 'Feature flags', 'Audit logs']
                },
                {
                  title: 'Analytics & Reporting',
                  desc: 'Built-in analytics to track usage, revenue, churn, and other key metrics.',
                  features: ['Usage analytics', 'Revenue tracking', 'Churn analysis', 'Custom reports', 'Export data', 'Real-time metrics']
                },
                {
                  title: 'API & Integrations',
                  desc: 'RESTful API and third-party integrations to extend your platform\'s capabilities.',
                  features: ['RESTful API', 'Webhook system', 'Third-party integrations', 'API documentation', 'Rate limiting', 'Authentication tokens']
                }
              ].map((feature, index) => (
                <div key={index} className="retro-card">
                  <h3 style={{ 
                    fontSize: '1.375rem', 
                    fontWeight: '600',
                    marginBottom: '1rem',
                    color: 'var(--gray-900)'
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{ marginBottom: '1.25rem', lineHeight: '1.6', color: 'var(--gray-700)', fontSize: '0.9375rem' }}>
                    {feature.desc}
                  </p>
                  <strong style={{ display: 'block', marginBottom: '0.75rem', color: 'var(--gray-900)', fontSize: '0.875rem' }}>Includes:</strong>
                  <ul style={{ listStyle: 'none', padding: 0, color: 'var(--gray-600)', fontSize: '0.875rem' }}>
                    {feature.features.map((item, i) => (
                      <li key={i} style={{ 
                        marginBottom: '0.5rem',
                        paddingLeft: '1.5rem',
                        position: 'relative'
                      }}>
                        <span style={{ position: 'absolute', left: 0, color: 'var(--success-500)', fontWeight: '600' }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="retro-section">
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ 
              textAlign: 'center',
              fontSize: '2rem', 
              fontWeight: '700',
              marginBottom: '3rem',
              color: 'var(--gray-900)',
              fontFamily: 'Poppins, sans-serif'
            }}>
              Modern SaaS Technology Stack
            </h2>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '1.5rem'
            }}>
              {[
                { category: 'Frontend', tech: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
                { category: 'Backend', tech: ['Node.js', 'Python', 'PostgreSQL', 'Redis'] },
                { category: 'Cloud', tech: ['AWS', 'Google Cloud', 'Vercel', 'Heroku'] },
                { category: 'Payments', tech: ['Stripe', 'PayPal', 'Paddle', 'Chargebee'] }
              ].map((stack, index) => (
                <div key={index} className="retro-card" style={{ textAlign: 'center' }}>
                  <h4 style={{ 
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    marginBottom: '1rem',
                    color: 'var(--gray-900)'
                  }}>
                    {stack.category}
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
                    {stack.tech.map((t, i) => (
                      <span key={i} style={{
                        padding: '0.375rem 0.875rem',
                        background: 'var(--gray-100)',
                        color: 'var(--gray-700)',
                        borderRadius: 'var(--radius-md)',
                        fontSize: '0.875rem',
                        fontWeight: '500'
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
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
              Ready to Launch Your SaaS?
            </h2>
            <p style={{ 
              fontSize: '1.125rem', 
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.95)',
              marginBottom: '2rem'
            }}>
              Let's build your SaaS platform and get you to market fast.
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

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default SaaSDevelopment;
