import React from 'react';

interface TableContainerProps {
    className?: string;
    children: React.ReactNode;
}

const TableContainer: React.FC<TableContainerProps> = ({ className, children }) => {
    return <div className={className}>{children}</div>;
};

export default TableContainer;
