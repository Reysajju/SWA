import React, { useState } from 'react';
import FormField from '../ui/FormField';
import SuccessMessage from '../ui/SuccessMessage';
import { vehicleTypes, availabilityOptions } from '../../utils/formConstants';

const VehicleRegistrationForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [ownerName, setOwnerName] = useState('');

  if (submitted) {
    return (
      <SuccessMessage
        title="Registration Successful!"
        message={`Thank you ${ownerName}! We'll contact you within 24 hours.`}
        buttonText="Register Another Vehicle"
        onButtonClick={() => setSubmitted(false)}
      />
    );
  }

  return (
    <form
      name="vehicle-registration"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        setOwnerName(formData.get('ownerName') as string);
        setSubmitted(true);
      }}
    >
      <input type="hidden" name="form-name" value="vehicle-registration" />
      <p className="hidden">
        <label>
          Don't fill this out if you're human: <input name="bot-field" />
        </label>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          label="Owner Name"
          name="ownerName"
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
          label="Vehicle Number"
          name="vehicleNumber"
          required
        />
        <FormField
          label="Phone"
          name="phone"
          type="tel"
          required
        />
        <FormField
          label="Email"
          name="email"
          type="email"
          required
        />
        <FormField
          label="Area of Operation"
          name="area"
          placeholder="e.g., Saddar, Gulshan, etc."
          required
        />
      </div>
      <FormField
        label="Availability"
        name="availability"
        type="select"
        options={availabilityOptions}
        required
      />
      <button type="submit" className="btn-primary w-full">
        Register Vehicle
      </button>
    </form>
  );
};

export default VehicleRegistrationForm;