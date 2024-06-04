import React from 'react';

interface MultiSelectOptionProps {
  label: string;
  name: string;
  value: string[];
  options: string[];
  onChange: (name: string, selectedOptions: string[]) => void;
}

const MultiSelectOption: React.FC<MultiSelectOptionProps> = ({ label, name, value, options, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    onChange(name, selectedOptions);
  };

  return (
    <div>
      <label>{label}</label>
      <select multiple name={name} value={value} onChange={handleChange}>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MultiSelectOption;
