'use client';

import React, {
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { Supplier } from '@/interfaces';
import MyButton from '@components/Common/Button/MyButton';
import PaginationOne from '@/components/Common/Paginations/PaginationOne';
import TableDataList from '@/components/Tables/TableDataList';
import SupplierFilterForm from './SupplierFilterForm';
import { AiOutlineArrowDown, AiOutlineArrowRight, AiOutlineFilter } from 'react-icons/ai';
import { useSupplierList } from '@/fetchers/Suppliers';
import useSWR from 'swr';

const SupplierList: React.FC = () => {
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalRecords, setTotalRecords] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [newFilter, setNewFilter] = useState<any>({});
    const [params, setParams] = useState<URLSearchParams>(newFilter);
    const [isFilterVisible, setIsFilterVisible] = useState(false);

    const [suppliers, setSuppliers] = useState<Supplier[]>([]);

    const tableRef = useRef<{ refresh: () => void }>(null);

    const paramFilter = () => {
        const paramFiltered = new URLSearchParams();
        Object.keys(newFilter).forEach((key) => {
            if (newFilter[key]) {
                paramFiltered.append(key, newFilter[key]!);
            }
        });
        setParams(paramFiltered)
    }

    const { data, totalDataPages, totalDataRecords, isDataLoading, isDataError } = useSupplierList({ page, rowsPerPage, params });

    const getSuppliers = useCallback(() => {
        setSuppliers(data);
        setTotalPages(totalDataPages);
        setTotalRecords(totalDataRecords);
    }, [page, rowsPerPage]);

    useEffect(() => {
        const fetchSupplierData = async () => {
            paramFilter()
        };

        fetchSupplierData();
    }, [page, rowsPerPage, newFilter, getSuppliers]);

    const handleFilterSubmit = (filter: any) => {
        setNewFilter(filter);
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
                        onSubmit={() => { }}
                        setNewFilter={setNewFilter}
                    />
                )
            }

            {isDataError ? (
                <p>Internal Server Error</p>
            ) : (
                (isDataLoading && !data ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        <TableDataList
                            datas={data}
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
                )))}
        </div>
    );
};

export default SupplierList;