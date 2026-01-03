import React, { useState } from 'react';
import { Star, Check } from 'lucide-react';
import { reviews } from '../mock';

const Reviews = () => {
  const [userReview, setUserReview] = useState({
    name: '',
    rating: 0,
    review: ''
  });
  const [hoveredRating, setHoveredRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [localReviews, setLocalReviews] = useState(reviews);

  const handleRatingClick = (rating) => {
    setUserReview({ ...userReview, rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userReview.name && userReview.rating && userReview.review) {
      // Create new review
      const newReview = {
        id: Date.now(),
        name: userReview.name,
        rating: userReview.rating,
        date: 'Just now',
        text: userReview.review,
        avatar: userReview.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
      };
      
      // Add to beginning of reviews
      setLocalReviews([newReview, ...localReviews]);
      
      // Show success message
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setUserReview({ name: '', rating: 0, review: '' });
      }, 3000);
    }
  };

  const handleChange = (e) => {
    setUserReview({
      ...userReview,
      [e.target.name]: e.target.value
    });
  };

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

        {/* Leave a Review Form */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-lime-50 to-yellow-50 rounded-2xl p-8 shadow-lg">
            <h3
              className="text-3xl font-bold text-gray-900 mb-2 text-center"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              Share Your Experience
            </h3>
            <p className="text-gray-600 text-center mb-6">
              We'd love to hear about your visit to Archie's Bistro!
            </p>

            {submitted ? (
              <div className="bg-white rounded-lg p-8 text-center">
                <div className="w-16 h-16 bg-lime-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-gray-900" />
                </div>
                <h4 className="text-2xl font-semibold text-gray-900 mb-2">Thank You!</h4>
                <p className="text-gray-700">Your review has been submitted and will appear below.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-white rounded-lg p-6">
                  <div className="space-y-6">
                    {/* Rating Input */}
                    <div className="text-center">
                      <label className="block text-sm font-semibold text-gray-900 mb-3">
                        Rate Your Experience *
                      </label>
                      <div className="flex items-center justify-center gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => handleRatingClick(star)}
                            onMouseEnter={() => setHoveredRating(star)}
                            onMouseLeave={() => setHoveredRating(0)}
                            className="transition-transform hover:scale-110"
                          >
                            <Star
                              className={`w-10 h-10 transition-colors ${
                                star <= (hoveredRating || userReview.rating)
                                  ? 'fill-yellow-500 text-yellow-500'
                                  : 'text-gray-300'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                      {userReview.rating > 0 && (
                        <p className="text-sm text-gray-600 mt-2">
                          {userReview.rating === 5 && "Excellent!"}
                          {userReview.rating === 4 && "Very Good!"}
                          {userReview.rating === 3 && "Good"}
                          {userReview.rating === 2 && "Fair"}
                          {userReview.rating === 1 && "Poor"}
                        </p>
                      )}
                    </div>

                    {/* Name Input */}
                    <div>
                      <label htmlFor="review-name" className="block text-sm font-semibold text-gray-900 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="review-name"
                        name="name"
                        value={userReview.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Review Text */}
                    <div>
                      <label htmlFor="review-text" className="block text-sm font-semibold text-gray-900 mb-2">
                        Your Review *
                      </label>
                      <textarea
                        id="review-text"
                        name="review"
                        value={userReview.review}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
                        placeholder="Tell us about your experience at Archie's Bistro..."
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-black text-white rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all hover:-translate-y-1 shadow-md hover:shadow-lg"
                    >
                      Submit Review
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {localReviews.map((review) => (
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
