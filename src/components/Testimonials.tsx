import React from 'react';
import '../styles/testimonials.css';

const reviews = [
  {
    quote: "Austin is fantastic. I was really impressed with how well he handled everything, from the quality of his work to his problem-solving skills. He's great at figuring things out and getting the job done, no matter what challenges come up. His communication is spot on, he always keeps me informed and makes everything easy to understand. Working with Austin has been a great experience, and I can't recommend him enough!",
    author: "Jason Robinson",
    company: "Renew Music"
  },
  {
    quote: "My boss found Elco & Austin through a freelancing website. The company that I work for was in search for a CRM database to help with our expanding work load. Austin has been building this from the ground up and we have been nothing but pleased with the progress. Austin is also available to talk if there is an issue or if we have a new idea. We are very excited to continue to work with him and grow this soon to be CRM tool.",
    author: "Marla Nesbella",
    company: "Laurel Medical"
  },
  {
    quote: "Austin is a great developer. Highly recommend.",
    author: "Collin Goodwin",
    company: "Saucer"
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
    quote: "Austin and his development team have transformed my app idea into a tangible reality. Having had no prior experience in app development, Austin has established himself as indispensable in steering me through the nuances of this complex process. If you seek someone capable of bringing life into your app concept, look no further than Austin. He consistently upholds principles of honesty, fairness, and transparency in our interactions. Collaborating with Austin is comparable to experiencing the professionalism and expertise of a major corporation, combined with the personalized approach of a small business.",
    author: "Titus Cara",
    company: "Penalty Verdict"
  },
  {
    quote: "As an entrepreneur without much money trying to get a minimum viable product into existence, Elco Development has been the perfect partner. Austin built the entire project for less than a big firm would have charged for a few planning meetings. I'm not a programmer, and I send Austin some simple mock-ups of what I want, and a few days later, there it is working on my site. It's completely straightforward. I strongly recommend Elco to any entrepreneur. My project would still be just an idea if I had not found Austin.",
    author: "RCV123 Admin",
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
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">What Our Clients Say</h2>
        
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of reviews */}
            <div className="flex space-x-8">
              {reviews.map((review, index) => (
                <div 
                  key={index}
                  className="w-[400px] flex-shrink-0 p-8 bg-gray-800 rounded-lg shadow-lg"
                >
                  <div className="h-[200px] overflow-y-auto mb-4">
                    <p className="text-lg italic">"{review.quote}"</p>
                  </div>
                  <p className="font-semibold text-blue-400">- {review.author}</p>
                  <p className="text-gray-400">{review.company}</p>
                </div>
              ))}
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex space-x-8">
              {reviews.map((review, index) => (
                <div 
                  key={`duplicate-${index}`}
                  className="w-[400px] flex-shrink-0 p-8 bg-gray-800 rounded-lg shadow-lg"
                >
                  <div className="h-[200px] overflow-y-auto mb-4">
                    <p className="text-lg italic">"{review.quote}"</p>
                  </div>
                  <p className="font-semibold text-blue-400">- {review.author}</p>
                  <p className="text-gray-400">{review.company}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            Claim your Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
