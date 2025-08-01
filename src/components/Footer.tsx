import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Youtube
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Project', href: '#about' },
    { name: 'Floor Plans', href: '#floor-plans' },
    { name: 'Amenities', href: '#features' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'RERA Details', href: '#' },
    { name: 'Disclaimer', href: '#' }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', name: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', name: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', name: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', name: 'LinkedIn' },
    { icon: <Youtube className="w-5 h-5" />, href: '#', name: 'YouTube' }
  ];

  return (
    <footer id="contact" className="bg-primary-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="font-luxury text-3xl font-bold text-gold-400 mb-4">
              Anjani Ambrosia
            </h3>
            <p className="text-primary-200 mb-6 leading-relaxed">
              Experience elevated living in our premium 14-floor high-rise development 
              featuring luxury 3 & 4 BHK apartments with world-class amenities.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-primary-800 hover:bg-gold-500 p-3 rounded-full transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-200 hover:text-gold-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-primary-200">
                    Sector 15, Noida Extension<br />
                    Greater Noida, UP 201301
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-400" />
                <div>
                  <a href="tel:+919876543210" className="text-primary-200 hover:text-gold-400">
                    +91 98765 43210
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-400" />
                <div>
                  <a href="mailto:info@anjaniambrosia.com" className="text-primary-200 hover:text-gold-400">
                    info@anjaniambrosia.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gold-400 mt-1" />
                <div>
                  <p className="text-primary-200">
                    Sales Office Hours:<br />
                    Mon - Sun: 9:00 AM - 7:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter & Legal */}
          <div>
            <h4 className="text-xl font-semibold mb-6">Stay Updated</h4>
            <p className="text-primary-200 mb-4">
              Subscribe to get the latest updates and offers.
            </p>
            
            <div className="mb-6">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 bg-primary-800 border border-primary-700 rounded-l-lg focus:outline-none focus:border-gold-400 text-white placeholder-primary-300"
                />
                <button className="bg-gold-500 hover:bg-gold-600 px-6 py-3 rounded-r-lg font-semibold transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>

            <h5 className="font-semibold mb-3">Legal</h5>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-200 hover:text-gold-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-primary-300 text-sm mb-4 md:mb-0">
              © 2024 Anjani Ambrosia. All rights reserved.
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-primary-300">
              <div>RERA Registration: UPRERAPRJ123456</div>
              <div>|</div>
              <div>Developed by Anjani Group</div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Strip */}
      <div className="bg-gold-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-primary-900 font-semibold mb-2 md:mb-0">
              Ready to experience elevated living?
            </div>
            <div className="flex space-x-4">
              <button className="bg-primary-800 hover:bg-primary-900 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200">
                Schedule Visit
              </button>
              <button className="border-2 border-primary-800 text-primary-800 hover:bg-primary-800 hover:text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;