import React from 'react';

interface SupplierPreviewProps {
    formValues: any;
}

const SupplierPreview: React.FC<SupplierPreviewProps> = ({ formValues }) => {
  return (
    <div className="space-y-2">
      <div>
        <strong>Name:</strong> {formValues.name}
      </div>
      <div>
        <strong>Address:</strong> {formValues.address}
      </div>
      <div>
        <strong>Office Phone:</strong> {formValues.officePhone}
      </div>
      <div>
        <strong>Contact Person:</strong> {formValues.contactPerson}
      </div>
      <div>
        <strong>Mobile Phone:</strong> {formValues.mobilePhone}
      </div>
    </div>
  );
};

export default SupplierPreview;
