'use client';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';

interface Props {
  name: string;
  value: number;
  required?: boolean;
  onChange: (e: any) => void;
}

const SelectRowsPerPagesOption: React.FC<Props> = ({
  name,
  value,
  required = false,
  onChange,
  ...props
}) => {
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);

  const changeTextColor = () => {
    setIsOptionSelected(true);
  };

  const handleChange = (e: any) => {
    onChange(e);
    setSelectedOption(e.target.value);
    changeTextColor();
  };

  return (
    <div className="relative z-20 font-medium bg-white dark:bg-form-input">
      <select
        className={`relative z-20 w-full rounded border border-stroke bg-transparent px-1 py-0.5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark ${
          isOptionSelected ? 'text-black dark:text-white' : ''
        }`}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
      >
        <option value={10} className="text-body dark:text-bodydark">
          10
        </option>
        <option value={20} className="text-body dark:text-bodydark">
          20
        </option>
        <option value={30} className="text-body dark:text-bodydark">
          30
        </option>
        <option value={40} className="text-body dark:text-bodydark">
          40
        </option>
        <option value={50} className="text-body dark:text-bodydark">
          50
        </option>
      </select>
    </div>
  );
};

export default SelectRowsPerPagesOption;
