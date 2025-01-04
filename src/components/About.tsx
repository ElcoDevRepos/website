import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const features = [
    {
      title: "Expert Development",
      description: "Our team brings years of experience in building scalable web and mobile applications using cutting-edge technologies.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "User-Centric Design",
      description: "We create intuitive interfaces that delight users while driving business growth through exceptional user experiences.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Agile Methodology",
      description: "We employ agile practices to ensure rapid development cycles and continuous delivery of value to our clients.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  const team = [
    {
      name: "Austin Hunter",
      role: "Founder, Lead Developer",
      image: "./IMG_8051_jpg.jpeg"
    },
    {
      name: "Ashley Hunter",
      role: "Founder, Office Manager",
      image: "./ashley.png"
    },
    {
      name: "Carter Williams",
      role: "Software Engineer, Lead Developer",
      image: "./carter.png"
    },
    {
      name: "Zach Taylor",
      role: "Backend Developer",
      image: "https://ui-avatars.com/api/?name=Zach+Taylor&background=0D8ABC&color=fff&size=400"
    },
    {
      name: "Devin Kelly",
      role: "Software Engineer",
      image: "./IMG_4705.jpeg"
    },
    {
      name: "Joey Fenoglio",
      role: "Software Engineer",
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
          {/* Features Section */}
          <div className="mb-32">
            {/* Header */}
            <div className="text-center mb-16">
              <motion.div variants={itemVariants}>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Elco Dev?
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  We transform ideas into powerful digital solutions, helping businesses thrive in the modern digital landscape.
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
                  A talented group of professionals dedicated to bringing your vision to life.
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
              Ready to bring your vision to life?
            </p>
            <button onClick={() => window.location.href = '#contact'} className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 font-medium text-lg shadow-lg hover:shadow-xl">
              Start Your Project
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
