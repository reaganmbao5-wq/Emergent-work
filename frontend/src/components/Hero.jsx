import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import { restaurantInfo, images } from '../mock';

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-lime-50 to-yellow-50">
        <div className="absolute inset-0 opacity-10">
          <img
            src={images.hero}
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                <span className="text-yellow-500 text-lg">★</span>
                <span className="font-semibold text-gray-900">{restaurantInfo.rating} Rating</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-600">{restaurantInfo.reviewCount} Reviews</span>
              </div>

              <h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: "'Crimson Text', serif" }}
              >
                {restaurantInfo.name}
              </h1>

              <p className="text-2xl sm:text-3xl text-gray-700" style={{ fontFamily: "'Crimson Text', serif" }}>
                {restaurantInfo.tagline}
              </p>

              <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                Experience exceptional dining in the heart of Durban's Musgrave district. From classic comfort food to upscale dishes, every meal is crafted with care and served with warmth.
              </p>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
                <Clock className="w-4 h-4 text-gray-600" />
                <span className="text-gray-700">{restaurantInfo.hours}</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
                <MapPin className="w-4 h-4 text-gray-600" />
                <span className="text-gray-700">Musgrave, Durban</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToMenu}
                className="px-8 py-4 bg-black text-white rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all hover:-translate-y-1 shadow-md hover:shadow-lg"
              >
                View Menu
              </button>
              <a
                href={`tel:${restaurantInfo.phone}`}
                className="flex items-center gap-2 px-8 py-4 bg-white text-black border-2 border-black rounded-lg font-semibold text-lg hover:bg-black hover:text-white transition-all hover:-translate-y-1 shadow-md"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <button
                onClick={scrollToContact}
                className="flex items-center gap-2 px-8 py-4 bg-white text-black border-2 border-black rounded-lg font-semibold text-lg hover:bg-black hover:text-white transition-all hover:-translate-y-1 shadow-md"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </button>
            </div>

            {/* Services Badge */}
            <div className="flex flex-wrap gap-3">
              {restaurantInfo.services.map((service, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-lime-100 text-gray-800 rounded-full text-sm font-medium"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={images.hero}
                alt="Archie's Bistro interior"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <p className="text-sm text-gray-600 mb-2">Why Choose Us</p>
              <p className="text-lg font-semibold text-gray-900 mb-1">LGBTQ+ Friendly</p>
              <p className="text-gray-600">Everyone is welcome at Archie's. We celebrate diversity and inclusivity.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
