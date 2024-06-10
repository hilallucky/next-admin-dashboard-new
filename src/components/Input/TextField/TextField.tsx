import React, { SVGProps } from 'react';

interface Props<T> {
  type: string;
  name: string;
  label?: string | null;
  placeholder?: string;
  error?: string | null;
  required: boolean;
  icon?: SVGProps<SVGSVGElement> | null;
}

const TextField = <T,>({
  type,
  name,
  label,
  placeholder,
  error,
  required,
  icon,
  ...props
}: Props<T>) => {
  return (
    <>
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
          placeholder={placeholder}
          required={required}
          className={`w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none bg-[#f0f9ff] focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${error ? 'input-error' : ''}`}
          {...props}
        />

        {/* Icon */}
        {icon && <span className="absolute right-4 top-4">{icon}</span>}

        <span className="text-sm text-red-500 ">{error}</span>
      </div>
    </>
  );
};

export default TextField;
