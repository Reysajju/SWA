import React from 'react';
import { CheckCircle } from 'lucide-react';

interface SuccessMessageProps {
  title: string;
  message: string;
  buttonText: string;
  onButtonClick: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({
  title,
  message,
  buttonText,
  onButtonClick
}) => {
  return (
    <div className="text-center p-8 bg-white rounded-xl shadow-lg">
      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 whitespace-pre-line">{message}</p>
      <button onClick={onButtonClick} className="btn-primary">
        {buttonText}
      </button>
    </div>
  );
};

export default SuccessMessage;