import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { restaurantInfo } from '../mock';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3
              className="text-3xl font-bold"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              {restaurantInfo.name}
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-yellow-500 text-xl">★</span>
              <span className="font-semibold">{restaurantInfo.rating}</span>
              <span className="text-gray-400">({restaurantInfo.reviewCount} reviews)</span>
            </div>
            <p className="text-gray-400">
              Experience exceptional dining in the heart of Durban. Where every meal is a celebration.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-400 hover:text-white transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-400 hover:text-white transition-colors text-left"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="text-gray-400 hover:text-white transition-colors text-left"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="text-gray-400 hover:text-white transition-colors text-left"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-400 hover:text-white transition-colors text-left"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3">
              <a
                href={`tel:${restaurantInfo.phone}`}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>{restaurantInfo.phone}</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span className="text-sm">Silvervause Centre, Musgrave, Durban</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <span>{restaurantInfo.hours}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <div className="space-y-2">
              {restaurantInfo.services.map((service, index) => (
                <div key={index} className="text-gray-400">
                  • {service}
                </div>
              ))}
            </div>
            <div className="pt-4">
              <h5 className="font-semibold mb-2">We Welcome Everyone</h5>
              {restaurantInfo.features.map((feature, index) => (
                <div key={index} className="text-gray-400 text-sm">
                  ✓ {feature}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {restaurantInfo.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <button className="hover:text-white transition-colors">Privacy Policy</button>
              <button className="hover:text-white transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
