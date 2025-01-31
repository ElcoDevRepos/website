import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

interface FormData {
  contact_name: string;
  email: string;
  phone: string;
  company_name: string;
  website: string;
  partnership_type: string;
  company_type: string;
  client_base: string;
  message: string;
}

const PartnershipForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    contact_name: '',
    email: '',
    phone: '',
    company_name: '',
    website: '',
    partnership_type: '',
    company_type: '',
    client_base: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatMessage = (data: FormData): string => {
    return `
Partnership Application Details:
-----------------------------
Contact Name: ${data.contact_name}
Email: ${data.email}
Phone: ${data.phone}
Company Name: ${data.company_name || 'Not provided'}
Website: ${data.website || 'Not provided'}
Partnership Type: ${data.partnership_type || 'Not specified'}
Company Type: ${data.company_type || 'Not specified'}
Primary Client Base: ${data.client_base || 'Not specified'}

Additional Information:
${data.message || 'No additional information provided'}
    `.trim();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formattedMessage = formatMessage(formData);
      
      const templateParams = {
        to_name: 'Elco Dev',
        from_name: formData.contact_name,
        from_email: formData.email,
        message: formattedMessage
      };

      await emailjs.send(
        'service_f7c31el',
        'template_e61tqnr',
        templateParams,
        'grOQweJjHjltztoaG'
      );

      setSubmitStatus('success');
      setFormData({
        contact_name: '',
        email: '',
        phone: '',
        company_name: '',
        website: '',
        partnership_type: '',
        company_type: '',
        client_base: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-700"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="contact_name" className="block text-sm font-medium text-gray-300 mb-1">
            Name *
          </label>
          <input
            type="text"
            id="contact_name"
            name="contact_name"
            required
            value={formData.contact_name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
            placeholder="your.email@example.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
            placeholder="(123) 456-7890"
          />
        </div>

        <div>
          <label htmlFor="company_name" className="block text-sm font-medium text-gray-300 mb-1">
            Company Name
          </label>
          <input
            type="text"
            id="company_name"
            name="company_name"
            value={formData.company_name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
            placeholder="Your company name"
          />
        </div>

        <div>
          <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-1">
            Company Website
          </label>
          <input
            type="url"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
            placeholder="https://example.com"
          />
        </div>

        <div>
          <label htmlFor="partnership_type" className="block text-sm font-medium text-gray-300 mb-1">
            Partnership Type
          </label>
          <select
            id="partnership_type"
            name="partnership_type"
            value={formData.partnership_type}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-white"
          >
            <option value="">Select a partnership type</option>
            <option value="referral">Referral Partner</option>
            <option value="reseller">Reseller Partner</option>
            <option value="integration">Integration Partner</option>
            <option value="strategic">Strategic Alliance</option>
          </select>
        </div>

        <div>
          <label htmlFor="company_type" className="block text-sm font-medium text-gray-300 mb-1">
            Company Type
          </label>
          <select
            id="company_type"
            name="company_type"
            value={formData.company_type}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-white"
          >
            <option value="">Select your company type</option>
            <option value="agency">Digital Agency</option>
            <option value="consulting">Consulting Firm</option>
            <option value="software">Software Company</option>
            <option value="it_services">IT Services</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="client_base" className="block text-sm font-medium text-gray-300 mb-1">
            Primary Client Base
          </label>
          <select
            id="client_base"
            name="client_base"
            value={formData.client_base}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-white"
          >
            <option value="">Select your primary client base</option>
            <option value="startups">Startups</option>
            <option value="small_business">Small Business</option>
            <option value="mid_market">Mid-Market</option>
            <option value="enterprise">Enterprise</option>
            <option value="mixed">Mixed</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
          Additional Information
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400"
          placeholder="Tell us about your business and partnership goals..."
        />
      </div>

      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-6 text-white font-medium rounded-lg transition-colors ${
            isSubmitting
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Partnership Application'}
        </button>
      </div>

      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-green-900/50 text-green-300 rounded-lg border border-green-700"
        >
          Thank you for your interest in partnering with Elco Dev! We'll review your application and get back to you soon.
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-red-900/50 text-red-300 rounded-lg border border-red-700"
        >
          There was an error submitting your application. Please try again or contact us directly.
        </motion.div>
      )}
    </motion.form>
  );
};

export default PartnershipForm; 
