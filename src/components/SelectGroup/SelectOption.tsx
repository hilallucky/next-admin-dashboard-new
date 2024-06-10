'use client';
import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { AiOutlineDown } from 'react-icons/ai';

interface SelectOptionProps {
    name: string;
    label: string;
    value?: string;
    options: any[];
    required?: boolean;
    onChange?: (e: any) => void;
}

const SelectOption: React.FC<SelectOptionProps> = ({
    name,
    label,
    value,
    options,
    required = false,
    onChange,
    ...props
}) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    const [selectedOption, setSelectedOption] = useState<string>('');
    const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);

    const changeTextColor = () => {
        setIsOptionSelected(true);
    };

    const handleChange = (e: any) => {
        onChange(e);
        setSelectedOption(e.target.value);
        changeTextColor();
    };

    return (
        <div className="pt-4">
            <label className="mt mb-3 block text-md font-medium text-black dark:text-white">
                Select {label}
            </label>

            <div className="relative z-20 bg-white dark:bg-form-input">
                <select
                    className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-6.5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark  ${isOptionSelected ? 'text-black dark:text-white' : ''
                        }`}
                    id={name}
                    name={name}
                    value={value}
                    required={required ? `${label} is required` : false}
                    onChange={handleChange}
                >
                    <option value="" disabled className="text-body dark:text-bodydark">
                        Select {label}
                    </option>
                    {options.map((item, index) => (
                        <option
                            key={index}
                            value={item.value || item}
                            className="text-body dark:text-bodydark"
                        >
                            {item.label || item}
                        </option>
                    ))}
                </select>

                <span className="absolute right-4 top-1/2 z-10 -translate-y-1/2">                    <AiOutlineDown />
                    <AiOutlineDown />
                </span>
            </div>
            {errors[name] && <span>{errors[name].message}</span>}
        </div>
    );
};

export default SelectOption;
