import React from 'react';
import { useEffect } from 'react';
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
import PartnersPage from './components/Partners/PartnersPage';
// import BlogPage from './components/Blog/BlogPage';
// import BlogPost from './components/Blog/BlogPost';
// import BlogGenerator from './components/Blog/BlogGenerator';

const App: React.FC = () => {

useEffect(() => {
    // Check if the script is already loaded
    if (document.getElementById("faitracker-script")) return;

    // Create the tracking script
    const trackerScript = document.createElement("script");
    trackerScript.innerHTML = `
      window.faitracker=window.faitracker||function(){
        this.q=[];var t=new CustomEvent("FAITRACKER_QUEUED_EVENT");
        return this.init=function(t,e,a){
          this.TOKEN=t,this.INIT_PARAMS=e,this.INIT_CALLBACK=a,
          window.dispatchEvent(new CustomEvent("FAITRACKER_INIT_EVENT"))
        },
        this.call=function(){
          var e={k:"",a:[]};
          if(arguments&&arguments.length>=1){
            for(var a=1;a<arguments.length;a++)e.a.push(arguments[a]);
            e.k=arguments[0]
          }
          this.q.push(e),window.dispatchEvent(t)
        },
        this.message=function(){
          window.addEventListener("message",function(t){
            "faitracker"===t.data.origin&&this.call("message",t.data.type,t.data.message)
          })
        },
        this.message(),
        this.init("to2lxri0d2wnl458ign6jw0gjraya6dv",{host:"https://api.factors.ai"}),
        this
      }();
    `;
    document.body.appendChild(trackerScript);

    // Load external Factors.ai script
    const script = document.createElement("script");
    script.src = "https://app.factors.ai/assets/factors.js";
    script.async = true;
    script.id = "faitracker-script";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Router>
      <Routes>
        {/* Redirect /our-team to home */}
        <Route path="/our-team" element={<Navigate to="/" replace />} />
        <Route path="/our-services" element={<Navigate to="/" replace />} />
        <Route path="/about" element={<Navigate to="/" replace />} />
        <Route path="/service-details" element={<Navigate to="/" replace />} />

        {/* Blog routes */}
        {/* <Route path="/blog" element={
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
        } /> */}

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
                <Brands />
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
