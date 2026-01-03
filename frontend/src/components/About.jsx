import React from 'react';
import { Heart, Award, Users, Clock } from 'lucide-react';
import { restaurantInfo, images } from '../mock';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src={images.about}
                  alt="Restaurant ambiance"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <img
                  src={images.ambiance2}
                  alt="Dining area"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src={images.ambiance1}
                  alt="Interior design"
                  className="w-full h-48 object-cover rounded-2xl shadow-lg"
                />
                <img
                  src={images.ambiance3}
                  alt="Cozy atmosphere"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2
                className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: "'Crimson Text', serif" }}
              >
                About Archie's Bistro
              </h2>
              <div className="w-24 h-1 bg-black"></div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              {restaurantInfo.description}
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Our diverse menu brings together flavors from around the world, from hearty American classics to Asian-inspired dishes and European favorites. Whether you're craving a luxurious Wagyu burger, fresh salmon, or comfort food like chicken and waffles, we've got something to satisfy every palate.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-8">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900">Made with Love</h3>
                <p className="text-gray-600">Every dish is prepared with passion and the finest ingredients.</p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900">Highly Rated</h3>
                <p className="text-gray-600">4.9 stars with 60 glowing reviews from our valued customers.</p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900">Inclusive Space</h3>
                <p className="text-gray-600">LGBTQ+ friendly and welcoming to all. Everyone belongs here.</p>
              </div>

              <div className="space-y-2">
                <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900">Late Night Dining</h3>
                <p className="text-gray-600">Open until midnight every day to satisfy those late-night cravings.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
