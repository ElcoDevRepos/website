import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  const isPartnersPage = location.pathname === '/partners';

  const handleNavigation = (sectionId: string) => {
    if (isPartnersPage) {
      navigate(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <img
              src="./logo-2.png"
              alt="Elco Dev"
              className="h-16 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-300 max-w-sm">
              We transform ideas into exceptional digital experiences, crafting custom solutions that drive business growth.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleNavigation('home')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('about')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('services')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              {/* <li>
                <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                  Pricing
                </a>
              </li> */}
              <li>
                <button
                  onClick={() => handleNavigation('contact')}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <div className="flex items-center space-x-2 text-gray-300" style={{ cursor: 'pointer' }} onClick={() => window.open('mailto:austin@elcodev.com', '_blank')}>
              <FaEnvelope className="text-blue-400" />
              <span>austin@elcodev.com</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <FaMapMarkerAlt className="text-blue-400" />
              <span>Nashville, TN</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300" style={{ cursor: 'pointer' }} onClick={() => window.open('tel:6157848066', '_blank')}>
              <FaPhone className="text-blue-400" />
              <span>615-784-8066</span>
            </div>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://github.com/ElcoDevRepos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors transform hover:scale-110"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/elco-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors transform hover:scale-110"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400"
        >
          <p>© {currentYear} Elco Dev, LLC. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
