import FormElements from '@/components/FormElements';
import DefaultLayout from '@/ui/Layouts/DefaultLayout';
import CreateSupplierForm from '@/ui/Supplier/new/CreateSupplierForm';
import React from 'react';

const CreateForm = () => {
  return (
    <DefaultLayout>
      <CreateSupplierForm />
    </DefaultLayout>
  );
};

export default CreateForm;
