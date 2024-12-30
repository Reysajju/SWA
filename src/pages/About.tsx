import React from 'react';
import SEOHelmet from '../components/SEOHelmet';

const About = () => {
  return (
    <>
      <SEOHelmet
        title="About Us - Street Wise Ads"
        description="Learn about Street Wise Ads, Karachi's leading mobile billboard advertising company."
        keywords="about street wise ads, mobile advertising karachi, rickshaw advertising company"
      />
      
      <div className="min-h-screen py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12">About Street Wise Ads</h1>
          
          <div className="prose lg:prose-xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Street Wise Ads is Karachi's premier mobile billboard advertising company, 
              specializing in transforming everyday vehicles into powerful advertising platforms.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              We aim to revolutionize outdoor advertising by making it more accessible, 
              affordable, and effective for businesses of all sizes.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Vision</h2>
            <p className="text-lg text-gray-700 mb-6">
              To become the leading mobile advertising platform in Pakistan, connecting 
              businesses with their target audience through innovative advertising solutions.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us?</h2>
            <ul className="list-disc pl-6 text-lg text-gray-700 mb-6">
              <li>Extensive network of vehicles across Karachi</li>
              <li>Flexible advertising options</li>
              <li>Affordable pricing plans</li>
              <li>Professional design services</li>
              <li>Dedicated customer support</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;