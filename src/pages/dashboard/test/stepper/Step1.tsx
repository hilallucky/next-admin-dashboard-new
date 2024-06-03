// import { useForm } from 'react-hook-form';
// import { useContext } from 'react';
// import { FormContext } from './FormContext';

// const Step1 = ({ nextStep }: { nextStep: () => void }) => {
//   const { register, handleSubmit, reset } = useForm();
//   const { formData, setFormData } = useContext(FormContext);

//   const onSubmit = (data: any) => {
//     setFormData({ ...formData, ...data });
//     nextStep();
//   };

//   const handleReset = () => {
//     setFormData({});
//     reset();
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <label>Name</label>
//         <input {...register('name')} defaultValue={formData.name || ''} />
//       </div>

//       <div>
//         <label>Email</label>
//         <input {...register('email')} defaultValue={formData.email || ''} />
//       </div>
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
//       <button type="button" onClick={handleReset}>Reset</button>
//       <button type="submit">Next</button>
//     </form>
//   );
// };

// export default Step1;


import { useContext, useState } from 'react';
import { FormContext } from './FormContext';
import Input from './components/Input';
import SelectOption from './components/SelectOption';
import Checkbox from './components/Checkbox';
import Button from './components/Button';

const Step1 = ({ nextStep }: { nextStep: () => void }) => {
    const { formData, setFormData, resetFormData } = useContext(FormContext);

    const [name, setName] = useState(formData.name || '');
    const [email, setEmail] = useState(formData.email || '');
    const [favoriteColor, setFavoriteColor] = useState(formData.favoriteColor || '');
    const [hobbies, setHobbies] = useState<string[]>(formData.hobbies || []);
    const [items, setItems] = useState(formData.items || { apples: 0, oranges: 0, bananas: 0 });

    const handleInputChange = (e: any) => {
        const { name, value, checked } = e.target;
        console.log(e.target.value);
        const componentTextArr = ['name', 'email', 'favoriteColor']
        if (componentTextArr.includes(name)) {
            setFormData({ ...formData, [name]: value });
        } else {
            if (name in items && name) {
                setItems({ ...items, [name]: Number(value) });
            }
            setFormData({ ...formData, items});
        }
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        if (checked) {
            setHobbies([...hobbies, value]);
        } else {
            setHobbies(hobbies.filter((hobby) => hobby !== value));
        }
    };

    const handleReset = () => {
        resetFormData();
        setName('');
        setEmail('');
        setFavoriteColor('');
        setHobbies([]);
        setItems({ apples: 0, oranges: 0, bananas: 0 });
    };

    const handleNext = () => {
        setFormData({
            ...formData,
        // //     name,
        // //     email,
        // //     favoriteColor,
            hobbies,
        // //     items,
        });
        nextStep();
    };

    return (
        <form>
            <Input label="Name" name="name" value={formData.name} onChange={handleInputChange} />
            <Input label="Email" name="email" value={formData.email} onChange={handleInputChange} />
            <SelectOption
                label="Favorite Color"
                name="favoriteColor"
                value={formData.favoriteColor}
                options={['red', 'blue', 'green']}
                onChange={handleInputChange}
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
            <Button label="Reset" onClick={handleReset} />
            <Button label="Next" onClick={handleNext} type="submit" />
        </form>
    );
};

export default Step1;
