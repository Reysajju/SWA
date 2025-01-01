import React from 'react';

const LocationMap = () => {
  return (
    <div className="glass-card p-8">
      <h2 className="text-2xl font-semibold mb-6">Our Location</h2>
      <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
          alt="Aerial view of North Nazimabad, Karachi showing the business district and surrounding areas"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900">Street Wise Ads</h3>
          <p className="text-gray-600">North Nazimabad, Karachi, Pakistan</p>
          <a
            href="https://www.google.com/maps/place/North+Nazimabad+Karachi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 text-sm mt-2 inline-block"
            aria-label="Open Street Wise Ads location in Google Maps"
          >
            View on Google Maps →
          </a>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;