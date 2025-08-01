import React, { useState } from 'react';
import { Brain, Search, Home, MapPin, Bed, Eye } from 'lucide-react';

const SmartFinder = () => {
  const [preferences, setPreferences] = useState({
    bhk: '',
    floor: '',
    facing: '',
    budget: ''
  });
  const [results, setResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setPreferences(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const findMatches = () => {
    // Simulate AI matching logic
    const mockResults = [
      {
        id: 1,
        wing: 'A',
        floor: 8,
        bhk: preferences.bhk || '3',
        facing: 'East',
        area: '1,450 sq.ft',
        price: '₹85 Lakhs',
        match: 95,
        features: ['Corner Unit', 'Premium View', 'Morning Sun']
      },
      {
        id: 2,
        wing: 'C',
        floor: 12,
        bhk: preferences.bhk || '3',
        facing: 'North-East',
        area: '1,520 sq.ft',
        price: '₹92 Lakhs',
        match: 88,
        features: ['High Floor', 'City View', 'Cross Ventilation']
      },
      {
        id: 3,
        wing: 'F',
        floor: 6,
        bhk: preferences.bhk || '3',
        facing: 'South',
        area: '1,480 sq.ft',
        price: '₹88 Lakhs',
        match: 82,
        features: ['Garden View', 'Vastu Compliant', 'Spacious Balcony']
      }
    ];

    setResults(mockResults);
    setShowResults(true);
  };

  const resetFinder = () => {
    setPreferences({
      bhk: '',
      floor: '',
      facing: '',
      budget: ''
    });
    setResults([]);
    setShowResults(false);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-gold-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Brain className="w-8 h-8 text-gold-500" />
            <span className="text-gold-500 font-semibold text-lg">AI-Powered</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-luxury font-bold text-primary-800 mt-2 mb-6">
            Smart Flat Finder
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Let our intelligent system find the perfect flat that matches your preferences. 
            Answer a few questions and discover your ideal home at Anjani Ambrosia.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {!showResults ? (
            /* Preference Form */
            <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12" data-aos="fade-up">
              <h3 className="text-2xl font-bold text-primary-800 mb-8 text-center">
                Tell us your preferences
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                {/* BHK Preference */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">
                    <Home className="w-5 h-5 inline mr-2" />
                    Preferred BHK
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {['3', '4', 'Any'].map((bhk) => (
                      <button
                        key={bhk}
                        onClick={() => handleInputChange('bhk', bhk)}
                        className={`py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                          preferences.bhk === bhk
                            ? 'bg-primary-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-primary-50'
                        }`}
                      >
                        {bhk} BHK
                      </button>
                    ))}
                  </div>
                </div>

                {/* Floor Preference */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">
                    <MapPin className="w-5 h-5 inline mr-2" />
                    Floor Preference
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {['Low (1-5)', 'Mid (6-10)', 'High (11-14)'].map((floor) => (
                      <button
                        key={floor}
                        onClick={() => handleInputChange('floor', floor)}
                        className={`py-3 px-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
                          preferences.floor === floor
                            ? 'bg-primary-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-primary-50'
                        }`}
                      >
                        {floor}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Facing Preference */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">
                    <Eye className="w-5 h-5 inline mr-2" />
                    Facing Direction
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['East', 'West', 'North', 'South'].map((facing) => (
                      <button
                        key={facing}
                        onClick={() => handleInputChange('facing', facing)}
                        className={`py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
                          preferences.facing === facing
                            ? 'bg-primary-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-primary-50'
                        }`}
                      >
                        {facing}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Range */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">
                    <Bed className="w-5 h-5 inline mr-2" />
                    Budget Range
                  </label>
                  <select
                    value={preferences.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  >
                    <option value="">Select Budget</option>
                    <option value="70-90">₹70 - 90 Lakhs</option>
                    <option value="90-110">₹90 - 110 Lakhs</option>
                    <option value="110-130">₹110 - 130 Lakhs</option>
                    <option value="130+">₹130+ Lakhs</option>
                  </select>
                </div>
              </div>

              <div className="text-center mt-8">
                <button
                  onClick={findMatches}
                  className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2 mx-auto"
                >
                  <Search className="w-5 h-5" />
                  <span>Find My Perfect Flat</span>
                </button>
              </div>
            </div>
          ) : (
            /* Results Display */
            <div className="space-y-6" data-aos="fade-up">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-primary-800">
                    Your Perfect Matches
                  </h3>
                  <button
                    onClick={resetFinder}
                    className="text-primary-600 hover:text-primary-700 font-semibold"
                  >
                    Search Again
                  </button>
                </div>

                <div className="grid gap-6">
                  {results.map((result, index) => (
                    <div
                      key={result.id}
                      className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-primary-800 mb-2">
                            Wing {result.wing} - Floor {result.floor}
                          </h4>
                          <div className="flex items-center space-x-4 text-gray-600">
                            <span>{result.bhk} BHK</span>
                            <span>•</span>
                            <span>{result.area}</span>
                            <span>•</span>
                            <span>{result.facing} Facing</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gold-600 mb-1">
                            {result.price}
                          </div>
                          <div className="flex items-center space-x-1">
                            <div className="text-sm text-green-600 font-semibold">
                              {result.match}% Match
                            </div>
                            <div className="w-16 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-green-500 h-2 rounded-full"
                                style={{ width: `${result.match}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {result.features.map((feature: string, idx: number) => (
                          <span
                            key={idx}
                            className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="flex space-x-4">
                        <button className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg font-semibold transition-colors duration-200">
                          View Details
                        </button>
                        <button className="flex-1 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white py-2 rounded-lg font-semibold transition-all duration-200">
                          Schedule Visit
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SmartFinder;