import React from 'react';
import { Send } from 'lucide-react';
import FormField from '../ui/FormField';

const ContactForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="glass-card p-8 lg:col-span-2">
      <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label="Name"
            name="name"
            required
          />
          <FormField
            label="Email"
            name="email"
            type="email"
            required
          />
        </div>

        <FormField
          label="Phone"
          name="phone"
          type="tel"
        />

        <FormField
          label="Message"
          name="message"
          type="textarea"
          rows={4}
          required
        />

        <button
          type="submit"
          className="btn-primary w-full flex items-center justify-center space-x-2"
        >
          <span>Send Message</span>
          <Send className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
};

export default ContactForm;