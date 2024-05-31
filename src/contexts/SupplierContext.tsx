import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Supplier {
  name: string;
  email: string;
  phone: string;
}

interface SupplierContextProps {
  supplier: Supplier | null;
  setSupplier: (supplier: Supplier) => void;
}

const SupplierContext = createContext<SupplierContextProps | undefined>(undefined);

export const SupplierProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [supplier, setSupplier] = useState<Supplier | null>(null);
  return (
    <SupplierContext.Provider value={{ supplier, setSupplier }}>
      {children}
    </SupplierContext.Provider>
  );
};

export const useSupplier = () => {
  const context = useContext(SupplierContext);
  if (!context) {
    throw new Error('useSupplier must be used within a SupplierProvider');
  }
  return context;
};


// // context/SupplierContext.tsx
// import React from 'react';

// const SupplierContext = React.createContext({
//   supplier: {},
//   setSupplier: () => {},
// });

// export default SupplierContext;