import React from 'react';

interface StackProps {
    children: React.ReactNode;
    className?: string;
    direction?: 'row' | 'column';
    spacing?: number;
}

const Stack: React.FC<StackProps> = ({
    children,
    className = '',
    direction = 'row',
    spacing = 2,
}) => {
    const stackClass = direction === 'row' ? 'flex-row' : 'flex-col';
    const spacingClass = direction === 'row' ? `space-x-${spacing}` : `space-y-${spacing}`;

    return <div className={`flex ${stackClass} ${spacingClass} ${className}`}>{children}</div>;
};

export default Stack;
