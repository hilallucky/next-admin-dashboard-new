import { FormProvider } from '@/contexts/FormContext';
import StepperCustomerForm from '@/ui/Customer/new/StepperCustomerForm';
import DefaultLayout from '@/ui/Layouts/DefaultLayout';
import React from 'react';

const defaultFormValues = {
  name: '',
  email: '',
  address: '',
  officePhone: '',
  contactPerson: '',
  mobilePhone: '',
  status: [],
  activeHand: [],
  createdBy: null,
  updatedBy: null,
};

const CreateForm = () => {
  return (
    <FormProvider defaultFormValues={defaultFormValues}>
      <DefaultLayout>
        <StepperCustomerForm />
      </DefaultLayout>
    </FormProvider>
  );
};

export default CreateForm;
