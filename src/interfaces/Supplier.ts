type Modify<T, R> = Omit<T, keyof R> & R;

export type SupplierViewData = {
  info: Supplier;
  alt: any | null;
  parentAlt: any | null;
  serveLocation: string;
};

export interface Supplier {
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
  createdBy: string;
  createdAt: string;
  updatedBy: string | null;
  updatedAt: string | null;
  deletedBy: string | null;
  deletedAt: string | null;
  createdSupplierByUser?: any;
  updatedSupplierByUser?: any;
  deletedSupplierByUser?: any;
}

export interface SupplierResponseData {
  code: string;
  message: string;
  data: any;
}

export type SupplierFilterType = {
  [key: string]: number | string | boolean;
};

export type SupplierApprovalFilterType = {
  [key: string]: number | string | boolean;
};
