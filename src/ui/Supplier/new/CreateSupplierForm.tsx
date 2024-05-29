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
import React, { useState } from 'react'
import { Form } from 'react-final-form';
import { CreateSupplierValidation } from './CreateSupplierValidation';
import ErrorAlerts from '@/components/Alerts/ErrorAlerts';
import { useRouter } from 'next/router';

const CreateSupplierForm = () => {
    const formDefaultValues = {
        showAtCreateSupplierFormPage: true,
        createSupplierFormBehaviour: '0',
        isActive: true,
        name: null,
        address: null,
        officePhone: null,
        contactPerson: null,
        mobilePhone: null,
        status: null,
        createdBy: null,
        updatedBy: null,
    };

    const [error, setError] = useState('');
    const router = useRouter();
    const [showReview, setShowReview] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formValues, setFormValues] = useState(formDefaultValues);
    // const [selectedProductId, setSelectedProductId] = useState('');
    // const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const onSubmit = async (values: any) => {
        setFormValues({ ...formValues, ...values });
        setShowReview(true);
    };

    const handleSubmit = async () => {
        setIsLoading(true);

        const {
            name,
            address,
            officePhone,
            contactPerson,
            mobilePhone,
            status,
            createdBy,
            updatedBy, } = formValues;

        const playload = {
            name,
            address:name,
            officePhone:name,
            contactPerson:name,
            mobilePhone:name,
            status:0,
            createdBy:1,
            updatedBy:1,
        };

        const response = await fetch(router.basePath + '/api/v1/suppliers', {
            method: 'POST',
            headers: {
                // countryCode: countryCode,
                // Authorization: `Bearer ${authState?.accessToken?.accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(playload),
        });

        if (!response.ok) {
            const data = await response.json();
            const message = data.error || 'Something wrong with the server, please try again!';

            setIsLoading(false);
            // setToastConfig({
            //     open: true,
            //     title: 'Error',
            //     body: `<b>${data.message || 'Something wrong with the server, please try again!'
            //         }</b>`,
            //     type: 'error',
            // });
            <ErrorAlerts title='Error' message={message} />
            return;
        }

        setIsLoading(false);
        // setToastConfig({
        //     open: true,
        //     title: 'Succesful',
        //     body: '<b>User has been successfuly created!</b>',
        //     type: 'success',
        // });
        const message = response?.message;

        <ErrorAlerts title='Error' message={message} />

        router.push('/user/list');
    };

    return (
        <Form
            validate={CreateSupplierValidation}
            initialValues={formValues}
            onSubmit={onSubmit}
            mutators={{
                setCustomCampaignCode: (args, state, utils) => {
                },
            }}
            render={({ handleSubmit, errors, touched, values, form, invalid }) => (
                <form onSubmit={handleSubmit}>

                    <div>CreateForm</div>

                    <Breadcrumb pageName="CreateSupplierForm" />

                    <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
                        <div className="flex flex-col gap-9">
                            {/* <!-- Input Fields --> */}
                            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                                    <h3 className="font-medium text-black dark:text-white">
                                        Input Fields
                                    </h3>
                                </div>
                                <div className="flex flex-col gap-5.5 p-6.5">
                                    <div>
                                        <TextField
                                            type="text"
                                            name="name"
                                            label="name"
                                            required={true}
                                            //   error={error}
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
                                            placeholder="Enter supplier name"
                                        // onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    {/* <div>
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    Default Input
                                </label>
                                <input
                                    type="text"
                                    placeholder="Default Input"
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                />
                            </div>

                            <div>
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    Active Input
                                </label>
                                <input
                                    type="text"
                                    placeholder="Active Input"
                                    className="w-full rounded-lg border-[1.5px] border-primary bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                                />
                            </div>

                            <div>
                                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                                    Disabled label
                                </label>
                                <input
                                    type="text"
                                    placeholder="Disabled label"
                                    disabled
                                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:disabled:bg-black"
                                />
                            </div> */}
                                </div>
                            </div>


                            {error && (
                                <div className="flex w-full text-red justify-center items-center">
                                    {error}
                                </div>
                            )}

                            <div className="mb-5">
                                <input
                                    type="submit"
                                    value="Submit"
                                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                                />
                            </div>


                        </div>
                    </div>
                </form>
            )}
        />
    );
}

export default CreateSupplierForm