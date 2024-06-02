import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface Props {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
}

const SelectOption = ({ label, name, value, onChange, options }: Props) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select name={name} value={value} onChange={onChange}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOption;
