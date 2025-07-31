import React, { useState, useEffect } from 'react';

const reviews = [
  {
    quote: "Austin is fantastic. I was really impressed with how well he handled everything, from the quality of his work to his problem-solving skills. He's great at figuring things out and getting the job done, no matter what challenges come up. His communication is spot on, he always keeps me informed and makes everything easy to understand. Working with Austin has been a great experience, and I can't recommend him enough!",
    author: "Jason Robinson",
    company: "Renew Music"
  },
  {
    quote: "I had the pleasure of collaborating with Austin on developing an app based on my UX designs. Austin's ability to overcome blockers and tackle development challenges ensured a smooth and efficient process. Not only did he execute the project quickly, but his collaborative approach made the experience enjoyable and productive. I highly recommend Austin to anyone seeking development services, his expertise and professionalism are truly commendable.",
    author: "Matt Khan",
    company: "AVRI Stories"
  },
  {
    quote: "These guys know code! I've had the opportunity to work with multiple company's over the years and Elco Dev is hands down the best. They treat every project as if it's there own no matter how big or small.",
    author: "Mike Nelson",
    company: "Ladder Suite"
  },
  {
    quote: "My boss found Elco & Austin through a freelancing website. The company that I work for was in search for a CRM database to help with our expanding work load. Austin has been building this from the ground up and we have been nothing but pleased with the progress. Austin is also available to talk if there is an issue or if we have a new idea. We are very excited to continue to work with him and grow this soon to be CRM tool.",
    author: "Marla Nesbella",
    company: "Laurel Medical"
  },
  {
    quote: "Austin and his development team have transformed my app idea into a tangible reality. Having had no prior experience in app development, Austin has established himself as indispensable in steering me through the nuances of this complex process. If you seek someone capable of bringing life into your app concept, look no further than Austin. He consistently upholds principles of honesty, fairness, and transparency in our interactions. Collaborating with Austin is comparable to experiencing the professionalism and expertise of a major corporation, combined with the personalized approach of a small business.",
    author: "Titus Cara",
    company: "Penalty Verdict"
  },
  {
    quote: "As an entrepreneur without much money trying to get a minimum viable product into existence, Elco Development has been the perfect partner. Austin built the entire project for less than a big firm would have charged for a few planning meetings. I'm not a programmer, and I send Austin some simple mock-ups of what I want, and a few days later, there it is working on my site. It's completely straightforward. I strongly recommend Elco to any entrepreneur. My project would still be just an idea if I had not found Austin.",
    author: "Charles Lyons",
    company: "Daily Dashboard"
  },
  {
    quote: "Austin, with Elco Dev, is an absolutely stellar developer and collaborator. We've worked together for 3 months so far, and he is capable of anything needed for any project, as he has proven in building our site. Obstacles present themselves often with any project, and we have reached solutions together, which he is able to move on without a problem. For example, rather than integrating Zoom for the video conferencing element of our site, he decide it would save money over time to build our own conferencing software, which he did from scratch. With my mind on things other than the product, I was grateful that he was able to have the vision of the company in mind and the willingness to take care of business. What an asset to any startup!",
    author: "William Mattison",
    company: "GOAT Tutors"
  },
  {
    quote: "Austin is a great person to work with! He is very understanding and consistent. He has met deadlines and exceeded expectations. The value of his work is rare to find with others.",
    author: "Bishal Khadka",
    company: "Beyond Auto Cores"
  },
  {
    quote: "Austin at Elco has been great to work with. He built and launched my mobile app, Bevvo, which is a mobile payment solution for the hospitality industry. Austin managed front end, back end, and database development including integrating third party applications to execute payment processing, reporting, etc. He also managed the publication process onto Apple and Google app stores while being swift in addressing any bugs that have popped up after publishing. I consider myself extremely lucky to have found Austin and I continue to enjoy working with him.",
    author: "Justin Garabed",
    company: "Bevvo"
  },
  {
    quote: "Austin is a great developer. Highly recommend.",
    author: "Collin Goodwin",
    company: "Saucer"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto advance testimonials
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
    }, 4000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div id="testimonials" className="retro-section">
      <h2 className="retro-title" style={{ textAlign: 'center', marginBottom: '30px' }}>
        ⭐ WHAT OUR CLIENTS SAY! ⭐
      </h2>
      
      <p style={{ 
        textAlign: 'center', 
        fontSize: '18px', 
        marginBottom: '30px',
        color: '#333'
      }}>
        Trusted by <span className="retro-highlight">ENTREPRENEURS</span> and businesses around the world!
      </p>

      {/* Featured Testimonial */}
      <div style={{ marginBottom: '30px' }}>
        <div className="retro-card" style={{ 
          background: 'linear-gradient(135deg, #000, #333)',
          color: '#fff',
          border: '3px solid #ffff00',
          textAlign: 'center'
        }}>
          <div style={{ 
            background: '#ffff00', 
            color: '#000', 
            padding: '10px', 
            marginBottom: '20px',
            fontWeight: 'bold',
            fontSize: '18px'
          }}>
            🌟 FEATURED TESTIMONIAL 🌟
          </div>
          
          <div style={{ 
            background: '#000', 
            color: '#00ff00', 
            padding: '20px', 
            border: '3px solid #00ff00',
            fontFamily: 'Courier New, monospace',
            fontSize: '14px',
            marginBottom: '20px',
            fontStyle: 'italic'
          }}>
            "{reviews[currentIndex].quote}"
          </div>
          
          <div style={{ 
            background: '#ff0000', 
            color: '#fff', 
            padding: '10px',
            fontWeight: 'bold'
          }}>
            👤 {reviews[currentIndex].author} - {reviews[currentIndex].company}
          </div>
        </div>
      </div>

      {/* Testimonials Table */}
      <div className="retro-table">
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th style={{ background: 'linear-gradient(45deg, #ff0000, #00ff00)', color: '#000', padding: '15px', textAlign: 'center' }}>
                💬 TESTIMONIAL
              </th>
              <th style={{ background: 'linear-gradient(45deg, #00ff00, #0000ff)', color: '#000', padding: '15px', textAlign: 'center' }}>
                👤 CLIENT
              </th>
              <th style={{ background: 'linear-gradient(45deg, #0000ff, #ff00ff)', color: '#000', padding: '15px', textAlign: 'center' }}>
                🏢 COMPANY
              </th>
              <th style={{ background: 'linear-gradient(45deg, #ff00ff, #ffff00)', color: '#000', padding: '15px', textAlign: 'center' }}>
                ⭐ RATING
              </th>
            </tr>
          </thead>
          <tbody>
            {reviews.slice(0, 6).map((review, index) => (
              <tr key={index} style={{ background: index % 2 === 0 ? '#f0f0f0' : '#ffffff' }}>
                <td style={{ padding: '15px', border: '2px solid #000' }}>
                  <div style={{ 
                    background: '#ffffcc', 
                    border: '2px solid #000', 
                    padding: '10px',
                    fontStyle: 'italic',
                    fontSize: '12px',
                    maxHeight: '100px',
                    overflow: 'auto'
                  }}>
                    "{review.quote.substring(0, 150)}..."
                  </div>
                </td>
                <td style={{ padding: '15px', border: '2px solid #000', textAlign: 'center' }}>
                  <div style={{ fontWeight: 'bold', color: '#ff0000', fontSize: '14px' }}>
                    {review.author}
                  </div>
                </td>
                <td style={{ padding: '15px', border: '2px solid #000', textAlign: 'center' }}>
                  <div style={{ color: '#0000ff', fontSize: '14px', fontWeight: 'bold' }}>
                    {review.company}
                  </div>
                </td>
                <td style={{ padding: '15px', border: '2px solid #000', textAlign: 'center' }}>
                  <div style={{ fontSize: '16px' }}>
                    ⭐⭐⭐⭐⭐
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Guestbook Style Testimonials */}
      <div style={{ marginTop: '30px' }}>
        <h3 style={{ 
          color: '#ff0000', 
          fontSize: '20px', 
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          📝 GUESTBOOK ENTRIES 📝
        </h3>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '15px' }}>
          {reviews.slice(6, 10).map((review, index) => (
            <div key={index} className="guestbook-entry">
              <div style={{ 
                background: '#000', 
                color: '#00ff00', 
                padding: '10px', 
                border: '2px solid #00ff00',
                fontFamily: 'Courier New, monospace',
                fontSize: '11px',
                marginBottom: '10px'
              }}>
                <div style={{ marginBottom: '5px' }}>
                  👤 {review.author}
                </div>
                <div>
                  🏢 {review.company}
                </div>
              </div>
              <p style={{ fontSize: '12px', fontStyle: 'italic' }}>
                "{review.quote.substring(0, 100)}..."
              </p>
              <div style={{ textAlign: 'right', marginTop: '10px', fontSize: '10px', color: '#666' }}>
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        <div className="retro-counter">
          ⭐ TOTAL REVIEWS: 10 | 🏆 AVERAGE RATING: 5.0 | 💯 SATISFACTION: 100% ⭐
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
