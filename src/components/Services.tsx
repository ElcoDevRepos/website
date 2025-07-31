import React, { useState } from 'react';

const services = [
  {
    title: '💻 Custom Web Development',
    description: 'We build AMAZING web applications that will blow your mind! From simple websites to complex enterprise solutions, we do it all with the latest technologies!',
    benefits: [
      '⚡ Faster time-to-market with agile development',
      '🏗️ Reduced tech debt through clean architecture', 
      '🎯 Improved user engagement with intuitive UIs'
    ],
    caseStudy: {
      client: 'Daily Dashboard',
      industry: 'Productivity',
      outcome: 'Delivered MVP within project timeline',
      quote: "Austin was easy to work with and delivered our project on time. He understood what we needed and worked within our budget constraints."
    }
  },
  {
    title: '📱 Mobile App Development',
    description: 'Native and cross-platform mobile applications that provide seamless user experiences across all devices. We build apps that your users will LOVE!',
    benefits: [
      '📱 Cross-platform support (iOS & Android)',
      '🎨 Intuitive UX/UI design patterns',
      '🔋 Offline functionality & performance optimization'
    ],
    caseStudy: {
      client: 'Bevvo',
      industry: 'Hospitality',
      outcome: 'Successfully launched on App Store',
      quote: "Austin helped build our payment processing app from concept to launch. He was responsive to feedback and handled the technical integrations professionally."
    }
  },
  {
    title: '👥 Staff Augmentation',
    description: 'Strengthen your team with our experienced developers. We provide skilled professionals who integrate seamlessly with your existing workforce!',
    benefits: [
      '📈 Scale your team up or down as needed',
      '🎯 Access to specialized skill sets',
      '💰 No recruitment or onboarding overhead'
    ],
    caseStudy: {
      client: 'GOAT Tutors',
      industry: 'Education',
      outcome: 'Improved development efficiency',
      quote: "Austin integrated well with our existing team and helped us implement new features that we were struggling with. His expertise was valuable to our project."
    }
  },
];

const Services: React.FC = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  
  const toggleExpand = (index: number) => {
    if (expandedService === index) {
      setExpandedService(null);
    } else {
      setExpandedService(index);
    }
  };
  
  return (
    <div id="services" className="retro-section">
      <h2 className="retro-title" style={{ textAlign: 'center', marginBottom: '30px' }}>
        🚀 OUR AWESOME SERVICES! 🚀
      </h2>
      
      <div className="retro-table">
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th style={{ background: 'linear-gradient(45deg, #ff0000, #00ff00)', color: '#000', padding: '15px', textAlign: 'center' }}>
                💻 SERVICE
              </th>
              <th style={{ background: 'linear-gradient(45deg, #00ff00, #0000ff)', color: '#000', padding: '15px', textAlign: 'center' }}>
                📝 DESCRIPTION
              </th>
              <th style={{ background: 'linear-gradient(45deg, #0000ff, #ff00ff)', color: '#000', padding: '15px', textAlign: 'center' }}>
                ⭐ BENEFITS
              </th>
              <th style={{ background: 'linear-gradient(45deg, #ff00ff, #ffff00)', color: '#000', padding: '15px', textAlign: 'center' }}>
                🎯 ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <React.Fragment key={index}>
                <tr style={{ background: index % 2 === 0 ? '#f0f0f0' : '#ffffff' }}>
                  <td style={{ padding: '15px', border: '2px solid #000', fontWeight: 'bold', fontSize: '16px' }}>
                    {service.title}
                  </td>
                  <td style={{ padding: '15px', border: '2px solid #000' }}>
                    <p className="retro-text">{service.description}</p>
                  </td>
                  <td style={{ padding: '15px', border: '2px solid #000' }}>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {service.benefits.map((benefit, i) => (
                        <li key={i} style={{ marginBottom: '5px', fontSize: '14px' }}>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td style={{ padding: '15px', border: '2px solid #000', textAlign: 'center' }}>
                    <button
                      onClick={() => toggleExpand(index)}
                      className="retro-button"
                      style={{ fontSize: '12px' }}
                    >
                      {expandedService === index ? '👁️ HIDE STORY' : '📖 VIEW STORY'}
                    </button>
                  </td>
                </tr>
                {expandedService === index && (
                  <tr style={{ background: '#ffffcc' }}>
                    <td colSpan={4} style={{ padding: '20px', border: '2px solid #000' }}>
                      <div style={{ 
                        background: '#000', 
                        color: '#00ff00', 
                        padding: '15px', 
                        border: '3px solid #00ff00',
                        fontFamily: 'Courier New, monospace'
                      }}>
                        <h4 style={{ color: '#ffff00', marginBottom: '10px' }}>
                          🏆 CLIENT SUCCESS STORY: {service.caseStudy.client}
                        </h4>
                        <div style={{ marginBottom: '10px' }}>
                          <span style={{ background: '#ff0000', color: '#fff', padding: '2px 8px', marginRight: '10px' }}>
                            {service.caseStudy.industry}
                          </span>
                          <span style={{ background: '#00ff00', color: '#000', padding: '2px 8px' }}>
                            {service.caseStudy.outcome}
                          </span>
                        </div>
                        <blockquote style={{ 
                          borderLeft: '4px solid #ffff00', 
                          paddingLeft: '15px', 
                          marginBottom: '15px',
                          fontStyle: 'italic'
                        }}>
                          "{service.caseStudy.quote}"
                        </blockquote>
                        <button 
                          onClick={() => window.location.href = '#contact'}
                          className="retro-button"
                          style={{ 
                            background: 'linear-gradient(45deg, #ff0000, #00ff00, #0000ff)',
                            color: '#fff',
                            textShadow: '2px 2px 0px #000'
                          }}
                        >
                          🚀 DISCUSS YOUR PROJECT! 🚀
                        </button>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Services;
