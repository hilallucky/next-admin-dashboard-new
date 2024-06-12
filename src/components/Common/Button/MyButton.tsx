import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: any; //() => void;
    className?: string;
}

const MyButton: React.FC<ButtonProps> = ({ children, type, onClick, className = '' }) => {
    return (
        <button
            type={type ? type : undefined}
            onClick={onClick}
            className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 ${className}`}
        >
            {children}
        </button>
    );
};

export default MyButton;
