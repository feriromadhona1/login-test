import React from 'react';

export interface InputProps {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  disabled?: boolean;
  placeholder?: string;
}
  

const Input: React.FC<InputProps> = ({ label, value, onChange, type, disabled = false }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold text-gray-600">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="w-full p-2 border border-gray-300 rounded-md mt-2"
      />
    </div>
  );
};

export default Input;
