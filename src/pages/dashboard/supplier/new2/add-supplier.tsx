import React from 'react';
import SupplierForm from '@components/Supplier2/SupplierForm';
import { useRouter } from 'next/router';

const AddSupplier: React.FC = () => {
  const router = useRouter();
  const { name = '', email = '', phone = '' } = router.query;

  const handleFormSubmit = (supplier: any) => {
    // Handle form submission logic here
    console.log('Form submitted:', supplier);
    // Perform any necessary actions with the submitted data
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Supplier</h1>
      <SupplierForm initialData={{ name, email, phone }} onFormSubmit={handleFormSubmit} />
    </div>
  );
};

export default AddSupplier;