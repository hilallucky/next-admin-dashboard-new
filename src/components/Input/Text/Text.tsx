'use client';

import React, { SVGProps } from 'react';
import { useFormContext } from 'react-hook-form';

interface Props<T> {
  type: string;
  name: string;
  value?: string;
  label?: string | null;
  alias?: string;
  error?: string | null;
  placeholder?: string;
  required: boolean;
  icon?: SVGProps<SVGSVGElement> | null;
  onChange?: (e: any) => void;
}

const TextField = <T,>({
  type,
  name,
  value,
  label,
  alias,
  error,
  placeholder,
  required,
  icon,
  onChange,
  ...props
}: Props<T>) => {
  //   const {
  //     register,
  //     formState: { errors },
  //   } = useFormContext();

  const handleChange = (e: any) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="">
      <label
        htmlFor={name}
        className={`mb-2.5 block font-medium text-black dark:text-white ${error ? 'text-error' : ''}`}
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={type}
          name={name}
          value={value}
          required={required}
          className={`w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none bg-[#f0f9ff] focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${error ? 'input-error' : ''}`}
          onChange={handleChange}
          {...props}
        />

        {/* Icon */}
        {icon && <span className="absolute right-4 top-4">{icon}</span>}

        {error && <span className="text-sm text-red-500 ">{error}</span>}
        {/* {errors[name] && <span>{errors[name].message}</span>} */}
      </div>
    </div>
  );
};

export default TextField;
