import React, { Dispatch, SetStateAction, useState } from 'react';
import { useRouter } from 'next/router';
import SupplierPreview from '@components/Supplier2/SupplierPreview';
import Status from './status';

type PreviewSupplierProps = {
  formValues: any;
  setShowReview: Dispatch<SetStateAction<boolean>>;
};

const PreviewSupplier: React.FC<PreviewSupplierProps> = ({
  formValues,
  setShowReview,
}) => {
  const [showStatus, setShowStatus] = useState(false);
  const router = useRouter();
  //   const supplier = router.query;

  //   console.log({formValues});

  const handleEdit = () => {
    setShowReview(false);
    // setShowStatus(false);
  };

  const handleSave = async () => {
    const response = await fetch('/api/v1/suppliers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValues),
    });
    if (response.ok) {
      //   setShowStatus(true);
      setShowReview(true);
      router.push('/dashboard/supplier/new2/status?status=success');
      // console.log('ok');

      // if (showStatus) {
      //     return(
      //         <Status statusx='success' page='/dashboard/supplier/new2/status' />
      //     )
      // }
    } else {
      //   router.push('/dashboard/supplier/new2/status?status=error');
      return <Status statusx="success" page="/dashboard/supplier/new;2" />;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Preview Supplier</h1>
      <SupplierPreview formValues={formValues} />
      <div className="space-x-4 mt-4">
        <button
          onClick={handleEdit}
          className="px-4 py-2 bg-slate-500 text-white rounded-md shadow-sm"
        >
          Edit
        </button>
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-green-500 text-white rounded-md shadow-sm"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default PreviewSupplier;
