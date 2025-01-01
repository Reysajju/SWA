import React from 'react';
import SEOHelmet from '../components/SEOHelmet';
import GallerySection from '../components/gallery/GallerySection';
import { journeyGallery, productGallery, portfolioGallery } from '../data/gallery';

const Gallery = () => {
  return (
    <>
      <SEOHelmet
        title="Gallery - Street Wise Ads"
        description="View our portfolio of mobile billboard advertising campaigns in Karachi"
        keywords="advertising gallery, rickshaw ads portfolio, mobile billboard examples"
      />
      
      <div className="min-h-screen section-padding pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold font-modern mb-4">
              Our <span className="gradient-text">Gallery</span>
            </h1>
            <p className="text-xl text-gray-700 font-modern">
              Explore our successful advertising campaigns
            </p>
          </div>

          <div className="space-y-24">
            <GallerySection
              title="Featured Campaigns"
              subtitle="Our most impactful advertising solutions"
              items={journeyGallery}
            />

            <GallerySection
              title="Recent Projects"
              subtitle="Latest advertising campaigns"
              items={productGallery}
            />

            <GallerySection
              title="Success Stories"
              subtitle="Real results for real businesses"
              items={portfolioGallery}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;