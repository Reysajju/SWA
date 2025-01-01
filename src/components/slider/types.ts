export interface SlideItem {
  id: string;
  image: string;
  title: string;
  description: string;
  category?: string;
}

export interface SliderProps {
  slides: SlideItem[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
}

export interface SliderControlsProps {
  currentSlide: number;
  slideCount: number;
  onNext: () => void;
  onPrev: () => void;
  onDotClick: (index: number) => void;
  showDots?: boolean;
  showArrows?: boolean;
}