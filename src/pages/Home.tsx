import React from 'react';
import SEOHelmet from '../components/SEOHelmet';
import HeroSection from '../components/home/HeroSection';
import GallerySection from '../components/gallery/GallerySection';
import { journeyGallery } from '../data/gallery';

const Home = () => {
  return (
    <>
      <SEOHelmet
        title="Street Wise Ads - Mobile Billboard Advertising in Karachi"
        description="Transform rickshaws and cars into mobile billboards in Karachi. Affordable, effective outdoor advertising reaching every street."
        keywords="mobile billboard advertising karachi, rickshaw advertising, outdoor ads karachi"
      />
      
      <div className="min-h-screen">
        <HeroSection />
        <GallerySection
          title="Our Journey"
          subtitle="See how we've helped businesses grow through mobile advertising"
          items={journeyGallery}
        />
      </div>
    </>
  );
};

export default Home;