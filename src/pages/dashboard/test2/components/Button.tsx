import React from 'react';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariant;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  variant = 'primary',
  onClick,
}) => {
  const classes = `text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
    variant === 'secondary'
      ? 'bg-gray-500 text-gray-900 hover:bg-gray-700 focus:ring-gray-400 dark:bg-gray-700 dark:text-white'
      : ''
  }`;

  return (
    <button type={type ? type : 'button'} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
