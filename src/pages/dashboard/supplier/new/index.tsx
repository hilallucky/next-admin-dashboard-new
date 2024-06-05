import { FormProvider } from '@/contexts/FormContext'
import DefaultLayout from '@/ui/Layouts/DefaultLayout'
import StepperSupplierForm from '@/ui/Supplier/new/StepperSupplierForm';
import React from 'react'

const defaultFormValues = {
    name: '',
    email: '',
    address: '',
    officePhone: '',
    contactPerson: '',
    mobilePhone: '',
    status: [],
    activeHand: [],
    createdBy: null,
    updatedBy: null,
};

const CreateForm = () => {
    return (
        <FormProvider defaultFormValues={defaultFormValues}>
            <DefaultLayout>
                <StepperSupplierForm />
            </DefaultLayout>
        </FormProvider>
    )
}

export default CreateForm