import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { track } from '@vercel/analytics';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const handleLinkClick = (url: string) => {
    track( url );
  };

  return (
    <nav className="fixed w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="h-16 w-auto mt-2"
              src="./logo-black.png"
              alt="Elco Dev"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() =>{
                  scrollToSection('home')
                  handleLinkClick('/');
                }}
                className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => {
                  scrollToSection('about');
                  handleLinkClick('/about');
                }}
                className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                About
              </button>
              /*<button
                onClick={() => {
                  scrollToSection('pricing');
                  handleLinkClick('/pricing');
                }}
                className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Pricing
              </button>*/
              <button
                onClick={() => {
                  scrollToSection('testimonials');
                  handleLinkClick('/testimonials');
                }}
                className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
              >
                Testimonials
              </button>
              <button
                onClick={() => {
                  scrollToSection('contact');
                  handleLinkClick('/contact');
                }}
                className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300"
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-blue-600 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.2 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
          <button
            onClick={() => scrollToSection('home')}
            className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
          >
            About
          </button>
          /*<button
            onClick={() => scrollToSection('pricing')}
            className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
          >
            Pricing
          </button>*/
          <button
            onClick={() => scrollToSection('testimonials')}
            className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
          >
            Testimonials
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-blue-600 text-white hover:bg-blue-700 block px-4 py-2 rounded-full text-base font-medium w-full text-center mt-4"
          >
            Get Started
          </button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navigation;
