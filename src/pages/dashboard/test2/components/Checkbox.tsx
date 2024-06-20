import React from 'react';

interface CheckboxProps {
  label: string;
  name: string;
  value?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={name}>
        <input
          type="checkbox"
          id={name}
          name={name}
          className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 focus:ring-opacity-50 dark:focus:ring-blue-600 dark:bg-gray-700"
          checked={value || false}
          onChange={onChange}
        />
        <span className="ml-2 text-sm font-medium text-gray-700">{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;
