import { useState } from 'react';
import ProductReview from './ProductReview';
import EditProductForm from './EditProductForm';

const StepperEditProductForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  switch (step) {
    case 1:
      return <EditProductForm nextStep={nextStep} />;
    case 2:
      return <ProductReview prevStep={prevStep} />;
    default:
      return <EditProductForm nextStep={nextStep} />;
  }
};

export default StepperEditProductForm;
