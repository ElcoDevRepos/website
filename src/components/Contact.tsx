import React from 'react';
import { motion } from 'framer-motion';
import { InlineWidget } from 'react-calendly';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
          {/* Left column - Contact info and benefits */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Let's Discuss Your Project
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                Book a free 30-minute consultation to discuss your project requirements and get expert advice on your development needs.
              </p>
              
              {/* Benefits of booking */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">What you'll get:</h3>
                <ul className="space-y-3">
                  {[
                    'Custom project scope assessment',
                    'Technology recommendations',
                    'Timeline and budget estimates',
                    'Development roadmap',
                    'No-pressure conversation'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Success story */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-100 shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="flex -space-x-2 mr-3">
                    <img 
                      src="https://ui-avatars.com/api/?name=Justin+Garabed&background=2563EB&color=fff" 
                      alt="Justin Garabed" 
                      className="w-10 h-10 rounded-full border-2 border-white" 
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Justin Garabed</p>
                    <p className="text-sm text-gray-600">Bevvo</p>
                  </div>
                </div>
                <p className="text-gray-700 italic text-sm">"Austin managed front end, back end, and database development including integrating third party applications to execute payment processing, reporting, etc. I consider myself extremely lucky to have found Austin."</p>
              </div>
              
              {/* Quick contact options */}
              <div className="mt-8">
                <p className="text-gray-700 font-medium mb-3">Prefer direct contact?</p>
                <div className="flex flex-col space-y-3">
                  <a
                    href="tel:+16155879346"
                    className="inline-flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (615) 784-8066
                  </a>
                  <a
                    href="mailto:austin@elcodev.com"
                    className="inline-flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    austin@elcodev.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right column - Calendly embed */}
          {/* <motion.div 
            className="lg:col-span-2 bg-white rounded-3xl shadow-xl p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-6 py-4 px-6 bg-blue-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Ready to transform your vision into reality?</h3>
              <p className="text-gray-600">Select a time slot that works for you. Our calendar is updated in real-time.</p>
            </div>
            
            <div className="calendly-container" style={{ height: '650px' }}>
              <InlineWidget
                url="https://calendly.com/elco-dev/consult"
                styles={{ height: '100%' }}
              />
            </div>
            
            <div className="mt-6 flex items-center justify-between bg-gray-50 rounded-lg p-4">
              <div className="text-sm text-gray-600">
                <span className="font-medium">100% confidential.</span> Your information is secure.
              </div>
              <div className="flex items-center space-x-2">
                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-600">SSL Encrypted</span>
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
