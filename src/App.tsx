import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Navigation from './components/Navigation';
import Pricing from './components/Pricing';
import Stats from './components/Stats';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navigation />
      <main className="py-0">
        <Hero />
        <Stats />
        <Services />
        <About />
        <Pricing />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
