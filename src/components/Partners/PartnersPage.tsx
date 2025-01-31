import React from 'react';
import { motion } from 'framer-motion';
import PartnershipForm from './PartnershipForm';
import Navigation from '../Navigation';
import Footer from '../Footer';
import { Helmet } from 'react-helmet';

const partnershipModels = [
  {
    title: "Referral Partner",
    description: "Earn competitive commissions (10-20%) by referring clients who need software development services.",
    benefits: ["Commission on first project", "No upfront costs", "Simple referral tracking"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: "Reseller Partner",
    description: "Sell our development services under your brand while we handle the technical delivery.",
    benefits: ["White-label services", "Wholesale pricing", "Dedicated support"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Integration Partner",
    description: "Partner with us to provide custom integration solutions for your software platform.",
    benefits: ["Technical expertise", "Custom API development", "Ongoing maintenance"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    )
  },
  {
    title: "Strategic Alliance",
    description: "Form a long-term partnership to serve clients with complementary services.",
    benefits: ["Joint marketing", "Shared resources", "Growth opportunities"],
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
];

const benefits = [
  {
    title: "Revenue Sharing",
    description: "Earn competitive commissions on successful referrals and joint projects, with transparent tracking and timely payouts.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Dedicated Support",
    description: "Get priority access to our development team, regular updates, and a dedicated partner success manager.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: "Co-Marketing",
    description: "Benefit from joint marketing initiatives, case studies, and shared promotional opportunities to reach new markets.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    )
  },
  {
    title: "Growth Resources",
    description: "Access exclusive training, sales materials, and technical documentation to help grow your business.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  }
];

const qualifications = [
  "Established business in tech, consulting, or adjacent industries",
  "Active customer base needing software development",
  "Commitment to providing quality warm leads",
  "Strong reputation in your industry",
  "Alignment with our values and quality standards"
];

const partnerTypes = [
  {
    title: "Technology Partners",
    description: "Software companies, SaaS providers, and technology vendors looking to expand their service offerings.",
  },
  {
    title: "Agency Partners",
    description: "Marketing agencies, design firms, and consultancies seeking technical implementation capabilities.",
  },
  {
    title: "Industry Partners",
    description: "Business consultants and industry experts who serve clients needing digital transformation.",
  }
];

const PartnersPage: React.FC = () => {
  // Enhanced structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Partner with Elco Dev - Software Development Partnership Program",
    "description": "Join Elco Dev's partner network. Earn commissions, access white-label services, and grow your business with our software development expertise.",
    "provider": {
      "@type": "Organization",
      "name": "Elco Dev",
      "url": "https://elcodev.com",
      "logo": "https://elcodev.com/logo-2.png",
      "sameAs": [
        "https://github.com/ElcoDevRepos",
        "https://www.linkedin.com/company/elco-dev"
      ]
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Referral Partnership Program",
        "description": "Earn competitive commissions by referring clients who need software development services",
        "category": "Software Development Services"
      },
      {
        "@type": "Offer",
        "name": "White-Label Partnership Program",
        "description": "Resell our development services under your brand while we handle the technical delivery",
        "category": "Software Development Services"
      },
      {
        "@type": "Offer",
        "name": "Integration Partnership Program",
        "description": "Partner with us to provide custom integration solutions for your software platform",
        "category": "Software Development Services"
      }
    ],
    "mainEntity": {
      "@type": "Service",
      "name": "Software Development Partnership Program",
      "description": "Comprehensive partnership program for agencies, technology companies, and industry experts",
      "provider": {
        "@type": "Organization",
        "name": "Elco Dev"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "serviceType": "Software Development",
      "audience": {
        "@type": "Audience",
        "audienceType": "Technology Companies, Digital Agencies, Business Consultants"
      }
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What types of partnership programs does Elco Dev offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Elco Dev offers multiple partnership models including Referral Partnerships (earn commissions), Reseller Partnerships (white-label services), Integration Partnerships (custom API solutions), and Strategic Alliances."
        }
      },
      {
        "@type": "Question",
        "name": "What are the benefits of partnering with Elco Dev?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Partners benefit from revenue sharing, dedicated support, co-marketing opportunities, and exclusive growth resources. We provide comprehensive support including technical expertise and marketing materials."
        }
      },
      {
        "@type": "Question",
        "name": "Who can become an Elco Dev partner?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We partner with established businesses in tech, consulting, and adjacent industries. Ideal partners have an active customer base needing software development services and maintain a strong industry reputation."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white">
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Partner with Elco Dev | Software Development Partnership Program</title>
        <meta name="title" content="Partner with Elco Dev | Software Development Partnership Program" />
        <meta name="description" content="Join Elco Dev's partner network. Earn competitive commissions (10-20%), access white-label services, and grow your business with our expert software development solutions. Perfect for agencies, tech companies, and consultants." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://elcodev.com/partners" />
        <meta property="og:title" content="Partner with Elco Dev | Software Development Partnership Program" />
        <meta property="og:description" content="Join Elco Dev's partner network. Earn competitive commissions (10-20%), access white-label services, and grow your business with our expert software development solutions." />
        <meta property="og:image" content="https://elcodev.com/partnership-program.jpg" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Elco Dev" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://elcodev.com/partners" />
        <meta property="twitter:title" content="Partner with Elco Dev | Software Development Partnership Program" />
        <meta property="twitter:description" content="Join Elco Dev's partner network. Earn competitive commissions (10-20%), access white-label services, and grow your business with our expert software development solutions." />
        <meta property="twitter:image" content="https://elcodev.com/partnership-program.jpg" />

        {/* Additional SEO Meta Tags */}
        <meta name="keywords" content="software development partnership, referral partner program, white label development, technology partnership, software reseller program, development agency partner, software integration partner, strategic alliance, Nashville software development, tech partnership" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Elco Dev" />
        <meta name="geo.region" content="US-TN" />
        <meta name="geo.placename" content="Nashville" />
        <meta name="geo.position" content="36.1627;-86.7816" />
        <meta name="ICBM" content="36.1627, -86.7816" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://elcodev.com/partners" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
      </Helmet>

      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-20"></div>
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-8">
              <img
                src="/logo-2.png"
                alt="Elco Dev Software Development Partnership Program"
                className="h-16 w-auto"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Partner with Elco Dev
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Join Nashville's premier software development partner network. Earn up to 20% commission, access white-label services, and grow your business with our expert solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Choose Your Partnership Model
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipModels.map((model, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors"
              >
                <div className="text-blue-400 mb-4">{model.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {model.title}
                </h3>
                <p className="text-gray-300 mb-4">{model.description}</p>
                <ul className="space-y-2">
                  {model.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Partner Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 hover:border-blue-500 transition-colors"
              >
                <div className="text-blue-400 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-8">
              Partner Qualifications
            </h2>
            <div className="bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-700">
              <ul className="space-y-4">
                {qualifications.map((qual, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center text-gray-300"
                  >
                    <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {qual}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Types Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Who Can Partner With Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-700 hover:border-blue-500 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  {type.title}
                </h3>
                <p className="text-gray-300">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-4">
              Become a Partner
            </h2>
            <p className="text-center text-gray-300 mb-12">
              Ready to grow together? Fill out the form below to start your partnership journey with Elco Dev.
            </p>
            <PartnershipForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PartnersPage; 