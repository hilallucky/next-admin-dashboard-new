import React from 'react';

interface MultipleSelectFilterProps {
    className?: string;
    options: { value: string, label: string }[];
    values: string[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const MultipleSelectFilter: React.FC<MultipleSelectFilterProps> = ({ className, options, values, onChange }) => {
    return (
        <select multiple className={className} value={values} onChange={onChange}>
            {options.map((option, index) => (
                <option key={index} value={option.value}>{option.label}</option>
            ))}
        </select>
    );
};

export default MultipleSelectFilter;
