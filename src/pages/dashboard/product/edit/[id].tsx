import { FormProvider } from '@/contexts/FormContext';
import { useProductById } from '@/fetchers/Products';
import DefaultLayout from '@/ui/Layouts/DefaultLayout';
import StepperEditProductForm from '@/ui/Product/edit/StepperEditProductForm';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const EditForm = () => {
  const route = useRouter();
  const { id } = route.query;

  const { data, isDataLoading, isDataError, mutate } = useProductById(
    Number(id),
  );

  useEffect(() => {
    if (data) {
      data;
    }
  }, [id, data]);

  if (isDataLoading) {
    return <div>Loading...</div>;
  }

  return (
    <FormProvider defaultFormValues={data}>
      <DefaultLayout>
        <StepperEditProductForm />
      </DefaultLayout>
    </FormProvider>
  );
};

export default EditForm;
