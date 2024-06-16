import React, { Dispatch, SetStateAction } from 'react';

import { ProductFilterType } from '../interfaces';

type ProductListContext = {
  isFilterOpen: boolean;
  setFilterOpen: Dispatch<SetStateAction<boolean>>;
  setDataFilter: Dispatch<SetStateAction<ProductFilterType>>;
  dataFilter: ProductFilterType;
};
export const ProductListContext = React.createContext<ProductListContext>(
  {} as ProductListContext,
);
