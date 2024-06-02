import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

interface ToggleProps<T> {
  name: string;
  value: string;
  onChange: () => void;
}

// const Toggle: React.FC<ToggleProps> = ({ name, value, onChange }) => (

const Toggle = <T,>({ name, value, onChange, ...props }: ToggleProps<T>) => {
  const [x, setX] = useState();
  const [enabled, setEnabled] = useState(false);

  const handelChange = (event: any) => {
    value === 'Inactive' ? setEnabled(true) : setEnabled(false);
    setEnabled(!enabled);
  };

  return (
    <div className="relative cursor-pointer select-none">
      <div className="mb-4">
        <label className="block mb-1" htmlFor={name}>
          {name}
        </label>
        <button
          type="button"
          className="w-full p-2 border border-gray-300 rounded "
          onClick={onChange}
          //   onChange={() => {
          //     // value === 'Inactive' ? setEnabled(false) : setEnabled(true);
          //     //   setEnabled();
          //   }}
        >
          {value}
        </button>
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
    </div>
  );
};

export default Toggle;

{
  /*}
   
  */
}
