import React, { createContext, useState, ReactNode } from 'react';
import { useForm, FormProvider as RHFFormProvider } from 'react-hook-form';

interface FormContextType {
  formValues: any;
  setFormValues: (data: any) => void;
  resetFormValues: () => void;
  methods: any;
}

export const FormContext = createContext<FormContextType | undefined>(
  undefined,
);

export const FormProvider = ({
  children,
  defaultFormValues,
}: {
  children: ReactNode;
  defaultFormValues: any;
}) => {
  const [formValues, setFormValues] = useState<any>(defaultFormValues);
  const methods = useForm<any>({ defaultValues: formValues });

  const resetFormValues = () => {
    setFormValues(defaultFormValues);
    methods.reset(defaultFormValues);
  };

  return (
    <FormContext.Provider
      value={{ formValues, setFormValues, resetFormValues, methods }}
    >
      {/* {children} */}
      <RHFFormProvider {...methods}>{children}</RHFFormProvider>
    </FormContext.Provider>
  );
};
