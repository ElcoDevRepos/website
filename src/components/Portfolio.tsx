import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PortfolioItem {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  category: string;
  link?: string;
  year?: string;
  scope?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    title: "Penalty Verdict",
    description: "Mobile app for NFL football fans and analysts to track penalties and game incidents. Features real-time data scraping and comprehensive game analytics.",
    imageUrl: "./portfolio/penalty-verdict.jpg",
    technologies: ["Ionic", "Capacitor", "Node.js", "Firebase"],
    category: "Mobile App",
    link: "https://penaltyverdict.com",
    year: "2022",
    scope: "Full-stack Development"
  },
  {
    title: "Canvenient",
    description: "SaaS platform for apartment communities to manage valet trash services, featuring real-time service tracking and resident management.",
    imageUrl: "./portfolio/canvenient.jpg",
    technologies: ["Angular", "Firebase", "TypeScript", "Cloud Functions"],
    category: "Web Application",
    link: "https://canvenient.com",
    year: "2021",
    scope: "Frontend & Backend"
  },
  {
    title: "CCS Trash",
    description: "Comprehensive valet trash management solution with route optimization, service verification, and customer portal for multi-family properties.",
    imageUrl: "./portfolio/ccs-trash.jpg",
    technologies: ["Flutter", "Next.js", "Firebase", "Google Maps API"],
    category: "Mobile App",
    link: "https://go-ccs.com",
    year: "2022",
    scope: "Full-stack Development"
  },
  {
    title: "LaurelCRM",
    description: "Comprehensive internal CRM solution with advanced customer relationship management and analytics capabilities.",
    imageUrl: "./portfolio/laurel-crm.jpg",
    technologies: ["Angular", "TypeScript", "Material UI", "RESTful APIs"],
    category: "Web Application",
    link: "https://laurelcrm.com",
    year: "2023",
    scope: "Frontend Development"
  },
  {
    title: "MD Virtual Care",
    description: "Healthcare ecosystem with mobile apps and web portal, featuring secure patient data management and real-time communication.",
    imageUrl: "./portfolio/md-virtual-care.jpg",
    technologies: ["Ionic", "Capacitor", "Next.js", "Node.js"],
    category: "Healthcare",
    link: "https://mdvirtualcare.com",
    year: "2021",
    scope: "Full-stack Development"
  },
  {
    title: "SynctUp",
    description: "Contact synchronization and sharing platform enabling seamless contact management across devices with real-time updates.",
    imageUrl: "./portfolio/synctup.jpg",
    technologies: ["Ionic", "Capacitor", "MongoDB", "Node.js"],
    category: "Web Application",
    link: "https://app.synctup.com",
    year: "2020",
    scope: "Full-stack Development"
  }
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [displayedItems, setDisplayedItems] = useState<PortfolioItem[]>(portfolioItems);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  
  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(portfolioItems.map(item => item.category)))];
  
  // Filter items when category changes
  useEffect(() => {
    if (activeCategory === 'All') {
      setDisplayedItems(portfolioItems);
    } else {
      setDisplayedItems(portfolioItems.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);
  
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const fallbackImage = "https://via.placeholder.com/400x300?text=Project+Image";
    const target = e.target as HTMLImageElement;
    target.src = fallbackImage;
  };
  
  const isProjectImageAvailable = (url: string): string => {
    // If the image path starts with http, it's likely an external URL
    if (url.startsWith('http')) {
      return url;
    }
    
    // For local images, use the path as is, but prepare for fallback
    return url;
  };
  
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4">Our Work</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Project Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A selection of real-world applications we've built for clients across various industries
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {displayedItems.map((item, index) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group"
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={isProjectImageAvailable(item.imageUrl)}
                    alt={item.title}
                    onError={handleImageError}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <p className="text-white text-xs mb-2">{item.year} • {item.scope}</p>
                      <h3 className="text-white text-xl font-bold">{item.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    <span className="text-xs text-gray-500">{item.year}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{item.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {item.technologies.length > 3 && (
                      <span className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        +{item.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <button 
                      onClick={() => setSelectedItem(item)}
                      className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors flex items-center"
                    >
                      View Details
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </button>
                    
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-full transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal for detailed view */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white rounded-xl max-w-3xl w-full overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-64 sm:h-80">
                  <img
                    src={isProjectImageAvailable(selectedItem.imageUrl)}
                    alt={selectedItem.title}
                    onError={handleImageError}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
                
                <div className="p-6 sm:p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-sm text-blue-600 font-medium">{selectedItem.category}</span>
                      <h3 className="text-2xl font-bold text-gray-900">{selectedItem.title}</h3>
                    </div>
                    <span className="text-sm text-gray-500">{selectedItem.year}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{selectedItem.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Project Scope</h4>
                    <p className="text-gray-600">{selectedItem.scope}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {selectedItem.link && (
                    <a
                      href={selectedItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
                    >
                      Visit Project
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Looking for more examples?</h3>
            <p className="text-gray-600 mb-6">
              We've worked on many other projects that aren't showcased here. Contact us to discuss your specific requirements and see relevant examples.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
            >
              Schedule a Consultation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
