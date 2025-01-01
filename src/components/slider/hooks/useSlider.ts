import { useState, useEffect, useCallback } from 'react';

interface UseSliderProps {
  slideCount: number;
  autoPlay?: boolean;
  interval?: number;
}

export const useSlider = ({ slideCount, autoPlay = true, interval = 5000 }: UseSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  }, [slideCount]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  }, [slideCount]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const toggleAutoPlay = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [isPlaying, interval, nextSlide]);

  return {
    currentSlide,
    isPlaying,
    nextSlide,
    prevSlide,
    goToSlide,
    toggleAutoPlay
  };
};