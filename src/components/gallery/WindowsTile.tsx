import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface WindowsTileProps {
  image: string;
  title: string;
  description: string;
  size?: 'small' | 'medium' | 'large';
}

const WindowsTile: React.FC<WindowsTileProps> = ({ 
  image, 
  title, 
  description, 
  size = 'medium' 
}) => {
  const [imageError, setImageError] = useState(false);

  const tileSize = {
    small: 'h-48',
    medium: 'h-64',
    large: 'h-80'
  };

  const handleImageError = () => {
    console.error(`Failed to load image: ${image}`);
    setImageError(true);
  };

  return (
    <motion.div
      className={`relative ${tileSize[size]} w-full overflow-hidden rounded-xl group`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="absolute inset-0">
        {!imageError ? (
          <img
            src={image}
            alt={`Mobile advertising showcase: ${title} - ${description}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={handleImageError}
          />
        ) : (
          <div className="h-full w-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400">Image unavailable</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</p>
      </div>
    </motion.div>
  );
};

export default WindowsTile;