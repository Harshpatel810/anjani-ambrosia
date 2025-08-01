import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import FloorPlans from './components/FloorPlans';
import Gallery from './components/Gallery';
import SmartFinder from './components/SmartFinder';
import Location from './components/Location';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen bg-ivory-50">
      <Header />
      <Hero />
      <About />
      <Features />
      <FloorPlans />
      <Gallery />
      <SmartFinder />
      <Location />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;