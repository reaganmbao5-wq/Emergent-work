import React from 'react';
import { Star } from 'lucide-react';
import { reviews } from '../mock';

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900"
            style={{ fontFamily: "'Crimson Text', serif" }}
          >
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
          <div className="flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-500 text-yellow-500" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">4.9</span>
            <span className="text-gray-600">out of 5</span>
          </div>
          <p className="text-lg text-gray-600">Based on 60 verified reviews</p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gradient-to-br from-lime-50 to-yellow-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              {/* Header with Avatar */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-semibold">
                  {review.avatar}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.date}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-lime-100 rounded-2xl px-8 py-6">
            <p className="text-lg text-gray-900 mb-3">
              <span className="font-bold">Join our satisfied customers!</span> Experience the warmth and quality that earned us a 4.9-star rating.
            </p>
            <a
              href="tel:0673823347"
              className="inline-block px-8 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-all hover:-translate-y-1 shadow-md"
            >
              Book Your Table
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
