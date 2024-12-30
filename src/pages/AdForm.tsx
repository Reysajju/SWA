import React, { useState } from 'react';
import SEOHelmet from '../components/SEOHelmet';

const successMessages = [
  "Shabash! Your ad request is on its way like a speeding rickshaw! 🚗",
  "Mubarak ho! Your ad will soon be cruising through Karachi's streets! 🎉",
  "Bohot khoob! Your message will soon be mobile! 🌟",
  "Mashallah! Your ad is ready to hit the roads! 🚀",
  "Zabardast choice! Your brand is about to go places! 🎯",
  "Kamaal kar diya! Your ad journey begins now! 🌈",
  "Bilkul perfect! Your brand is ready to roll! 🎨",
  "Ekdum solid! Your ad will soon be turning heads! 👀",
  "Full dhamaal! Your campaign is ready to rock the streets! 🎸",
  "Aala! Your message will soon be everywhere! 🌍"
];

const AdForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleType: 'rickshaw',
    vehicleCount: 1,
    message: ''
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomMessage = successMessages[Math.floor(Math.random() * successMessages.length)];
    setSuccessMessage(`${randomMessage}\nThank you, ${formData.name}!`);
    setShowSuccess(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-green-600 mb-4">Success!</h2>
            <p className="text-lg text-gray-700 whitespace-pre-line">{successMessage}</p>
            <button
              onClick={() => setShowSuccess(false)}
              className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
              Submit Another Ad
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHelmet
        title="Place Your Ad - Street Wise Ads"
        description="Submit your mobile billboard advertising request for Karachi. Choose vehicles and start advertising today!"
        keywords="place mobile ad, rickshaw advertising form, car ad submission"
      />
      
      <div className="min-h-screen py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12">Place Your Ad</h1>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700">
                  Vehicle Type
                </label>
                <select
                  id="vehicleType"
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="rickshaw">Rickshaw</option>
                  <option value="car">Car</option>
                  <option value="van">Van</option>
                </select>
              </div>

              <div>
                <label htmlFor="vehicleCount" className="block text-sm font-medium text-gray-700">
                  Number of Vehicles
                </label>
                <input
                  type="number"
                  id="vehicleCount"
                  name="vehicleCount"
                  value={formData.vehicleCount}
                  onChange={handleChange}
                  min="1"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue -700 transition duration-300"
              >
                Submit Ad Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdForm;