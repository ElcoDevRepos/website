import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  return (
    <section className="bg-blue-600 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Ideas into Reality?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how we can help you achieve your software development goals.
            Schedule a free consultation today.
          </p>
          <div className="space-x-4">
            <button
              onClick={() => window.location.href = '#contact'}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
            >
              Schedule Consultation
            </button>
            <button
              onClick={() => window.location.href = '#services'}
              className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              View Services
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
