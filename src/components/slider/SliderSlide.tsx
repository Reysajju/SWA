import React from 'react';
import { motion } from 'framer-motion';
import type { SlideItem } from './types';

interface SliderSlideProps {
  slide: SlideItem;
  isActive: boolean;
}

const SliderSlide: React.FC<SliderSlideProps> = ({ slide, isActive }) => {
  return (
    <motion.div
      className={`absolute inset-0 transition-opacity duration-500 ${
        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
      }`}
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{
        opacity: isActive ? 1 : 0,
        scale: isActive ? 1 : 1.1,
        transition: { duration: 0.5 }
      }}
    >
      <img
        src={slide.image}
        alt={`${slide.title} - ${slide.description}`}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      
      <motion.div
        className="absolute bottom-16 left-0 right-0 px-4 sm:px-6 lg:px-8 text-white"
        initial={{ y: 20, opacity: 0 }}
        animate={{
          y: isActive ? 0 : 20,
          opacity: isActive ? 1 : 0,
          transition: { duration: 0.5, delay: 0.2 }
        }}
      >
        <div className="max-w-7xl mx-auto">
          {slide.category && (
            <span className="inline-block px-3 py-1 bg-blue-600 text-sm rounded-full mb-3">
              {slide.category}
            </span>
          )}
          <h3 className="text-2xl sm:text-3xl font-bold mb-2">{slide.title}</h3>
          <p className="text-lg text-gray-200">{slide.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SliderSlide;