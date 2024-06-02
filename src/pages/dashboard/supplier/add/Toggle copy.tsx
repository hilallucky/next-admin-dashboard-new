import React from 'react';

interface ToggleProps {
  name: string;
  value: string;
  onChange: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ name, value, onChange }) => (
  <div className="mb-4">
    <label className="block mb-1" htmlFor={name}>
      {name}
    </label>
    <button
      type="button"
      className="w-full p-2 border border-gray-300 rounded"
      onClick={onChange}
    >
      {value}
    </button>
  </div>
);

export default Toggle;
