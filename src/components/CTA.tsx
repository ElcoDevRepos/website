import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-blue-600 z-0">
        <img 
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-20"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 md:p-12 shadow-2xl">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1 bg-blue-200 bg-opacity-30 text-white rounded-full text-sm font-semibold mb-4">
                Book a Consultation
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Get a Project Assessment & Development Plan
              </h2>
              <p className="text-lg md:text-xl text-blue-100 mb-8">
                Schedule a consultation to discuss your project ideas and requirements. We'll help you understand the development process and potential solutions.
              </p>
              
              {/* Feature list */}
              <div className="grid md:grid-cols-3 gap-6 mb-10 text-left">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-white bg-opacity-20 rounded-full mr-3">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Project review</p>
                    <p className="text-blue-200 text-sm">Evaluate your project requirements</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-white bg-opacity-20 rounded-full mr-3">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Development options</p>
                    <p className="text-blue-200 text-sm">Discuss potential approaches</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-white bg-opacity-20 rounded-full mr-3">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-medium">Technology suggestions</p>
                    <p className="text-blue-200 text-sm">Appropriate tech for your project</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = '#contact'}
                className="flex-1 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors duration-300 shadow-lg flex items-center justify-center"
              >
                <span>Schedule Your Session</span>
                <svg className="ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <button
                onClick={() => window.location.href = '#services'}
                className="flex-1 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300"
              >
                View Our Services
              </button>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-blue-100 text-sm">No commitment required. We're here to discuss your project needs.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
