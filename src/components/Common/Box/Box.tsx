import React from 'react';

interface BoxProps {
    children: React.ReactNode;
    className?: string;
}

const Box: React.FC<BoxProps> = ({ children, className = '' }) => {
    return <div className={`p-4 bg-white shadow rounded ${className}`}>{children}</div>;
};

export default Box;
