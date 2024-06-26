import { FormProvider } from '@/contexts/FormContext';
import DefaultLayout from '@/ui/Layouts/DefaultLayout';
import StepperProductForm from '@/ui/Product/new/StepperProductForm';
import React from 'react';

const productAliasDefaultValue: any[] = [
  {
    code: '',
    name: '',
    status: [],
  },
];

const defaultFormValues = {
  code: '',
  name: '',
  status: [],
  price: 0,
  quantity: 0,
  supplierId: [],
  createdBy: null,
  updatedBy: null,
  productAliases: productAliasDefaultValue,
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
