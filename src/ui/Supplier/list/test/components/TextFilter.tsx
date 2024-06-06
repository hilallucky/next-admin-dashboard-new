import React from 'react';

interface TextFilterProps {
  className?: string;
  name: string;
  value: string;
  onChange: (e: any) => void;
}

const TextFilter: React.FC<TextFilterProps> = ({ className, name, value, onChange }) => {
  return (
    <input
      type="text"
      className={className}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextFilter;
