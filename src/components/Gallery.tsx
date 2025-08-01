import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Play } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const galleryItems = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'interior',
      title: 'Luxury Living Room',
      type: 'image'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'interior',
      title: 'Modern Kitchen',
      type: 'image'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'exterior',
      title: 'Building Exterior',
      type: 'image'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'interior',
      title: 'Master Bedroom',
      type: 'image'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'amenities',
      title: 'Swimming Pool',
      type: 'image'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'amenities',
      title: 'Fitness Center',
      type: 'image'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'interior',
      title: 'Dining Area',
      type: 'image'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/323776/pexels-photo-323776.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      category: 'construction',
      title: 'Construction Progress',
      type: 'image'
    }
  ];

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'interior', name: 'Interiors' },
    { id: 'exterior', name: 'Exterior' },
    { id: 'amenities', name: 'Amenities' },
    { id: 'construction', name: 'Progress' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="text-gold-500 font-semibold text-lg">Visual Experience</span>
          <h2 className="text-4xl lg:text-5xl font-luxury font-bold text-primary-800 mt-2 mb-6">
            Gallery
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Explore the stunning visuals of Anjani Ambrosia through our comprehensive gallery 
            showcasing interiors, amenities, and construction progress.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-primary-50 hover:text-primary-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover-lift cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 50}
              onClick={() => openLightbox(index)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-semibold text-lg">{item.title}</h4>
                  <p className="text-white/80 text-sm capitalize">{item.category}</p>
                </div>
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gold-400 transition-colors duration-200"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold-400 transition-colors duration-200"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gold-400 transition-colors duration-200"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <div className="max-w-4xl max-h-full">
              <img
                src={filteredItems[selectedImage].src}
                alt={filteredItems[selectedImage].title}
                className="max-w-full max-h-full object-contain"
              />
              <div className="text-center mt-4">
                <h4 className="text-white text-xl font-semibold">
                  {filteredItems[selectedImage].title}
                </h4>
                <p className="text-white/70 capitalize">
                  {filteredItems[selectedImage].category}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <div className="bg-gradient-to-r from-primary-800 to-primary-600 rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl font-luxury font-bold mb-4">
              Experience It Live
            </h3>
            <p className="text-primary-100 text-lg mb-6 max-w-2xl mx-auto">
              Pictures tell a story, but experiencing Anjani Ambrosia in person reveals 
              the true essence of luxury living. Schedule your site visit today.
            </p>
            <button className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              Schedule Site Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;