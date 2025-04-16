import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  // Default placeholder avatar URLs for fallback
  const placeholderAvatars = [
    'https://ui-avatars.com/api/?name=Cory+Johnson&background=0D8ABC&color=fff',
    'https://ui-avatars.com/api/?name=Justin+Garabed&background=0D8ABC&color=fff',
    'https://ui-avatars.com/api/?name=Austin+Elco&background=0D8ABC&color=fff',
    'https://ui-avatars.com/api/?name=Collin+Goodwin&background=0D8ABC&color=fff'
  ];
  
  return (
    <section id="home" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 max-w-2xl pl-4 md:pl-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-4">
                <span className="bg-blue-600 text-white font-medium px-4 py-1.5 rounded-full text-sm shadow-sm">Trusted by Our Clients</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                We Build <span className="text-blue-600">Professional</span> Web & Mobile Apps
              </h1>
              
              <p className="text-xl text-gray-700 mb-6">
                From MVPs to enterprise solutions, our development team delivers applications that <strong>help businesses grow</strong>.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                  <svg className="h-4 w-4 text-blue-600 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-gray-800">Clear project quotes</span>
                </div>
                <div className="flex items-center bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                  <svg className="h-4 w-4 text-blue-600 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-gray-800">Regular progress updates</span>
                </div>
                <div className="flex items-center bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100">
                  <svg className="h-4 w-4 text-blue-600 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-medium text-gray-800">Responsive communication</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => window.location.href = '#contact'} 
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium text-lg shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  Schedule a Consultation
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                <button 
                  onClick={() => window.location.href = '#portfolio'} 
                  className="px-8 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300 font-medium text-lg"
                >
                  View Our Work
                </button>
              </div>
              
              <div className="mt-8 flex items-center bg-white p-3 rounded-lg shadow-sm border border-gray-100 max-w-xs">
                <div className="flex -space-x-2">
                  {placeholderAvatars.map((avatar, i) => (
                    <img 
                      key={i}
                      src={avatar}
                      alt={`Client ${i+1}`} 
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <div className="ml-3">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map(i => (
                      <svg key={i} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 15.934l6.106 3.272-1.172-6.814 4.953-4.825-6.839-.993L10 0 6.952 6.574l-6.839.993 4.953 4.825-1.172 6.814L10 15.934z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-sm font-medium text-gray-700">
                    <span className="font-bold">Rated highly</span> by our clients
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative">
            <motion.div
              className="bg-transparent p-2 rounded-lg max-w-lg mx-auto"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img
              src="./hero-image.webp"
              alt="Web Development"
                className="w-full h-auto rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://via.placeholder.com/600x400?text=Web+Development";
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
