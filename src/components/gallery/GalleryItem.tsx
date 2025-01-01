import React from 'react';
import type { GalleryItem } from '../../types/gallery';

const GalleryItem: React.FC<GalleryItem> = ({ image, title, description, category }) => {
  return (
    <div className="glass-card overflow-hidden group">
      <div className="relative h-64">
        <img
          src={image}
          alt={`${category} advertising example - ${title}: ${description}`}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
            {category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default GalleryItem;