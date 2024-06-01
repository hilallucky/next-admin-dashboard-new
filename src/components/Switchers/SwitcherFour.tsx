import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

interface Props<T> {
  name: string;
  defaultValue?: boolean;
  label?: string | null;
  error?: string | null;
}

const SwitcherFour = <T,>({
  name,
  defaultValue,
  label,
  error,
  ...props
}: Props<T>) => {
  const [enabled, setEnabled] = useState<boolean>(defaultValue);

  return (
    <div
      className={`pt-4 flex items-center mb-2.5 font-medium text-black dark:text-white ${error ? 'text-error' : ''}`}
    >
      <div className="mr-3">
        <label>{label}</label>
      </div>
      <div>
        <label htmlFor={name}>
          <div className="relative cursor-pointer select-none">
            <input
              type="checkbox"
              id={name}
              name={name}
              checked={!defaultValue && false}
              className="sr-only "
              onChange={() => {
                setEnabled(!enabled);
              }}
              onClick={props?.onClick}
            />
            <div
              className={`block h-7 w-18 rounded-full border-1 ${enabled ? 'bg-primary' : 'bg-stroke dark:bg-stroke'}`}
            ></div>
            <div
              className={`absolute top-0.5 flex h-6 w-6 items-center justify-center rounded-full transition-transform ${
                enabled ? 'right-6.5 transform translate-x-full' : 'left-1'
              } ${enabled ? 'bg-green-500' : 'bg-red'}`}
            >
              <FontAwesomeIcon
                icon={enabled ? faCheck : faTimes}
                className="text-white"
              />
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default SwitcherFour;
