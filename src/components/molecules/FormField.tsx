import React from 'react';
import Label from '../atoms/Label';
import Input from '../atoms/Input';

interface FormFieldProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
}

const FormField: React.FC<FormFieldProps> = ({ label, value, onChange, type }) => {
  return (
    <div className="mb-4">
      <Label text={label} />
      <Input value={value} onChange={onChange} placeholder={label} type={type} />
    </div>
  );
};

export default FormField;