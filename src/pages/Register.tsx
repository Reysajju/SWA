import React, { useState } from 'react';
import SEOHelmet from '../components/SEOHelmet';
import VehicleRegistrationForm from '../components/forms/VehicleRegistrationForm';
import AdPlacementForm from '../components/forms/AdPlacementForm';

const Register = () => {
  const [formType, setFormType] = useState<'vehicle' | 'ad'>('ad');

  return (
    <>
      <SEOHelmet
        title="Register - Street Wise Ads"
        description="Register your vehicle or place an ad with Street Wise Ads in Karachi."
        keywords="vehicle registration karachi, place ad karachi, mobile advertising registration"
      />
      
      <div className="min-h-screen section-padding pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-modern mb-4">
              Get Started with <span className="gradient-text">Street Wise Ads</span>
            </h1>
            <p className="text-xl text-gray-700 font-modern">Choose what you'd like to do</p>
          </div>

          <div className="flex justify-center space-x-4 mb-12">
            <button
              onClick={() => setFormType('ad')}
              className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                formType === 'ad' ? 'btn-primary' : 'btn-secondary'
              }`}
            >
              Place an Ad
            </button>
            <button
              onClick={() => setFormType('vehicle')}
              className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                formType === 'vehicle' ? 'btn-primary' : 'btn-secondary'
              }`}
            >
              Register Vehicle
            </button>
          </div>

          <div className="glass-card p-8">
            {formType === 'ad' ? <AdPlacementForm /> : <VehicleRegistrationForm />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;