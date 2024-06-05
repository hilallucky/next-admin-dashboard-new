import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import CheckboxFive from '@/components/Checkboxes/CheckboxFive';
import CheckboxFour from '@/components/Checkboxes/CheckboxFour';
import CheckboxOne from '@/components/Checkboxes/CheckboxOne';
import CheckboxThree from '@/components/Checkboxes/CheckboxThree';
import CheckboxTwo from '@/components/Checkboxes/CheckboxTwo';
import CustomMultiSelect from '@/components/Common/Input/CustomMultiSelect';
import CustomSelect from '@/components/Common/Input/CustomSelect';
import CustomText from '@/components/Common/Input/CustomText';
import CustomTextArea from '@/components/Common/Input/CustomTextArea';
import DatePickerOne from '@/components/FormElements/DatePicker/DatePickerOne';
import DatePickerTwo from '@/components/FormElements/DatePicker/DatePickerTwo';
import MultiSelect from '@/components/FormElements/MultiSelect';
import TextField from '@/components/Input/Text/Text';
import SelectGroupTwo from '@/components/SelectGroup/SelectGroupTwo';
import SwitcherFour from '@/components/Switchers/SwitcherFour';
import SwitcherOne from '@/components/Switchers/SwitcherOne';
import SwitcherThree from '@/components/Switchers/SwitcherThree';
import SwitcherTwo from '@/components/Switchers/SwitcherTwo';
import React, { useContext, useState } from 'react'
import { Form, useForm } from 'react-final-form';
import { CreateSupplierValidation } from '../CreateSupplierValidation';
import ErrorAlerts from '@/components/Alerts/ErrorAlerts';
import axios from 'axios';
import { useRouter } from 'next/router';
import SelectOption from '@/components/SelectGroup/SelectOption';
import { statuses } from '@/constants/common';
import { FormContext } from '@/contexts/FormContext';
import SupplierReview from '../SupplierReview';

const CreateSupplierForm = () => {
    const { formValues, setFormValues, resetFormData } = useContext(FormContext);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState('');
    const [toast, setToast] = useState({ type: '', title: '', message: '' });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [statusData, setStatusData] = useState(statuses);
    const [showReview, setShowReview] = useState(false);
    // const [formValues, setFormValues] = useState(formData || {
    //     name: '',
    //     address: '',
    //     officePhone: '',
    //     contactPerson: '',
    //     mobilePhone: '',
    //     status: [],
    //     createdBy: 1,
    //     updatedBy: 1,
    // });


    const handleChange = (event: any) => {
        const { attributes, name, value } = event.target;
        setFormValues({
            ...formValues, [name]: (name === 'status' ? Number(value) : value)
        });

        if (value === '') {
            setError(`${attributes.alias.value} is required`); // Set the custom error message
        } else {
            setError(''); // Clear the error message if the field is not empty
        }

        // if(name )
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setShowReview(true);
    };

    if (showReview) {
        return (
            // <SupplierReview formValues={formValues} setShowReview={setShowReview} />
            <SupplierReview setShowReview={setShowReview} />
        );
    }

    const hideToast = () => {
        setShowToast(false);
    };

    return (
        <div>

            <form onSubmit={handleSubmit}>

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
                            <div className="flex flex-col gap-5.5 p-6.5">
                                <div>
                                    <TextField
                                        type="text"
                                        name="name"
                                        alias="Name"
                                        label="Name"
                                        required={true}
                                        // error={error}
                                        value={formValues.name}
                                        onChange={handleChange}
                                        icon={
                                            <svg
                                                className="fill-current"
                                                width="22"
                                                height="22"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                                                    fill=""
                                                />
                                                <circle cx="12" cy="7" r="4" />
                                            </svg>
                                        }
                                        placeholder="Supplier name"
                                    />

                                    <CustomTextArea
                                        name="address"
                                        label="Supplier address"
                                        alias="Supplier address"
                                        placeholder="Supplier address"
                                        required={true}
                                        disabled={false}
                                        // error={error}
                                        value={formValues.address}
                                        onChange={handleChange}
                                        icon={
                                            <svg
                                                className="fill-current"
                                                width="22"
                                                height="22"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                                                    fill=""
                                                />
                                                <circle cx="12" cy="7" r="4" />
                                            </svg>
                                        }
                                        status="default"
                                    />

                                    <TextField
                                        type="text"
                                        name="officePhone"
                                        alias="Office Phone"
                                        label="Office Phone"
                                        required={true}
                                        // error={error}
                                        value={formValues.officePhone}
                                        onChange={handleChange}
                                        icon={
                                            <svg
                                                className="fill-current"
                                                width="22"
                                                height="22"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                                                    fill=""
                                                />
                                            </svg>
                                        }
                                        placeholder="Supplier office phone"
                                    />

                                    <TextField
                                        type="text"
                                        name="contactPerson"
                                        alias="Contact Person"
                                        label="Contact Person"
                                        required={true}
                                        // error={error}
                                        value={formValues.contactPerson}
                                        onChange={handleChange}
                                        icon={
                                            <svg
                                                className="fill-current"
                                                width="22"
                                                height="22"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                                                    fill=""
                                                />
                                                <circle cx="12" cy="7" r="4" />
                                            </svg>
                                        }
                                        placeholder="Supplier contact person"
                                    />

                                    <TextField
                                        type="text"
                                        name="mobilePhone"
                                        alias="Mobile Phone"
                                        label="Mobile Phone"
                                        required={true}
                                        // error={error}
                                        value={formValues.mobilePhone}
                                        onChange={handleChange}
                                        icon={
                                            <svg
                                                className="fill-current"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="22"
                                                height="22"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="#1d2a39"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="arcs">
                                                <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                                                <line x1="12" y1="18" x2="12.01" y2="18" />
                                            </svg>
                                        }
                                        placeholder="Supplier mobile phone"
                                    />

                                    <SelectOption
                                        name="status"
                                        value={formValues.status}
                                        label="Status"
                                        onChange={handleChange}
                                        options={statusData}
                                    />
                                </div>

                            </div>
                        </div>


                        {error && (
                            <div className="flex w-full text-red justify-center items-center">
                                {error}
                            </div>
                        )}

                        {/* <div className="mb-5">
                            <input
                                type="submit"
                                value="Submit"
                                className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                            />
                        </div> */}

                        <div className="mb-5 flex gap-20 items-center justify-between">
                            <input
                                value="Reset"
                                type="button"
                                className="w-[30%] cursor-pointer rounded-lg border border-red bg-red p-4 text-white transition hover:bg-opacity-90"
                                onClick={() => setOpenResetDialog(true)}
                                variant="outlined"
                            />

                            <input
                                type="submit"
                                value="Next"
                                className="w-[30%] cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                            />
                        </div>


                        {showToast && (
                            <div
                                className="text-white  cursor-pointer"
                                onClick={hideToast}
                            >
                                <ErrorAlerts type={toast.type} title={toast.title} message={toast.message} showToast={showToast} />

                            </div>
                        )}

                    </div>
                </div>
            </form>

        </div>
    );
};

export default CreateSupplierForm;