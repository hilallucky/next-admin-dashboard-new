import { useAppState } from '@/contexts/stateContext';
import DefaultLayout from '@/ui/Layouts/DefaultLayout';
import Link from 'next/link';
import { useState } from 'react';
import Page1 from './page1';
import { statuses } from '@/constants/common';
import DataTable from './DataTable';

const Page2 = () => {
  const [showPreview, setShowPreview] = useState(false);
  // const { formValues, tableData } = useAppState();
  const { state } = useAppState();

  const handleBack = () => {
    setShowPreview(true);
    // return <Page1 />;
  };

  if (showPreview) {
    return <Page1 />;
  }
  return (
    <div>
      <h1>Preview Page</h1>
      <div>
        <h2>Current Form Values</h2>
        <p>Name: {state.formValues.name}</p>
        <p>Address: {state.formValues.address}</p>
        <p>Office Phone: {state.formValues.officePhone}</p>
        <p>Contact Person: {state.formValues.contactPerson}</p>
        <p>Mobile Phone: {state.formValues.mobilePhone}</p>
        <p>Status: {state.formValues.status}</p>
        <p>Status 2: {statuses[state.formValues.status2].label}</p>
        <p>Status 3: {statuses[state.formValues.status3].label}</p>
        <p>Agreed: {state.formValues.agreed ? 'Yes' : 'No'}</p>
      </div>

      <div>
        <h2>Table Data</h2>
        <DataTable data={state.tableData} />
      </div>
      {/* <div>
        <h2>Table Data</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Office Phone</th>
              <th>Contact Person</th>
              <th>Mobile Phone</th>
              <th>Status</th>
              <th>Agreed</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.address}</td>
                <td>{row.officePhone}</td>
                <td>{row.contactPerson}</td>
                <td>{row.mobilePhone}</td>
                <td>{row.status}</td>
                <td>{statuses[row.status2].label}</td>
                <td>{row.agreed ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}

      {/* <Link href="/dashboard/supplier/test/page1">Go to Page 1</Link> */}

      <button type="button" onClick={handleBack}>
        Back
      </button>
    </div>
  );
};

export default Page2;
