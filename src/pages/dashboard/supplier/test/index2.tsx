import DefaultLayout from '@/ui/Layouts/DefaultLayout';
import { StateProvider } from '@/contexts/stateContext';
import Page1 from './page1';

const index = () => {
  const initialFormValues = {
    name: '',
    address: '',
    officePhone: '',
    contactPerson: '',
    mobilePhone: '',
    status: [],
    status2: [],
    status3: [],
    createdBy: 1,
    updatedBy: 1,
    agreed: false,
  };

  const initialState = {
    formValues: initialFormValues,
    tableData: [],
  };
  return (
    <div>
      <StateProvider initialState={initialState}>
        <DefaultLayout>
          <Page1 />
        </DefaultLayout>
      </StateProvider>
    </div>
  );
};

export default index;
