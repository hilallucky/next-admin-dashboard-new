"use client";

import React, { FC, InputHTMLAttributes, SVGProps } from 'react'

const Statuses = {
    default: 'w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary',
    active: 'w-full rounded-lg border-[1.5px] border-primary bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white',
    disable: 'w-full rounded-lg border-[1.5px] bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:disabled:bg-black border-stroke'
};

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    name: string,
    label?: string | null,
    placeholder?: string | undefined,
    data?: string | null,
    error?: string | null,
    required: boolean,
    disabled?: boolean,
    status?: string | undefined
    icon?: SVGProps<SVGSVGElement> | null;
}

const CustomTextArea = ({
    name,
    label,
    placeholder,
    data,
    error,
    required,
    disabled,
    status,
    icon,
    ...props
}: Props) => {
    const textareaClassName = disabled
        ? Statuses.disable
        : status === 'active'
            ? Statuses.active
            : Statuses.default;

    return (
        <div>
            {/* <!-- Textarea Fields --> */}
            <div className="flex flex-col gap-5.5 pt-3">
                <div>
                    <label htmlFor={name} className="mb-3 block text-sm font-medium text-black dark:text-white">
                        {label}
                    </label>
                    <div className="relative">
                        <textarea
                            name={name}
                            rows={6}
                            required={required}
                            placeholder={placeholder}
                            disabled={disabled}
                            // value={data || ''}
                            className={`${textareaClassName}`}
                            {...props}
                        ></textarea>
                        {icon && <span className="absolute right-4 top-4">{icon}</span>}
                        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CustomTextArea