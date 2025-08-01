import React from 'react';
import { MapPin, Building2, Users, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "14 Floors",
      description: "Towering elegance with panoramic city views"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "10 Wings",
      description: "Wings A to J offering diverse living options"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Prime Location",
      description: "Strategic location with excellent connectivity"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Crafted with finest materials and finishes"
    }
  ];

  return (
    <section id="about" className="py-20 bg-ivory-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div data-aos="fade-right">
            <div className="mb-8">
              <span className="text-gold-500 font-semibold text-lg">About the Project</span>
              <h2 className="text-4xl lg:text-5xl font-luxury font-bold text-primary-800 mt-2 mb-6">
                Where Luxury Meets Lifestyle
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Anjani Ambrosia stands as a testament to architectural excellence and modern living. 
                This magnificent 14-floor high-rise development features 10 distinct wings (A through J), 
                each offering meticulously designed 3 & 4 BHK luxury apartments.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Located in the heart of the city, every residence is crafted to provide an elevated 
                lifestyle experience with world-class amenities, premium finishes, and breathtaking views 
                that redefine urban living.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover-lift"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="text-gold-500 mb-3">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-primary-800 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Master Plan */}
          <div data-aos="fade-left">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-primary-800 mb-6 text-center">
                Master Plan Overview
              </h3>
              
              {/* Master Plan Visualization */}
              <div className="bg-gradient-to-br from-primary-50 to-gold-50 rounded-xl p-8 mb-6">
                <div className="grid grid-cols-5 gap-2 mb-6">
                  {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'].map((wing, index) => (
                    <div 
                      key={wing}
                      className="bg-primary-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 cursor-pointer"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      Wing {wing}
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <div className="inline-block bg-gold-500 text-white px-6 py-2 rounded-full font-semibold mb-4">
                    Central Amenities
                  </div>
                  <p className="text-gray-600">
                    Clubhouse • Swimming Pool • Garden • Parking
                  </p>
                </div>
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-primary-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary-800">140+</div>
                  <div className="text-sm text-gray-600">Premium Units</div>
                </div>
                <div className="bg-gold-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-gold-600">2</div>
                  <div className="text-sm text-gray-600">Configuration Types</div>
                </div>
                <div className="bg-primary-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary-800">100%</div>
                  <div className="text-sm text-gray-600">Vastu Compliant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;