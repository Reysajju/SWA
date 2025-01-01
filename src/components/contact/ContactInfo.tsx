import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactInfoItem from './ContactInfoItem';
import { CONTACT_INFO } from '../../utils/constants/contact';

const ContactInfo = () => {
  return (
    <div className="glass-card p-8 lg:col-span-1">
      <h2 className="text-2xl font-semibold mb-6">Contact Info</h2>
      <div className="space-y-6">
        <ContactInfoItem
          icon={Phone}
          label="Call Us"
          value={[
            CONTACT_INFO.phone.primary,
            CONTACT_INFO.phone.secondary
          ]}
        />
        <ContactInfoItem
          icon={Mail}
          label="Email Us"
          value={[
            CONTACT_INFO.email.primary,
            CONTACT_INFO.email.support,
            CONTACT_INFO.email.business
          ]}
        />
        <ContactInfoItem
          icon={MapPin}
          label="Visit Us"
          value={`${CONTACT_INFO.address.street}, ${CONTACT_INFO.address.city}, ${CONTACT_INFO.address.country}`}
        />
        <ContactInfoItem
          icon={Clock}
          label="Business Hours"
          value={[
            `Mon - Fri: ${CONTACT_INFO.businessHours.weekdays}`,
            `Saturday: ${CONTACT_INFO.businessHours.saturday}`,
            `Sunday: ${CONTACT_INFO.businessHours.sunday}`
          ]}
        />
      </div>
    </div>
  );
};

export default ContactInfo;