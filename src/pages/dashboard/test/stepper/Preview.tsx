import { useContext } from 'react';
import { FormContext } from './FormContext';

const Preview = ({ prevStep }: { prevStep: () => void }) => {
  const { formData } = useContext(FormContext);


  console.log(formData.hobbies);
  
  return (
    <div>
      <h2>Preview</h2>
      <div>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Favorite Color: {formData.favoriteColor}</p>
        <p>Hobbies: {formData.hobbies?.join(', ')}</p>
        <p>Items:</p>
        <ul>
          <li>Apples: {formData.items?.apples}</li>
          <li>Oranges: {formData.items?.oranges}</li>
          <li>Bananas: {formData.items?.bananas}</li>
        </ul>
      </div>
      <button onClick={prevStep}>Back</button>
      <button onClick={() => alert('Form Submitted!')}>Submit</button>
    </div>
  );
};

export default Preview;
