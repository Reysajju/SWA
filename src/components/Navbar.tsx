import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-800">Street Wise Ads</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
              Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
              Services
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
              Contact
            </Link>
            <Link
              to="/ad-form"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/about"
                className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/ad-form"
                className="block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;