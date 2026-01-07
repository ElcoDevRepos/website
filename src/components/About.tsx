import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const features = [
    {
      title: "Family-First Approach",
      description: "As a family-owned business, we understand the importance of trust and treating every client like they're part of our extended family.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Small-Town Values",
      description: "We bring small-town hospitality to the digital world, ensuring personal attention and genuine care for every project we undertake.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "Equal Partnership",
      description: "Whether you're a startup or an established business, you'll receive the same dedicated attention and exceptional service from our team.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
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
    // {
    //   name: "Zach Taylor",
    //   role: "Lead Developer",
    //   image: "./zach1.png"
    // },
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Values Section */}
          <div className="mb-32">
            {/* Header */}
            <div className="text-center mb-16">
              <motion.div variants={itemVariants}>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  More Than Just an Agency
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  We're a family-owned business bringing small-town values and personal attention to every digital project we touch.
                </p>
              </motion.div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative">
                      <div className="inline-block p-3 bg-blue-100 text-blue-600 rounded-lg mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <motion.div
            variants={containerVariants}
            className="pt-16 border-t border-gray-200"
          >
            <div className="text-center mb-16">
              <motion.div variants={itemVariants}>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Meet Our Team
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Meet the faces behind your next project - a close-knit team that treats every client's vision as our own.
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="aspect-w-1 aspect-h-1 mx-auto">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="object-cover w-full h-full group-hover:scale-105 grayscale group-hover:grayscale-0 transition duration-300"
                      />
                    </div>
                    <div className="p-3 text-center">
                      <h3 className="text-lg font-bold text-gray-900 mb-0.5">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-medium text-sm">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-16"
          >
            <p className="text-lg text-gray-600 mb-6">
              Let's work together to bring your vision to life - you'll be treated like family every step of the way.
            </p>
            <button 
              onClick={() => window.location.href = '#contact'} 
              className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 font-medium text-lg shadow-lg hover:shadow-xl"
            >
              Start a Conversation
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
