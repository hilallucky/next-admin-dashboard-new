export const CreateSupplierValidation = (values: any) => {
  const errors = {} as any;

  if (!values.email || values.email.trim() == '') {
    errors.email = 'Required';
  }

  if (!/.+@.+\..+/.test(values.email)) {
    errors.email = 'Email must be valid';
  }

  if (!values.name || values.name.trim() == '') {
    errors.name = 'Required';
  }

  if (!values.address || values.address.trim() == '') {
    errors.address = 'Required';
  }

  if (!values.officePhone || values.officePhone.trim() == '') {
    errors.officePhone = 'Required';
  }

  if (!values.contactPerson || values.contactPerson.trim() == '') {
    errors.contactPerson = 'Required';
  }

  if (!values.mobilePhone || values.mobilePhone.trim() == '') {
    errors.mobilePhone = 'Required';
  }

  //   if (!values.status || values.status.trim() == '') {
  //     errors.status = 'Required';
  //   }

  return errors;
};
