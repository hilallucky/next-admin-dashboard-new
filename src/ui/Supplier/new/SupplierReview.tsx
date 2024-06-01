import { useRouter } from 'next/router';
import React, { Dispatch, SetStateAction } from 'react';

interface SupplierReviewProps {
  formValues: any;
  setShowReview: Dispatch<SetStateAction<boolean>>;
}

const SupplierReview: React.FC<SupplierReviewProps> = ({
  formValues,
  setShowReview,
}) => {
  const router = useRouter();

  const handleEdit = () => {
    setShowReview(false);
  };

  const handleSave = async () => {
    const response = await fetch('/api/v1/suppliers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    });
    if (response.ok) {
      setShowReview(true);
      router.push('/dashboard/supplier/new2/status?status=success');
    } else {
      router.push('/dashboard/supplier/new2/status?status=error');
      //   return <Status statusx="success" page="/dashboard/supplier/new;2" />;
    }
  };
  return (
    <div className="shadow-md rounded-lg p-4">
      {/* {formValues} */}
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-200">Field</th>
            <th className="px-4 py-2 bg-gray-200">Value</th>
          </tr>
        </thead>
        <tbody>
          {/* {formValues.map((key, value) => (
            <tr>
              <td className="px-4 py-2">{key}</td>
              <td className="px-4 py-2">{value}</td>
            </tr>
          ))} */}
          <tr>
            <td className="px-4 py-2">Name</td>
            <td className="px-4 py-2">{formValues.name}</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Address</td>
            <td className="px-4 py-2">{formValues.address}</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Office Phone</td>
            <td className="px-4 py-2">{formValues.officePhone}</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Contact Person</td>
            <td className="px-4 py-2">{formValues.contactPerson}</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Mobile Phone</td>
            <td className="px-4 py-2">{formValues.mobilePhone}</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Status</td>
            <td className="px-4 py-2">
              {formValues.status === 1 ? 'Active' : 'Inactive'}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="space-x-4 mt-4">
        <button
          onClick={handleEdit}
          className="px-4 py-2 bg-slate-500 text-white rounded-md shadow-sm"
        >
          Edit
        </button>
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-green-500 text-white rounded-md shadow-sm"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default SupplierReview;
