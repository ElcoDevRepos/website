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
import Portfolio from './components/Portfolio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PrivacyPolicy from './components/PrivacyPolicy';

const App: React.FC = () => {
  return (
  <Router>
      <Routes>
        {/* Define the route for your privacy policy */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* Add your other routes here */}
        <Route
          path="/"
          element={
              <div className="min-h-screen bg-[#0A0A0A]">
      <Navigation />
      <main className="py-0">
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <About />
        <Pricing />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
          }
        />
      </Routes>
    </Router>
  
  );
};

export default App;
