import React from 'react';

const Footer: React.FC = () => {
  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="retro-footer">
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-between' }}>
        {/* Company Info */}
        <div style={{ flex: '1', minWidth: '250px' }}>
          <div style={{ 
            background: '#ffff00', 
            color: '#000', 
            padding: '10px 15px', 
            border: '3px solid #000',
            fontFamily: 'Comic Neue, cursive',
            fontWeight: 'bold',
            fontSize: '18px',
            boxShadow: '3px 3px 0px #000',
            marginBottom: '15px',
            textAlign: 'center'
          }}>
            🚀 ELCO DEVELOPMENT STUDIO 🚀
          </div>
          <p style={{ color: '#ccc', fontSize: '14px', lineHeight: '1.6' }}>
            We transform ideas into <span className="retro-highlight">EXCEPTIONAL</span> digital experiences, 
            crafting custom solutions that drive business growth since 2019!
          </p>
        </div>

        {/* Quick Links */}
        <div style={{ flex: '1', minWidth: '200px' }}>
          <h3 style={{ 
            color: '#ffff00', 
            fontSize: '18px', 
            marginBottom: '15px',
            textShadow: '2px 2px 0px #000'
          }}>
            🔗 QUICK LINKS 🔗
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button
              onClick={() => handleNavigation('home')}
              className="retro-button"
              style={{ fontSize: '12px', width: '100%', textAlign: 'left' }}
            >
              🏠 HOME
            </button>
            <button
              onClick={() => handleNavigation('about')}
              className="retro-button"
              style={{ fontSize: '12px', width: '100%', textAlign: 'left' }}
            >
              ℹ️ ABOUT US
            </button>
            <button
              onClick={() => handleNavigation('services')}
              className="retro-button"
              style={{ fontSize: '12px', width: '100%', textAlign: 'left' }}
            >
              💻 SERVICES
            </button>
            <button
              onClick={() => handleNavigation('contact')}
              className="retro-button"
              style={{ fontSize: '12px', width: '100%', textAlign: 'left' }}
            >
              📞 CONTACT
            </button>
          </div>
        </div>

        {/* Contact Info */}
        <div style={{ flex: '1', minWidth: '250px' }}>
          <h3 style={{ 
            color: '#ffff00', 
            fontSize: '18px', 
            marginBottom: '15px',
            textShadow: '2px 2px 0px #000'
          }}>
            📞 GET IN TOUCH 📞
          </h3>
          <div style={{ 
            background: '#000', 
            color: '#00ff00', 
            padding: '15px', 
            border: '3px solid #00ff00',
            fontFamily: 'Courier New, monospace',
            fontSize: '12px'
          }}>
            <div style={{ marginBottom: '10px' }}>
              📧 Email: austin@elcodev.com
            </div>
            <div style={{ marginBottom: '10px' }}>
              📍 Location: Nashville, TN
            </div>
            <div style={{ marginBottom: '10px' }}>
              📱 Phone: 615-784-8066
            </div>
            <div style={{ marginTop: '15px' }}>
              <div style={{ marginBottom: '5px' }}>🌐 Social Media:</div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <a
                  href="https://github.com/ElcoDevRepos"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    color: '#00ff00', 
                    textDecoration: 'none',
                    fontSize: '16px'
                  }}
                >
                  📚 GitHub
                </a>
                <a
                  href="https://www.linkedin.com/company/elco-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    color: '#00ff00', 
                    textDecoration: 'none',
                    fontSize: '16px'
                  }}
                >
                  💼 LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ 
        borderTop: '3px solid #333', 
        marginTop: '20px', 
        paddingTop: '15px', 
        textAlign: 'center',
        color: '#ccc'
      }}>
        <p style={{ fontSize: '14px', marginBottom: '10px' }}>
          © {currentYear} Elco Dev, LLC. All rights reserved.
        </p>
        <div style={{ fontSize: '12px', color: '#999' }}>
          🌟 BEST VIEWED WITH INTERNET EXPLORER 6.0 | RESOLUTION: 800x600 | LAST UPDATED: 2003 🌟
        </div>
      </div>
    </div>
  );
};

export default Footer;
