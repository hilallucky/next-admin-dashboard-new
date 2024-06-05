import React from 'react';

export const TableContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
    return <div className="overflow-x-auto rounded-sm order-none bg-white dark:border-none bg-boxdark">{children}</div>;
};

export const Table: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
    return <table className="min-w-full divide-y divide-gray-200">{children}</table>;
};

export const TableHead: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
    return <thead className="bg-gray-50 text-white">{children}</thead>;
};

export const TableBody: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
    return <tbody className="bg-white divide-y divide-gray-200">{children}</tbody>;
};

export const TableRow: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
    return <tr className={`${className}`}>{children}</tr>;
};

export const TableCell: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
    return <td className={`px-6 py-4 text-slate-500 whitespace-nowrap border-b border-slate-300 ${className}`}>{children}</td>;
};

export const TablePagination: React.FC<{ count: number; rowsPerPage: number; page: number; onPageChange: (page: number) => void }> = ({
    count,
    rowsPerPage,
    page,
    onPageChange,
}) => {
    const totalPages = Math.ceil(count / rowsPerPage);

    return (
        <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200">
            <div>
                <p className="text-sm text-gray-700">
                    Showing {page * rowsPerPage + 1} to {Math.min((page + 1) * rowsPerPage, count)} of {count} results
                </p>
            </div>
            <div className="flex space-x-2">
                <button
                    onClick={() => onPageChange(Math.max(0, page - 1))}
                    disabled={page === 0}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                    Previous
                </button>
                <button
                    onClick={() => onPageChange(Math.min(totalPages - 1, page + 1))}
                    disabled={page === totalPages - 1}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
                >
                    Next
                </button>
            </div>
        </div>
    );
};
