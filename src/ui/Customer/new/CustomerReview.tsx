import MyButton from '@/components/Common/Button/MyButton';
import { statuses } from '@/constants/common';
import { FormContext } from '@/contexts/FormContext';
import { useRouter } from 'next/router';
import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import { AiOutlineLeft, AiOutlineSave } from 'react-icons/ai';

interface CustomerReviewProps {
  prevStep: () => void;
}

const CustomerReview: React.FC<CustomerReviewProps> = ({ prevStep }) => {
  const { formValues } = useContext(FormContext);
  const router = useRouter();
  const [isError, setIsErrorPage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    setIsLoading(true);

    if (isLoading) return <p>Loading...</p>;

    const response = await fetch('/api/v1/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    });
    if (response.ok) {
      router.push('/dashboard/customer/list');
    } else {
      router.push('/dashboard/customer/new2/status?status=error');
    }
    setIsLoading(false);
  };

  return (
    <div className="shadow-md rounded-lg p-4">
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 bg-gray-200 text-left">Field</th>
            <th className="px-4 py-2 bg-gray-200 text-left">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2">Name</td>
            <td className="px-4 py-2">{formValues.name}</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Email</td>
            <td className="px-4 py-2">{formValues.email}</td>
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
            <td className="px-4 py-2">{statuses[formValues.status].label}</td>
          </tr>
        </tbody>
      </table>
      <div className="flex items-center py-4 gap-5 space-x-4 mt-4">
        <div>
          <MyButton
            onClick={prevStep}
            className="px-4 py-2 font-medium rounded-lg text-sm focus:ring-4 focus:ring-slate-300  bg-slate-500 hover:bg-slate-700 text-white px-5 py-2.5 rounded-md shadow-sm"
          >
            <div className="flex items-center justify-between">
              <span>
                <AiOutlineLeft />{' '}
              </span>
              <span className="px-4">Apply Filter</span>
            </div>
          </MyButton>
        </div>
        <div>
          <MyButton
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            onClick={handleSave}
          >
            <div className="flex items-center justify-between">
              <span>
                <AiOutlineSave />{' '}
              </span>
              <span className="px-4">Save</span>
            </div>
          </MyButton>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
