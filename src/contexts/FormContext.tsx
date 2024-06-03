import React, { createContext, useState, ReactNode } from 'react';

interface FormContextType {
    formValues: any;
    setFormValues: (data: any) => void;
}

export const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
    const [formValues, setFormValues] = useState<any>({});

    return (
        <FormContext.Provider value={{ formValues, setFormValues }}>
            {children}
        </FormContext.Provider>
    );
};
