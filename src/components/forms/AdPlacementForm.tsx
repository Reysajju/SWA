import React, { useState } from 'react';
import FormField from '../ui/FormField';
import SuccessMessage from '../ui/SuccessMessage';
import {
  vehicleTypes,
  campaignDurations,
  budgetRanges,
  successMessages
} from '../../utils/formConstants';

const AdPlacementForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  if (submitted) {
    return (
      <SuccessMessage
        title="Success!"
        message={successMessage}
        buttonText="Place Another Ad"
        onButtonClick={() => setSubmitted(false)}
      />
    );
  }

  return (
    <form 
      name="ad-placement"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        const randomMessage = successMessages[Math.floor(Math.random() * successMessages.length)];
        setSuccessMessage(randomMessage);
        setSubmitted(true);
      }}
    >
      <input type="hidden" name="form-name" value="ad-placement" />
      <p className="hidden">
        <label>
          Don't fill this out if you're human: <input name="bot-field" />
        </label>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Your Name"
          name="name"
          required
        />
        <FormField
          label="Business Name"
          name="businessName"
          required
        />
        <FormField
          label="Email"
          name="email"
          type="email"
          required
        />
        <FormField
          label="Phone"
          name="phone"
          type="tel"
          required
        />
        <FormField
          label="Vehicle Type"
          name="vehicleType"
          type="select"
          options={vehicleTypes}
          required
        />
        <FormField
          label="Number of Vehicles"
          name="vehicleCount"
          type="number"
          required
        />
        <FormField
          label="Campaign Duration"
          name="duration"
          type="select"
          options={campaignDurations}
          required
        />
        <FormField
          label="Budget Range (PKR)"
          name="budget"
          type="select"
          options={budgetRanges}
          required
        />
      </div>
      <FormField
        label="Target Areas"
        name="targetAreas"
        placeholder="e.g., Saddar, Gulshan, etc."
      />
      <FormField
        label="Additional Details"
        name="message"
        type="textarea"
        rows={4}
      />
      <button type="submit" className="btn-primary w-full">
        Submit Ad Request
      </button>
    </form>
  );
};

export default AdPlacementForm;