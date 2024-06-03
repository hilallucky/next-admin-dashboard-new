interface TableRow {
  name: string;
  address: string;
  officePhone: string;
  contactPerson: string;
  mobilePhone: string;
  statusx: string;
  agreed: boolean;
}

interface DataTableProps {
  data: TableRow[];
}

const DataTable = ({ data }: DataTableProps) => {
  return (
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
        {data.map((row, index) => (
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
  );
};

export default DataTable;
