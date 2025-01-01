import React from 'react';
import GalleryItem from './GalleryItem';
import type { GalleryItem as GalleryItemType } from '../../types/gallery';

interface GalleryGridProps {
  items: GalleryItemType[];
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <GalleryItem key={index} {...item} />
      ))}
    </div>
  );
};

export default GalleryGrid;