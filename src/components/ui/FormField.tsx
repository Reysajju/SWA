import React from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  rows?: number;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
  placeholder,
  options,
  rows
}) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          rows={rows || 4}
          className="input-field"
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
        />
      ) : type === 'select' ? (
        <select
          id={name}
          name={name}
          className="input-field"
          value={value}
          onChange={onChange}
          required={required}
        >
          {options?.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          className="input-field"
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          min={type === 'number' ? 1 : undefined}
        />
      )}
    </div>
  );
};

export default FormField;