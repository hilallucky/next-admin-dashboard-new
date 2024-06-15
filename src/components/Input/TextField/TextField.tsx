import React, { SVGProps } from 'react';

interface Props<T> {
  type: string;
  name: string;
  value?: string | undefined;
  defaultValue?: string | '';
  label?: string | null;
  placeholder?: string;
  error?: string | null;
  disabled?: boolean;
  required: boolean;
  icon?: SVGProps<SVGSVGElement> | null;
  onChange?: any;
}

const TextField = <T,>({
  type,
  name,
  value,
  defaultValue,
  label,
  placeholder,
  error,
  disabled,
  required,
  icon,
  onChange,
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
          // value={value}
          defaultValue={value || defaultValue}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className={`w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none bg-[#f0f9ff] focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary ${error ? 'input-error' : ''}`}
          onChange={onChange}
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
