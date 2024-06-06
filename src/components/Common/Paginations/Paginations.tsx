import React from 'react';
import Typography from '../Typography/Typography';
import Pagination from '@/ui/Supplier/list/test/components/Paginations/Pagination';

// import { <PaginationProps></PaginationProps> } from './Paginations.interface';

interface PaginationProps<T> {
    handleChangePageNew: any;
    data: any;
    pageNew: any;
    rowsPerPage: any;
}

const totalCount = (pageNew, data, rowsPerPage) => {
    const newPage = pageNew + 1,
        totalPages = data?.totalPages,
        itemCount = data?.itemCount,
        itemCountPerPage = data?.itemCountPerPage,
        start = newPage * rowsPerPage - rowsPerPage + 1,
        end =
            newPage == totalPages
                ? data
                    ? data.itemCount
                    : 0
                : newPage * rowsPerPage,
        info = `${start}-${end} of ${itemCount}`;

    return data ? info : `0-0 of 0`;
};

export const Paginations = ({
    handleChangePageNew,
    data,
    pageNew,
    rowsPerPage,
}: PaginationProps<T>) => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'flex-end',
                width: '100%',
                alignItems: 'center',
                marginTop: '10px',
            }}
        >
            <div style={{ marginRight: '20px' }}>
                <Typography>{totalCount(pageNew, data, rowsPerPage)}</Typography>
            </div>
            <div>
                <Pagination
                    count={data ? data?.totalPages : 0}
                    showFirstButton
                    showLastButton
                    color="primary"
                    variant="text"
                    onChange={handleChangePageNew}
                    page={pageNew + 1}
                />
            </div>
        </div>
    );
};