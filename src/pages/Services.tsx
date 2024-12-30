import React from 'react';
import { Link } from 'react-router-dom';
import SEOHelmet from '../components/SEOHelmet';

const Services = () => {
  return (
    <>
      <SEOHelmet
        title="Our Services - Street Wise Ads"
        description="Explore our mobile billboard advertising services in Karachi. Choose from rickshaws, cars, and more."
        keywords="mobile advertising services, rickshaw ads karachi, car advertising pakistan"
      />
      
      <div className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Rickshaw Advertising */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1625243239649-03c23b0d4188?auto=format&fit=crop&w=800"
                alt="Rickshaw Advertising"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Rickshaw Advertising</h3>
                <p className="text-gray-600 mb-4">
                  Transform rickshaws into moving billboards. Perfect for local business promotion.
                </p>
                <Link
                  to="/ad-form"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Car Advertising */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1621799754526-a0d52c49fad5?auto=format&fit=crop&w=800"
                alt="Car Advertising"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Car Advertising</h3>
                <p className="text-gray-600 mb-4">
                  Premium car wraps and magnetic signs for maximum brand visibility.
                </p>
                <Link
                  to="/ad-form"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Fleet Advertising */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800"
                alt="Fleet Advertising"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Fleet Advertising</h3>
                <p className="text-gray-600 mb-4">
                  Large-scale advertising solutions for multiple vehicles.
                </p>
                <Link
                  to="/ad-form"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold mb-6">Why Choose Our Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Wide Coverage</h3>
                <p className="text-gray-600">Reach every corner of Karachi</p>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Affordable</h3>
                <p className="text-gray-600">Cost-effective advertising solutions</p>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Flexible</h3>
                <p className="text-gray-600">Choose your duration and vehicle type</p>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Professional</h3>
                <p className="text-gray-600">High-quality design and installation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;