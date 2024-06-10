import MyButton from '@/components/Common/Button/MyButton';
import CustomTextArea from '@/components/Common/Input/CustomTextArea';
import TextField from '@/components/Input/TextField/TextField';
import Select from '@/components/SelectGroup/Select';
import { statuses } from '@/constants/common';
import React, { useState } from 'react';
import { AiFillIdcard, AiOutlineFilter, AiOutlineHome, AiOutlineMail, AiOutlineMobile, AiOutlinePhone } from "react-icons/ai";

interface Props {
    label?: string;
    setNewFilter?;
    onSubmit: (name: string) => void;
}

const SupplierFilterForm: React.FC<Props> = ({
    label,
    setNewFilter,
    onSubmit,
}) => {
    const [filter, setFilter] = useState<any>({});

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const form = e.target;
        const filterData = new FormData(form);

        const formEntries = {};
        filterData.forEach((value, key) => {
            formEntries[key] = value;
        });

        setNewFilter(formEntries);
        onSubmit(filter);
    };

    return (
        <div>

            <form
                onSubmit={handleSubmit}
                className="mb-4 p-4 border border-form-strokedark rounded"
            >
                <div>
                    <TextField
                        type="text"
                        name="name"
                        label="Supplier Name"
                        required={false}
                        icon={<AiFillIdcard size={20} />}
                        placeholder="Supplier name"
                    />
                </div>
                <div>
                    <TextField
                        type="text"
                        name="email"
                        label="Email"
                        required={false}
                        icon={<AiOutlineMail size={20} />}
                        placeholder="email@domain.com"
                    />
                </div>
                <div>
                    <CustomTextArea
                        name="address"
                        label="Supplier address"
                        placeholder="Supplier address"
                        disabled={false}
                        required={false}
                        icon={<AiOutlineHome size={20} />}
                        status="default"
                    />
                </div>

                <div>
                    <TextField
                        type="text"
                        name="officePhone"
                        label="Office Phone"
                        required={false}
                        icon={<AiOutlinePhone size={20} />}
                        placeholder="Supplier office phone"
                    />
                </div>

                <div>
                    <TextField
                        type="text"
                        name="contactPerson"
                        label="Contact Person"
                        required={false}
                        icon={<AiFillIdcard size={20} />}
                        placeholder="Supplier contact person"
                    />
                </div>

                <div>
                    <TextField
                        type="text"
                        name="mobilePhone"
                        required={false}
                        label="Mobile Phone"
                        icon={<AiOutlineMobile size={20} />}
                        placeholder="Supplier mobile phone"
                    />
                </div>

                <div>
                    <Select
                        name="status"
                        label="Status"
                        options={statuses}
                    />
                </div>

                <div className='py-4'>
                    <MyButton
                    >
                        <div className='flex items-center justify-between'>
                            <span><AiOutlineFilter /> </span>
                            <span className='px-4'>Apply Filter</span>
                        </div>
                    </MyButton>
                </div>
            </form>
        </div>
    );
};

export default SupplierFilterForm;
