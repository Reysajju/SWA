import React from 'react';
import { motion } from 'framer-motion';
import WindowsTile from './WindowsTile';
import type { GalleryItem } from '../../types/gallery';

interface WindowsGridProps {
  items: GalleryItem[];
}

const WindowsGrid: React.FC<WindowsGridProps> = ({ items }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Ensure we have at least 6 items by duplicating if necessary
  const displayItems = items.length < 6 
    ? [...items, ...items].slice(0, 6) 
    : items;

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {displayItems.map((item, index) => {
        // Determine size based on position in grid
        const size = index === 0 || index === 5 ? 'large' : 
                    index === 2 || index === 3 ? 'small' : 'medium';
        
        return (
          <WindowsTile
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            size={size}
          />
        );
      })}
    </motion.div>
  );
};

export default WindowsGrid;