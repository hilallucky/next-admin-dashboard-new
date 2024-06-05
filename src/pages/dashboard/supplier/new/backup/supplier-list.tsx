import React, { useState, useEffect } from 'react';
import SupplierList from '@components/Suppliers/SupplierList';
import Filter from '@components/Suppliers/Filter';

const SupplierListPage: React.FC = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchSuppliers = async () => {
      const response = await fetch(`/api/get-suppliers?search=${search}`);
      const data = await response.json();
      setSuppliers(data);
    };

    fetchSuppliers();
  }, [search]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Supplier List</h1>
      <Filter onSearch={(value) => setSearch(value)} />
      <SupplierList suppliers={suppliers} />
    </div>
  );
};

export default SupplierListPage;
