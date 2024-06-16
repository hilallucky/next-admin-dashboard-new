import { useState } from 'react';
import ProductReview from './ProductReview';
import CreateProductForm from './CreateProductForm';

const StepperProductForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  switch (step) {
    case 1:
      return <CreateProductForm nextStep={nextStep} />;
    case 2:
      return <ProductReview prevStep={prevStep} />;
    default:
      return <CreateProductForm nextStep={nextStep} />;
  }
};

export default StepperProductForm;
