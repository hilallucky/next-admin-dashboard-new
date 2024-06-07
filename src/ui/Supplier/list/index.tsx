import React, {
    useContext,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from 'react';
import Box from '@components/Common/Box/Box';
import Button from '@components/Common/Button/MyButton';
import Chip from '@components/Common/Chip/Chip';
import LinearProgress from '@components/Common/LinearProgress/LinearProgress';
import Stack from '@components/Common/Stack/Stack';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
} from '@components/Tables';
import Typography from '@components/Common/Typography/Typography';
import { useRouter } from 'next/router';
import { SupplierListContext } from '@/contexts/SupplierContext';
import { Supplier } from '@/interfaces';
import MyButton from '@components/Common/Button/MyButton';
import PaginationOne from '@/components/Common/Paginations/PaginationOne';

const Test: React.FC = () => {
    const [progress, setProgress] = useState(50);
    const [isError, setIsErrorPage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const { query } = router;
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalRecords, setTotalRecords] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(30);
    const { dataFilter, setDataFilter } = useContext(SupplierListContext);

    const [suppliers, setSuppliers] = useState<Supplier[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const tableRef = useRef<{ refresh: () => void }>(null);

    const handleClickRefresh = () => {
        if (tableRef.current) {
            tableRef.current.refresh();
        }
    };

    useEffect(() => {
        const fetchSupplierData = async () => {
            setLoading(true);
            getSupplier()
        };

        fetchSupplierData();
    }, [page]);

    // useImperativeHandle(ref, () => ({
    //     refresh() {
    //         mutate();
    //     },
    // }));
    ;
    if (isError)
        return <>Internal Server Error</>;
    if (isLoading)
        return <>Loading...</>;

    const getSupplier = async () => {
        setLoading(true);
        try {
            const response = await fetch(`/api/v1/suppliers?page=${page}`);
            const data = await response.json();
            setSuppliers(data?.data.suppliers);
            const totalDataCount = data?.data.totalRecords;
            const pageSize = 10;
            const totalPages = Math.ceil(totalDataCount / pageSize);
            setTotalPages(totalPages);
            setTotalRecords(totalDataCount)
        } catch (error: any) {
            console.error('Error fetching data:', error);
            setIsErrorPage(error)
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4">
            <MyButton onClick={getSupplier}>Get Suppliers</MyButton>
            <MyButton onClick={handleClickRefresh}>Refresh</MyButton>

            <Typography variant="h1">Welcome to My App</Typography>
            <Box className="mt-4">
                <Typography variant="body1">This is a box.</Typography>
            </Box>
            <Stack direction="row" spacing={4} className="mt-4">
                <Button onClick={() => setProgress(progress + 10)}>
                    Increase Progress
                </Button>
                <Chip label="New" />
            </Stack>
            <LinearProgress progress={progress} className="mt-4" />
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
            
            <PaginationOne
                totalRecords={totalRecords}
                page={page}
                totalPages={totalPages}
                setPage={setPage}
            />
        </div>
    );
};

export default Test;
