import React from 'react';

interface SelectFilterProps {
    className?: string;
    options: { value: string, label: string }[];
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectFilter: React.FC<SelectFilterProps> = ({ className, options, value, onChange }) => {
    return (
        <select className={className} value={value} onChange={onChange}>
            {options.map((option, index) => (
                <option key={index} value={option.value}>{option.label}</option>
            ))}
        </select>
    );
};

export default SelectFilter;
