import Breadcrumb from '@/components/Breadcrumbs/Breadcrumb';
import CustomTextArea from '@/components/Common/Input/CustomTextArea';
import TextField from '@/components/Input/Text/Text';
import React, { useContext, useState } from 'react';
import ErrorAlerts from '@/components/Alerts/ErrorAlerts';
import { statuses } from '@/constants/common';
import { FormContext } from '@/contexts/FormContext';
import Button from '@/components/Common/Button/Button';
import SelectOption from '@/components/SelectGroup/SelectOption';
import { AiFillIdcard, AiOutlineMobile } from 'react-icons/ai';
import { useSupplierListForSelect } from '@/fetchers/Suppliers';

const CreateProductForm = ({ nextStep }: { nextStep?: () => void }) => {
  const { formValues, setFormValues, resetFormValues, methods } =
    useContext(FormContext);
  const { handleSubmit } = methods;

  const [error, setError] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toast, setToast] = useState({ type: '', title: '', message: '' });
  const [isValid, setIsValid] = useState(true);

  const { data, isDataLoading, isDataError } = useSupplierListForSelect();

  const handleChange = (event: any) => {
    const { attributes, name, value } = event.target;

    setIsValid(event.target.validity.valid);

    setFormValues((prevData: any) => ({
      ...prevData,
      [name]: name === 'status' ? Number(value) : value,
      supplierName: prevData.supplierId,
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
    if (nextStep) {
      nextStep();
    }
  };

  return (
    <div>
      <Breadcrumb pageName="Create Product" pageLink="CreateProductForm" />

      <div className="grid-cols-2 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Input Fields --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Input Data Product
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
                    placeholder="Product name"
                  />
                </div>

                <div>
                  <SelectOption
                    key={0}
                    name="supplierId"
                    defaultValue=""
                    value={formValues.supplierId | ''}
                    label="Supplier"
                    onChange={handleChange}
                    options={data}
                    required={true}
                  />
                </div>

                <div>
                  <SelectOption
                    key={1}
                    name="status"
                    defaultValue=""
                    value={formValues.status | ''}
                    label="Status"
                    onChange={handleChange}
                    options={statuses}
                    required={true}
                  />
                </div>

                <div>
                  <TextField
                    type="text"
                    name="quantity"
                    alias="Quantity"
                    label="Quantity"
                    required={true}
                    value={formValues.quantity}
                    onChange={handleChange}
                    icon={<AiOutlineMobile size={20} />}
                    placeholder="Product mobile phone"
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

export default CreateProductForm;
