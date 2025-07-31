import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div className="retro-nav" style={{ position: 'sticky', top: '0', zIndex: '1000' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        {/* Logo */}
        <div style={{ cursor: 'pointer' }} onClick={handleLogoClick}>
          <div style={{ 
            background: '#ffff00', 
            color: '#000', 
            padding: '10px 15px', 
            border: '3px solid #000',
            fontFamily: 'Comic Neue, cursive',
            fontWeight: 'bold',
            fontSize: '18px',
            boxShadow: '3px 3px 0px #000',
            whiteSpace: 'nowrap'
          }}>
            🚀 ELCO DEV 🚀
          </div>
        </div>

        {/* Desktop Navigation */}
        <div style={{ 
          display: 'flex', 
          gap: '10px', 
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
          <button
            onClick={() => scrollToSection('home')}
            className="retro-button"
            style={{ fontSize: '14px', minHeight: '44px' }}
          >
            🏠 HOME
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="retro-button"
            style={{ fontSize: '14px', minHeight: '44px' }}
          >
            ℹ️ ABOUT
          </button>
          {/* <button
            onClick={() => window.open('/partners', '_blank')}
            className="retro-button"
            style={{ fontSize: '14px', minHeight: '44px' }}
          >
            🤝 PARTNERS
          </button> */}
          <button
            onClick={() => scrollToSection('testimonials')}
            className="retro-button"
            style={{ fontSize: '14px', minHeight: '44px' }}
          >
            ⭐ TESTIMONIALS
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="retro-button"
            style={{ 
              fontSize: '14px',
              minHeight: '44px',
              background: 'linear-gradient(45deg, #ff0000, #00ff00, #0000ff)',
              color: '#fff',
              textShadow: '2px 2px 0px #000'
            }}
          >
            📞 CONTACT US!
          </button>
        </div>

        {/* Mobile menu button */}
        <div style={{ display: 'none' }}>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="retro-button"
            style={{ 
              fontSize: '14px', 
              minHeight: '44px',
              minWidth: '44px'
            }}
          >
            {!isMobileMenuOpen ? '☰ MENU' : '✕ CLOSE'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div style={{ 
          marginTop: '10px', 
          padding: '10px', 
          background: '#000', 
          border: '2px solid #fff',
          borderRadius: '5px'
        }}>
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '8px'
          }}>
            <button
              onClick={() => scrollToSection('home')}
              className="retro-button"
              style={{ 
                fontSize: '14px', 
                width: '100%',
                minHeight: '44px'
              }}
            >
              🏠 HOME
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="retro-button"
              style={{ 
                fontSize: '14px', 
                width: '100%',
                minHeight: '44px'
              }}
            >
              ℹ️ ABOUT
            </button>
            {/* <button
              onClick={() => window.open('/partners', '_blank')}
              className="retro-button"
              style={{ 
                fontSize: '14px', 
                width: '100%',
                minHeight: '44px'
              }}
            >
              🤝 PARTNERS
            </button> */}
            <button
              onClick={() => scrollToSection('testimonials')}
              className="retro-button"
              style={{ 
                fontSize: '14px', 
                width: '100%',
                minHeight: '44px'
              }}
            >
              ⭐ TESTIMONIALS
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="retro-button"
              style={{ 
                fontSize: '14px', 
                width: '100%',
                minHeight: '44px',
                background: 'linear-gradient(45deg, #ff0000, #00ff00, #0000ff)',
                color: '#fff',
                textShadow: '2px 2px 0px #000'
              }}
            >
              📞 CONTACT US!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
