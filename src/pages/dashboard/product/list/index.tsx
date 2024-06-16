import Box from '@/components/Common/Box/Box';
import Chip from '@/components/Common/Chip/Chip';
import Stack from '@/components/Common/Stack/Stack';
import Typography from '@/components/Common/Typography/Typography';
import Text from '@/components/Input/Text/Text';
import { ProductListContext } from '@/contexts/ProductContext';
import { ProductFilterType } from '@/interfaces';
import DefaultLayout from '@/ui/Layouts/DefaultLayout';
import ProductList from '@/ui/Product/list';
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

const ProductDataList = () => {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const router = useRouter();
  const [dataFilter, setDataFilter] = useState<ProductFilterType>({});

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
      <ProductListContext.Provider
        value={{ isFilterOpen, setFilterOpen, dataFilter, setDataFilter }}
      >
        <Typography variant="h6">Product List</Typography>
        <ProductList />
      </ProductListContext.Provider>
    </DefaultLayout>
  );
};

export default ProductDataList;
