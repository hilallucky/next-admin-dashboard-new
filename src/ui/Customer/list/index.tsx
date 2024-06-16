'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Customer } from '@/interfaces';
import MyButton from '@components/Common/Button/MyButton';
import PaginationOne from '@/components/Common/Paginations/PaginationOne';
import CustomerFilterForm from './CustomerFilterForm';
import {
  AiOutlineArrowDown,
  AiOutlineArrowRight,
  AiOutlineFilter,
} from 'react-icons/ai';
import { useCustomerList } from '@/fetchers/Customers';
import useSWR from 'swr';
import CustomerTableDataList from '@/components/Masters/Customer/CustomerTableDataList';

const CustomerList: React.FC = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [newFilter, setNewFilter] = useState<any>({});
  const [params, setParams] = useState<URLSearchParams>(newFilter);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const [customers, setCustomers] = useState<Customer[]>([]);

  const tableRef = useRef<{ refresh: () => void }>(null);

  const paramFilter = () => {
    const paramFiltered = new URLSearchParams();
    Object.keys(newFilter).forEach((key) => {
      if (newFilter[key]) {
        paramFiltered.append(key, newFilter[key]!);
      }
    });
    setParams(paramFiltered);
  };

  const { data, totalDataPages, totalDataRecords, isDataLoading, isDataError } =
    useCustomerList({ page, rowsPerPage, params });

  useEffect(() => {
    paramFilter();
  }, [page, rowsPerPage, newFilter]);

  const handleFilterSubmit = (filter: any) => {
    setNewFilter(filter);
  };

  return (
    <div className="p-4">
      <div className="pb-4">
        <MyButton onClick={() => setIsFilterVisible(!isFilterVisible)}>
          <div className="flex items-center justify-between">
            <span>
              <AiOutlineFilter />{' '}
            </span>
            <span className="px-4">Filter customer data</span>
            {isFilterVisible ? <AiOutlineArrowDown /> : <AiOutlineArrowRight />}
          </div>
        </MyButton>
      </div>
      {isFilterVisible && (
        <CustomerFilterForm
          onSubmit={() => {}}
          setPage={setPage}
          setNewFilter={setNewFilter}
        />
      )}

      {isDataError ? (
        <p>Internal Server Error</p>
      ) : isDataLoading && !data ? (
        <p>Loading...</p>
      ) : (
        <div>
          <CustomerTableDataList
            datas={data}
            label={'Customer List'}
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
            totalRecords={totalDataRecords}
            page={page}
            totalPages={totalDataPages}
            setPage={setPage}
            setRowsPerPage={setRowsPerPage}
            rowsPerPage={data?.length}
          />
        </div>
      )}
    </div>
  );
};

export default CustomerList;
