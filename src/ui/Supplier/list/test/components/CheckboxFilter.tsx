import React from 'react';

interface CheckboxFilterProps {
    className?: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxFilter: React.FC<CheckboxFilterProps> = ({ className, checked, onChange }) => {
    return <input type="checkbox" className={className} checked={checked} onChange={onChange} />;
};

export default CheckboxFilter;
