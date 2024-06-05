import React, { useContext, useEffect, useImperativeHandle, useState } from 'react';
import Box from '@components/Common/Box/Box';
import Button from '@components/Common/Button/MyButton';
import Chip from '@components/Common/Chip/Chip';
import LinearProgress from '@components/Common/LinearProgress/LinearProgress';
import Stack from '@components/Common/Stack/Stack';
import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@components/Tables';
import Typography from '@components/Common/Typography/Typography';
import { useRouter } from 'next/router';
import { SupplierListContext } from '@/contexts/SupplierContext';
import { Supplier } from '@/interfaces';
import MyButton from '@components/Common/Button/MyButton';

const Test: React.FC = () => {
    const [progress, setProgress] = useState(50);
    const router = useRouter();
    const { query } = router;
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(30);
    const { dataFilter, setDataFilter } = useContext(SupplierListContext);

    const [suppliers, setSuppliers] = useState<Supplier[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    };

    useEffect(() => {
        const fetchSupplierData = async () => {
            setLoading(true);
            try {
                const response = await fetch('/api/v1/suppliers');
                const data = await response.json();
                setSuppliers(data?.data);

                console.log({ data });
                console.log({ suppliers });

            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchSupplierData();
    }, [query]);

    // useImperativeHandle(ref, () => ({
    //     refresh() {
    //         mutate();
    //     },
    // }));

    // if (isError)
    //     return <Box sx={{ width: '100%', mt: 2 }}>Internal Server Error</Box>;
    // if (isLoading)
    //     return (
    //         <Box sx={{ width: '100%' }}>
    //             <LinearProgress />
    //         </Box>
    //     );

    const getSupplier = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/v1/suppliers');
            const data = await response.json();
            setSuppliers(data?.data);

            console.log({ data });
            console.log({ suppliers });

        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4">
            <MyButton onClick={getSupplier}>Get Suppliers</MyButton>

            <Typography variant="h1">Welcome to My App</Typography>
            <Box className="mt-4">
                <Typography variant="body1">This is a box.</Typography>
            </Box>
            <Stack direction="row" spacing={4} className="mt-4">
                <Button onClick={() => setProgress(progress + 10)}>Increase Progress</Button>
                <Chip label="New" />
            </Stack>
            <LinearProgress progress={progress} className="mt-4" />
            <TableContainer className="mt-4">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Location</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>John Doe</TableCell>
                            <TableCell>28</TableCell>
                            <TableCell>New York</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Jane Doe</TableCell>
                            <TableCell>22</TableCell>
                            <TableCell>Los Angeles</TableCell>
                        </TableRow>

                        {suppliers.map(supplier => (
                            <TableRow key={supplier.id}>
                                <TableCell>{supplier.name}</TableCell>
                                <TableCell>{supplier.code}</TableCell>
                                <TableCell>{supplier.address}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                count={100}
                rowsPerPage={10}
                page={page}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default Test