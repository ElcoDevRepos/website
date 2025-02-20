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
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PrivacyPolicy from './components/PrivacyPolicy';
import PartnersPage from './components/Partners/PartnersPage';
import BlogPage from './components/Blog/BlogPage';
import BlogPost from './components/Blog/BlogPost';
import BlogGenerator from './components/Blog/BlogGenerator';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect /our-team to home */}
        <Route path="/our-team" element={<Navigate to="/" replace />} />
        <Route path="/our-services" element={<Navigate to="/" replace />} />
        <Route path="/about" element={<Navigate to="/" replace />} />
        <Route path="/service-details" element={<Navigate to="/" replace />} />

        {/* Blog routes */}
        <Route path="/blog" element={
          <div className="min-h-screen bg-[#0A0A0A]">
            <Navigation />
            <BlogPage />
            <Footer />
          </div>
        } />
        <Route path="/blog/:slug" element={
          <div className="min-h-screen bg-[#0A0A0A]">
            <Navigation />
            <BlogPost />
            <Footer />
          </div>
        } />
        <Route path="/blog/generate" element={
          <div className="min-h-screen bg-[#0A0A0A]">
            <BlogGenerator />
            <Footer />
          </div>
        } />

        {/* Redirect /contact to home */}
        <Route path="/contact" element={<Navigate to="/" replace />} />
        <Route path="/portfolio" element={<Navigate to="/" replace />} />
        {/* Define the route for your privacy policy */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/partners" element={<PartnersPage />} />
        {/* Home route */}
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
              { /*<Pricing />*/}
                <Testimonials />
                <CTA />
                <Contact />
              </main>
              <Footer />
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
