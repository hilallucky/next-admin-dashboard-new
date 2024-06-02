import React from 'react';

interface TextareaProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: React.FC<TextareaProps> = ({ name, value, onChange }) => (
  <div className="mb-4">
    <label className="block mb-1" htmlFor={name}>
      {name}
    </label>
    <textarea
      className="w-full p-2 border border-gray-300 rounded"
      id={name}
      name={name}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default Textarea;
