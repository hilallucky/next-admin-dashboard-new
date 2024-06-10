import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import CustomTextArea from '@/components/Common/Input/CustomTextArea';
import TextField from '@/components/Input/Text/Text';
import React, { useContext, useState } from 'react';
import { CreateSupplierValidation } from './CreateSupplierValidation';
import ErrorAlerts from '@/components/Alerts/ErrorAlerts';
import { statuses } from '@/constants/common';
import { FormContext } from '@/contexts/FormContext';
import Button from '@/components/Common/Button/Button';
import SelectOption from '@/components/SelectGroup/SelectOption';
import { AiFillIdcard, AiOutlineHome, AiOutlineMail, AiOutlineMobile, AiOutlinePhone } from 'react-icons/ai';

const CreateSupplierForm = ({ nextStep }: { nextStep?: () => void }) => {
    const { formValues, setFormValues, resetFormValues, methods } =
        useContext(FormContext);
    const { handleSubmit } = methods;

    const [error, setError] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toast, setToast] = useState({ type: '', title: '', message: '' });
    const [isValid, setIsValid] = useState(true);

    const handleChange = (event: any) => {
        const { attributes, name, value } = event.target;

        setIsValid(event.target.validity.valid);

        setFormValues((prevData: any) => ({
            ...prevData,
            [name]: name === 'status' ? Number(value) : value,
        }));

        if (value === '') {
            setError(`${attributes.alias.value} is required`);
        } else {
            setError('');
        }
    };

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormValues((prevData: any) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const hideToast = () => {
        setShowToast(false);
    };

    const handleReset = () => {
        resetFormValues();
    };

    // const handleSubmit = () => {
    //     nextStep();
    // };

    const onSubmit = (data: any) => {
        // console.log(data);
        nextStep();
    };

    return (
        <div>
            <Breadcrumb pageName="Create Supplier" pageLink="CreateSupplierForm" />

            <div className="grid-cols-2 gap-9 sm:grid-cols-2">
                <div className="flex flex-col gap-9">
                    {/* <!-- Input Fields --> */}
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Input Data Supplier
                            </h3>
                        </div>

                        {/* <form> */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col gap-5.5 p-6.5">
                                <div>
                                    <TextField
                                        type="text"
                                        name="name"
                                        alias="Name"
                                        label="Name"
                                        required={true}
                                        value={formValues.name}
                                        onChange={handleChange}
                                        icon={<AiFillIdcard size={20} />}
                                        placeholder="Supplier name"
                                    />
                                </div>

                                <div>
                                    <TextField
                                        type="text"
                                        name="email"
                                        alias="Email"
                                        label="Email"
                                        required={true}
                                        value={formValues.email}
                                        onChange={handleChange}
                                        icon={<AiOutlineMail size={20} />}
                                        placeholder="email@domain.com"
                                    />
                                </div>

                                <div>
                                    <CustomTextArea
                                        name="address"
                                        label="Supplier address"
                                        alias="Supplier address"
                                        placeholder="Supplier address"
                                        required={true}
                                        disabled={false}
                                        value={formValues.address}
                                        onChange={handleChange}
                                        icon={<AiOutlineHome size={20} />}
                                        status="default"
                                    />
                                </div>

                                <div>
                                    <TextField
                                        type="text"
                                        name="officePhone"
                                        alias="Office Phone"
                                        label="Office Phone"
                                        required={true}
                                        value={formValues.officePhone}
                                        onChange={handleChange}
                                        icon={<AiOutlinePhone size={20} />}
                                        placeholder="Supplier office phone"
                                    />
                                </div>

                                <div>
                                    <TextField
                                        type="text"
                                        name="contactPerson"
                                        alias="Contact Person"
                                        label="Contact Person"
                                        required={true}
                                        value={formValues.contactPerson}
                                        onChange={handleChange}
                                        icon={<AiFillIdcard size={20} />}
                                        placeholder="Supplier contact person"
                                    />
                                </div>

                                <div>
                                    <TextField
                                        type="text"
                                        name="mobilePhone"
                                        alias="Mobile Phone"
                                        label="Mobile Phone"
                                        required={true}
                                        value={formValues.mobilePhone}
                                        onChange={handleChange}
                                        icon={<AiOutlineMobile size={20} />}
                                        placeholder="Supplier mobile phone"
                                    />
                                </div>

                                <div>
                                    <SelectOption
                                        name="status"
                                        value={formValues.status}
                                        label="Status"
                                        onChange={handleChange}
                                        options={statuses}
                                        required={true}
                                    />
                                </div>

                                <div>
                                    {error && (
                                        <div className="flex w-full text-red justify-center items-center">
                                            {error}
                                        </div>
                                    )}
                                </div>

                                <div className="mb-5 flex gap-20 items-center justify-between">
                                    <Button
                                        label="Reset"
                                        type="button"
                                        onClick={handleReset}
                                        className="w-[30%] cursor-pointer rounded-lg border border-red bg-red p-4 text-white transition hover:bg-opacity-90"
                                    />

                                    <Button
                                        label="Next"
                                        type="submit"
                                        onClick={handleSubmit}
                                        className="w-[30%] cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                                    />
                                </div>

                                <div>
                                    {showToast && (
                                        <div
                                            className="text-white  cursor-pointer"
                                            onClick={hideToast}
                                        >
                                            <ErrorAlerts
                                                type={toast.type}
                                                title={toast.title}
                                                message={toast.message}
                                                showToast={showToast}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateSupplierForm;
