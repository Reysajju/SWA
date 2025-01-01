import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { SliderControlsProps } from './types';

const SliderControls: React.FC<SliderControlsProps> = ({
  currentSlide,
  slideCount,
  onNext,
  onPrev,
  onDotClick,
  showDots = true,
  showArrows = true,
}) => {
  return (
    <div className="absolute bottom-4 left-0 right-0 z-10">
      <div className="container mx-auto px-4 flex items-center justify-center space-x-4">
        {showArrows && (
          <button
            onClick={onPrev}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
        )}

        {showDots && (
          <div className="flex space-x-2">
            {Array.from({ length: slideCount }).map((_, index) => (
              <button
                key={index}
                onClick={() => onDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-white scale-110'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {showArrows && (
          <button
            onClick={onNext}
            className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SliderControls;