import { useState } from 'react';
import CustomerReview from './CustomerReview';
import CreateCustomerForm from './CreateSupplierForm';

const StepperCustomerForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  switch (step) {
    case 1:
      return <CreateCustomerForm nextStep={nextStep} />;
    case 2:
      return <CustomerReview prevStep={prevStep} />;
    default:
      return <CreateCustomerForm nextStep={nextStep} />;
  }
};

export default StepperCustomerForm;
