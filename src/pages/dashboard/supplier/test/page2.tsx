import { useAppState } from '@/contexts/stateContext';
import Link from 'next/link';

const Page2 = () => {
  const { formValues, tableData } = useAppState();

  return (
    <div>
      <h1>Preview Page</h1>
      <div>
        <h2>Current Form Values</h2>
        <p>Name: {formValues.name}</p>
        <p>Address: {formValues.address}</p>
        <p>Office Phone: {formValues.officePhone}</p>
        <p>Contact Person: {formValues.contactPerson}</p>
        <p>Mobile Phone: {formValues.mobilePhone}</p>
        <p>Status: {formValues.statusx}</p>
        <p>Agreed: {formValues.agreed ? 'Yes' : 'No'}</p>
      </div>

      <div>
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
                <td>{row.statusx}</td>
                <td>{row.agreed ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Link href="/dashboard/supplier/test/page1">Go to Page 1</Link>
    </div>
  );
};

export default Page2;
