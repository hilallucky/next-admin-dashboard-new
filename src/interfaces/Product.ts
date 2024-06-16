type Modify<T, R> = Omit<T, keyof R> & R;

export type ProductViewData = {
  info: Product;
  alt: any | null;
  parentAlt: any | null;
  serveLocation: string;
};

export interface ProductAlias {
  id: number;
  uid: string;
  code: string;
  name: string;
  supplierId: number;
  productId: number;
  status: number;
  createdBy: number | null;
  createdAt: string;
  updatedBy: number | null;
  updatedAt: string | null;
  deletedBy: number | null;
  deletedAt: string | null;
  createdProductByUser?: any;
  updatedProductByUser?: any;
  deletedProductByUser?: any;
}

export interface Product {
  id: number;
  uid: string;
  code: string;
  name: string;
  supplierId: number;
  quantity: number;
  status: number;
  createdBy: number | null;
  createdAt: string;
  updatedBy: number | null;
  updatedAt: string | null;
  deletedBy: number | null;
  deletedAt: string | null;
  createdProductByUser?: any;
  updatedProductByUser?: any;
  deletedProductByUser?: any;
  productAliases?: ProductAlias[];
}

export interface ProductResponseData {
  code: string;
  message: string;
  data: any;
}

export type ProductFilterType = {
  [key: string]: number | string | boolean;
};

export type ProductApprovalFilterType = {
  [key: string]: number | string | boolean;
};