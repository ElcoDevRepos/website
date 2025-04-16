import React from 'react';
import { motion } from 'framer-motion';

interface Brand {
  name: string;
  logo: string;
  url: string;
}

const Brands: React.FC = () => {
  // TODO: Add your brand logos to the public/assets/brands directory
  // and update this array with the correct information
  const brands: Brand[] = [
    // Example format:
    // { 
    //   name: 'Company Name',
    //   logo: '/assets/brands/company-logo.png',
    //   url: 'https://company-website.com'
    // },
    {
      name: 'CCS',
      logo: '/assets/brands/ccs.png',
      url: 'https://www.go-ccs.com'
    },
    {
        name: "Home Depot",
        logo: '/assets/brands/home-depot.jpg',
        url: 'https://www.homedepot.com'
    },
    {
        name: "TN State Parks",
        logo: '/assets/brands/tsp-logo.svg',
        url: 'https://tnstateparks.com/'
    },
    {
        name: "Ladder Suite",
        logo: '/assets/brands/ladder-suite.png',
        url: 'https://www.laddersuite.com'
    },
  ];
  // If no brands are configured, don't render the section
  if (brands.length === 0) return null;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted By Industry Leaders</h2>
          <p className="text-lg text-gray-600">We work with some of the most innovative companies in the world</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center"
        >
          {brands.map((brand, index) => (
            <motion.a
              key={brand.name}
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-w-full max-h-full object-contain"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands; 