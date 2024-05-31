import PreviewSupplier from '@/pages/dashboard/supplier/new2/preview-supplier';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

interface SupplierFormProps {
    onFormSubmit: (supplier: any) => void;
    initialData?: any;
}

const SupplierForm: React.FC<SupplierFormProps> = ({ onFormSubmit, initialData }) => {
    const formDefaultValues = {
        name: '',
        address: '',
        officePhone: '',
        contactPerson: '',
        mobilePhone: '',
        status: 0,
        createdBy: 1,
        updatedBy: 1,
        showAtPromotionPage: true,
    };

    const [showReview, setShowReview] = useState(false);
    const [formValues, setFormValues] = useState(formDefaultValues);
    const router = useRouter();

    const handleChange = (event: any) => {
        const { attributes, name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormValues(formValues);
        setShowReview(true);
    };

    if (showReview) {
        return (
            <PreviewSupplier formValues={formValues} setShowReview={setShowReview} />
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    name='name'
                    value={formValues.name}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <textarea
                    name='address'
                    value={formValues.address}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Office Phone
                </label>
                <input
                    type="tel"
                    name='officePhone'
                    value={formValues.officePhone}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Contact Person
                </label>
                <input
                    type="text"
                    name='contactPerson'
                    value={formValues.contactPerson}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Mobile Phone
                </label>
                <input
                    type="tel"
                    name='mobilePhone'
                    value={formValues.mobilePhone}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
                />
            </div>
            <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm"
            >
                Nextttt
            </button>
        </form>
    );
};

export default SupplierForm;
