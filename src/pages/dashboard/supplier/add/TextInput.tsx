import React from 'react';

interface TextInputProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> = ({ name, value, onChange }) => (
  <div className="mb-4">
    <label className="block mb-1" htmlFor={name}>
      {name}
    </label>
    <input
      className="w-full p-2 border border-gray-300 rounded"
      type="text"
      id={name}
      name={name}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default TextInput;
