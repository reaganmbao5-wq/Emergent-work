import React, { useState } from 'react';
import { menuData } from '../mock';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Menu = () => {
  const [expandedCategory, setExpandedCategory] = useState(menuData[0]?.category || null);

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <section id="menu" className="py-24 bg-gradient-to-br from-lime-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2
            className="text-4xl sm:text-5xl font-bold text-gray-900"
            style={{ fontFamily: "'Crimson Text', serif" }}
          >
            Our Menu
          </h2>
          <div className="w-24 h-1 bg-black mx-auto"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our diverse selection of dishes crafted with care and quality ingredients. From comfort classics to international flavors.
          </p>
        </div>

        {/* Menu Categories - Accordion Style */}
        <div className="space-y-4">
          {menuData.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300"
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.category)}
                className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <h3
                    className="text-2xl font-bold text-gray-900"
                    style={{ fontFamily: "'Crimson Text', serif" }}
                  >
                    {category.category}
                  </h3>
                  <span className="px-3 py-1 bg-lime-100 text-gray-800 rounded-full text-sm font-medium">
                    {category.items.length} items
                  </span>
                </div>
                {expandedCategory === category.category ? (
                  <ChevronUp className="w-6 h-6 text-gray-600" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-gray-600" />
                )}
              </button>

              {/* Category Items */}
              {expandedCategory === category.category && (
                <div className="px-8 pb-8 pt-4 border-t border-gray-100">
                  <div className="grid gap-6">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex justify-between items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex-1 space-y-2">
                          <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                          <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="text-xl font-bold text-gray-900">
                            R{item.price.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3
              className="text-3xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "'Crimson Text', serif" }}
            >
              Ready to Order?
            </h3>
            <p className="text-gray-600 mb-6">
              Call us now for dine-in reservations or takeaway orders. We can't wait to serve you!
            </p>
            <a
              href="tel:0673823347"
              className="inline-block px-8 py-4 bg-black text-white rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all hover:-translate-y-1 shadow-md hover:shadow-lg"
            >
              Call 067 382 3347
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
