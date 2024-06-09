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

  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const tableRef = useRef<{ refresh: () => void }>(null);

  const handleClickRefresh = () => {
    if (tableRef.current) {
      tableRef.current.refresh();
    }
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    const fetchSupplierData = async () => {
      setLoading(true);
      getSupplier();
    };

    fetchSupplierData();
  }, [page, rowsPerPage]);

  // useImperativeHandle(ref, () => ({
  //     refresh() {
  //         mutate();
  //     },
  // }));
  if (isError) return <>Internal Server Error</>;
  if (isLoading) return <>Loading...</>;

  const getSupplier = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/v1/suppliers?page=${page}&limit=${rowsPerPage}`,
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
        rowsPerPage={rowsPerPage}
      />
    </div>
  );
};

export default SupplierList;
