import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Target, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Vibrant street scene in Karachi showing the bustling urban environment perfect for mobile advertising"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-600/80 mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transform Your Brand with Mobile Advertising
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Get your message moving through every street of Karachi with our innovative rickshaw advertising solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/register"
              className="btn-primary inline-flex items-center justify-center group"
              data-testid="start-advertising-btn"
            >
              Start Advertising
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="btn-secondary inline-flex items-center justify-center"
              data-testid="explore-services-btn"
            >
              Explore Services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="glass-card p-6 flex items-start space-x-4" data-testid="feature-coverage">
              <MapPin className="h-6 w-6 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white">City-wide Coverage</h3>
                <p className="text-blue-100 text-sm">Reach every corner of Karachi</p>
              </div>
            </div>
            <div className="glass-card p-6 flex items-start space-x-4" data-testid="feature-targeting">
              <Target className="h-6 w-6 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white">Targeted Advertising</h3>
                <p className="text-blue-100 text-sm">Choose your preferred areas</p>
              </div>
            </div>
            <div className="glass-card p-6 flex items-start space-x-4" data-testid="feature-duration">
              <Clock className="h-6 w-6 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-white">Flexible Duration</h3>
                <p className="text-blue-100 text-sm">Daily to yearly campaigns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;