import { rickshawImages } from '../utils/images';

export const journeyGallery = [
  {
    image: rickshawImages[0],
    title: "Urban Advertising Solutions",
    description: "Transforming city transport into moving billboards",
    category: "Rickshaw"
  },
  {
    image: rickshawImages[1],
    title: "Dynamic Marketing",
    description: "Reaching audiences across Karachi",
    category: "Rickshaw"
  },
  {
    image: rickshawImages[2],
    title: "Street-Level Impact",
    description: "Making your brand visible everywhere",
    category: "Rickshaw"
  },
  {
    image: rickshawImages[3],
    title: "Mobile Campaigns",
    description: "Taking your message to the streets",
    category: "Rickshaw"
  },
  {
    image: rickshawImages[4],
    title: "City-Wide Coverage",
    description: "Maximum visibility in key areas",
    category: "Rickshaw"
  },
  {
    image: rickshawImages[5],
    title: "Strategic Advertising",
    description: "Targeted routes for better reach",
    category: "Rickshaw"
  }
];

export const productGallery = rickshawImages.slice(6, 11).map((image, index) => ({
  image,
  title: [
    "Premium Branding",
    "Full Coverage Ads",
    "Custom Designs",
    "High-Impact Display",
    "Strategic Placement"
  ][index],
  description: "Professional mobile advertising solutions",
  category: "Rickshaw" as const
}));

export const portfolioGallery = rickshawImages.slice(11).map((image, index) => ({
  image,
  title: `Success Story ${index + 1}`,
  description: "Real results from our advertising campaigns",
  category: "Success Story" as const
}));