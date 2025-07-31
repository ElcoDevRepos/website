import React from 'react';

const Hero: React.FC = () => {
  return (
    <>
      <div className="retro-header">
        <h1 className="retro-title retro-sparkle">
          🚀 ELCO DEVELOPMENT STUDIO 🚀
        </h1>
        <div className="retro-subtitle">
          Professional Web & Mobile App Development Since 2019!
        </div>
      </div>

      <div className="retro-section">
        <h2 className="retro-glow" style={{ fontSize: '2em', textAlign: 'center', marginBottom: '20px' }}>
          🎯 WE BUILD AWESOME STUFF! 🎯
        </h2>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
          <div className="retro-card" style={{ flex: '1', minWidth: '250px' }}>
            <h3 style={{ color: '#ff0000', fontSize: '1.5em', marginBottom: '10px' }}>💻 WEB APPS</h3>
            <p className="retro-text">
              We create <span className="retro-highlight">AMAZING</span> web applications that will blow your mind! 
              From simple websites to complex enterprise solutions, we do it all!
            </p>
            <div style={{ textAlign: 'center', marginTop: '15px' }}>
              <button className="retro-button" onClick={() => window.location.href = '#contact'}>
                🚀 GET QUOTE NOW! 🚀
              </button>
            </div>
          </div>

          <div className="retro-card" style={{ flex: '1', minWidth: '250px' }}>
            <h3 style={{ color: '#00ff00', fontSize: '1.5em', marginBottom: '10px' }}>📱 MOBILE APPS</h3>
            <p className="retro-text">
              Mobile apps for <span className="retro-highlight">iPhone</span> and <span className="retro-highlight">Android</span>! 
              We make apps that people actually want to use!
            </p>
            <div style={{ textAlign: 'center', marginTop: '15px' }}>
              <button className="retro-button" onClick={() => window.location.href = '#portfolio'}>
                👀 VIEW OUR WORK! 👀
              </button>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <img 
            src="./hero-image.webp" 
            alt="Web Development" 
            className="retro-image"
            style={{ maxWidth: '400px', height: 'auto' }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://via.placeholder.com/400x300/ff00ff/ffffff?text=AWESOME+WEB+DEVELOPMENT";
            }}
          />
        </div>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <div style={{ 
            background: '#000', 
            color: '#00ff00', 
            padding: '15px', 
            border: '3px solid #00ff00',
            fontFamily: 'Courier New, monospace',
            fontSize: '14px'
          }}>
            ⭐⭐⭐⭐⭐ "Austin managed front end, back end, and database development including integrating third party applications to execute payment processing, reporting, etc. I consider myself extremely lucky to have found Austin." - Justin Garabed, Bevvo ⭐⭐⭐⭐⭐
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
