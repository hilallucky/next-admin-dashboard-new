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
import getSupplierListFetcher from '@/fetchers/Suppliers';

const SupplierList: React.FC = () => {
    const [isError, setIsErrorPage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalRecords, setTotalRecords] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [newFilter, setNewFilter] = useState<any>({});
    const [isFilterVisible, setIsFilterVisible] = useState(false);

    const [suppliers, setSuppliers] = useState<Supplier[]>([]);

    const tableRef = useRef<{ refresh: () => void }>(null);

    const getSuppliers = useCallback(async (filter: { [key: string]: string | undefined }) => {
        setIsLoading(true);

        try {
            let params = new URLSearchParams();
            Object.keys(filter).forEach((key) => {
                if (filter[key]) {
                    params.append(key, filter[key]!);
                }
            });

            const data = await getSupplierListFetcher({ page, rowsPerPage, params, setIsLoading, setIsErrorPage })

            setSuppliers(data?.data.suppliers);
            setTotalPages(data?.data.totalPages);
            setTotalRecords(data?.data.totalRecords);
        } catch (error: any) {
            console.error('Error fetching data:', error);
            setIsErrorPage(error);
        } finally {
            setIsLoading(false);
        }
    }, [page, rowsPerPage]);

    useEffect(() => {
        const fetchSupplierData = async () => {
            setIsLoading(true);
            await getSuppliers(newFilter);
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

            {isError ? (
                <p>Internal Server Error</p>
            ) : (
                (isLoading ? (
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
                )))}
        </div>
    );
};

export default SupplierList;
