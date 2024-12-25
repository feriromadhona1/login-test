import React from 'react';

interface LabelProps {
  text: string;
}

const Label: React.FC<LabelProps> = ({ text }) => {
  return <label className="block text-sm font-semibold mb-1">{text}</label>;
};

export default Label;