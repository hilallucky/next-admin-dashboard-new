import { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Preview from './Preview';

const StepperForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  console.log({step});
  

  switch (step) {
    case 1:
      return <Step1 nextStep={nextStep} />;
    case 2:
    //   return <Step2 nextStep={nextStep} prevStep={prevStep} />;
    // case 3:
    //   return <Step3 nextStep={nextStep} prevStep={prevStep} />;
    // case 4:
      return <Preview prevStep={prevStep} />;
    default:
      return <Step1 nextStep={nextStep} />;
  }
};

export default StepperForm;
