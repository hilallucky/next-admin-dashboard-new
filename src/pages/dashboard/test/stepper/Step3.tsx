// import { useForm } from 'react-hook-form';
// import { useContext } from 'react';
// import { FormContext } from './FormContext';

// const Step3 = ({ nextStep, prevStep }: { nextStep: () => void; prevStep: () => void }) => {
//   const { register, handleSubmit } = useForm();
//   const { formData, setFormData } = useContext(FormContext);

//   const onSubmit = (data: any) => {
//     setFormData({ ...formData, ...data });
//     nextStep();
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <label>Favorite Color</label>
//         <select {...register('favoriteColor')} defaultValue={formData.favoriteColor || ''}>
//           <option value="red">Red</option>
//           <option value="blue">Blue</option>
//           <option value="green">Green</option>
//         </select>
//       </div>
//       <div>
//         <label>Hobbies</label>
//         <div>
//           <label>
//             <input type="checkbox" {...register('hobbies')} value="reading" defaultChecked={formData.hobbies?.includes('reading')} />
//             Reading
//           </label>
//           <label>
//             <input type="checkbox" {...register('hobbies')} value="traveling" defaultChecked={formData.hobbies?.includes('traveling')} />
//             Traveling
//           </label>
//           <label>
//             <input type="checkbox" {...register('hobbies')} value="coding" defaultChecked={formData.hobbies?.includes('coding')} />
//             Coding
//           </label>
//         </div>
//       </div>
//       <div>
//         <label>Items Table</label>
//         <table>
//           <thead>
//             <tr>
//               <th>Item</th>
//               <th>Quantity</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Apples</td>
//               <td><input type="number" {...register('items.apples')} defaultValue={formData.items?.apples || 0} /></td>
//             </tr>
//             <tr>
//               <td>Oranges</td>
//               <td><input type="number" {...register('items.oranges')} defaultValue={formData.items?.oranges || 0} /></td>
//             </tr>
//             <tr>
//               <td>Bananas</td>
//               <td><input type="number" {...register('items.bananas')} defaultValue={formData.items?.bananas || 0} /></td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       <button type="button" onClick={prevStep}>Back</button>
//       <button type="submit">Next</button>
//     </form>
//   );
// };

// export default Step3;


import { useContext, useState } from 'react';
import { FormContext } from './FormContext';
import SelectOption from './components/SelectOption';
import Checkbox from './components/Checkbox';
import Button from './components/Button';

const Step3 = ({ nextStep, prevStep }: { nextStep: () => void; prevStep: () => void }) => {
  const { formData, setFormData } = useContext(FormContext);
  const [favoriteColor, setFavoriteColor] = useState(formData.favoriteColor || '');
  const [hobbies, setHobbies] = useState(formData.hobbies || []);
  const [items, setItems] = useState(formData.items || { apples: 0, oranges: 0, bananas: 0 });

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFavoriteColor(e.target.value);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHobbies = e.target.checked
      ? [...hobbies, e.target.value]
      : hobbies.filter((hobby: string) => hobby !== e.target.value);
    setHobbies(newHobbies);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItems({ ...items, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    setFormData({ ...formData, favoriteColor, hobbies, items });
    nextStep();
  };

  return (
    <form>
      <SelectOption
        label="Favorite Color"
        name="favoriteColor"
        value={favoriteColor}
        options={['red', 'blue', 'green']}
        onChange={handleSelectChange}
      />
      <div>
        <label>Hobbies</label>
        <Checkbox
          label="Reading"
          name="hobbies"
          value="reading"
          checked={hobbies.includes('reading')}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          label="Traveling"
          name="hobbies"
          value="traveling"
          checked={hobbies.includes('traveling')}
          onChange={handleCheckboxChange}
        />
        <Checkbox
          label="Coding"
          name="hobbies"
          value="coding"
          checked={hobbies.includes('coding')}
          onChange={handleCheckboxChange}
        />
      </div>
      <div>
        <label>Items Table</label>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Apples</td>
              <td>
                <input
                  type="number"
                  name="apples"
                  value={items.apples}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>Oranges</td>
              <td>
                <input
                  type="number"
                  name="oranges"
                  value={items.oranges}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>Bananas</td>
              <td>
                <input
                  type="number"
                  name="bananas"
                  value={items.bananas}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Button label="Back" onClick={prevStep} />
      <Button label="Next" onClick={handleNext} type="submit" />
    </form>
  );
};

export default Step3;
