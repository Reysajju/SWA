import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ContactInfoItemProps {
  icon: LucideIcon;
  label: string;
  value: string | string[];
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon: Icon, label, value }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="bg-blue-100 p-3 rounded-full">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <div>
        <p className="text-sm text-gray-600">{label}</p>
        {Array.isArray(value) ? (
          value.map((line, index) => (
            <p key={index} className="text-base">{line}</p>
          ))
        ) : (
          <p className="text-lg font-semibold">{value}</p>
        )}
      </div>
    </div>
  );
};

export default ContactInfoItem;