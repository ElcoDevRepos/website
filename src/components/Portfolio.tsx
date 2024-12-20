import React from 'react';
import { motion } from 'framer-motion';

interface PortfolioItem {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "Penalty Verdict",
    description: "Mobile app for NFL football fans and analysts to track penalties and game incidents. Features real-time data scraping and comprehensive game analytics.",
    imageUrl: "./portfolio/penalty-verdict.jpg",
    technologies: ["Ionic", "Capacitor", "Node.js", "Firebase"],
    link: "https://penaltyverdict.com"
  },
  {
    title: "Canvenient",
    description: "SaaS platform for apartment communities to manage valet trash services, featuring real-time service tracking and resident management.",
    imageUrl: "./portfolio/canvenient.jpg",
    technologies: ["Angular", "Firebase", "TypeScript", "Cloud Functions"],
    link: "https://canvenient.com"
  },
  {
    title: "CCS Trash",
    description: "Comprehensive valet trash management solution with route optimization, service verification, and customer portal for multi-family properties.",
    imageUrl: "./portfolio/ccs-trash.jpg",
    technologies: ["Flutter", "Next.js", "Firebase", "Google Maps API"],
    link: "https://go-ccs.com"
  },
  {
    title: "LaurelCRM",
    description: "Comprehensive internal CRM solution with advanced customer relationship management and analytics capabilities.",
    imageUrl: "./portfolio/laurel-crm.jpg",
    technologies: ["Angular", "TypeScript", "Material UI", "RESTful APIs"],
    link: "https://laurelcrm.com"
  },
  {
    title: "MD Virtual Care",
    description: "Healthcare ecosystem with mobile apps and web portal, featuring secure patient data management and real-time communication.",
    imageUrl: "./portfolio/md-virtual-care.jpg",
    technologies: ["Ionic", "Capacitor", "Next.js", "Node.js"],
    link: "https://mdvirtualcare.com"
  },
  {
    title: "SynctUp",
    description: "Contact synchronization and sharing platform enabling seamless contact management across devices with real-time updates.",
    imageUrl: "./portfolio/synctup.jpg",
    technologies: ["Ionic", "Capacitor", "MongoDB", "Node.js"],
    link: "https://app.synctup.com"
  }
];

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600">Check out some of our recent projects</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
                  >
                    View Project
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-block px-6 py-4 bg-gray-50 rounded-lg shadow-sm">
            <p className="text-gray-600 mb-2">+ Many more successful projects</p>
            <a 
              href="#contact" 
              className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Learn More
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                  clipRule="evenodd" 
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
