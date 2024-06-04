import React from 'react';

interface ButtonProps {
    label: string;
    className: string;
    onClick?: () => void;
    type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({ label, className, onClick, type = 'button' }) => {
    return (
        <button type={type} className={className} onClick={onClick}>
            {label}
        </button>
    );
};

export default Button;
