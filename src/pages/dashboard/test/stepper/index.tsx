import DefaultLayout from '@/ui/Layouts/DefaultLayout';
import { FormProvider } from './FormContext';
import StepperForm from './StepperForm';

const defaultFormData = {
    name: '',
    email: '',
    favoriteColor: '',
    hobbies: [],
    items: {
        apples: 0,
        oranges: 0,
        bananas: 0,
    },
};


const Home = () => {
    return (
        <div>
            <FormProvider defaultFormData={defaultFormData}>
                <DefaultLayout>
                    <StepperForm />
                </DefaultLayout>
            </FormProvider>
        </div>
    );
};

export default Home;
