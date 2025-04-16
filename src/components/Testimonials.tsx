import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid';
import '../styles/testimonials.css';

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

// Testimonial Card Component
const TestimonialCard = ({ review, featured = false }) => {
  return (
    <div className={`testimonial-card relative h-full flex flex-col p-6 md:p-8 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl ${featured ? 'border border-blue-500' : ''}`}>
      <div className="flex space-x-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="h-5 w-5 text-yellow-500" />
        ))}
      </div>
      
      <p className="text-white text-sm md:text-base italic mb-6 flex-grow">"{review.quote}"</p>
      
      <div className="mt-auto">
        <p className="font-bold text-blue-400">{review.author}</p>
        <p className="text-sm text-gray-400">{review.company}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Function to handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Navigation functions
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === reviews.length - 1 ? 0 : prevIndex + 1));
  };

  // Auto advance for mobile carousel
  useEffect(() => {
    if (isMobile) {
      const timer = setTimeout(goToNext, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, isMobile]);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="max-w-2xl mx-auto text-gray-600">Trusted by entrepreneurs and businesses around the world</p>
        </div>
        
        {/* Mobile View - Carousel */}
        {isMobile && (
          <div className="relative px-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <TestimonialCard review={reviews[currentIndex]} featured={true} />
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={goToPrev}
              className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1 bg-white rounded-full p-1 shadow-md"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
            </button>
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1 bg-white rounded-full p-1 shadow-md"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        )}
        
        {/* Desktop View - Grid */}
        {!isMobile && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {reviews.slice(0, 6).map((review, index) => (
              <div key={index} className="testimonial-grid-item">
                <TestimonialCard review={review} featured={index === 0} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
