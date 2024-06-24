import React, { useEffect, useState } from 'react';
import Text from '../components/Text';
import Textarea from '../components/Textarea';
import Select from '../components/Select';
import Checkbox from '../components/Checkbox';
import Button from '../components/Button';
import { useRouter } from 'next/router';

interface FormData {
  text: string;
  textarea: string;
  select1: string;
  select2: string;
  checkbox: boolean;
}

const Index: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    text: '',
    textarea: '',
    select1: '',
    select2: '',
    checkbox: false,
  });

  const router = useRouter();

  useEffect(() => {
    const storedData = localStorage.getItem('formData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setFormData(parsedData);
    }
  }, []);

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    console.log({event: value});
    

    // // If value might be empty initially, set default
    // if (!formData.select1) {
    //   setFormData({ ...formData, select1: 'option1' }); // Or your default value
    // }

    // if (!formData.select2) {
    //     setFormData({ ...formData, select2: '' }); // Or your default value
    //   }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('formData', JSON.stringify(formData));
    router.push(
      `/dashboard/test2/pages/preview?text=${formData.text}&textarea=${formData.textarea}&select=${formData.select}&checkbox=${formData.checkbox}`,
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-xl font-bold mb-4">Form</h1>
      <form onSubmit={handleSubmit}>
        <Text
          label="Text"
          name="text"
          value={formData.text}
          onChange={handleChange}
        />
        <Textarea
          label="Textarea"
          name="textarea"
          value={formData.textarea}
          onChange={handleChange}
        />
        <Select
          label="Select 1"
          name="select1"
        //   defaultValue=""
          options={[
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
          ]}
          value={formData.select1}
          onChange={handleChange}
        />
        <Select
          label="Select 2"
          name="select2"
          defaultValue=""
          options={[
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
          ]}
          value={formData.select2}
          onChange={handleChange}
        />
        <Checkbox
          label="Checkbox"
          name="checkbox"
          value={formData.checkbox}
          onChange={handleChange}
        />
        <div className="mt-4">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default Index;
