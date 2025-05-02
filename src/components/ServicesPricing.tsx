import React from 'react';
import { motion } from 'framer-motion';
import { InlineWidget } from 'react-calendly';

const ServicesPricing: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 bg-[#0A0A0A] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-800 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-800 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-800 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Get Your MVP in <span className="text-blue-500">Just 14 Days</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From simple sketches to full-scale development, we'll bring your vision to life at lightning speed.
            </p>
            
            {/* Quick Schedule Button */}
            <motion.div 
              variants={itemVariants}
              className="mt-8"
            >
              <a 
                href="#contact-form"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full text-lg transition-colors duration-300 shadow-lg hover:shadow-blue-500/20"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule a Consultation Now
              </a>
            </motion.div>
          </motion.div>

          {/* Highlight Banner */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-6 mb-12 shadow-lg shadow-blue-900/20"
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div>
                  <h2 className="text-2xl font-bold text-white">Rapid Delivery with Gold-Standard Development</h2>
                  <p className="text-blue-100">We leverage modern tools and best practices to accelerate development while maintaining quality</p>
                </div>
              </div>
              <a 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px'
                }}
                href="#contact-form"
                className="px-6 py-3 bg-white text-blue-700 font-bold rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-md"
              >
                Book Your Spot Now
                <p className="text-xs">Spots are limited</p>
              </a>
            </div>
          </motion.div>

          {/* Pricing Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tier 1: Design to Frontend */}
            <motion.div 
              variants={itemVariants}
              className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300 shadow-xl hover:shadow-blue-900/20"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Figma to Frontend</h3>
                <div className="text-blue-500 text-3xl font-bold mb-1">$3,000</div>
                <p className="text-gray-400 mb-6">Starting price</p>
                <div className="bg-blue-900/20 p-3 rounded-lg mb-6">
                  <p className="text-blue-300 font-medium">
                    <span className="text-blue-200 font-bold">Any design format works!</span> From Figma to napkin sketches, we'll bring your vision to life.
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {[
                    'Turn any design format into code',
                    'Responsive design implementation',
                    'Interactive UI elements & animations',
                    'Cross-browser compatibility',
                    'Performance optimization',
                    '<span class="font-bold text-blue-400">14-day lightning delivery</span>'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <svg className="h-5 w-5 text-blue-500 mt-1 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span dangerouslySetInnerHTML={{ __html: feature }}></span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#contact-form"
                  className="block w-full py-3 px-6 text-center bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors duration-300"
                >
                  Bring Your Design to Life
                </a>
              </div>
            </motion.div>
            
            {/* Tier 2: Full Development */}
            <motion.div 
              variants={itemVariants}
              className="bg-gray-900 rounded-2xl overflow-hidden border border-blue-500 transform md:scale-105 shadow-xl shadow-blue-900/20 relative"
            >
              <div className="absolute top-0 inset-x-0 bg-blue-600 text-white text-center py-2 text-sm font-semibold">
                MOST POPULAR
              </div>
              <div className="p-8 pt-12">
                <h3 className="text-2xl font-bold mb-2">Product Development</h3>
                <div className="text-blue-500 text-3xl font-bold mb-1">$7,000</div>
                <p className="text-gray-400 mb-6">Starting price</p>
                <div className="bg-blue-900/20 p-3 rounded-lg mb-6">
                  <p className="text-blue-300 font-medium">
                    <span className="text-blue-200 font-bold">Complete MVP in 14 days!</span> From concept to fully functional product with all integrations.
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {[
                    'Custom frontend & backend development',
                    'Database design & implementation',
                    'User authentication & authorization',
                    'Third-party API integrations',
                    'Payment processing integration',
                    'Analytics & tracking setup',
                    'Comprehensive testing',
                    '<span class="font-bold text-blue-400">Rapid 14-day delivery</span>'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <svg className="h-5 w-5 text-blue-500 mt-1 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span dangerouslySetInnerHTML={{ __html: feature }}></span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#contact-form"
                  className="block w-full py-3 px-6 text-center bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors duration-300"
                >
                  Start Your 14-Day MVP Journey
                </a>
              </div>
            </motion.div>
            
            {/* Tier 3: Long-term Partnership */}
            <motion.div 
              variants={itemVariants}
              className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300 shadow-xl hover:shadow-blue-900/20"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">Long-term Partnership</h3>
                <div className="text-blue-500 text-3xl font-bold mb-1">Custom</div>
                <p className="text-gray-400 mb-6">Tailored to your needs</p>
                <div className="bg-blue-900/20 p-3 rounded-lg mb-6">
                  <p className="text-blue-300 font-medium">
                    <span className="text-blue-200 font-bold">Ongoing support & development</span> for existing products or long-term project needs.
                  </p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {[
                    'Dedicated development team',
                    'Regular sprint planning & delivery',
                    'Scalability improvements',
                    'Performance optimization',
                    'Advanced feature development',
                    'Technical debt management',
                    'Security audits & improvements',
                    'Ongoing maintenance & support'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <svg className="h-5 w-5 text-blue-500 mt-1 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="#contact-form"
                  className="block w-full py-3 px-6 text-center bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors duration-300"
                >
                  Discuss Your Long-Term Needs
                </a>
              </div>
            </motion.div>
          </div>

          {/* Calendar Section - More Prominent */}
          <motion.div 
            variants={itemVariants} 
            className="mt-20 bg-gradient-to-br from-gray-900 to-blue-900/40 rounded-3xl shadow-xl border border-blue-500/30"
            id="contact-form"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Calendly widget - Now first on mobile for prominence */}
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 lg:p-12 rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none order-1 lg:order-2 border-b lg:border-b-0 lg:border-l border-blue-500/30">
                <h3 className="text-2xl font-bold mb-6">Book Your 14-Day MVP Consultation</h3>
                <p className="text-blue-300 font-medium mb-6">Quick, hassle-free scheduling. Pick a time that works for you:</p>
                <div className="calendly-container" style={{ height: '580px' }}>
                  <InlineWidget
                    url="https://calendly.com/elco-dev/consult"
                    styles={{ height: '100%' }}
                    prefill={{
                      customAnswers: {
                        a1: 'Website Pricing Page'
                      }
                    }}
                  />
                </div>
              </div>
              
              {/* Info section - Second on mobile */}
              <div className="p-8 lg:p-12 order-2 lg:order-1">
                <h2 className="text-3xl font-bold mb-6">
                  From Concept to Launch in <span className="text-blue-500">Just 14 Days</span>
                </h2>
                <p className="text-gray-300 mb-8">
                  No fancy designs needed! We can work with simple sketches, text descriptions, or any format you have. Our top-tier development process accelerates delivery without sacrificing quality.
                </p>

                {/* Testimonial */}
                <div className="bg-blue-900/20 rounded-xl p-6 mb-8 border border-blue-800/30">
                  <div className="flex items-center mb-3">
                    <div className="flex -space-x-2 mr-3">
                      <img 
                        src="https://ui-avatars.com/api/?name=Justin+Garabed&background=2563EB&color=fff" 
                        alt="Justin Garabed" 
                        className="w-10 h-10 rounded-full border-2 border-blue-500" 
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Justin Garabed</p>
                      <p className="text-sm text-blue-300">Bevvo</p>
                    </div>
                  </div>
                  <p className="text-gray-200 italic text-sm">"Austin managed front end, back end, and database development including integrating third party applications to execute payment processing, reporting, etc. I consider myself extremely lucky to have found Austin."</p>
                </div>

                {/* Quick contact options */}
                <div className="mb-8">
                  <p className="text-gray-200 font-medium mb-4">Prefer direct contact?</p>
                  <div className="flex flex-col space-y-4">
                    <a
                      href="tel:+16157848066"
                      className="inline-flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      (615) 784-8066
                    </a>
                    <a
                      href="mailto:austin@elcodev.com"
                      className="inline-flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      austin@elcodev.com
                    </a>
                  </div>
                </div>

                {/* What you'll get */}
                <div>
                  <h3 className="text-xl font-semibold text-gray-100 mb-4">Why book a consultation?</h3>
                  <ul className="space-y-3">
                    {[
                      'Get a clear project timeline and delivery estimate',
                      'Discuss how we can build your MVP in just 14 days',
                      'Learn how our top-tier development process works',
                      'No technical knowledge required - just bring your idea',
                      'Zero pressure conversation - we\'re here to help'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-blue-500 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Final CTA */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Ready to launch your product in record time?</h2>
            <p className="text-gray-300 mb-6">Book your consultation now and get started on your 14-day MVP journey.</p>
            <a 
              href="#contact-form"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full text-lg transition-colors duration-300 shadow-lg hover:shadow-blue-500/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Schedule a Free Consultation
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPricing; 