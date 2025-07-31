import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Navigation from './components/Navigation';
//import Pricing from './components/Pricing';
import Stats from './components/Stats';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Brands from './components/Brands';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PrivacyPolicy from './components/PrivacyPolicy';
// import BlogPage from './components/Blog/BlogPage';
// import BlogPost from './components/Blog/BlogPost';
// import BlogGenerator from './components/Blog/BlogGenerator';
import FAITracker from "./FAITracker";
import PricingPage from './pages/Pricing';
import RadioPlayer from './components/RadioPlayer';
import MouseTrail from './components/MouseTrail';

const App: React.FC = () => {

  return (
    <Router>
    <FAITracker />
    <MouseTrail />
      <Routes>
        {/* Redirect /our-team to home */}
        <Route path="/our-team" element={<Navigate to="/" replace />} />
        <Route path="/our-services" element={<Navigate to="/" replace />} />
        <Route path="/about" element={<Navigate to="/" replace />} />
        <Route path="/service-details" element={<Navigate to="/" replace />} />



        {/* Pricing Page Route */}
        <Route path="/mvp" element={<PricingPage />} />

        {/* Redirect /contact to home */}
        <Route path="/contact" element={<Navigate to="/" replace />} />
        <Route path="/portfolio" element={<Navigate to="/" replace />} />
        {/* Define the route for your privacy policy */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        {/* <Route path="/partners" element={<PartnersPage />} /> */}
        {/* Home route */}
        <Route
          path="/"
          element={
            <div className="retro-container">
              <div className="under-construction">
                🚧 UNDER CONSTRUCTION - BEST VIEWED WITH INTERNET EXPLORER 6.0 🚧
              </div>
              <div className="retro-marquee">
                <span>🌟 WELCOME TO OUR AWESOME WEBSITE! 🌟 LAST UPDATED: 2003 🌟</span>
              </div>
              <Navigation />
              <main>
                <Hero />
                <Testimonials />
                <Stats />
                <Brands />
                <Services />
                <Portfolio />
                <About />
              { /*<Pricing />*/}
                <CTA />
                <Contact />
              </main>
              <Footer />
              <div className="best-viewed">
                Best viewed with Internet Explorer 6.0 or Netscape Navigator 7.0 at 800x600 resolution
              </div>
              <RadioPlayer />
            </div>
          }
        />
        {/* Catch all route - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
