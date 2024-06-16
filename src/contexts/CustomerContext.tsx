import React, { Dispatch, SetStateAction } from 'react';

import { CustomerFilterType } from '../interfaces';

type CustomerListContext = {
  isFilterOpen: boolean;
  setFilterOpen: Dispatch<SetStateAction<boolean>>;
  setDataFilter: Dispatch<SetStateAction<CustomerFilterType>>;
  dataFilter: CustomerFilterType;
};
export const CustomerListContext = React.createContext<CustomerListContext>(
  {} as CustomerListContext,
);
