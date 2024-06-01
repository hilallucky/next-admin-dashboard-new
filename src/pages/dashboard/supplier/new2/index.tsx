import React from 'react';
import Link from 'next/link';
import { SupplierProvider } from '@/contexts/SupplierContext';

const Home: React.FC = () => {
  return (
    <SupplierProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">
          Supplier Management Dashboard
        </h1>
        <div className="space-y-4">
          <Link href="/dashboard/supplier/new2/add-supplier">
            Add New Supplier
          </Link>
          <Link href="/dashboard/supplier/new2/supplier-list">
            View Supplier List
            {/* </a> */}
          </Link>
        </div>
      </div>
    </SupplierProvider>
  );
};

export default Home;
