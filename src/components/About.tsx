import React from 'react';

const About: React.FC = () => {
  const features = [
    {
      title: "👨‍👩‍👧‍👦 Family-First Approach",
      description: "As a family-owned business, we understand the importance of trust and treating every client like they're part of our extended family!",
      icon: "❤️"
    },
    {
      title: "🏘️ Small-Town Values",
      description: "We bring small-town hospitality to the digital world, ensuring personal attention and genuine care for every project we undertake!",
      icon: "🏠"
    },
    {
      title: "🤝 Equal Partnership",
      description: "Whether you're a startup or an established business, you'll receive the same dedicated attention and exceptional service from our team!",
      icon: "🤲"
    }
  ];

  const team = [
    {
      name: "Austin Hunter",
      role: "Founder, Lead Developer",
      image: "./IMG_4787.png"
    },
    {
      name: "Ashley Hunter",
      role: "Founder, Office Manager",
      image: "./ashley.png"
    },
    {
      name: "Carter Williams",
      role: "Lead Developer",
      image: "./carter.png"
    },
    {
      name: "Zach Taylor",
      role: "Lead Developer",
      image: "./zach1.png"
    },
    {
      name: "Devin Kelly",
      role: "Full Stack Developer",
      image: "./IMG_4789.png"
    },
    {
      name: "Joey Fenoglio",
      role: "Frontend Developer",
      image: "https://ui-avatars.com/api/?name=Joey+Fenoglio&background=0D8ABC&color=fff&size=400"
    }
  ];

  return (
    <div id="about" className="retro-section">
      {/* Values Section */}
      <div style={{ marginBottom: '40px' }}>
        <h2 className="retro-title" style={{ textAlign: 'center', marginBottom: '30px' }}>
          🏆 MORE THAN JUST AN AGENCY! 🏆
        </h2>
        
        <p style={{ 
          textAlign: 'center', 
          fontSize: '18px', 
          marginBottom: '30px',
          color: '#333'
        }}>
          We're a <span className="retro-highlight">FAMILY-OWNED</span> business bringing small-town values and personal attention to every digital project we touch!
        </p>

        {/* Features Table */}
        <div className="retro-table">
          <table style={{ width: '100%' }}>
            <thead>
              <tr>
                <th style={{ background: 'linear-gradient(45deg, #ff0000, #00ff00)', color: '#000', padding: '15px', textAlign: 'center' }}>
                  🎯 FEATURE
                </th>
                <th style={{ background: 'linear-gradient(45deg, #00ff00, #0000ff)', color: '#000', padding: '15px', textAlign: 'center' }}>
                  📝 DESCRIPTION
                </th>
                <th style={{ background: 'linear-gradient(45deg, #0000ff, #ff00ff)', color: '#000', padding: '15px', textAlign: 'center' }}>
                  🎨 ICON
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} style={{ background: index % 2 === 0 ? '#f0f0f0' : '#ffffff' }}>
                  <td style={{ padding: '15px', border: '2px solid #000', fontWeight: 'bold', fontSize: '16px' }}>
                    {feature.title}
                  </td>
                  <td style={{ padding: '15px', border: '2px solid #000' }}>
                    <p className="retro-text">{feature.description}</p>
                  </td>
                  <td style={{ padding: '15px', border: '2px solid #000', textAlign: 'center', fontSize: '24px' }}>
                    {feature.icon}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Team Section */}
      <div style={{ borderTop: '3px solid #000', paddingTop: '30px' }}>
        <h2 className="retro-title" style={{ textAlign: 'center', marginBottom: '30px' }}>
          👥 MEET OUR AWESOME TEAM! 👥
        </h2>
        
        <p style={{ 
          textAlign: 'center', 
          fontSize: '18px', 
          marginBottom: '30px',
          color: '#333'
        }}>
          Meet the faces behind your next project - a <span className="retro-highlight">CLOSE-KNIT</span> team that treats every client's vision as our own!
        </p>

        {/* Team Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '20px',
          marginBottom: '30px'
        }}>
          {team.map((member, index) => (
            <div key={index} className="retro-card" style={{ textAlign: 'center' }}>
              <img
                src={member.image}
                alt={member.name}
                className="retro-image"
                style={{ 
                  width: '120px', 
                  height: '120px', 
                  borderRadius: '0',
                  margin: '0 auto 15px auto',
                  objectFit: 'cover'
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=ff0000&color=fff&size=120`;
                }}
              />
              <h3 style={{ 
                color: '#ff0000', 
                fontSize: '16px', 
                fontWeight: 'bold',
                marginBottom: '5px'
              }}>
                {member.name}
              </h3>
              <p style={{ 
                color: '#0000ff', 
                fontSize: '14px', 
                fontWeight: 'bold'
              }}>
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <p style={{ 
          fontSize: '18px', 
          marginBottom: '20px',
          color: '#333'
        }}>
          Let's work together to bring your vision to life - you'll be treated like <span className="retro-highlight">FAMILY</span> every step of the way!
        </p>
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
          🚀 START A CONVERSATION! 🚀
        </button>
      </div>

      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <div className="retro-counter">
          👥 TEAM MEMBERS: 6 | 🏆 YEARS EXPERIENCE: 20+ | 🎯 PROJECTS COMPLETED: 100+ 👥
        </div>
      </div>
    </div>
  );
};

export default About;
