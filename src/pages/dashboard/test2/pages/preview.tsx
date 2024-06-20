import React from 'react';
import { useRouter } from 'next/router';
import Button from '../components/Button';

interface FormData {
  text: string;
  textarea: string;
  select: string;
  checkbox: boolean;
}

const Preview: React.FC = () => {
  const router = useRouter();
  const formData = router.query as unknown as FormData;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-xl font-bold mb-4">Preview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="text-gray-700">Text:</p>
          <p>{formData.text}</p>
        </div>
        <div>
          <p className="text-gray-700">Textarea:</p>
          <p>{formData.textarea}</p>
        </div>
        <div>
          <p className="text-gray-700">Select:</p>
          <p>{formData.select}</p>
        </div>
        <div>
          <p className="text-gray-700">Checkbox:</p>
          <p>{formData.checkbox ? 'Checked' : 'Unchecked'}</p>
        </div>
      </div>
      <Button
        variant="secondary"
        onClick={() => router.push('/dashboard/test2/pages')}
      >
        Back
      </Button>
    </div>
  );
};

export default Preview;
