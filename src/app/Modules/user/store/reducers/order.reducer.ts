import { createReducer, on } from '@ngrx/store';
import { Iorder } from '../../modal/interfaces/Iorder.interface';
import { fetchOrders, loadOrders } from '../actions/orders.action';

export const key = 'orderState';

export type IorderState = {
  orders: Iorder[];
  orderLoader: boolean;
};

const initialState: IorderState = {
  orders: [],
  orderLoader: false,
};

export const orderReducer = createReducer(
  initialState,
  on(fetchOrders, (state) => ({ ...state, orderLoader: true })),
  on(loadOrders, (state, { orders }) => ({ orders, orderLoader: false }))
);
