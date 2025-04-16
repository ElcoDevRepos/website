import React, { useState } from 'react';
import { CodeBracketIcon, DevicePhoneMobileIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Custom Web Development',
    description: 'Modern, scalable web applications built with cutting-edge technologies. From enterprise solutions to startup MVPs, we deliver robust web applications that drive business growth.',
    icon: CodeBracketIcon,
    benefits: [
      'Faster time-to-market with agile development',
      'Reduced tech debt through clean architecture',
      'Improved user engagement with intuitive UIs'
    ],
    caseStudy: {
      client: 'Daily Dashboard',
      industry: 'Productivity',
      outcome: 'Delivered MVP within project timeline',
      quote: "Austin was easy to work with and delivered our project on time. He understood what we needed and worked within our budget constraints."
    }
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that provide seamless user experiences across all devices. We build apps that your users will love.',
    icon: DevicePhoneMobileIcon,
    benefits: [
      'Cross-platform support (iOS & Android)',
      'Intuitive UX/UI design patterns',
      'Offline functionality & performance optimization'
    ],
    caseStudy: {
      client: 'Bevvo',
      industry: 'Hospitality',
      outcome: 'Successfully launched on App Store',
      quote: "Austin helped build our payment processing app from concept to launch. He was responsive to feedback and handled the technical integrations professionally."
    }
  },
  {
    title: 'Staff Augmentation',
    description: 'Strengthen your team with our experienced developers. We provide skilled professionals who integrate seamlessly with your existing workforce.',
    icon: UserGroupIcon,
    benefits: [
      'Scale your team up or down as needed',
      'Access to specialized skill sets',
      'No recruitment or onboarding overhead'
    ],
    caseStudy: {
      client: 'GOAT Tutors',
      industry: 'Education',
      outcome: 'Improved development efficiency',
      quote: "Austin integrated well with our existing team and helped us implement new features that we were struggling with. His expertise was valuable to our project."
    }
  },
];

const Services: React.FC = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  
  const toggleExpand = (index: number) => {
    if (expandedService === index) {
      setExpandedService(null);
    } else {
      setExpandedService(index);
    }
  };
  
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Using our expertise to deliver quality software solutions that meet your business needs
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                expandedService === index ? 'transform -translate-y-2 shadow-xl' : 'hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              {/* Service Card Header */}
              <div className="p-8">
                <service.icon className="h-12 w-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                {/* Benefits List */}
                <ul className="space-y-2 mb-6">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => toggleExpand(index)}
                  className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors"
                >
                  {expandedService === index ? (
                    <>
                      <span>View Less</span>
                      <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    </>
                  ) : (
                    <>
                      <span>View Client Story</span>
                      <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
              
              {/* Expandable Case Study */}
              <div 
                className={`bg-gray-50 border-t border-gray-100 transition-all duration-300 overflow-hidden ${
                  expandedService === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-8">
                  <h4 className="font-semibold text-lg text-gray-900 mb-2">Client: {service.caseStudy.client}</h4>
                  <div className="flex space-x-4 mb-4">
                    <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                      {service.caseStudy.industry}
                    </div>
                    <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                      {service.caseStudy.outcome}
                    </div>
                  </div>
                  <blockquote className="italic text-gray-600 border-l-4 border-blue-300 pl-4 py-2 mb-4">
                    "{service.caseStudy.quote}"
                  </blockquote>
                  <a 
                    href="#contact" 
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700 transition-colors mt-2"
                  >
                    Discuss Your Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
