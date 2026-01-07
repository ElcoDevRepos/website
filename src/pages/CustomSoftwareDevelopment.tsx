import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const CustomSoftwareDevelopment: React.FC = () => {
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
              Custom Software Development Services
            </h1>
            
            <p style={{ 
              fontSize: '1.25rem', 
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.95)',
              marginBottom: '2rem'
            }}>
              Transform your business with tailored software solutions built specifically for your unique requirements. 
              We develop custom applications that automate workflows, improve efficiency, and drive measurable ROI.
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
              Get Started Today
            </button>
          </div>
        </div>

        {/* What is Custom Software */}
        <div className="retro-section">
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div className="retro-card" style={{ padding: '3rem' }}>
              <h2 style={{ 
                fontSize: '2rem', 
                fontWeight: '700',
                marginBottom: '1.5rem',
                color: 'var(--gray-900)',
                fontFamily: 'Poppins, sans-serif'
              }}>
                What is Custom Software Development?
              </h2>
              <p style={{ fontSize: '1.0625rem', lineHeight: '1.7', marginBottom: '1.5rem', color: 'var(--gray-700)' }}>
                Custom software development is the process of designing, building, deploying, and maintaining software 
                tailored to your specific business needs. Unlike off-the-shelf solutions, custom software is built from 
                the ground up to match your exact requirements, workflows, and business logic.
              </p>
              <div style={{ 
                background: 'var(--primary-50)', 
                borderLeft: '4px solid var(--primary-600)',
                padding: '1.5rem',
                borderRadius: 'var(--radius-md)'
              }}>
                <strong style={{ color: 'var(--gray-900)', fontSize: '1.0625rem' }}>Why Custom Software?</strong>
                <p style={{ marginTop: '0.5rem', color: 'var(--gray-800)', lineHeight: '1.6' }}>
                  Because your business is unique. Generic software forces you to adapt your processes to fit the tool. 
                  Custom software adapts to YOUR processes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
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
              Our Custom Software Development Services
            </h2>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
              gap: '2rem'
            }}>
              {[
                {
                  title: 'Enterprise Applications',
                  desc: 'Build complex enterprise systems including CRM, ERP, workflow automation, and business intelligence tools.',
                  features: ['Custom CRM systems', 'ERP solutions', 'Workflow automation', 'Business intelligence dashboards']
                },
                {
                  title: 'Web Applications',
                  desc: 'Scalable web applications built with modern frameworks like React, Angular, and Node.js.',
                  features: ['Single Page Applications (SPA)', 'Progressive Web Apps (PWA)', 'Admin panels & dashboards', 'Customer portals']
                },
                {
                  title: 'Mobile Applications',
                  desc: 'Native iOS/Android apps or cross-platform solutions using Flutter and React Native.',
                  features: ['iOS development (Swift)', 'Android development (Kotlin)', 'Cross-platform (Flutter, React Native)', 'App store deployment']
                },
                {
                  title: 'API Development',
                  desc: 'RESTful APIs, GraphQL, and microservices architecture for seamless system integration.',
                  features: ['RESTful API design', 'GraphQL implementations', 'Microservices architecture', 'Third-party integrations']
                },
                {
                  title: 'Cloud Solutions',
                  desc: 'Cloud-native applications leveraging AWS, Google Cloud, and Azure for scalability and reliability.',
                  features: ['AWS deployment', 'Google Cloud Platform', 'Azure solutions', 'Serverless architecture']
                },
                {
                  title: 'Legacy System Modernization',
                  desc: 'Transform outdated systems into modern, maintainable applications without disrupting your business.',
                  features: ['System migration', 'Technology upgrades', 'Data preservation', 'Improved performance']
                }
              ].map((service, index) => (
                <div key={index} className="retro-card">
                  <h3 style={{ 
                    fontSize: '1.375rem', 
                    fontWeight: '600',
                    marginBottom: '1rem',
                    color: 'var(--gray-900)'
                  }}>
                    {service.title}
                  </h3>
                  <p style={{ marginBottom: '1.25rem', lineHeight: '1.6', color: 'var(--gray-700)', fontSize: '0.9375rem' }}>
                    {service.desc}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, color: 'var(--gray-600)', fontSize: '0.875rem' }}>
                    {service.features.map((feature, i) => (
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

        {/* Why Choose Us */}
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
              Why Choose Us for Custom Software?
            </h2>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '1.5rem'
            }}>
              {[
                { title: 'Tailored Solutions', desc: 'Software built specifically for your business requirements' },
                { title: 'Scalable Architecture', desc: 'Designed to grow with your business' },
                { title: 'Modern Technologies', desc: 'Latest frameworks and best practices' },
                { title: 'Ongoing Support', desc: 'Maintenance and updates as your needs evolve' },
                { title: 'Transparent Pricing', desc: 'Clear quotes with no hidden costs' },
                { title: 'Fast Delivery', desc: 'Agile methodology for quick iterations' }
              ].map((benefit, index) => (
                <div key={index} style={{
                  padding: '1.5rem',
                  background: 'var(--gray-50)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--gray-200)'
                }}>
                  <h3 style={{ 
                    fontSize: '1.125rem', 
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    color: 'var(--gray-900)'
                  }}>
                    {benefit.title}
                  </h3>
                  <p style={{ color: 'var(--gray-700)', fontSize: '0.9375rem', lineHeight: '1.5' }}>
                    {benefit.desc}
                  </p>
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
              Ready to Build Your Custom Software?
            </h2>
            <p style={{ 
              fontSize: '1.125rem', 
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.95)',
              marginBottom: '2rem'
            }}>
              Let's discuss your requirements and create a solution that drives real results for your business.
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
              Schedule Free Consultation
            </button>
          </div>
        </div>

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default CustomSoftwareDevelopment;
