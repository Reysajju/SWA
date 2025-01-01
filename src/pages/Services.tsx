import React from 'react';
import { Link } from 'react-router-dom';
import SEOHelmet from '../components/SEOHelmet';
import GallerySection from '../components/gallery/GallerySection';
import { productGallery, portfolioGallery } from '../data/gallery';

const Services: React.FC = () => {
  return (
    <>
      <SEOHelmet
        title="Our Services - Street Wise Ads"
        description="Explore our mobile billboard advertising services in Karachi. Choose from rickshaws, cars, and more."
        keywords="mobile advertising services, rickshaw ads karachi, car advertising pakistan"
      />
      
      <div className="min-h-screen section-padding pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold font-modern mb-4">
              Our <span className="gradient-text">Advertising Services</span>
            </h1>
            <p className="text-xl text-gray-700 font-modern">
              Choose the perfect mobile advertising solution for your brand
            </p>
          </div>

          {/* Products Gallery */}
          <GallerySection
            title="Our Products"
            subtitle="Discover our range of mobile advertising solutions"
            items={productGallery}
          />

          {/* Portfolio Gallery */}
          <GallerySection
            title="Our Portfolio"
            subtitle="See our successful campaigns and satisfied clients"
            items={portfolioGallery}
          />
        </div>
      </div>
    </>
  );
};

export default Services;