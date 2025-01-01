import React from 'react';
import FAQItem from './FAQItem';
import type { FAQ } from '../../types/faq';

interface FAQListProps {
  items: FAQ[];
}

const FAQList: React.FC<FAQListProps> = ({ items }) => {
  return (
    <div className="space-y-4" data-testid="faq-list">
      {items.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
};

export default FAQList;