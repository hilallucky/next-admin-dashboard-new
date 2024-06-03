// import { useForm } from 'react-hook-form';
// import { useContext } from 'react';
// import { FormContext } from './FormContext';

// const Step2 = ({ nextStep, prevStep }: { nextStep: () => void; prevStep: () => void }) => {
//   const { register, handleSubmit } = useForm();
//   const { formData, setFormData } = useContext(FormContext);

//   const onSubmit = (data: any) => {
//     setFormData({ ...formData, ...data });
//     nextStep();
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <label>Email</label>
//         <input {...register('email')} defaultValue={formData.email || ''} />
//       </div>
//       <button type="button" onClick={prevStep}>Back</button>
//       <button type="submit">Next</button>
//     </form>
//   );
// };

// export default Step2;

import { useContext, useState } from 'react';
import { FormContext } from './FormContext';
import Input from './components/Input';
import Button from './components/Button';

const Step2 = ({ nextStep, prevStep }: { nextStep: () => void; prevStep: () => void }) => {
  const { formData, setFormData } = useContext(FormContext);
  const [email, setEmail] = useState(formData.email || '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleNext = () => {
    setFormData({ ...formData, email });
    nextStep();
  };

  return (
    <form>
      <Input label="Email" name="email" value={email} onChange={handleChange} />
      <Button label="Back" onClick={prevStep} />
      <Button label="Next" onClick={handleNext} type="submit" />
    </form>
  );
};

export default Step2;
