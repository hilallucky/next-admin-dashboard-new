import { useState } from 'react';

interface Props<T> {
  name: string;
  defaultValue?: boolean;
  label?: string | null;
  error?: string | null;
}

const SwitcherOne = <T,>({
  name,
  defaultValue,
  label,
  error,
  ...props
}: Props<T>) => {
  const [enabled, setEnabled] = useState<boolean>(false);

  return (
    <div>
      <label
        htmlFor={name}
        className="flex cursor-pointer select-none items-center"
      >
        {label}
        <div className="relative">
          <input
            type="checkbox"
            id={name}
            name={name}
            className="sr-only"
            checked={defaultValue ? true : false}
            onChange={() => {
              setEnabled(!enabled);
            }}
          />
          <div className="block h-8 w-14 rounded-full bg-meta-9 dark:bg-[#5A616B]"></div>
          <div
            className={`absolute left-1 top-1 h-6 w-6 rounded-full bg-white transition ${
              enabled && '!right-1 !translate-x-full !bg-primary dark:!bg-white'
            }`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default SwitcherOne;
