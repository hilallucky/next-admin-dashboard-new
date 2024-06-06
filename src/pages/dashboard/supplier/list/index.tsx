import Box from '@/components/Common/Box/Box';
import Chip from '@/components/Common/Chip/Chip';
import Stack from '@/components/Common/Stack/Stack';
import Typography from '@/components/Common/Typography/Typography';
import Text from '@/components/Input/Text/Text';
import { SupplierListContext } from '@/contexts/SupplierContext';
import { SupplierFilterType } from '@/interfaces';
import DefaultLayout from '@/ui/Layouts/DefaultLayout';
import Test from '@/ui/Supplier/list/test/test';
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

const SupplierList = () => {
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

        {Object.keys(dataFilter).map((key) => {
          return 'helloooo';
        })}
        <Box className="mt-1">
          <Stack direction="row" spacing={1} className="flex-wrap">
            {Object.keys(dataFilter).map((key) => {
              return (
                key !== 'page' &&
                key !== 'limit' &&
                dataFilter[key] && (
                  //   <Text
                  //     key={key}
                  //     label={createLabel(key, dataFilter[key])}
                  //     onDelete={() => deleteFilterItem(key)}
                  //   />
                  <Chip
                    key={key}
                    className="mb-1"
                    label={createLabel(key, dataFilter[key])}
                    onDelete={() => deleteFilterItem(key)}
                  />
                )
              );
            })}
          </Stack>
        </Box>
        <Test />
      </SupplierListContext.Provider>
    </DefaultLayout>
  );
};

export default SupplierList;
