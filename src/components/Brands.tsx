import React from 'react';

interface Brand {
  name: string;
  logo: string;
  url: string;
}

const Brands: React.FC = () => {
  const brands: Brand[] = [
    {
      name: 'CCS',
      logo: '/assets/brands/ccs.png',
      url: 'https://www.go-ccs.com'
    },
    {
        name: "Home Depot",
        logo: '/assets/brands/home-depot.jpg',
        url: 'https://www.homedepot.com'
    },
    {
        name: "TN State Parks",
        logo: '/assets/brands/tsp-logo.svg',
        url: 'https://tnstateparks.com/'
    },
    {
        name: "Ladder Suite",
        logo: '/assets/brands/ladder-suite.png',
        url: 'https://www.laddersuite.com'
    },
  ];

  // If no brands are configured, don't render the section
  if (brands.length === 0) return null;

  return (
    <div className="retro-section">
      <h2 className="retro-title" style={{ textAlign: 'center', marginBottom: '30px' }}>
        🏆 TRUSTED BY INDUSTRY LEADERS! 🏆
      </h2>
      
      <p style={{ 
        textAlign: 'center', 
        fontSize: '18px', 
        marginBottom: '30px',
        color: '#333'
      }}>
        We work with some of the most <span className="retro-highlight">INNOVATIVE</span> companies in the world!
      </p>

      {/* Brands Table */}
      <div className="retro-table">
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th style={{ background: 'linear-gradient(45deg, #ff0000, #00ff00)', color: '#000', padding: '15px', textAlign: 'center' }}>
                🏢 COMPANY
              </th>
              <th style={{ background: 'linear-gradient(45deg, #00ff00, #0000ff)', color: '#000', padding: '15px', textAlign: 'center' }}>
                🖼️ LOGO
              </th>
              <th style={{ background: 'linear-gradient(45deg, #0000ff, #ff00ff)', color: '#000', padding: '15px', textAlign: 'center' }}>
                🌐 WEBSITE
              </th>
            </tr>
          </thead>
          <tbody>
            {brands.map((brand, index) => (
              <tr key={index} style={{ background: index % 2 === 0 ? '#f0f0f0' : '#ffffff' }}>
                <td style={{ padding: '15px', border: '2px solid #000', textAlign: 'center' }}>
                  <div style={{ 
                    fontWeight: 'bold', 
                    fontSize: '18px', 
                    color: '#ff0000',
                    textShadow: '2px 2px 0px #000'
                  }}>
                    {brand.name}
                  </div>
                </td>
                <td style={{ padding: '15px', border: '2px solid #000', textAlign: 'center' }}>
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="retro-image"
                    style={{ 
                      maxWidth: '120px', 
                      maxHeight: '60px', 
                      objectFit: 'contain'
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/120x60/ff00ff/ffffff?text=${encodeURIComponent(brand.name)}`;
                    }}
                  />
                </td>
                <td style={{ padding: '15px', border: '2px solid #000', textAlign: 'center' }}>
                  <a
                    href={brand.url}
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Brand Grid for Visual Display */}
      {/* <div style={{ marginTop: '30px' }}>
        <h3 style={{ 
          color: '#ff0000', 
          fontSize: '20px', 
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          🎨 BRAND LOGOS 🎨
        </h3>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '20px'
        }}>
          {brands.map((brand, index) => (
            <div key={index} className="retro-card" style={{ textAlign: 'center' }}>
              <img
                src={brand.logo}
                alt={brand.name}
                className="retro-image"
                style={{ 
                  maxWidth: '150px', 
                  maxHeight: '80px', 
                  objectFit: 'contain',
                  margin: '0 auto 15px auto'
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://via.placeholder.com/150x80/ff00ff/ffffff?text=${encodeURIComponent(brand.name)}`;
                }}
              />
              <div style={{ 
                fontWeight: 'bold', 
                fontSize: '16px', 
                color: '#0000ff',
                marginBottom: '10px'
              }}>
                {brand.name}
              </div>
              <a
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="retro-button"
                style={{ fontSize: '12px' }}
              >
                🌐 VISIT WEBSITE
              </a>
            </div>
          ))}
        </div>
      </div> */}

      {/* <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <div className="retro-counter">
          🏆 CLIENTS SERVED: 4 | 🌟 PARTNERSHIP YEARS: 5+ | 💼 INDUSTRY LEADERS: 100% 🏆
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <div className="hit-counter">
          🤝 PARTNERSHIPS: 4 | 📈 GROWTH: 300% | 🎯 SUCCESS RATE: 100% 🤝
        </div>
      </div> */}
    </div>
  );
};

export default Brands; 