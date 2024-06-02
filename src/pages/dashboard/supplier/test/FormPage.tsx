import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SelectOption from './SelectOption';
import PreviewPage from './PreviewPage';

const FormPage = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    status: '',
  });

  // const navigate = useNavigate();

  const handleChange = (e) => {
    console.log(e.target);

    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const handlePreview = () => {
    // Navigate to PreviewPage
    // navigate('/', { replace: true });
    return <PreviewPage formValues={formValues} />;
  };

  const resetForm = () => {
    setFormValues({
      name: '',
      email: '',
      phone: '',
      status: '',
    });
  };

  const statusOptions = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];

  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          value={formValues.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phone"
          value={formValues.phone}
          onChange={handleChange}
        />
        <SelectOption
          label="Status"
          name="status"
          value={formValues.status}
          onChange={handleChange}
          options={statusOptions}
        />
        <button type="button" onClick={resetForm}>
          Reset
        </button>
        <button type="button" onClick={handlePreview}>
          Preview
        </button>
      </form>
      {Object.values(formValues).some((value) => value) && (
        <PreviewPage formValues={formValues} />
      )}
    </div>
  );
};

export default FormPage;
