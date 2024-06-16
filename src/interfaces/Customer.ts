type Modify<T, R> = Omit<T, keyof R> & R;

export type CustomerViewData = {
  info: Customer;
  alt: any | null;
  parentAlt: any | null;
  serveLocation: string;
};

export interface Customer {
  id: number;
  uid: string;
  code: string;
  name: string;
  email?: string;
  address: string;
  officePhone: string;
  contactPerson: string;
  mobilePhone: string;
  status: number;
  createdBy: number | null;
  createdAt: string;
  updatedBy: number | null;
  updatedAt: string | null;
  deletedBy: number | null;
  deletedAt: string | null;
  createdCustomerByUser?: any;
  updatedCustomerByUser?: any;
  deletedCustomerByUser?: any;
}

export interface CustomerResponseData {
  code: string;
  message: string;
  data: any;
}

export type CustomerFilterType = {
  [key: string]: number | string | boolean;
};

export type CustomerApprovalFilterType = {
  [key: string]: number | string | boolean;
};
