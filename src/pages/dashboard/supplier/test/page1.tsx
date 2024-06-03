// import { useAppState } from '@/contexts/stateContext';
// import Link from 'next/link';
// import { ChangeEvent } from 'react';

// const Page1 = () => {
//   const { formValues, tableData, setFormValues, revertState, addToTable } =
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
//             value={formValues.name}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Address:</label>
//           <input
//             name="address"
//             value={formValues.address}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Office Phone:</label>
//           <input
//             name="officePhone"
//             value={formValues.officePhone}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Contact Person:</label>
//           <input
//             name="contactPerson"
//             value={formValues.contactPerson}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Mobile Phone:</label>
//           <input
//             name="mobilePhone"
//             value={formValues.mobilePhone}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label>Status:</label>
//           <select
//             id="statusSelect"
//             value={formValues.statusx}
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
//               checked={formValues.agreed}
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
import { ChangeEvent, useState } from 'react';
// import Layout from '@/components/Layout';
import StatusSelect from './StatusSelect';
import DataTable from './DataTable';

const Page1 = () => {
  //   const { state, dispatch } = useAppState();
  //   const [statusx, setStatusx] = useState(formValues.statusx);
  const { formValues, tableData, setFormValues, revertState, addToTable } =
    useAppState();

  // Handlers for input changes
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setFormValues({ [name]: type === 'checkbox' ? checked : value });
  };

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFormValues({ statusx: event.target.value });
  };

  // Handler for form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addToTable();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            name="address"
            value={formValues.address}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Office Phone:</label>
          <input
            name="officePhone"
            value={formValues.officePhone}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Contact Person:</label>
          <input
            name="contactPerson"
            value={formValues.contactPerson}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Mobile Phone:</label>
          <input
            name="mobilePhone"
            value={formValues.mobilePhone}
            onChange={handleInputChange}
          />
        </div>
        <StatusSelect
          status={formValues.statusx}
          onChange={handleSelectChange}
        />
        <div>
          <label>
            <input
              type="checkbox"
              name="agreed"
              checked={formValues.agreed}
              onChange={handleInputChange}
            />
            Agree to Terms
          </label>
        </div>
      </form>
      {/* <DataTable data={state.tableData} /> */}
      <Link href="/dashboard/supplier/test/page2">Go to Page 2</Link>
    </div>
  );
};

export default Page1;
