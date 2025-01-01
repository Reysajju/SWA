import React from 'react';
import WindowsGrid from './WindowsGrid';
import type { GalleryItem } from '../../types/gallery';

interface GallerySectionProps {
  title: string;
  subtitle: string;
  items: GalleryItem[];
}

const GallerySection: React.FC<GallerySectionProps> = ({ title, subtitle, items }) => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </div>
        <WindowsGrid items={items} />
      </div>
    </section>
  );
};

export default GallerySection;