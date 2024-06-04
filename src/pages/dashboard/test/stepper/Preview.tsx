import { useContext } from 'react';
import { FormContext } from './FormContext';

const Preview = ({ prevStep }: { prevStep: () => void, formData: any }) => {
  const { formData } = useContext(FormContext);


  console.log(formData);

  if (!formData) {
    return null; // Return null if formData is not available
}

  return (
    <div>
      <h2>Preview</h2>
      <div>
        <p>Name: {formData.name}</p>
        <p>Address: {formData.address}</p>
        <p>Sex: {formData.sex==="male"?"Male":"Female"}</p>
        <p>Favorite Color: {formData.favoriteColor}</p>
        <p>Hobbies: {formData.hobbies?.join(', ')}</p>
        <p>Languages: {formData.languages?.join(', ')}</p>
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
