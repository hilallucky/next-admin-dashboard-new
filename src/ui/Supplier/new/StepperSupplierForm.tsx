import { useState } from 'react';
import CreateSupplierForm from './CreateSupplierForm';
import SupplierReview from './SupplierReview';

const StepperSupplierForm = () => {
    const [step, setStep] = useState(1);

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    switch (step) {
        case 1:
            return <CreateSupplierForm nextStep={nextStep} />;
        case 2:
            return <SupplierReview prevStep={prevStep} />;
        case 2:
            return <SupplierReview prevStep={prevStep} />;
        default:
            return <CreateSupplierForm nextStep={nextStep} />;
    }
};

export default StepperSupplierForm;
