import React from 'react';
import { MapPin, Clock, Car, Train, Plane, GraduationCap, Hospital, ShoppingBag } from 'lucide-react';

const Location = () => {
  const landmarks = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      category: 'Education',
      places: [
        { name: 'Delhi Public School', distance: '0.8 km' },
        { name: 'Ryan International School', distance: '1.2 km' },
        { name: 'Amity University', distance: '3.5 km' }
      ]
    },
    {
      icon: <Hospital className="w-6 h-6" />,
      category: 'Healthcare',
      places: [
        { name: 'Apollo Hospital', distance: '2.1 km' },
        { name: 'Max Healthcare', distance: '1.8 km' },
        { name: 'Fortis Hospital', distance: '3.2 km' }
      ]
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      category: 'Shopping',
      places: [
        { name: 'City Mall', distance: '1.5 km' },
        { name: 'Phoenix MarketCity', distance: '2.8 km' },
        { name: 'Local Market', distance: '0.5 km' }
      ]
    },
    {
      icon: <Train className="w-6 h-6" />,
      category: 'Transport',
      places: [
        { name: 'Metro Station', distance: '0.9 km' },
        { name: 'Bus Stand', distance: '0.3 km' },
        { name: 'Railway Station', distance: '4.2 km' }
      ]
    }
  ];

  const connectivity = [
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Major Roads',
      description: 'Connected to NH-24 and Ring Road',
      time: '5 min'
    },
    {
      icon: <Train className="w-8 h-8" />,
      title: 'Metro Connectivity',
      description: 'Blue Line Metro Station nearby',
      time: '3 min walk'
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: 'Airport',
      description: 'IGI Airport via Express Highway',
      time: '45 min'
    }
  ];

  return (
    <section id="location" className="py-20 bg-ivory-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-gold-500 font-semibold text-lg">Strategic Location</span>
          <h2 className="text-4xl lg:text-5xl font-luxury font-bold text-primary-800 mt-2 mb-6">
            Location & Connectivity
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Perfectly positioned in the heart of the city with excellent connectivity 
            to all major destinations and essential amenities within easy reach.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Map Section */}
          <div data-aos="fade-right">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-primary-100 to-gold-100 flex items-center justify-center">
                {/* Placeholder for Google Maps */}
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary-800 mb-2">
                    Anjani Ambrosia
                  </h3>
                  <p className="text-gray-600">
                    Sector 15, Noida Extension<br />
                    Greater Noida, UP 201301
                  </p>
                  <button className="mt-4 bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
                    View on Google Maps
                  </button>
                </div>
              </div>
              
              {/* Connectivity Cards */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-primary-800 mb-4">
                  Excellent Connectivity
                </h4>
                <div className="space-y-4">
                  {connectivity.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 bg-primary-50 rounded-lg">
                      <div className="text-primary-600">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-primary-800">{item.title}</h5>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-gold-600 font-bold">{item.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Landmarks Section */}
          <div data-aos="fade-left">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-primary-800 mb-8 text-center">
                Nearby Landmarks
              </h3>
              
              <div className="space-y-8">
                {landmarks.map((landmark, index) => (
                  <div key={index} className="border-b border-gray-100 last:border-b-0 pb-6 last:pb-0">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="text-gold-500">
                        {landmark.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-primary-800">
                        {landmark.category}
                      </h4>
                    </div>
                    
                    <div className="space-y-2 ml-9">
                      {landmark.places.map((place, placeIndex) => (
                        <div key={placeIndex} className="flex items-center justify-between">
                          <span className="text-gray-700">{place.name}</span>
                          <span className="text-gold-600 font-semibold text-sm">
                            {place.distance}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Location Highlights */}
            <div className="mt-8 bg-gradient-to-r from-primary-800 to-primary-600 rounded-2xl p-8 text-white">
              <h4 className="text-xl font-bold mb-4">Location Advantages</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-gold-400" />
                  <span>15 minutes to Connaught Place</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-gold-400" />
                  <span>20 minutes to Cyber City, Gurgaon</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-gold-400" />
                  <span>30 minutes to Noida Sector 18</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-gold-400" />
                  <span>45 minutes to IGI Airport</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;