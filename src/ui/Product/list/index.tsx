'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Product } from '@/interfaces';
import MyButton from '@components/Common/Button/MyButton';
import PaginationOne from '@/components/Common/Paginations/PaginationOne';
import ProductFilterForm from './ProductFilterForm';
import {
  AiOutlineArrowDown,
  AiOutlineArrowRight,
  AiOutlineFilter,
} from 'react-icons/ai';
import { useProductList } from '@/fetchers/Products';
import useSWR from 'swr';
import ProductTableDataList from '@/components/Masters/Product/ProductTableDataList';

const ProductList: React.FC = () => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [newFilter, setNewFilter] = useState<any>({});
  const [params, setParams] = useState<URLSearchParams>(newFilter);
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const [products, setProducts] = useState<Product[]>([]);

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
    useProductList({ page, rowsPerPage, params });

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
            <span className="px-4">Filter product data</span>
            {isFilterVisible ? <AiOutlineArrowDown /> : <AiOutlineArrowRight />}
          </div>
        </MyButton>
      </div>
      {isFilterVisible && (
        <ProductFilterForm
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
          <ProductTableDataList
            datas={data}
            label={'Product List'}
            headers={['Name', 'Supplier', 'Quantity', 'Status']}
            columns={['name', 'supplierId', 'quantity', 'status']}
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

export default ProductList;
