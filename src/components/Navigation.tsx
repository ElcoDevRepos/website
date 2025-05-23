import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { track } from '@vercel/analytics';
import { useLocation, useNavigate } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isPartnersPage = location.pathname === '/partners';
  const isBlogPage = location.pathname.startsWith('/blog');
  const isPricingPage = location.pathname === '/mvp';

  const scrollToSection = (sectionId: string) => {
    if (isPartnersPage || isBlogPage || isPricingPage) {
      navigate(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  const handleLinkClick = (url: string) => {
    track(url);
  };

  const textColorClass = isPartnersPage || isPricingPage ? 'text-white' : 'text-gray-900';
  const hoverColorClass = isPartnersPage || isPricingPage ? 'hover:text-blue-400' : 'hover:text-blue-600';
  const logoSrc = isPartnersPage || isPricingPage ? '/logo-2.png' : '/logo-black.png';
  const mobileMenuBgClass = isPartnersPage || isPricingPage ? 'bg-gray-900' : 'bg-white';

  const handleLogoClick = () => {
    if (isPartnersPage || isBlogPage || isPricingPage) {
      navigate('/');
    } else {
      scrollToSection('home');
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={handleLogoClick}>
            <img
              className="h-16 w-auto mt-2"
              src={logoSrc}
              alt="Elco Dev"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => {
                  if (isPartnersPage || isPricingPage) {
                    navigate('/');
                  } else {
                    scrollToSection('home');
                  }
                  handleLinkClick('/');
                }}
                className={`${textColorClass} ${hoverColorClass} px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
              >
                Home
              </button>
              <button
                onClick={() => {
                  if (isPartnersPage || isPricingPage) {
                    navigate('/#about');
                  } else {
                    scrollToSection('about');
                  }
                  handleLinkClick('/about');
                }}
                className={`${textColorClass} ${hoverColorClass} px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
              >
                About
              </button>
              <button
                onClick={() => {
                  window.open('/partners', '_blank');
                  handleLinkClick('/partners');
                }}
                className={`${textColorClass} ${hoverColorClass} px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
              >
                Partners
              </button>
              {/* <button
                onClick={() => {
                  navigate('/blog');
                  handleLinkClick('/blog');
                }}
                className={`${textColorClass} ${hoverColorClass} px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
              >
                Blog
              </button> */}
              {/* <button
                onClick={() => {
                  navigate('/pricing');
                  handleLinkClick('/pricing');
                }}
                className={`${textColorClass} ${hoverColorClass} px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
              >
                Pricing
              </button> */}
              <button
                onClick={() => {
                  if (isPartnersPage || isPricingPage) {
                    navigate('/#testimonials');
                  } else {
                    scrollToSection('testimonials');
                  }
                  handleLinkClick('/testimonials');
                }}
                className={`${textColorClass} ${hoverColorClass} px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
              >
                Testimonials
              </button>
              <button
                onClick={() => {
                  if (isPartnersPage || isPricingPage) {
                    navigate('/#contact');
                  } else {
                    scrollToSection('contact');
                  }
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
              className={`inline-flex items-center justify-center p-2 rounded-md ${textColorClass} ${hoverColorClass} focus:outline-none`}
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
        <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 ${mobileMenuBgClass} shadow-lg rounded-b-lg`}>
          <button
            onClick={() => {
              if (isPartnersPage || isPricingPage) {
                navigate('/');
              } else {
                scrollToSection('home');
              }
              setIsOpen(false);
            }}
            className={`${textColorClass} ${hoverColorClass} block px-3 py-2 rounded-md text-base font-medium w-full text-left`}
          >
            Home
          </button>
          <button
            onClick={() => {
              if (isPartnersPage || isPricingPage) {
                navigate('/#about');
              } else {
                scrollToSection('about');
              }
              setIsOpen(false);
            }}
            className={`${textColorClass} ${hoverColorClass} block px-3 py-2 rounded-md text-base font-medium w-full text-left`}
          >
            About
          </button>
          <button
                onClick={() => {
                  window.open('/partners', '_blank');
                  handleLinkClick('/partners');
                }}
                className={`${textColorClass} ${hoverColorClass} block px-3 py-2 rounded-md text-base font-medium w-full text-left`}
              >
                Partners
              </button>
              {/* <button
                onClick={() => {
                  navigate('/blog');
                  handleLinkClick('/blog');
                  setIsOpen(false);
                }}
                className={`${textColorClass} ${hoverColorClass} block px-3 py-2 rounded-md text-base font-medium w-full text-left`}
              >
                Blog
              </button> */}
          {/* <button
            onClick={() => {
              navigate('/pricing');
              handleLinkClick('/pricing');
              setIsOpen(false);
            }}
            className={`${textColorClass} ${hoverColorClass} block px-3 py-2 rounded-md text-base font-medium w-full text-left`}
          >
            Pricing
          </button> */}
          <button
            onClick={() => {
              if (isPartnersPage || isPricingPage) {
                navigate('/#testimonials');
              } else {
                scrollToSection('testimonials');
              }
              setIsOpen(false);
            }}
            className={`${textColorClass} ${hoverColorClass} block px-3 py-2 rounded-md text-base font-medium w-full text-left`}
          >
            Testimonials
          </button>
          <button
            onClick={() => {
              if (isPartnersPage || isPricingPage) {
                navigate('/#contact');
              } else {
                scrollToSection('contact');
              }
              setIsOpen(false);
            }}
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
