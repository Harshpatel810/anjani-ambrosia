import React, { useState } from 'react';
import { ChevronDown, MapPin, Building, Home } from 'lucide-react';

const Hero = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    bhk: '3'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1950&q=80"
          alt="Luxury High-rise Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 luxury-gradient opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white" data-aos="fade-right">
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="w-5 h-5 text-gold-400" />
              <span className="text-gold-400 font-medium">Premium Location</span>
            </div>
            
            <h1 className="font-luxury text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Anjani
              <span className="block text-gold-400">Ambrosia</span>
            </h1>
            
            <p className="text-2xl lg:text-3xl font-light mb-8 text-ivory-100">
              Your Elevated Life Awaits
            </p>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Building className="w-8 h-8 text-gold-400 mx-auto mb-2" />
                <div className="text-2xl font-bold">14</div>
                <div className="text-sm text-ivory-200">Floors</div>
              </div>
              <div className="text-center">
                <Home className="w-8 h-8 text-gold-400 mx-auto mb-2" />
                <div className="text-2xl font-bold">10</div>
                <div className="text-sm text-ivory-200">Wings (A-J)</div>
              </div>
              <div className="text-center">
                <div className="w-8 h-8 bg-gold-400 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-primary-800 font-bold text-sm">3-4</span>
                </div>
                <div className="text-2xl font-bold">BHK</div>
                <div className="text-sm text-ivory-200">Luxury Flats</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                Schedule Site Visit
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-800 px-8 py-4 rounded-full font-semibold transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>

          {/* Right Content - Inquiry Form */}
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl" data-aos="fade-left">
            <h3 className="text-2xl font-bold text-primary-800 mb-6 text-center">
              Quick Inquiry
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200"
                  required
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200"
                  required
                />
              </div>
              
              <div>
                <select
                  name="bhk"
                  value={formData.bhk}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all duration-200"
                >
                  <option value="3">3 BHK</option>
                  <option value="4">4 BHK</option>
                  <option value="both">Both 3 & 4 BHK</option>
                </select>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Get Details Now
              </button>
            </form>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              By submitting, you agree to our privacy policy
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
};

export default Hero;