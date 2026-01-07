import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

interface CaseStudy {
  id: string;
  title: string;
  tagline: string;
  client: string;
  industry: string;
  projectType: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  timeline: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
  imageUrl: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 'laurel-crm',
    title: 'Custom Healthcare CRM',
    tagline: 'Streamlining Patient Management for Growing Medical Practice',
    client: 'Laurel Medical',
    industry: 'Healthcare',
    projectType: 'Enterprise CRM',
    challenge: 'Laurel Medical was experiencing rapid growth and needed a custom CRM to manage their expanding workload. Off-the-shelf solutions didn\'t match their specific healthcare workflows and compliance requirements. They needed a system that could handle patient management, appointment scheduling, billing, and maintain HIPAA compliance.',
    solution: 'We built a comprehensive CRM from the ground up, tailored specifically to their healthcare workflows. The system includes patient intake forms, appointment scheduling with automated reminders, billing integration with QuickBooks, secure document storage, and custom reporting dashboards. All data is encrypted and HIPAA-compliant.',
    results: [
      '40% reduction in administrative overhead',
      'Improved appointment scheduling efficiency',
      'Streamlined patient intake process',
      'Real-time access to patient information across locations',
      'Automated billing and insurance processing',
      'Complete HIPAA compliance with audit trails'
    ],
    technologies: ['Angular', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS', 'QuickBooks API'],
    timeline: '4 months from requirements to production launch',
    testimonial: {
      quote: 'Austin has been building this from the ground up and we have been nothing but pleased with the progress. Austin is also available to talk if there is an issue or if we have a new idea.',
      author: 'Marla Nesbella',
      role: 'Office Manager'
    },
    imageUrl: './portfolio/laurel-crm-optimized.jpg'
  },
  {
    id: 'bevvo',
    title: 'Mobile Payment Platform',
    tagline: 'Revolutionizing Hospitality Payments',
    client: 'Bevvo',
    industry: 'Hospitality',
    projectType: 'Mobile Application',
    challenge: 'Bevvo needed a mobile payment solution for the hospitality industry that could handle complex payment processing, real-time order management, reporting, and integrate with existing POS systems. The app needed to work seamlessly on both iOS and Android with offline capabilities.',
    solution: 'We developed a complete mobile payment platform using Ionic and Capacitor for cross-platform deployment. The solution includes integrated payment processing through Stripe, real-time order tracking, comprehensive reporting dashboards, and seamless POS integration. We also managed the entire app store publication process for both iOS and Android.',
    results: [
      'Successfully launched on both iOS and Android app stores',
      'Processed thousands of transactions with 99.9% uptime',
      'Reduced payment processing time by 60%',
      'Integrated with multiple POS systems',
      'Real-time reporting and analytics',
      'Offline mode for unstable network environments'
    ],
    technologies: ['Ionic', 'Capacitor', 'Node.js', 'Firebase', 'Stripe API', 'React'],
    timeline: '5 months from concept to app store launch',
    testimonial: {
      quote: 'Austin managed front end, back end, and database development including integrating third party applications to execute payment processing, reporting, etc. I consider myself extremely lucky to have found Austin.',
      author: 'Justin Garabed',
      role: 'Founder'
    },
    imageUrl: './portfolio/md-virtual-care-optimized.jpg'
  },
  {
    id: 'canvenient',
    title: 'SaaS Platform for Property Management',
    tagline: 'Transforming Valet Trash Service Management',
    client: 'Canvenient',
    industry: 'Property Management',
    projectType: 'SaaS Platform',
    challenge: 'Canvenient needed a complete SaaS platform to help apartment communities manage valet trash services. The platform needed to handle real-time service tracking, resident management, route optimization, billing, and provide analytics for property managers. Budget was limited as a startup.',
    solution: 'We built a full-featured SaaS platform using Angular and Firebase with subscription billing through Stripe. The system includes real-time GPS tracking for service providers, automated scheduling, resident portals, property manager dashboards, and comprehensive reporting. We delivered the MVP quickly to help them start acquiring customers while keeping costs low.',
    results: [
      'Platform launched in 3 months',
      'Supports multiple apartment communities',
      'Real-time service tracking and verification',
      'Automated billing and invoicing',
      'Reduced customer acquisition cost',
      '50-70% more affordable than large agencies'
    ],
    technologies: ['Angular', 'Firebase', 'TypeScript', 'Cloud Functions', 'Stripe', 'Google Maps API'],
    timeline: '3 months for MVP, ongoing feature development',
    testimonial: {
      quote: 'As an entrepreneur without much money trying to get a minimum viable product into existence, Elco Development has been the perfect partner. Austin built the entire project for less than a big firm would have charged for a few planning meetings.',
      author: 'Charles Lyons',
      role: 'Founder'
    },
    imageUrl: './portfolio/canvenient-optimized.jpg'
  },
  {
    id: 'penalty-verdict',
    title: 'Sports Analytics Mobile App',
    tagline: 'NFL Penalty Tracking & Game Analysis',
    client: 'Penalty Verdict',
    industry: 'Sports & Entertainment',
    projectType: 'Mobile Application',
    challenge: 'Penalty Verdict wanted to create a mobile app for NFL fans to track penalties and game incidents with real-time data. The app needed to scrape data from multiple sources, provide comprehensive analytics, and deliver a smooth user experience for passionate football fans.',
    solution: 'We developed a mobile app using Ionic and Capacitor with a Node.js backend for data scraping and processing. The app features real-time penalty tracking, comprehensive game analytics, historical data comparisons, and push notifications for important game events. All data is stored in Firebase for real-time synchronization.',
    results: [
      'Successfully launched on iOS and Android',
      'Real-time data scraping and processing',
      'Thousands of active users during NFL season',
      'Comprehensive penalty and game analytics',
      'Push notifications for game updates',
      'High user engagement and retention'
    ],
    technologies: ['Ionic', 'Capacitor', 'Node.js', 'Firebase', 'Web Scraping APIs'],
    timeline: '4 months from concept to launch',
    testimonial: {
      quote: 'Austin and his development team have transformed my app idea into a tangible reality. If you seek someone capable of bringing life into your app concept, look no further than Austin.',
      author: 'Titus Cara',
      role: 'Founder'
    },
    imageUrl: './portfolio/penalty-verdict-optimized.jpg'
  }
];

