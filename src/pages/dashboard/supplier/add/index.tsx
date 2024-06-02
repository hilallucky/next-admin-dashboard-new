import { useState } from 'react';
import { useRouter } from 'next/router';

import SelectOption from './SelectOption';
import Toggle from './Toggle';
import Checkbox from './Checkbox';
import FriendListTable from './FriendListTable';
import TextInput from './TextInput';
import Textarea from './Textarea';
import Preview from './preview';

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: [], //'None',
    status: 'Inactive',
    hobby: [],
    friendList: [
      { name: 'Andi', city: 'Jakarta', country: 'Indonesia' },
      { name: 'Toni', city: 'Bandung', country: 'Indonesia' },
    ],
  });

  const [showReview, setShowReview] = useState(false);
  const router = useRouter();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleToggleChange = () => {
    setFormData({
      ...formData,
      status: formData.status === 'Active' ? 'Inactive' : 'Active',
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked
        ? [...formData[name], value]
        : formData[name].filter((item: string) => item !== value),
    });
  };

  const handleSubmit = () => {
    console.log(formData);
    setShowReview(true);

    // e.preventDefault();
    // router.push({
    //   pathname: '/dashboard/supplier/add/preview',
    //   query: {
    //     ...formData,
    //     friendList: JSON.stringify(formData.friendList), // Serialize friendList
    //   },
    // });
  };

  if (showReview) {
    return <Preview formValues={formData} />;
  }

  const handleReset = () => {
    setFormData({
      fullName: '',
      address: '',
      city: [], //'None',
      status: 'Inactive',
      hobby: [],
      friendList: [{ name: '', city: '', country: '' }],
    });
  };

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <TextInput
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
      />
      <Textarea
        name="address"
        value={formData.address}
        onChange={handleChange}
      />
      <SelectOption
        name="city"
        value={''}
        // value={formData.city}
        options={[
          { value: 0, label: 'None' },
          { value: 1, label: 'Jakarta' },
          { value: 2, label: 'Bandung' },
          { value: 3, label: 'Surabaya' },
        ]}
        onChange={handleChange}
      />
      <Toggle
        name="status"
        value={formData.status}
        onChange={handleToggleChange}
      />
      <Checkbox
        name="hobby"
        options={['Tennis', 'Swim', 'Football']}
        values={formData.hobby}
        onChange={handleCheckboxChange}
      />
      <FriendListTable friends={formData.friendList} />
      <div className="flex gap-4">
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Next
        </button>
        <button
          type="button"
          className="p-2 bg-black text-white rounded"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default Form;
