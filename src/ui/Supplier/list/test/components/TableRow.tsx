import React from 'react';

interface TableRowProps {
    className?: string;
    children: React.ReactNode;
}

const TableRow: React.FC<TableRowProps> = ({ className, children }) => {
    return <tr className={className}>{children}</tr>;
};

export default TableRow;
