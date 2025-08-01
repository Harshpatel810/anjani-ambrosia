import React, { useState } from 'react';
import { Download, Home, Maximize, Bath, Car } from 'lucide-react';

const FloorPlans = () => {
  const [activeTab, setActiveTab] = useState('3bhk');

  const floorPlans = {
    '3bhk': {
      title: '3 BHK Premium',
      area: '1,450 - 1,650',
      bedrooms: 3,
      bathrooms: 3,
      balconies: 2,
      features: [
        'Master bedroom with attached bathroom',
        'Spacious living and dining area',
        'Modern modular kitchen',
        'Utility area and store room',
        'Premium flooring and fixtures'
      ],
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    '4bhk': {
      title: '4 BHK Luxury',
      area: '1,850 - 2,100',
      bedrooms: 4,
      bathrooms: 4,
      balconies: 3,
      features: [
        'Two master bedrooms with attached bathrooms',
        'Grand living and dining area',
        'Premium modular kitchen with island',
        'Study room and utility area',
        'Luxury finishes throughout'
      ],
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  };

  const currentPlan = floorPlans[activeTab as keyof typeof floorPlans];

  return (
    <section id="floor-plans" className="py-20 bg-ivory-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-gold-500 font-semibold text-lg">Thoughtfully Designed</span>
          <h2 className="text-4xl lg:text-5xl font-luxury font-bold text-primary-800 mt-2 mb-6">
            Floor Plans
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Discover our meticulously planned floor layouts that maximize space utilization 
            while ensuring optimal natural light and ventilation.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12" data-aos="fade-up">
          <div className="bg-white rounded-full p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('3bhk')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === '3bhk'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'text-primary-600 hover:bg-primary-50'
              }`}
            >
              3 BHK Plans
            </button>
            <button
              onClick={() => setActiveTab('4bhk')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === '4bhk'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'text-primary-600 hover:bg-primary-50'
              }`}
            >
              4 BHK Plans
            </button>
          </div>
        </div>

        {/* Floor Plan Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Plan Image */}
          <div data-aos="fade-right">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <img
                src={currentPlan.image}
                alt={`${currentPlan.title} Floor Plan`}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-primary-800">
                    {currentPlan.title}
                  </h3>
                  <button className="flex items-center space-x-2 bg-gold-500 hover:bg-gold-600 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                    <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                  </button>
                </div>
                
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div className="bg-primary-50 rounded-lg p-3">
                    <Maximize className="w-6 h-6 text-primary-600 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-primary-800">
                      {currentPlan.area} sq.ft
                    </div>
                    <div className="text-xs text-gray-600">Carpet Area</div>
                  </div>
                  <div className="bg-primary-50 rounded-lg p-3">
                    <Home className="w-6 h-6 text-primary-600 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-primary-800">
                      {currentPlan.bedrooms}
                    </div>
                    <div className="text-xs text-gray-600">Bedrooms</div>
                  </div>
                  <div className="bg-primary-50 rounded-lg p-3">
                    <Bath className="w-6 h-6 text-primary-600 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-primary-800">
                      {currentPlan.bathrooms}
                    </div>
                    <div className="text-xs text-gray-600">Bathrooms</div>
                  </div>
                  <div className="bg-primary-50 rounded-lg p-3">
                    <Car className="w-6 h-6 text-primary-600 mx-auto mb-1" />
                    <div className="text-sm font-semibold text-primary-800">
                      {currentPlan.balconies}
                    </div>
                    <div className="text-xs text-gray-600">Balconies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Plan Details */}
          <div data-aos="fade-left">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h4 className="text-2xl font-bold text-primary-800 mb-6">
                Key Features
              </h4>
              
              <ul className="space-y-4 mb-8">
                {currentPlan.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-gradient-to-r from-primary-50 to-gold-50 rounded-xl p-6 mb-6">
                <h5 className="font-semibold text-primary-800 mb-3">
                  Premium Specifications
                </h5>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Flooring:</span>
                    <div className="font-medium">Italian Marble</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Kitchen:</span>
                    <div className="font-medium">Modular Design</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Bathroom:</span>
                    <div className="font-medium">Premium Fittings</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Windows:</span>
                    <div className="font-medium">UPVC Frames</div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-semibold transition-colors duration-200">
                  Book Site Visit
                </button>
                <button className="flex-1 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white py-3 rounded-lg font-semibold transition-all duration-200">
                  Get Price Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlans;