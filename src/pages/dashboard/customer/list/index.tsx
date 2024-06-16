import Box from '@/components/Common/Box/Box';
import Chip from '@/components/Common/Chip/Chip';
import Stack from '@/components/Common/Stack/Stack';
import Typography from '@/components/Common/Typography/Typography';
import Text from '@/components/Input/Text/Text';
import { CustomerListContext } from '@/contexts/CustomerContext';
import { CustomerFilterType } from '@/interfaces';
import DefaultLayout from '@/ui/Layouts/DefaultLayout';
import CustomerList from '@/ui/Customer/list';
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

const CustomerDataList = () => {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const router = useRouter();
  const [dataFilter, setDataFilter] = useState<CustomerFilterType>({});

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
      <CustomerListContext.Provider
        value={{ isFilterOpen, setFilterOpen, dataFilter, setDataFilter }}
      >
        <Typography variant="h6">Customer List</Typography>
        <CustomerList />
      </CustomerListContext.Provider>
    </DefaultLayout>
  );
};

export default CustomerDataList;
