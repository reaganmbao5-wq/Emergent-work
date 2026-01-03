import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { restaurantInfo } from '../mock';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold" style={{ fontFamily: "'Crimson Text', serif" }}>
              {restaurantInfo.name}
            </h1>
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <span className="text-yellow-500">★</span>
              <span className="font-semibold">{restaurantInfo.rating}</span>
              <span>({restaurantInfo.reviewCount} reviews)</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-black font-medium transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-black font-medium transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-gray-700 hover:text-black font-medium transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-gray-700 hover:text-black font-medium transition-colors"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-black font-medium transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${restaurantInfo.phone}`}
              className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-all hover:-translate-y-0.5 font-semibold"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-3">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
              >
                Contact
              </button>
              <a
                href={`tel:${restaurantInfo.phone}`}
                className="flex items-center justify-center gap-2 mx-4 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-all font-semibold"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