const CaseStudies: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const industries = ['All', ...Array.from(new Set(caseStudies.map(cs => cs.industry)))];
  const filteredCases = filter === 'All' ? caseStudies : caseStudies.filter(cs => cs.industry === filter);

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
              Case Studies
            </h1>
            
            <p style={{ 
              fontSize: '1.25rem', 
              lineHeight: '1.7',
              color: 'rgba(255, 255, 255, 0.95)'
            }}>
              Real projects, real results. See how we've helped businesses transform their operations with custom software solutions.
            </p>
          </div>
        </div>

        {/* Filter */}
        <div className="retro-section" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
              {industries.map(industry => (
                <button
                  key={industry}
                  onClick={() => setFilter(industry)}
                  style={{
                    padding: '0.625rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    border: 'none',
                    background: filter === industry ? 'var(--primary-600)' : '#ffffff',
                    color: filter === industry ? '#ffffff' : 'var(--gray-700)',
                    fontSize: '0.9375rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    boxShadow: filter === industry ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                    fontFamily: 'Inter, sans-serif'
                  }}
                  onMouseEnter={(e) => {
                    if (filter !== industry) {
                      e.currentTarget.style.background = 'var(--gray-100)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (filter !== industry) {
                      e.currentTarget.style.background = '#ffffff';
                    }
                  }}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="retro-section" style={{ background: 'var(--gray-50)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
              gap: '2rem'
            }}>
              {filteredCases.map(caseStudy => (
                <div 
                  key={caseStudy.id}
                  onClick={() => setSelectedCase(caseStudy)}
                  className="retro-card"
                  style={{ 
                    cursor: 'pointer',
                    padding: 0,
                    overflow: 'hidden'
                  }}
                >
                  <div style={{ 
                    width: '100%',
                    height: '200px',
                    background: 'var(--gray-200)',
                    position: 'relative'
                  }}>
                    <img 
                      src={caseStudy.imageUrl}
                      alt={caseStudy.title}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        transition: 'transform 0.3s'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      onError={(e) => {
                        e.currentTarget.src = caseStudy.imageUrl.replace('-optimized', '');
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                      padding: '0.375rem 0.75rem',
                      background: 'rgba(0, 0, 0, 0.7)',
                      backdropFilter: 'blur(10px)',
                      color: '#ffffff',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.8125rem',
                      fontWeight: '600'
                    }}>
                      {caseStudy.industry}
                    </div>
                  </div>

                  <div style={{ padding: '1.5rem' }}>
                    <h3 style={{ 
                      fontSize: '1.375rem', 
                      fontWeight: '600',
                      marginBottom: '0.5rem',
                      color: 'var(--gray-900)'
                    }}>
                      {caseStudy.title}
                    </h3>
                    <p style={{ 
                      fontSize: '0.9375rem',
                      color: 'var(--gray-600)',
                      marginBottom: '1rem',
                      fontStyle: 'italic'
                    }}>
                      {caseStudy.tagline}
                    </p>
                    <p style={{ 
                      fontSize: '0.9375rem',
                      lineHeight: '1.6',
                      color: 'var(--gray-700)',
                      marginBottom: '1rem'
                    }}>
                      {caseStudy.challenge.substring(0, 150)}...
                    </p>
                    <div style={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: '0.5rem'
                    }}>
                      {caseStudy.technologies.slice(0, 3).map((tech, index) => (
                        <span 
                          key={index}
                          style={{
                            padding: '0.25rem 0.625rem',
                            background: 'var(--gray-100)',
                            color: 'var(--gray-700)',
                            borderRadius: 'var(--radius-sm)',
                            fontSize: '0.8125rem',
                            fontWeight: '500'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                      {caseStudy.technologies.length > 3 && (
                        <span style={{
                          padding: '0.25rem 0.625rem',
                          background: 'var(--primary-100)',
                          color: 'var(--primary-700)',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '0.8125rem',
                          fontWeight: '600'
                        }}>
                          +{caseStudy.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal */}
        {selectedCase && (
          <div 
            onClick={() => setSelectedCase(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(4px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000,
              padding: '2rem',
              overflow: 'auto'
            }}
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              style={{
                background: '#ffffff',
                borderRadius: 'var(--radius-xl)',
                maxWidth: '900px',
                width: '100%',
                maxHeight: '90vh',
                overflow: 'auto'
              }}
            >
              <button
                onClick={() => setSelectedCase(null)}
                style={{
                  position: 'sticky',
                  top: '1rem',
                  right: '1rem',
                  float: 'right',
                  background: 'rgba(0, 0, 0, 0.5)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  color: '#ffffff',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  zIndex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                ×
              </button>

              <div style={{ padding: '2.5rem' }}>
                <div style={{ marginBottom: '0.75rem' }}>
                  <span style={{
                    padding: '0.375rem 0.875rem',
                    background: 'var(--primary-100)',
                    color: 'var(--primary-700)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.875rem',
                    fontWeight: '600'
                  }}>
                    {selectedCase.industry}
                  </span>
                </div>

                <h2 style={{ 
                  fontSize: '2rem', 
                  fontWeight: '700',
                  color: 'var(--gray-900)',
                  fontFamily: 'Poppins, sans-serif',
                  marginBottom: '0.5rem'
                }}>
                  {selectedCase.title}
                </h2>

                <p style={{ 
                  fontSize: '1.125rem',
                  color: 'var(--gray-600)',
                  fontStyle: 'italic',
                  marginBottom: '2rem'
                }}>
                  {selectedCase.tagline}
                </p>

                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ 
                    fontSize: '1.125rem', 
                    fontWeight: '600',
                    marginBottom: '0.75rem',
                    color: 'var(--gray-900)'
                  }}>
                    The Challenge
                  </h3>
                  <p style={{ 
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: 'var(--gray-700)'
                  }}>
                    {selectedCase.challenge}
                  </p>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ 
                    fontSize: '1.125rem', 
                    fontWeight: '600',
                    marginBottom: '0.75rem',
                    color: 'var(--gray-900)'
                  }}>
                    Our Solution
                  </h3>
                  <p style={{ 
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: 'var(--gray-700)'
                  }}>
                    {selectedCase.solution}
                  </p>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ 
                    fontSize: '1.125rem', 
                    fontWeight: '600',
                    marginBottom: '0.75rem',
                    color: 'var(--gray-900)'
                  }}>
                    Results
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, color: 'var(--gray-700)', fontSize: '0.9375rem' }}>
                    {selectedCase.results.map((result, index) => (
                      <li key={index} style={{ 
                        marginBottom: '0.75rem',
                        paddingLeft: '1.5rem',
                        position: 'relative'
                      }}>
                        <span style={{ position: 'absolute', left: 0, color: 'var(--success-500)', fontWeight: '600' }}>✓</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <h3 style={{ 
                    fontSize: '1.125rem', 
                    fontWeight: '600',
                    marginBottom: '0.75rem',
                    color: 'var(--gray-900)'
                  }}>
                    Technologies
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
                    {selectedCase.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        style={{
                          padding: '0.5rem 1rem',
                          background: 'var(--gray-100)',
                          color: 'var(--gray-700)',
                          borderRadius: 'var(--radius-md)',
                          fontSize: '0.9375rem',
                          fontWeight: '500'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{
                  padding: '1.5rem',
                  background: 'var(--gray-50)',
                  borderRadius: 'var(--radius-lg)',
                  borderLeft: '4px solid var(--primary-600)',
                  marginBottom: '1.5rem'
                }}>
                  <p style={{ 
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: 'var(--gray-800)',
                    fontStyle: 'italic',
                    marginBottom: '1rem'
                  }}>
                    "{selectedCase.testimonial.quote}"
                  </p>
                  <div style={{ fontWeight: '600', color: 'var(--gray-900)', fontSize: '0.9375rem' }}>
                    — {selectedCase.testimonial.author}, {selectedCase.testimonial.role}
                  </div>
                  <div style={{ color: 'var(--gray-600)', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                    {selectedCase.client}
                  </div>
                </div>

                <div style={{
                  padding: '1rem',
                  background: 'var(--primary-50)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.9375rem',
                  color: 'var(--gray-700)',
                  fontWeight: '500'
                }}>
                  Timeline: {selectedCase.timeline}
                </div>
              </div>
            </div>
          </div>
        )}

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
