import { FormProvider } from '@/contexts/FormContext'
import DefaultLayout from '@/ui/Layouts/DefaultLayout'
import CreateSupplierForm from '@/ui/Supplier/new/CreateSupplierForm'
import React from 'react'

const defaultFormValues = {
    name: '',
    address: '',
    officePhone: '',
    contactPerson: '',
    mobilePhone: '',
    status: [],
    activeHand: '',
    createdBy: null,
    updatedBy: null,
};

const CreateForm = () => {
    return (
        <FormProvider defaultFormValues={defaultFormValues}>
            <DefaultLayout>
                <CreateSupplierForm />
            </DefaultLayout>
        </FormProvider>
    )
}

export default CreateForm