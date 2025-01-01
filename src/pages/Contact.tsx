import React from 'react';
import SEOHelmet from '../components/SEOHelmet';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import LocationMap from '../components/contact/LocationMap';

const Contact = () => {
  return (
    <>
      <SEOHelmet
        title="Contact Us - Street Wise Ads"
        description="Get in touch with Street Wise Ads for mobile billboard advertising in Karachi."
        keywords="contact street wise ads, advertising inquiry, mobile billboard contact"
      />
      
      <div className="min-h-screen py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-modern mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-600">
              We'd love to hear from you. Let's discuss how we can help your brand reach every street.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <ContactInfo />
            <ContactForm />
          </div>

          <LocationMap />
        </div>
      </div>
    </>
  );
};

export default Contact;