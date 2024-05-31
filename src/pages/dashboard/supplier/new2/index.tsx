import React from 'react';
import Link from 'next/link';
import { SupplierProvider } from '@/contexts/SupplierContext';

const Home: React.FC = () => {
    return (
        <SupplierProvider>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Supplier Management Dashboard</h1>
                <div className="space-y-4">
                    <Link href="/dashboard/supplier/new2/add-supplier">
                        {/* <a className="block px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm text-center"> */}
                        Add New Supplier
                        {/* </a> */}
                    </Link>
                    <Link href="/dashboard/supplier/new2/supplier-list">
                        {/* <a className="block px-4 py-2 bg-green-500 text-white rounded-md shadow-sm text-center"> */}
                        View Supplier List
                        {/* </a> */}
                    </Link>
                </div>
            </div>
        </SupplierProvider>
    );
};

export default Home;
