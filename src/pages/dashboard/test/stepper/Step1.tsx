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


import { useContext, useEffect, useState } from 'react';
import { FormContext } from './FormContext';
import Input from './components/Input';
import SelectOption from './components/SelectOption';
import MultiSelectOption from './components/MultiSelectOption';
import Checkbox from './components/Checkbox';
import Button from './components/Button';

const Step1 = ({ nextStep }: { nextStep: () => void }) => {
    // const defaultFormData = {
    //     name: '',
    //     email: '',
    //     favoriteColor: '',
    //     hobbies: [],
    //     items: {
    //         apples: 0,
    //         oranges: 0,
    //         bananas: 0,
    //     },
    // };

    const { formData, setFormData, resetFormData } = useContext(FormContext) || {};
    const [showReview, setShowReview] = useState(false);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            if (name === 'hobbies') {
                setFormData((prevData: any) => ({
                    ...prevData,
                    hobbies: checked
                        ? [...prevData.hobbies || [], value]
                        : (prevData.hobbies || []).filter((hobby: string) => hobby !== value),
                }));
            } else {
                setFormData((prevData: any) => ({
                    ...prevData,
                    [name]: checked ? value : '',
                }));
            }
        } else if (formData?.items && name in formData.items) {
            console.log(formData);

            setFormData((prevData: any) => ({
                ...prevData,
                items: { ...prevData.items, [name]: Number(value) },
            }));
        } else {
            setFormData((prevData: any) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleMultiSelectChange = (name: string, selectedOptions: string[]) => {
        setFormData((prevData: any) => ({
            ...prevData,
            [name]: selectedOptions,
        }));
    };
    const handleReset = () => {
        resetFormData();
        // setFormData(defaultFormData)
    };

    const handleNext = () => {
        setShowReview(true);
        nextStep();
    };

    return (
        <form>
            <Input label="Name" name="name" value={formData.name || ''} onChange={handleInputChange} />
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
                    checked={(formData.hobbies || []).includes('reading')}
                    onChange={handleInputChange}
                />
                <Checkbox
                    label="Traveling"
                    name="hobbies"
                    value="traveling"
                    checked={(formData.hobbies || []).includes('traveling')}
                    onChange={handleInputChange}
                />
                <Checkbox
                    label="Coding"
                    name="hobbies"
                    value="coding"
                    checked={(formData.hobbies || []).includes('coding')}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Sex</label>
                <Checkbox
                    label="Male"
                    name="sex"
                    value="male"
                    checked={formData.sex === 'male'}
                    onChange={handleInputChange}
                />
                <Checkbox
                    label="Female"
                    name="sex"
                    value="female"
                    checked={formData.sex === 'female'}
                    onChange={handleInputChange}
                />
            </div>
            <SelectOption
                label="Active Hand"
                name="activeHand"
                value={formData.activeHand || ''}
                options={['left', 'right']}
                onChange={handleInputChange}
            />
            <MultiSelectOption
                label="Preferred Languages"
                name="languages"
                value={formData.languages || []}
                options={['JavaScript', 'Python', 'Java', 'C++']}
                onChange={handleMultiSelectChange}
            />
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
                                    value={formData.items?.apples || 0}
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
                                    value={formData.items?.oranges || 0}
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
                                    value={formData.items?.bananas || 0}
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
