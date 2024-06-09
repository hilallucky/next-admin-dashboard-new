import CustomTextArea from '@/components/Common/Input/CustomTextArea';
import TextField from '@/components/Input/TextField/TextField';
import Select from '@/components/SelectGroup/Select';
import { statuses } from '@/constants/common';
import React, { useRef, useState } from 'react';

// https://www.youtube.com/watch?v=X-o-7Mu6lks&list=PLc6SEcJkQ6DwSCyM53kqpM1yNyXT80d3U&index=2

interface Props {
  label?: string;
  setNewFilter?;
  onSubmit: (name: string) => void;
}

const SupplierFilterForm: React.FC<Props> = ({
  label,
  setNewFilter,
  onSubmit,
}) => {
  const [filter, setFilter] = useState<any>({});
  // const name = useRef('');

  const [name, setName] = useState('');
  const handleChange = (e: any) => {
    setName(e.target.value);
    console.log({ name });

    setFilter({ name: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(name);
  };

  return (
    <div>
      {/* {' '}
      <form
        onSubmit={onSubmit}
        className="mb-4 p-4 border border-gray-300 rounded"
      > */}
      <div>
        {/* <label className="block text-gray-700">Supplier Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-2 border border-gray-300 rounded"
          /> */}
        <TextField
          type="text"
          name="name"
          value={name}
          label="Supplier Name"
          onChange={handleChange}
          icon={
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1d2a39"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="arcs"
            >
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
              <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
          }
          placeholder="Supplier name"
        />
      </div>
      <div>
        <TextField
          type="text"
          name="email"
          label="Email"
          // onChange={handleChange}
          icon={
            <svg
              className="fill-current"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" fill="" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          }
          placeholder="email@domain.com"
        />
      </div>
      <div>
        <CustomTextArea
          name="address"
          label="Supplier address"
          placeholder="Supplier address"
          disabled={false}
          required={false}
          // onChange={handleChange}
          icon={
            <svg
              className="fill-current"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                fill=""
              />
              <circle cx="12" cy="7" r="4" />
            </svg>
          }
          status="default"
        />
      </div>

      <div>
        <TextField
          type="text"
          name="officePhone"
          label="Office Phone"
          // onChange={handleChange}
          icon={
            <svg
              className="fill-current"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                fill=""
              />
            </svg>
          }
          placeholder="Supplier office phone"
        />
      </div>

      <div>
        <TextField
          type="text"
          name="contactPerson"
          label="Contact Person"
          // onChange={handleChange}
          icon={
            <svg
              className="fill-current"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" fill="" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          }
          placeholder="Supplier contact person"
        />
      </div>

      <div>
        <TextField
          type="text"
          name="mobilePhone"
          label="Mobile Phone"
          // onChange={handleChange}
          icon={
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1d2a39"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="arcs"
            >
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
              <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
          }
          placeholder="Supplier mobile phone"
        />
      </div>

      <div>
        <Select
          name="status"
          label="Status"
          // onChange={handleChange}
          options={statuses}
        />
      </div>

      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded"
        onClick={handleSubmit}
      >
        Apply Filter
      </button>
      {/* </form> */}
    </div>
  );
};

export default SupplierFilterForm;
