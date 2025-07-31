import React, { useState, useEffect } from 'react';

interface PortfolioItem {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  category: string;
  link?: string;
  year?: string;
  scope?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "Penalty Verdict",
    description: "Mobile app for NFL football fans and analysts to track penalties and game incidents. Features real-time data scraping and comprehensive game analytics.",
    imageUrl: "./portfolio/penalty-verdict.jpg",
    technologies: ["Ionic", "Capacitor", "Node.js", "Firebase"],
    category: "Mobile App",
    link: "https://penaltyverdict.com",
    year: "2022",
    scope: "Full-stack Development"
  },
  {
    title: "Canvenient",
    description: "SaaS platform for apartment communities to manage valet trash services, featuring real-time service tracking and resident management.",
    imageUrl: "./portfolio/canvenient.jpg",
    technologies: ["Angular", "Firebase", "TypeScript", "Cloud Functions"],
    category: "Web Application",
    link: "https://canvenient.com",
    year: "2021",
    scope: "Frontend & Backend"
  },
  {
    title: "CCS Trash",
    description: "Comprehensive valet trash management solution with route optimization, service verification, and customer portal for multi-family properties.",
    imageUrl: "./portfolio/ccs-trash.jpg",
    technologies: ["Flutter", "Next.js", "Firebase", "Google Maps API"],
    category: "Mobile App",
    link: "https://go-ccs.com",
    year: "2022",
    scope: "Full-stack Development"
  },
  {
    title: "LaurelCRM",
    description: "Comprehensive internal CRM solution with advanced customer relationship management and analytics capabilities.",
    imageUrl: "./portfolio/laurel-crm.jpg",
    technologies: ["Angular", "TypeScript", "Material UI", "RESTful APIs"],
    category: "Web Application",
    link: "https://laurelcrm.com",
    year: "2023",
    scope: "Frontend Development"
  },
  {
    title: "MD Virtual Care",
    description: "Healthcare ecosystem with mobile apps and web portal, featuring secure patient data management and real-time communication.",
    imageUrl: "./portfolio/md-virtual-care.jpg",
    technologies: ["Ionic", "Capacitor", "Next.js", "Node.js"],
    category: "Healthcare",
    link: "https://mdvirtualcare.com",
    year: "2021",
    scope: "Full-stack Development"
  },
  {
    title: "SynctUp",
    description: "Contact synchronization and sharing platform enabling seamless contact management across devices with real-time updates.",
    imageUrl: "./portfolio/synctup.jpg",
    technologies: ["Ionic", "Capacitor", "MongoDB", "Node.js"],
    category: "Web Application",
    link: "https://app.synctup.com",
    year: "2020",
    scope: "Full-stack Development"
  }
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [displayedItems, setDisplayedItems] = useState<PortfolioItem[]>(portfolioItems);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  
  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(portfolioItems.map(item => item.category)))];
  
  // Filter items when category changes
  useEffect(() => {
    if (activeCategory === 'All') {
      setDisplayedItems(portfolioItems);
    } else {
      setDisplayedItems(portfolioItems.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);
  
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const fallbackImage = "https://via.placeholder.com/400x300/ff00ff/ffffff?text=AWESOME+PROJECT";
    const target = e.target as HTMLImageElement;
    target.src = fallbackImage;
  };
  
  return (
    <div id="portfolio" className="retro-section">
      <h2 className="retro-title" style={{ textAlign: 'center', marginBottom: '30px' }}>
        🎨 OUR AMAZING PORTFOLIO! 🎨
      </h2>
      
      <p style={{ 
        textAlign: 'center', 
        fontSize: '18px', 
        marginBottom: '30px',
        color: '#333'
      }}>
        A selection of <span className="retro-highlight">REAL-WORLD</span> applications we've built for clients across various industries!
      </p>

      {/* Category Filter */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: '10px', 
        marginBottom: '30px' 
      }}>
        {categories.map((category, index) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className="retro-button"
            style={{
              fontSize: '14px',
              background: activeCategory === category 
                ? 'linear-gradient(45deg, #ff0000, #00ff00, #0000ff)' 
                : 'linear-gradient(45deg, #ff0000, #00ff00)',
              color: activeCategory === category ? '#fff' : '#000',
              textShadow: activeCategory === category ? '2px 2px 0px #000' : 'none'
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Portfolio Table */}
      <div className="retro-table">
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th style={{ background: 'linear-gradient(45deg, #ff0000, #00ff00)', color: '#000', padding: '15px', textAlign: 'center' }}>
                🖼️ PROJECT
              </th>
              <th style={{ background: 'linear-gradient(45deg, #00ff00, #0000ff)', color: '#000', padding: '15px', textAlign: 'center' }}>
                📝 DESCRIPTION
              </th>
              <th style={{ background: 'linear-gradient(45deg, #0000ff, #ff00ff)', color: '#000', padding: '15px', textAlign: 'center' }}>
                💻 TECHNOLOGIES
              </th>
              <th style={{ background: 'linear-gradient(45deg, #ff00ff, #ffff00)', color: '#000', padding: '15px', textAlign: 'center' }}>
                🎯 ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {displayedItems.map((item, index) => (
              <tr key={index} style={{ background: index % 2 === 0 ? '#f0f0f0' : '#ffffff' }}>
                <td style={{ padding: '15px', border: '2px solid #000', textAlign: 'center' }}>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    onError={handleImageError}
                    className="retro-image"
                    style={{ 
                      width: '150px', 
                      height: '100px', 
                      objectFit: 'cover',
                      marginBottom: '10px'
                    }}
                  />
                  <div style={{ fontWeight: 'bold', fontSize: '16px', color: '#ff0000' }}>
                    {item.title}
                  </div>
                  <div style={{ fontSize: '12px', color: '#0000ff' }}>
                    {item.year} • {item.category}
                  </div>
                </td>
                <td style={{ padding: '15px', border: '2px solid #000' }}>
                  <p className="retro-text">{item.description}</p>
                  <div style={{ marginTop: '10px', fontSize: '12px', color: '#666' }}>
                    <strong>Scope:</strong> {item.scope}
                  </div>
                </td>
                <td style={{ padding: '15px', border: '2px solid #000' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                    {item.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        style={{
                          padding: '3px 8px',
                          background: '#ffffcc',
                          border: '2px solid #000',
                          fontSize: '11px',
                          fontWeight: 'bold'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {item.technologies.length > 3 && (
                      <span style={{
                        padding: '3px 8px',
                        background: '#ffccff',
                        border: '2px solid #000',
                        fontSize: '11px',
                        fontWeight: 'bold'
                      }}>
                        +{item.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </td>
                <td style={{ padding: '15px', border: '2px solid #000', textAlign: 'center' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <button 
                      onClick={() => setSelectedItem(item)}
                      className="retro-button"
                      style={{ fontSize: '12px' }}
                    >
                      👁️ VIEW DETAILS
                    </button>
                    
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="retro-button"
                        style={{ 
                          fontSize: '12px',
                          background: 'linear-gradient(45deg, #00ff00, #0000ff)',
                          color: '#fff',
                          textShadow: '2px 2px 0px #000'
                        }}
                      >
                        🌐 VISIT SITE
                      </a>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for detailed view */}
      {selectedItem && (
        <div style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          background: 'rgba(0,0,0,0.8)',
          zIndex: '1000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }} onClick={() => setSelectedItem(null)}>
          <div className="retro-card" style={{ 
            maxWidth: '600px', 
            width: '100%',
            maxHeight: '80vh',
            overflow: 'auto'
          }} onClick={(e) => e.stopPropagation()}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <img
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                onError={handleImageError}
                className="retro-image"
                style={{ 
                  width: '100%', 
                  maxWidth: '400px', 
                  height: '200px', 
                  objectFit: 'cover'
                }}
              />
            </div>
            
            <h3 style={{ 
              color: '#ff0000', 
              fontSize: '24px', 
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '15px'
            }}>
              {selectedItem.title}
            </h3>
            
            <div style={{ 
              background: '#000', 
              color: '#00ff00', 
              padding: '15px', 
              border: '3px solid #00ff00',
              fontFamily: 'Courier New, monospace',
              fontSize: '12px',
              marginBottom: '15px'
            }}>
              <div style={{ marginBottom: '5px' }}>
                📅 Year: {selectedItem.year}
              </div>
              <div style={{ marginBottom: '5px' }}>
                🏷️ Category: {selectedItem.category}
              </div>
              <div>
                🎯 Scope: {selectedItem.scope}
              </div>
            </div>
            
            <p className="retro-text" style={{ marginBottom: '15px' }}>
              {selectedItem.description}
            </p>
            
            <div style={{ marginBottom: '15px' }}>
              <h4 style={{ color: '#0000ff', marginBottom: '10px' }}>💻 Technologies Used:</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {selectedItem.technologies.map((tech, index) => (
                  <span key={index} style={{
                    padding: '5px 10px',
                    background: '#ffffcc',
                    border: '2px solid #000',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              {selectedItem.link && (
                <a
                  href={selectedItem.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="retro-button"
                  style={{
                    fontSize: '16px',
                    padding: '15px 30px',
                    background: 'linear-gradient(45deg, #ff0000, #00ff00, #0000ff)',
                    color: '#fff',
                    textShadow: '2px 2px 0px #000'
                  }}
                >
                  🚀 VISIT PROJECT! 🚀
                </a>
              )}
              <button
                onClick={() => setSelectedItem(null)}
                className="retro-button"
                style={{ 
                  fontSize: '14px', 
                  marginTop: '10px',
                  background: '#666',
                  color: '#fff'
                }}
              >
                ✕ CLOSE
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Call to action */}
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <div className="retro-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h3 style={{ 
            color: '#ff0000', 
            fontSize: '20px', 
            marginBottom: '15px',
            textAlign: 'center'
          }}>
            🔍 Looking for more examples?
          </h3>
          <p style={{ marginBottom: '20px', fontSize: '16px' }}>
            We've worked on many other <span className="retro-highlight">AMAZING</span> projects that aren't showcased here. 
            Contact us to discuss your specific requirements and see relevant examples!
          </p>
          <button 
            onClick={() => window.location.href = '#contact'}
            className="retro-button"
            style={{
              fontSize: '16px',
              padding: '15px 30px',
              background: 'linear-gradient(45deg, #ff0000, #00ff00, #0000ff)',
              color: '#fff',
              textShadow: '2px 2px 0px #000'
            }}
          >
            🚀 SCHEDULE A CONSULTATION! 🚀
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default Portfolio;
