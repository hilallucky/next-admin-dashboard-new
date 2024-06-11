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
import { AiOutlineArrowDown, AiOutlineArrowRight, AiOutlineFilter } from 'react-icons/ai';

const SupplierList: React.FC = () => {
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

    const tableRef = useRef<{ refresh: () => void }>(null);
    
    const handleSubmit = (e: any) => {
    };

    useEffect(() => {
        const fetchSupplierData = async () => {
            setIsLoading(true);
            getSuppliers(newFilter);
        };

        fetchSupplierData();
    }, [page, rowsPerPage, newFilter]);

    if (isError) return <>Internal Server Error</>;
    if (isLoading) return <>Loading...</>;

    const getSuppliers = async (filter: {
        name?: string;
        email?: string;
        address?: string;
        status?: string;
    }) => {
        setIsLoading(true);

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

            const response = await fetch(
                `/api/v1/suppliers?page=${page}&limit=${rowsPerPage}${params.toString() ? '&' + params.toString() : ''}`,
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
            setIsLoading(false);
        }
    };

    return (
        <div className="p-4">
            <div className='pb-4'>
                <MyButton
                    onClick={() => setIsFilterVisible(!isFilterVisible)}
                >
                    <div className='flex items-center justify-between'>
                        <span><AiOutlineFilter /> </span>
                        <span className='px-4'>Filter supplier data</span>
                        {isFilterVisible ? <AiOutlineArrowDown /> : <AiOutlineArrowRight />}
                    </div>
                </MyButton>
            </div>
            {
                isFilterVisible && (
                    <SupplierFilterForm
                        onSubmit={()=>{}}
                        setNewFilter={setNewFilter}
                    />
                )
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
