import React from 'react';
import { motion } from 'framer-motion';

const Pricing: React.FC = () => {
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white" id="pricing">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Transparent Project-Based Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                We believe in clear, upfront pricing tailored to your specific needs. Our flexible payment plans make enterprise-grade software accessible to businesses of all sizes.
              </p>
            </motion.div>
          </div>

          {/* Project Types */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Mobile Apps */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Mobile Applications</h3>
                  <p className="text-gray-600 mb-4">Cross-platform and native mobile solutions for iOS and Android</p>
                </div>
                <div className="text-right">
                  <div className="text-blue-600 font-semibold">$15,000+</div>
                  <div className="text-sm text-gray-500">Project-based pricing</div>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Hybrid apps for cost-effective multi-platform deployment
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Native apps for platform-specific requirements
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Offline functionality and responsive design
                </li>
              </ul>
            </div>

            {/* Custom Web Apps */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Custom Web Applications</h3>
                  <p className="text-gray-600 mb-4">Tailored web solutions for your unique business needs</p>
                </div>
                <div className="text-right">
                  <div className="text-blue-600 font-semibold">$25,000+</div>
                  <div className="text-sm text-gray-500">Project-based pricing</div>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  CRM and ERP business solutions
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Custom dashboards and data visualization
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Integration with existing systems
                </li>
              </ul>
            </div>

            {/* WordPress */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">WordPress Solutions</h3>
                  <p className="text-gray-600 mb-4">Professional WordPress development and customization</p>
                </div>
                <div className="text-right">
                  <div className="text-blue-600 font-semibold">$15,000+</div>
                  <div className="text-sm text-gray-500">Project-based pricing</div>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Custom theme development
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Plugin customization and development
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  E-commerce and WooCommerce solutions
                </li>
              </ul>
            </div>

            {/* Maintenance Plan */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Maintenance Plan</h3>
                  <p className="text-gray-600 mb-4">Comprehensive support and maintenance after launch</p>
                </div>
                <div className="text-right">
                  <div className="text-blue-600 font-semibold">$1,000/month</div>
                  <div className="text-sm text-gray-500">All-inclusive support</div>
                </div>
              </div>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Ongoing updates and improvements
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Bug fixes and technical support
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  Performance monitoring and optimization
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Flexible Payment Plans Available
              </h3>
              <p className="text-gray-600 mb-6">
                We work with you to create a payment schedule that fits your budget. Let's discuss your project and find the perfect solution for your business.
              </p>
              <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 font-medium text-lg shadow-lg hover:shadow-xl">
                Schedule a Free Consultation
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
