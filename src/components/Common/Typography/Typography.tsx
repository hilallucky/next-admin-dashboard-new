import React from 'react';

interface TypographyProps {
    children: React.ReactNode;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2';
    className?: string;
}

const Typography: React.FC<TypographyProps> = ({ children, variant = 'body1', className = '' }) => {
    const variantClass = {
        h1: 'text-4xl font-bold',
        h2: 'text-3xl font-bold',
        h3: 'text-2xl font-bold',
        h4: 'text-xl font-bold',
        h5: 'text-lg font-bold',
        h6: 'text-base font-bold',
        body1: 'text-base',
        body2: 'text-sm',
    }[variant];

    return <div className={`${variantClass} ${className}`}>{children}</div>;
};

export default Typography;
