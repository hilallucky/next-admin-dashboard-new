import React from 'react';

interface SelectOptionProps {
  name: string;
  value: string;
  options: any[];
  onChange: (e: any) => void;
}

const SelectOption: React.FC<SelectOptionProps> = ({
  name,
  value,
  options,
  onChange,
}) => (
  <div className="mb-4">
    <label className="block mb-1" htmlFor={name}>
      {name}
    </label>
    <select
      className="w-full p-2 border border-gray-300 rounded"
      id={name}
      name={name}
      value={value}
      onChange={onChange}
    >
      {/* {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))} */}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default SelectOption;
