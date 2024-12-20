import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 max-w-2xl pl-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Expert Full Stack Web & Mobile Development
              </h1>
              <p className="text-xl text-gray-600 mb-8">
              We specialize in helping visionaries develop user-centric applications - from technical founders to entrepreneurs with the next million-dollar idea.
              </p>
              <button onClick={() => window.location.href = '#contact'} className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 font-medium text-lg shadow-lg hover:shadow-xl">
                Schedule a FREE Consultation
              </button>
            </motion.div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative">
            <motion.img
              src="./hero-image.webp"
              alt="Web and Mobile Development"
              className="w-full h-auto max-w-lg mx-auto rounded-lg"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 1, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
