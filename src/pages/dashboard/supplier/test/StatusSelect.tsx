import { ChangeEvent } from 'react';

interface StatusSelectProps {
  status: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const StatusSelect = ({ status, onChange }: StatusSelectProps) => {
  return (
    <div>
      <label>Status:</label>
      <select id="statusSelect" value={status} onChange={onChange}>
        <option value="Inactive">Inactive</option>
        <option value="Active">Active</option>
        <option value="Pending">Pending</option>
        <option value="Approved">Approved</option>
        <option value="Rejected">Rejected</option>
      </select>
    </div>
  );
};

export default StatusSelect;
