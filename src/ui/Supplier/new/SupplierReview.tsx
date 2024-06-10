import { statuses } from '@/constants/common';
import { FormContext } from '@/contexts/FormContext';
import { useRouter } from 'next/router';
import React, { Dispatch, SetStateAction, useContext } from 'react';

interface SupplierReviewProps {
    prevStep: () => void;
}

const SupplierReview: React.FC<SupplierReviewProps> = ({ prevStep }) => {
    const { formValues } = useContext(FormContext);
    const router = useRouter();

    const handleSave = async () => {
        const response = await fetch('/api/v1/suppliers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formValues),
        });
        if (response.ok) {
            router.push('/dashboard/supplier/list');
        } else {
            router.push('/dashboard/supplier/new2/status?status=error');
        }
    };

    return (
        <div className="shadow-md rounded-lg p-4">
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2 bg-gray-200">Field</th>
                        <th className="px-4 py-2 bg-gray-200">Value</th>
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
            <div className="space-x-4 mt-4">
                <button
                    onClick={prevStep}
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