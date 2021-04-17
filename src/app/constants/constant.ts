export const ADMIN_ENTRY_KEY = 'admin';
export const CUSTOMER_ENTRY_KEY = 'customer';

export const ORDER_COMPLETED_STATUS = 'Delivered';
export const ORDER_REJECTED_STATUS = 'Rejected';

export const ORDER_STATUSES = [
  'Requested',
  'Accepted',
  'Rejected',
  'In kitchen',
  'Ready',
  'On Way',
  'Delivered',
];

export type statusType =
  | 'Requested'
  | 'Accepted'
  | 'Rejected'
  | 'In kitchen'
  | 'Ready'
  | 'On Way'
  | 'Delivered';

export const pageLimit: number = 20;
