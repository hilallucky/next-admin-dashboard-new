import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

const MyButton: React.FC<ButtonProps> = ({ children, onClick, className = '' }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 ${className}`}
        >
            {children}
        </button>
    );
};

export default MyButton;
