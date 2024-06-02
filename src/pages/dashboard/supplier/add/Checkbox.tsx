import React from 'react';

interface CheckboxProps {
  name: string;
  options: string[];
  values: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  name,
  options,
  values,
  onChange,
}) => (
  <div className="mb-4">
    <label className="block mb-1">{name}</label>
    <div className="flex gap-4">
      {options.map((option) => (
        <label key={option} className="flex items-center">
          <input
            type="checkbox"
            name={name}
            value={option}
            checked={values.includes(option)}
            onChange={onChange}
          />
          <span className="ml-2">{option}</span>
        </label>
      ))}
    </div>
  </div>
);

export default Checkbox;
