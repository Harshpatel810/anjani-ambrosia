import React from 'react';
import { 
  Dumbbell, 
  Car, 
  Shield, 
  Trees, 
  Baby, 
  Waves, 
  Building, 
  Zap,
  Wind,
  Camera,
  Wifi,
  Gamepad2
} from 'lucide-react';

const Features = () => {
  const amenities = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Clubhouse",
      description: "Premium clubhouse with recreational facilities"
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Fitness Center",
      description: "State-of-the-art gymnasium with modern equipment"
    },
    {
      icon: <Waves className="w-8 h-8" />,
      title: "Swimming Pool",
      description: "Resort-style swimming pool with deck area"
    },
    {
      icon: <Trees className="w-8 h-8" />,
      title: "Landscaped Gardens",
      description: "Beautifully designed green spaces and gardens"
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: "Kids Play Area",
      description: "Safe and fun play zone for children"
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Covered Parking",
      description: "Multi-level parking with 24/7 security"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "24/7 Security",
      description: "Round-the-clock security with CCTV surveillance"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Power Backup",
      description: "100% power backup for uninterrupted living"
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Central AC",
      description: "Pre-installed air conditioning in all rooms"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "CCTV Surveillance",
      description: "Complete security coverage with HD cameras"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "High-Speed Internet",
      description: "Fiber optic internet connectivity"
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Indoor Games",
      description: "Recreation room with indoor gaming facilities"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-gold-500 font-semibold text-lg">World-Class Amenities</span>
          <h2 className="text-4xl lg:text-5xl font-luxury font-bold text-primary-800 mt-2 mb-6">
            Features & Amenities
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Experience luxury living with our comprehensive range of premium amenities 
            designed to enhance your lifestyle and provide ultimate comfort.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-ivory-50 rounded-xl p-6 text-center hover-lift group"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="text-gold-500 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {amenity.icon}
              </div>
              <h4 className="font-semibold text-primary-800 mb-2 text-lg">
                {amenity.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>

        {/* Premium Features Highlight */}
        <div className="mt-20" data-aos="fade-up">
          <div className="bg-gradient-to-r from-primary-800 to-primary-600 rounded-2xl p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-luxury font-bold mb-4">
                  Premium Living Standards
                </h3>
                <p className="text-primary-100 text-lg mb-6">
                  Every detail at Anjani Ambrosia is crafted to perfection, from the finest 
                  Italian marble flooring to the premium branded fixtures and fittings.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                    <span>Premium branded fixtures and fittings</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                    <span>Italian marble flooring in living areas</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                    <span>Modular kitchen with premium appliances</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                    <span>Designer bathrooms with luxury fittings</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
                  <div className="text-4xl font-bold text-gold-400 mb-2">5 Star</div>
                  <div className="text-xl">Luxury Standards</div>
                  <div className="mt-4 flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-3 h-3 bg-gold-400 rounded-full"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;