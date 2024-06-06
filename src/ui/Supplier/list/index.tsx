import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import TableContainer from './test/components/TableContainer';
import Table from './test/components/Table';
import TableHeader from './test/components/TableHeader';
import TableRow from './test/components/TableRow';
import TableCell from './test/components/TableCell';
import TextFilter from './test/components/TextFilter';
import SelectFilter from './test/components/SelectFilter';
import Pagination from './test/components/Paginations/Pagination';
import { Supplier } from '@/interfaces';
import { debounce } from './test/utils/debounce';

const Home = () => {
    const [suppliers, setSuppliers] = useState<Supplier[]>([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState({
        name: '',
        email: '',
    });

    useEffect(() => {
        const fetchSupplierData = async () => {
            setLoading(true);
            try {
                const response = await fetch('/api/v1/suppliers');
                const data = await response.json();
                setSuppliers(data?.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchSupplierData();
    }, []);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const handleFilterChange = (e: any) => {
        const { name, value } = e.target;
        setCurrentPage(1);

        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value
        }));
        // debouncedFilterChange(e);
    };

    const debouncedFilterChange = useCallback(debounce((e: any) => {
        const { name, value } = e.target;

        console.log(name);
        console.log(value);
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    }, 300), []);


    const filteredSuppliers = suppliers.filter(supplier =>
        (filters.name === '' || supplier.name.toLowerCase().includes(filters.name.toLowerCase())) &&
        (filters.email === '' || supplier.email?.toLowerCase().includes(filters.email.toLowerCase())) 
    );


    const pageSize = 10;
    const totalPages = Math.ceil(filteredSuppliers.length / pageSize);
    const paginatedSuppliers = filteredSuppliers.slice((currentPage - 1) * pageSize, currentPage * pageSize);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {suppliers.length}**
            {filteredSuppliers.length}**
            {paginatedSuppliers.length}
            <div>
                <TextFilter
                    // className="name-filter"
                    value={filters.name}
                    onChange={handleFilterChange}
                    name="name"
                />
                <TextFilter
                    // className="email-filter"
                    value={filters.email}
                    onChange={handleFilterChange}
                    name="email"
                />
            </div>

            <TableContainer className="table-container">
                <Table className="table">
                    <TableHeader className="table-header">
                        <TableRow className="table-row">
                            <TableCell className="table-cell">No</TableCell>
                            <TableCell className="table-cell">ID</TableCell>
                            <TableCell className="table-cell">UID</TableCell>
                            <TableCell className="table-cell">Code</TableCell>
                            <TableCell className="table-cell">Name</TableCell>
                            <TableCell className="table-cell">Email</TableCell>
                        </TableRow>
                    </TableHeader>
                    <tbody>
                        {paginatedSuppliers.map((supplier, index) => (
                            <TableRow key={supplier.id} className="table-row">
                                <TableCell className="table-cell">{(currentPage - 1) * pageSize + index + 1}</TableCell>
                                <TableCell className="table-cell">{supplier.id}</TableCell>
                                <TableCell className="table-cell">{supplier.uid}</TableCell>
                                <TableCell className="table-cell">{supplier.code}</TableCell>
                                <TableCell className="table-cell">{supplier.name}</TableCell>
                                <TableCell className="table-cell">{supplier.email}</TableCell>
                            </TableRow>
                        ))}
                    </tbody>
                </Table>
            </TableContainer>

            <Pagination
                className="pagination"
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                totalRecords={filteredSuppliers.length}
                pageSize={pageSize}
            />
        </div>
    );
};

export default Home;
