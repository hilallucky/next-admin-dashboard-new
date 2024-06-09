'use client';

import React, {
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@components/Tables';
import { useRouter } from 'next/router';
import { SupplierListContext } from '@/contexts/SupplierContext';
import { Supplier } from '@/interfaces';
import MyButton from '@components/Common/Button/MyButton';
import PaginationOne from '@/components/Common/Paginations/PaginationOne';
import TableDataList from '@/components/Tables/TableDataList';
import { statuses } from '@/constants/common';
import SupplierFilterForm from './SupplierFilterForm';
import Component1 from '../Component1';

const SupplierList: React.FC = () => {
  const [progress, setProgress] = useState(50);
  const [isError, setIsErrorPage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { query } = router;
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { dataFilter, setDataFilter } = useContext(SupplierListContext);
  const [newFilter, setNewFilter] = useState<any>({});
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const tableRef = useRef<{ refresh: () => void }>(null);

  const [namex, setNamex] = useState('');
  const [color, setColor] = useState('');

  const handleComponent1Submit = (name: string, color: string) => {
    setNamex(name);
    setColor(color);
    console.log({ name: name, color: color });
  };

  const handleClickRefresh = () => {
    if (tableRef.current) {
      tableRef.current.refresh();
    }
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      const filteredValue = {
        name: e.target.value,
        email: '',
        address: '',
        status: '',
      };
      getSupplier(filteredValue);
      setPage(1);
      setNewFilter(filteredValue);
    }
  };

  const handleSubmit = (e: any) => {
    // e.preventDefault();
    // const filteredValue = {
    //   name: e.target.name.value,
    //   email: e.target.email.value,
    //   address: e.target.address.value,
    //   status: e.target.status.value,
    // };
    setNamex(e);
    getSupplier({ name: namex });
    console.log({ e });
    console.log({ namex });
    // getSupplier(filteredValue);
    setPage(1);
    setNewFilter({ name: namex });
  };

  useEffect(() => {
    const fetchSupplierData = async () => {
      setLoading(true);
      getSupplier(newFilter);
    };

    fetchSupplierData();
  }, [page, rowsPerPage, newFilter]);

  // useImperativeHandle(ref, () => ({
  //     refresh() {
  //         mutate();
  //     },
  // }));
  if (isError) return <>Internal Server Error</>;
  if (isLoading) return <>Loading...</>;

  const getSupplier = async (filter: {
    name?: string;
    email?: string;
    address?: string;
    status?: string;
  }) => {
    setLoading(true);

    try {
      let params = new URLSearchParams();
      if (Object.keys(filter).length > 0) {
        if (filter.name) {
          params.append('name', filter.name);
        }
        if (filter.email) {
          params.append('email', filter.email);
        }
        if (filter.address) {
          params.append('address', filter.address);
        }
        if (filter.status) {
          params.append('status', filter.status);
        }
      }

      console.log(params.toString());

      const response = await fetch(
        `/api/v1/suppliers?page=${page}&limit=${rowsPerPage}${params.toString() ? '&' + params.toString() : ''}`,
        // { params: { dataFilter } },
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const data = await response.json();
      setSuppliers(data?.data.suppliers);
      setTotalPages(data?.data.totalPages);
      setTotalRecords(data?.data.totalRecords);
    } catch (error: any) {
      console.error('Error fetching data:', error);
      setIsErrorPage(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      {/* <MyButton onClick={getSupplier}>Get Suppliers</MyButton>
      <MyButton onClick={handleClickRefresh}>Refresh</MyButton> 
      <TableContainer className="mt-4">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>PIC</TableCell>
              <TableCell>Mobile</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {suppliers?.map((supplier, index) => (
              <TableRow key={supplier.id}>
                <TableCell className="text-right">{index + 1}</TableCell>
                <TableCell>{supplier.name}</TableCell>
                <TableCell>{supplier.address}</TableCell>
                <TableCell>{supplier.officePhone}</TableCell>
                <TableCell>{supplier.email}</TableCell>
                <TableCell>{supplier.contactPerson}</TableCell>
                <TableCell>{supplier.mobilePhone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
                count={suppliers.length}
                rowsPerPage={10}
                page={page}
                onPageChange={handlePageChange}
            /> */}

      {/* <input
        type="text"
        placeholder="Filter by name"
        // value={newFilter}
        onKeyDown={handleKeyDown}
        className="mb-4 p-2 border border-gray-300 rounded"
      /> */}

      <button
        onClick={() => setIsFilterVisible(!isFilterVisible)}
        className="mb-4 p-2 bg-blue-500 text-white rounded"
      >
        {isFilterVisible ? 'Hide Filter' : 'Show Filter'}
      </button>

      {
        isFilterVisible && (
          <SupplierFilterForm
            onSubmit={handleSubmit}
            setNewFilter={setNewFilter}
          />

          // <Component1 onSubmit={handleComponent1Submit} />
          // <form
          //   onSubmit={handleSubmit}
          //   className="mb-4 p-4 border border-gray-300 rounded"
          // >
          // <div className="mb-4">
          //   <label className="block text-gray-700">Supplier Name</label>
          //   <input
          //     type="text"
          //     name="name"
          //     className="w-full p-2 border border-gray-300 rounded"
          //   />
          // </div>
        )
        //   <div className="mb-4">
        //     <label className="block text-gray-700">Supplier Email</label>
        //     <input
        //       type="text"
        //       name="email"
        //       className="w-full p-2 border border-gray-300 rounded"
        //     />
        //   </div>
        //   <div className="mb-4">
        //     <label className="block text-gray-700">Supplier Status</label>
        //     <select
        //       name="status"
        //       className="w-full p-2 border border-gray-300 rounded"
        //     >
        //       {statuses.map(
        //         (item: string | { value: string; label: string }, index) =>
        //           typeof item === 'string' ? (
        //             <option
        //               key={index}
        //               value={item}
        //               className="text-body dark:text-bodydark"
        //             >
        //               {item}
        //             </option>
        //           ) : (
        //             <option
        //               key={index}
        //               value={item.value}
        //               className="text-body dark:text-bodydark"
        //             >
        //               {item.label}
        //             </option>
        //           ),
        //       )}
        //     </select>
        //   </div>
        //   <div className="mb-4">
        //     <label className="block text-gray-700">Supplier Address</label>
        //     <input
        //       type="text"
        //       name="address"
        //       className="w-full p-2 border border-gray-300 rounded"
        //     />
        //   </div>
        //   <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        //     Apply Filter
        //   </button>
        // </form>
      }

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <TableDataList
            datas={suppliers}
            label={'Supplier List'}
            headers={[
              'Name',
              'Address',
              'Office Phone',
              'Email',
              'PIC',
              'Mobile Phone',
              'Status',
            ]}
            columns={[
              'name',
              'address',
              'officePhone',
              'email',
              'contacPerson',
              'mobilePhone',
              'status',
            ]}
            page={page}
            sizePerPages={rowsPerPage}
          />

          <PaginationOne
            totalRecords={totalRecords}
            page={page}
            totalPages={totalPages}
            setPage={setPage}
            setRowsPerPage={setRowsPerPage}
            rowsPerPage={suppliers.length}
          />
        </div>
      )}
    </div>
  );
};

export default SupplierList;
