import React from 'react';
import FAQList from './FAQList';
import type { FAQ } from '../../data/faqData';
import { FAQ_CATEGORIES } from '../../utils/constants/faqCategories';

interface FAQSectionProps {
  category: keyof typeof FAQ_CATEGORIES;
  items: FAQ[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ category, items }) => {
  if (items.length === 0) return null;

  return (
    <section id={category} className="scroll-mt-24">
      <h2 className="text-2xl font-semibold mb-6">{FAQ_CATEGORIES[category]}</h2>
      <FAQList items={items} />
    </section>
  );
};

export default FAQSection;