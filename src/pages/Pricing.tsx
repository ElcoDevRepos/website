import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ServicesPricing from '../components/ServicesPricing';

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navigation />
      <ServicesPricing />
      <Footer />
    </div>
  );
};

export default PricingPage; 