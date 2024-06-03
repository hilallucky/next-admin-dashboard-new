export const statuses = [
  { value: '0', label: 'Inactive' },
  { value: '1', label: 'Active' },
  { value: '2', label: 'Hold' },
  { value: '3', label: 'Terminate' },
];
export const prefixCode = [
  {
    value: 'supplier',
    code: 'SUPP-',
  },
  {
    value: 'consument',
    label: 'CONS-',
  },
  {
    value: 'product',
    label: 'PROD-',
  },
];
export const discountTypes = [
  { value: 'PERCENTAGE', label: '%' },
  { value: 'AMOUNT', label: '$' },
];

export enum IS_GENERATE {
  FALSE = 0,
  TRUE = 1,
}
