import Typography from '@/components/Common/Typography/Typography';
import { SupplierListContext } from '@/contexts/SupplierContext';
import { SupplierFilterType } from '@/interfaces';
import DefaultLayout from '@/ui/Layouts/DefaultLayout';
import SupplierList from '@/ui/Supplier/delete';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';

const createLabel = (key: any, value: any) => {
  if (value) {
    if (key == 'name') return `Name : ${value}`;
    if (key == 'email') return `Email : ${value}`;
    if (key == 'address') return `Address : ${value}`;
    return `${key} : ${value}`;
  }
  return `${key} :(empty)`;
};

const SupplierDataList = () => {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const router = useRouter();
  const [dataFilter, setDataFilter] = useState<SupplierFilterType>({});

  const tableRef = useRef<{ refresh: () => void }>(null);

  const handleClickOpenFilter = () => {
    setFilterOpen(true);
  };

  const handleClickRefresh = () => {
    if (tableRef.current) {
      tableRef.current.refresh();
    }
  };

  const deleteFilterItem = (key: string) => {
    const data = { ...dataFilter } as any;
    delete data[key];

    const queryString = new URLSearchParams(data).toString();
    router.push(`?${queryString}`);
  };

  return (
    <DefaultLayout>
      <SupplierListContext.Provider
        value={{ isFilterOpen, setFilterOpen, dataFilter, setDataFilter }}
      >
        <Typography variant="h6">Supplier List</Typography>
        <SupplierList />
      </SupplierListContext.Provider>
    </DefaultLayout>
  );
};

export default SupplierDataList;
