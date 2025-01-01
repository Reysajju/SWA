import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants/contact';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Street Wise Ads</h3>
            <p className="text-gray-300">
              Transforming rickshaws and cars into mobile billboards in Karachi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2" role="list" aria-label="Footer navigation">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white">Gallery</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white">FAQ</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2" role="list" aria-label="Contact information">
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5" aria-hidden="true" />
                <a href={`tel:${CONTACT_INFO.phone.primary}`} className="text-gray-300 hover:text-white">
                  {CONTACT_INFO.phone.primary}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5" aria-hidden="true" />
                <a href={`mailto:${CONTACT_INFO.email.primary}`} className="text-gray-300 hover:text-white">
                  {CONTACT_INFO.email.primary}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" aria-hidden="true" />
                <span className="text-gray-300">{CONTACT_INFO.address.street}, {CONTACT_INFO.address.city}</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href={CONTACT_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href={CONTACT_INFO.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-6 w-6" aria-hidden="true" />
              </a>
              <a
                href={CONTACT_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Street Wise Ads. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;