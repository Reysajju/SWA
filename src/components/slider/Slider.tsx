import React from 'react';
import { useSlider } from './hooks/useSlider';
import SliderControls from './SliderControls';
import SliderSlide from './SliderSlide';
import type { SliderProps } from './types';

const Slider: React.FC<SliderProps> = ({
  slides,
  autoPlay = true,
  interval = 5000,
  showDots = true,
  showArrows = true,
  className = ''
}) => {
  const {
    currentSlide,
    nextSlide,
    prevSlide,
    goToSlide
  } = useSlider({
    slideCount: slides.length,
    autoPlay,
    interval
  });

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {slides.map((slide, index) => (
        <SliderSlide
          key={slide.id}
          slide={slide}
          isActive={currentSlide === index}
        />
      ))}

      <SliderControls
        currentSlide={currentSlide}
        slideCount={slides.length}
        onNext={nextSlide}
        onPrev={prevSlide}
        onDotClick={goToSlide}
        showDots={showDots}
        showArrows={showArrows}
      />
    </div>
  );
};

export default Slider;