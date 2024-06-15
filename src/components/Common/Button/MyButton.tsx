import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: any; //() => void;
  className?: string;
  disabled?: boolean;
}

const MyButton: React.FC<ButtonProps> = ({
  children,
  type,
  onClick,
  className = '',
  disabled = false,
}) => {
  return (
    <button
      type={type ? type : undefined}
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default MyButton;
