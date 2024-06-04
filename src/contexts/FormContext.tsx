import React, { createContext, useState, ReactNode } from 'react';

interface FormContextType {
    formValues: any;
    setFormValues: (data: any) => void;
    resetFormValues: () => void;
}

export const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children, defaultFormValues }: { children: ReactNode, defaultFormValues: any }) => {
    const [formValues, setFormValues] = useState<any>(defaultFormValues);

    const resetFormValues = () => {
        setFormValues(defaultFormValues);
    };

    return (
        <FormContext.Provider value={{ formValues, setFormValues, resetFormValues }}>
            {children}
        </FormContext.Provider>
    );
};
