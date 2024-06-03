import { FormProvider } from './FormContext';
import StepperForm from './StepperForm';

const Home = () => {
  return (
    <FormProvider>
      <StepperForm />
    </FormProvider>
  );
};

export default Home;
