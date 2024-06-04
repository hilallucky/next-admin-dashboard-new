// import { useAppState } from '@/contexts/stateContext';
// import Link from 'next/link';
// import { ChangeEvent } from 'react';

// const Page1 = () => {
//   const { state.formValues, tableData, setFormValues, revertState, addToTable } =
//     useAppState();

//   // Handlers for input changes
//   const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = event.target;
//     setFormValues({ [name]: type === 'checkbox' ? checked : value });
//   };

//   const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
//     setFormValues({ statusx: event.target.value });
//   };

//   // Handler for form submission
//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     addToTable();
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             name="name"
//             value={state.formValues.name}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Address:</label>
//           <input
//             name="address"
//             value={state.formValues.address}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Office Phone:</label>
//           <input
//             name="officePhone"
//             value={state.formValues.officePhone}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Contact Person:</label>
//           <input
//             name="contactPerson"
//             value={state.formValues.contactPerson}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Mobile Phone:</label>
//           <input
//             name="mobilePhone"
//             value={state.formValues.mobilePhone}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Status:</label>
//           <select
//             id="statusSelect"
//             value={state.formValues.statusx}
//             onChange={handleSelectChange}
//           >
//             <option value="Inactive">Inactive</option>
//             <option value="Active">Active</option>
//             <option value="Pending">Pending</option>
//             <option value="Approved">Approved</option>
//             <option value="Rejected">Rejected</option>
//           </select>
//         </div>
//         <div>
//           <label>
//             <input
//               type="checkbox"
//               name="agreed"
//               checked={state.formValues.agreed}
//               onChange={handleInputChange}
//             />
//             Agree to Terms
//           </label>
//         </div>
//         <button type="submit">Add to Table</button>
//         <button type="button" onClick={revertState}>
//           Revert State
//         </button>
//       </form>

//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Address</th>
//             <th>Office Phone</th>
//             <th>Contact Person</th>
//             <th>Mobile Phone</th>
//             <th>Status</th>
//             <th>Agreed</th>
//           </tr>
//         </thead>
//         <tbody>
//           {tableData.map((row, index) => (
//             <tr key={index}>
//               <td>{row.name}</td>
//               <td>{row.address}</td>
//               <td>{row.officePhone}</td>
//               <td>{row.contactPerson}</td>
//               <td>{row.mobilePhone}</td>
//               <td>{row.statusx}</td>
//               <td>{row.agreed ? 'Yes' : 'No'}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <Link href="/dashboard/supplier/test/page2">Go to Page 2</Link>
//     </div>
//   );
// };

// export default Page1;

import { useAppState } from '@/contexts/stateContext';
import Link from 'next/link';
import { ChangeEvent, useEffect, useState } from 'react';
// import Layout from '@/components/Layout';
import StatusSelect from './StatusSelect';
import DataTable from './DataTable';
import Page2 from './page2';
import DefaultLayout from '@/ui/Layouts/DefaultLayout';
import TextField from '@/components/Input/Text/Text';
import CustomTextArea from '@/components/Common/Input/CustomTextArea';
// import SelectOption from './SelectOption';
import { statuses } from '@/constants/common';
import SelectOption from '@/components/SelectGroup/SelectOption';

const Page1 = () => {
  const { state, dispatch } = useAppState();
  const [statusx, setStatusx] = useState(state.formValues.statusx);
  const [statusData, setStatusData] = useState(statuses);
  const [showPreview, setShowPreview] = useState(false);
  // const { state.formValues, tableData, setFormValues, revertState, addToTable } =
  //   useAppState();

  // Handlers for input changes
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    dispatch({ type: 'SET_FORM_VALUES', payload: { [name]: value } });
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const optionName = ['status', 'status2', 'status3'];

    optionName.includes[event.target.name] ??
      dispatch({
        type: 'SET_FORM_VALUES',
        payload: { [event.target.name]: [event.target.value] },
      });
  };

  const handlePreview = () => {
    setShowPreview(true);
  };

  if (showPreview) {
    return <Page2 />;
  }

  // Handler for form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch({ type: 'ADD_TO_TABLE' });
  };

  const resetForm = () => {
    dispatch({ type: 'RESET_FORM_VALUES' });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            type="text"
            name="name"
            alias="Name"
            label="Name"
            required={true}
            // error={error}
            value={state.formValues.name}
            onChange={handleInputChange}
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
            placeholder="Supplier name"
          />
        </div>
        <div>
          <CustomTextArea
            name="address"
            label="Supplier address"
            alias="Supplier address"
            placeholder="Supplier address"
            required={true}
            disabled={false}
            // error={error}
            value={state.formValues.address}
            onChange={handleInputChange}
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
            alias="Office Phone"
            label="Office Phone"
            required={true}
            // error={error}
            value={state.formValues.officePhone}
            onChange={handleInputChange}
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
            alias="Contact Person"
            label="Contact Person"
            required={true}
            // error={error}
            value={state.formValues.contactPerson}
            onChange={handleInputChange}
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
            alias="Mobile Phone"
            label="Mobile Phone"
            required={true}
            // error={error}
            value={state.formValues.mobilePhone}
            onChange={handleInputChange}
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
        <SelectOption
          name="status"
          value={state.formValues.status}
          label="Status"
          onChange={handleSelectChange}
          options={statusData}
        />
        <StatusSelect
          name="status2"
          value={state.formValues.status2}
          onChange={handleSelectChange}
          options={statusData}
          label="Status 2"
        />

        <StatusSelect
          name="status3"
          value={state.formValues.status3}
          onChange={handleSelectChange}
          options={statusData}
          label="Status 3"
        />
        <div>
          <label>
            <input
              type="checkbox"
              name="agreed"
              checked={state.formValues.agreed}
              onChange={handleInputChange}
            />
            Agree to Terms
          </label>
        </div>
      </form>
      {/* <DataTable data={state.tableData} /> */}
      {/* <Link href="/dashboard/supplier/test/page2">Go to Page 2</Link> */}

      <button type="button" onClick={resetForm}>
        Reset
      </button>

      <button type="button" onClick={handlePreview}>
        Preview
      </button>
    </div>
  );
};

export default Page1;
