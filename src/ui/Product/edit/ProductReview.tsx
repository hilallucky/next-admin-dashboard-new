import MyButton from '@/components/Common/Button/MyButton';
import { statuses } from '@/constants/common';
import { FormContext } from '@/contexts/FormContext';
import { useSupplierById } from '@/fetchers/Suppliers';
import { useRouter } from 'next/router';
import React, { Dispatch, SetStateAction, useContext, useState } from 'react';
import { AiOutlineLeft, AiOutlineSave } from 'react-icons/ai';

interface ProductReviewProps {
  prevStep: () => void;
}

const ProductReview: React.FC<ProductReviewProps> = ({ prevStep }) => {
  const { formValues } = useContext(FormContext);
  const router = useRouter();
  const [isError, setIsErrorPage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { data, isDataLoading, isDataError } = useSupplierById(
    formValues.supplierId,
  );

  const handleSave = async () => {
    setIsLoading(true);

    if (isLoading) return <p>Loading...</p>;

    const response = await fetch(`/api/v1/products/${formValues.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    });

    if (response.ok) {
      router.push('/dashboard/product/list');
    } else {
      // router.push('/dashboard/product/new2/status?status=error');
      setIsErrorPage(`${response}`);
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
            <td className="px-4 py-2">Supplier</td>
            <td className="px-4 py-2">{data.name}</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Status</td>
            <td className="px-4 py-2">
              {formValues.status !== ''
                ? statuses[formValues.status].label
                : ''}
            </td>
          </tr>
          <tr>
            <td className="px-4 py-2">Price</td>
            <td className="px-4 py-2">{formValues.price}</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Quantity</td>
            <td className="px-4 py-2">{formValues.quantity}</td>
          </tr>
        </tbody>
      </table>

      <div className="overflow-x-auto">
        <div className="border-b border-stroke px-6.5 py-6 dark:border-strokedark">
          <h3 className="font-medium underline text-black dark:text-white">
            Product Aliases
          </h3>
          {isError ? <p>{JSON.stringify(isError)}</p> : <p>Product Aliases</p>}
        </div>

        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                #
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Code
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:bg-boxdark dark:divide-gray-700">
            {formValues.productAliases.map((alias, index) => (
              <tr key={index} className="hover:bg-slate-200">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{index + 1}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{alias.code}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{alias.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {
                      statuses.find(
                        (status) => Number(status.value) === alias.status,
                      )?.label
                    }
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
              <span className="px-4">Back</span>
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

export default ProductReview;
