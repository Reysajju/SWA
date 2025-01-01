import React from 'react';
import SEOHelmet from '../components/SEOHelmet';
import FAQSection from '../components/faq/FAQSection';
import { faqData, getFAQsByCategory } from '../data/faqData';
import { FAQ_CATEGORIES, type FAQCategory } from '../utils/constants/faqCategories';
import { ORGANIZATION_SCHEMA } from '../utils/seo/constants';

const FAQ = () => {
  // Create FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    })),
    "publisher": ORGANIZATION_SCHEMA
  };

  const scrollToCategory = (category: FAQCategory) => {
    const element = document.getElementById(category);
    if (element) {
      const offset = element.offsetTop - 100; // Adjust for fixed header
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <SEOHelmet
        title="Frequently Asked Questions - Mobile Billboard Advertising"
        description="Find answers to common questions about mobile billboard advertising in Karachi. Learn about our services, pricing, coverage areas, and more."
        keywords="mobile advertising faq, rickshaw advertising questions, outdoor advertising help, billboard advertising karachi, advertising costs pakistan"
        schema={faqSchema}
      />
      
      <div className="min-h-screen py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to know about our mobile advertising services
            </p>
          </div>

          {/* Quick Navigation */}
          <nav className="mb-12 p-6 glass-card" aria-label="FAQ categories">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {(Object.keys(FAQ_CATEGORIES) as FAQCategory[]).map((category) => (
                <button
                  key={category}
                  onClick={() => scrollToCategory(category)}
                  className="px-4 py-2 text-sm bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition-colors"
                  aria-label={`Jump to ${FAQ_CATEGORIES[category]} section`}
                >
                  {FAQ_CATEGORIES[category]}
                </button>
              ))}
            </div>
          </nav>

          {/* FAQ Sections */}
          <div className="space-y-12" role="region" aria-label="FAQ Sections">
            {(Object.keys(FAQ_CATEGORIES) as FAQCategory[]).map((category) => (
              <FAQSection
                key={category}
                category={category}
                items={getFAQsByCategory(category)}
              />
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-12 p-6 glass-card">
            <h2 className="text-xl font-semibold mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-6">
              Our team is here to help! Contact us through any of these channels:
            </p>
            <div className="space-y-4">
              <p className="font-semibold">
                Phone: <a href="tel:+923087671613" className="text-blue-600 hover:text-blue-800">+92 308 7671613</a>
              </p>
              <p className="font-semibold">
                Email: <a href="mailto:info@streetwiseads.com" className="text-blue-600 hover:text-blue-800">info@streetwiseads.com</a>
              </p>
              <p className="font-semibold">
                WhatsApp: <a href="https://wa.me/923087671613" className="text-blue-600 hover:text-blue-800">+92 308 7671613</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;