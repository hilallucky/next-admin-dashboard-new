import React from 'react';

interface Props {
  formValues: {
    name: string;
    email: string;
    phone: string;
    status: string;
  };
}

const PreviewPage = ({ formValues }: Props) => {
  return (
    <div>
      <h2>Preview</h2>
      <p>Name: {formValues.name}</p>
      <p>Email: {formValues.email}</p>
      <p>Phone: {formValues.phone}</p>
      <p>Status: {formValues.status}</p>
    </div>
  );
};

export default PreviewPage;
