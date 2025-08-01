import React from 'react';
import { Star, Quote, Award, Users } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      role: 'Software Engineer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Anjani Ambrosia exceeded all our expectations. The quality of construction, amenities, and location connectivity is simply outstanding. Our family is extremely happy with our decision.',
      unit: '3 BHK, Wing A'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Marketing Manager',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'The attention to detail in every aspect is remarkable. From the premium finishes to the world-class amenities, everything reflects luxury and comfort. Highly recommended!',
      unit: '4 BHK, Wing C'
    },
    {
      id: 3,
      name: 'Amit Patel',
      role: 'Business Owner',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'The investment value and future prospects of this project are excellent. The developer has maintained transparency throughout the process. Great experience overall.',
      unit: '3 BHK, Wing F'
    }
  ];

  const builderInfo = {
    name: 'Anjani Group',
    experience: '25+ Years',
    projects: '50+ Projects',
    families: '10,000+ Happy Families',
    awards: [
      'Best Residential Developer 2023',
      'Excellence in Construction Quality',
      'Customer Satisfaction Award'
    ]
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-gold-500 font-semibold text-lg">What Our Residents Say</span>
          <h2 className="text-4xl lg:text-5xl font-luxury font-bold text-primary-800 mt-2 mb-6">
            Testimonials
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Hear from our satisfied residents who have made Anjani Ambrosia their home 
            and experience the joy of elevated living.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-ivory-50 rounded-2xl p-8 hover-lift"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-primary-800 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-gold-600 text-sm font-medium">{testimonial.unit}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold-500 fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="w-8 h-8 text-gold-500 opacity-50 absolute -top-2 -left-2" />
                <p className="text-gray-700 leading-relaxed pl-6">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Builder Information */}
        <div className="bg-gradient-to-r from-primary-800 to-primary-600 rounded-2xl p-8 lg:p-12 text-white" data-aos="fade-up">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Award className="w-8 h-8 text-gold-400" />
                <span className="text-gold-400 font-semibold text-lg">Trusted Developer</span>
              </div>
              <h3 className="text-4xl font-luxury font-bold mb-6">
                {builderInfo.name}
              </h3>
              <p className="text-primary-100 text-lg mb-6">
                With over two decades of excellence in real estate development, Anjani Group 
                has been creating landmark projects that redefine urban living. Our commitment 
                to quality, innovation, and customer satisfaction has made us a trusted name 
                in the industry.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-400">{builderInfo.experience}</div>
                  <div className="text-primary-200 text-sm">Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-400">{builderInfo.projects}</div>
                  <div className="text-primary-200 text-sm">Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold-400">{builderInfo.families}</div>
                  <div className="text-primary-200 text-sm">Happy Families</div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-2xl font-bold mb-6 flex items-center">
                <Award className="w-6 h-6 text-gold-400 mr-2" />
                Awards & Recognition
              </h4>
              <div className="space-y-4">
                {builderInfo.awards.map((award, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white/10 rounded-lg p-4">
                    <div className="w-3 h-3 bg-gold-400 rounded-full"></div>
                    <span className="text-primary-100">{award}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-white/10 rounded-xl p-6 text-center">
                <Users className="w-12 h-12 text-gold-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gold-400 mb-1">RERA Approved</div>
                <div className="text-primary-200">Registration No: UPRERAPRJ123456</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;