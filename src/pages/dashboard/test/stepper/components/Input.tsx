import React from 'react';

interface InputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, name, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input name={name} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
