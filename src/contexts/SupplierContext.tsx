import React, { Dispatch, SetStateAction } from 'react';

import {
  SupplierFilterType,
} from '../interfaces';

type SupplierListContext = {
  isFilterOpen: boolean;
  setFilterOpen: Dispatch<SetStateAction<boolean>>;
  setDataFilter: Dispatch<SetStateAction<SupplierFilterType>>;
  dataFilter: SupplierFilterType;
};
export const SupplierListContext = React.createContext<SupplierListContext>(
  {} as SupplierListContext,
);