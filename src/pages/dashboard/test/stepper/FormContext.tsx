// import React, { createContext, useState, ReactNode } from 'react';

// interface FormContextType {
//   formData: any;
//   setFormData: (data: any) => void;
// }

// export const FormContext = createContext<FormContextType | undefined>(undefined);

// export const FormProvider = ({ children }: { children: ReactNode }) => {
//   const [formData, setFormData] = useState<any>({});

//   return (
//     <FormContext.Provider value={{ formData, setFormData }}>
//       {children}
//     </FormContext.Provider>
//   );
// };


import React, { createContext, useState, ReactNode } from 'react';

interface FormContextType {
    formData: any;
    setFormData: (data: any) => void;
    resetFormData: () => void;
}

// const defaultFormData = {
//   name: '',
//   email: '',
//   favoriteColor: '',
//   hobbies: [],
//   items: {
//     apples: 0,
//     oranges: 0,
//     bananas: 0,
//   },
// };

const defaultFormData = {}

export const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children, defaultFormData }: { children: ReactNode, defaultFormData: any }) => {
    const [formData, setFormData] = useState<any>(defaultFormData);
    // const [formData, setFormData] = useState<any>({});

    const resetFormData = () => {
        setFormData(defaultFormData);
        // setFormData({});
    };

    return (
        <FormContext.Provider value={{ formData, setFormData, resetFormData }}>
            {children}
        </FormContext.Provider>
    );
};
