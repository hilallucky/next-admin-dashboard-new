import FormElements from '@/components/FormElements'
import { FormProvider } from '@/contexts/FormContext'
import DefaultLayout from '@/ui/Layouts/DefaultLayout'
import CreateSupplierForm from '@/ui/Supplier/new/CreateSupplierForm'
import React from 'react'

const CreateForm = () => {
    return (
        <FormProvider>
            <DefaultLayout>
                {/* <FormElements /> */}
                <CreateSupplierForm />
            </DefaultLayout>
        </FormProvider>
    )
}

export default CreateForm