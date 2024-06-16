import { FormProvider } from '@/contexts/FormContext';
import DefaultLayout from '@/ui/Layouts/DefaultLayout';
import StepperProductForm from '@/ui/Product/new/StepperProductForm';
import React from 'react';

const defaultFormValues = {
  code: '',
  name: '',
  status: [],
  quantity: 0,
  supplierId: [],
  createdBy: null,
  updatedBy: null,
};

const CreateForm = () => {
  return (
    <FormProvider defaultFormValues={defaultFormValues}>
      <DefaultLayout>
        <StepperProductForm />
      </DefaultLayout>
    </FormProvider>
  );
};

export default CreateForm;
