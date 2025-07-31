import React from 'react';

const CTA: React.FC = () => {
  return (
    <div className="retro-section" style={{ 
      background: 'linear-gradient(45deg, #ff0000, #00ff00, #0000ff, #ff00ff)',
      backgroundSize: '400% 400%',
      animation: 'gradientShift 3s ease infinite'
    }}>
      <div className="retro-card" style={{ 
        background: 'rgba(255, 255, 255, 0.9)',
        border: '5px solid #000',
        textAlign: 'center'
      }}>
        <div style={{ 
          background: '#ffff00', 
          color: '#000', 
          padding: '15px', 
          marginBottom: '20px',
          fontWeight: 'bold',
          fontSize: '20px',
          border: '3px solid #000'
        }}>
          🚀 BOOK A CONSULTATION! 🚀
        </div>
        
        <h2 style={{ 
          fontSize: '28px', 
          fontWeight: 'bold', 
          color: '#ff0000',
          marginBottom: '15px',
          textShadow: '3px 3px 0px #000'
        }}>
          Get a Project Assessment & Development Plan
        </h2>
        
        <p style={{ 
          fontSize: '18px', 
          marginBottom: '25px',
          color: '#333'
        }}>
          Schedule a consultation to discuss your project ideas and requirements. We'll help you understand the development process and potential solutions!
        </p>
        
        {/* Feature Table */}
        <div className="retro-table" style={{ marginBottom: '25px' }}>
          <table style={{ width: '100%' }}>
            <thead>
              <tr>
                <th style={{ background: 'linear-gradient(45deg, #ff0000, #00ff00)', color: '#000', padding: '15px', textAlign: 'center' }}>
                  ✅ FEATURE
                </th>
                <th style={{ background: 'linear-gradient(45deg, #00ff00, #0000ff)', color: '#000', padding: '15px', textAlign: 'center' }}>
                  📝 DESCRIPTION
                </th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: '#f0f0f0' }}>
                <td style={{ padding: '15px', border: '2px solid #000', fontWeight: 'bold', color: '#ff0000' }}>
                  🔍 Project Review
                </td>
                <td style={{ padding: '15px', border: '2px solid #000' }}>
                  Evaluate your project requirements and scope
                </td>
              </tr>
              <tr style={{ background: '#ffffff' }}>
                <td style={{ padding: '15px', border: '2px solid #000', fontWeight: 'bold', color: '#00ff00' }}>
                  💻 Development Options
                </td>
                <td style={{ padding: '15px', border: '2px solid #000' }}>
                  Discuss potential approaches and technologies
                </td>
              </tr>
              <tr style={{ background: '#f0f0f0' }}>
                <td style={{ padding: '15px', border: '2px solid #000', fontWeight: 'bold', color: '#0000ff' }}>
                  🛠️ Technology Suggestions
                </td>
                <td style={{ padding: '15px', border: '2px solid #000' }}>
                  Recommend appropriate tech for your project
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '15px', 
          justifyContent: 'center',
          marginBottom: '20px'
        }}>
          <button
            onClick={() => window.location.href = '#contact'}
            className="retro-button"
            style={{
              fontSize: '18px',
              padding: '15px 30px',
              background: 'linear-gradient(45deg, #ff0000, #00ff00, #0000ff)',
              color: '#fff',
              textShadow: '2px 2px 0px #000'
            }}
          >
            🚀 SCHEDULE YOUR SESSION! 🚀
          </button>
          
          <button
            onClick={() => window.location.href = '#services'}
            className="retro-button"
            style={{
              fontSize: '16px',
              padding: '15px 25px',
              background: 'linear-gradient(45deg, #ffff00, #ff00ff)',
              color: '#000',
              fontWeight: 'bold'
            }}
          >
            👀 VIEW OUR SERVICES 👀
          </button>
        </div>
        
        <div style={{ 
          background: '#000', 
          color: '#00ff00', 
          padding: '15px', 
          border: '3px solid #00ff00',
          fontFamily: 'Courier New, monospace',
          fontSize: '14px'
        }}>
          💡 NO COMMITMENT REQUIRED! We're here to discuss your project needs! 💡
        </div>
      </div>

     
    </div>
  );
};

export default CTA;
