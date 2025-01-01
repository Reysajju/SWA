import { FAQ_CATEGORIES, type FAQCategory } from '../utils/constants/faqCategories';

export interface FAQ {
  question: string;
  answer: string;
  category: FAQCategory;
}

export const faqData: FAQ[] = [
  // Services
  {
    question: "What is mobile billboard advertising?",
    answer: "Mobile billboard advertising involves displaying advertisements on moving vehicles like rickshaws and cars, allowing your message to reach different areas of the city throughout the day.",
    category: 'services'
  },
  {
    question: "What types of vehicles are available?",
    answer: "We offer advertising on rickshaws, cars, and vans. Each vehicle type provides different advertising space and reaches different audience segments.",
    category: 'services'
  },
  {
    question: "Do you provide design services?",
    answer: "Yes, we offer professional design services to create eye-catching advertisements that align with your brand guidelines.",
    category: 'services'
  },

  // Coverage
  {
    question: "Which areas in Karachi do you cover?",
    answer: "We cover all major areas of Karachi including North Nazimabad, Saddar, Gulshan, DHA, Clifton, and more. You can specify your preferred areas for targeted advertising.",
    category: 'coverage'
  },
  {
    question: "Can I choose specific routes?",
    answer: "Yes, you can specify preferred routes and areas for your mobile advertisements based on your target audience.",
    category: 'coverage'
  },
  {
    question: "Do you operate outside Karachi?",
    answer: "Currently, we focus on Karachi to ensure the best service quality. We plan to expand to other cities soon.",
    category: 'coverage'
  },

  // Pricing
  {
    question: "How much does it cost to advertise?",
    answer: "Our pricing starts from PKR 10,000 and varies based on factors like vehicle type, duration, and number of vehicles. We offer flexible packages to suit different budgets.",
    category: 'pricing'
  },
  {
    question: "Do you offer package discounts?",
    answer: "Yes, we offer discounts for long-term commitments and multiple vehicle bookings.",
    category: 'pricing'
  },
  {
    question: "What is the payment structure?",
    answer: "We offer flexible payment options including monthly installments. A small advance is required to initiate the campaign.",
    category: 'pricing'
  },

  // Process
  {
    question: "How quickly can you start my campaign?",
    answer: "Once artwork is approved, we can typically launch your campaign within 5-7 working days.",
    category: 'process'
  },
  {
    question: "What is the minimum advertising duration?",
    answer: "Our minimum advertising duration is one month, but we recommend 3-6 months for optimal brand visibility and impact.",
    category: 'process'
  },
  {
    question: "Can I change my advertisement during the campaign?",
    answer: "Yes, advertisement changes are possible with advance notice. Additional charges may apply.",
    category: 'process'
  },

  // Technical
  {
    question: "What materials do you use for the advertisements?",
    answer: "We use high-quality, weather-resistant materials to ensure your advertisements remain vibrant and durable.",
    category: 'technical'
  },
  {
    question: "What are the advertisement size options?",
    answer: "Size options vary by vehicle type. We'll provide detailed specifications during consultation.",
    category: 'technical'
  },
  {
    question: "How do you ensure quality control?",
    answer: "We regularly monitor and maintain all advertising displays, conduct routine vehicle inspections, and provide real-time tracking of advertising vehicles.",
    category: 'technical'
  },

  // Support
  {
    question: "How do I track the effectiveness?",
    answer: "We provide regular reports including route coverage, impressions estimates, and photo documentation of your advertisements in different locations.",
    category: 'support'
  },
  {
    question: "Do you provide campaign photography?",
    answer: "Yes, we provide regular photo updates of your advertisements in different locations.",
    category: 'support'
  },
  {
    question: "What happens if a vehicle breaks down?",
    answer: "We immediately replace any out-of-service vehicle to maintain campaign continuity.",
    category: 'support'
  },
  {
    question: "How do I get started?",
    answer: "Simply contact us through our website, email at info@streetwiseads.com, or call +923087671613 to discuss your advertising needs.",
    category: 'support'
  }
];

export const getFAQsByCategory = (category: FAQCategory) => 
  faqData.filter(faq => faq.category === category);