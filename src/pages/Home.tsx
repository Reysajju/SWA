import React from 'react';
import { Link } from 'react-router-dom';
import SEOHelmet from '../components/SEOHelmet';

const Home = () => {
  return (
    <>
      <SEOHelmet
        title="Street Wise Ads - Mobile Billboard Advertising in Karachi"
        description="Transform rickshaws and cars into mobile billboards in Karachi. Affordable, effective outdoor advertising reaching every street."
        keywords="mobile billboard advertising karachi, rickshaw advertising, outdoor ads karachi"
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Get your rickshaw chalta phirta ad place without even paying!
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Hum aap ki ishtihar ko har gali tak pohnchate hain!
              </p>
              <Link
                to="/ad-form"
                className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
              >
                Get Started Now
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <h3 className="text-xl font-semibold mb-4">Affordable Advertising</h3>
                <p className="text-gray-600">
                  Cost-effective mobile advertising solution that reaches your target audience.
                </p>
              </div>
              <div className="text-center p-6">
                <h3 className="text-xl font-semibold mb-4">Wide Coverage</h3>
                <p className="text-gray-600">
                  Your ads travel through every street and neighborhood in Karachi.
                </p>
              </div>
              <div className="text-center p-6">
                <h3 className="text-xl font-semibold mb-4">Flexible Options</h3>
                <p className="text-gray-600">
                  Choose from various vehicle types and advertising durations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
            <div className="space-x-4">
              <Link
                to="/ad-form"
                className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Place Your Ad
              </Link>
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;