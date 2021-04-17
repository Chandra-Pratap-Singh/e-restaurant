import { createReducer, on } from '@ngrx/store';
import { IadminOrder } from '../../modal/interfaces/IadminOrder.interface';
import {
  addNewRequestedOrder,
  fetchActiveOrders,
  fetchCompletedOrders,
  fetchRejectedOrders,
  loadActiveOrders,
  loadCompletedOrders,
  loadRejectedOrders,
  updateOrderStatus,
} from '../actions/order.action';

export const key = 'adminOrders';

export interface IadminOrderState {
  completedOrders?: IadminOrder[];
  completedOrderLoader: boolean;
  completedOrdersCount?: number;
  activeOrders?: IadminOrder[];
  activeOrderLoader: boolean;
  rejectedOrders?: IadminOrder[];
  rejectedOrderLoader: boolean;
  rejectedOrdersCount?: number;
}

const initialAdminOrdersState: IadminOrderState = {
  completedOrderLoader: false,
  activeOrderLoader: false,
  rejectedOrderLoader: false,
};

export const adminOrderReducer = createReducer(
  initialAdminOrdersState,
  on(updateOrderStatus, (state, { orderId, newStatus }) => ({
    ...state,
    activeOrders: state.activeOrders.map((order) => {
      return order.orderId !== orderId
        ? order
        : {
            ...order,
            status: newStatus,
          };
    }),
  })),
  on(fetchActiveOrders, (state) => ({ ...state, activeOrderLoader: true })),
  on(loadActiveOrders, (state, { orders }) => ({
    ...state,
    activeOrders: orders,
    activeOrderLoader: false,
  })),
  on(fetchCompletedOrders, (state) => ({
    ...state,
    completedOrderLoader: true,
  })),
  on(loadCompletedOrders, (state, { orders, totalCount }) => {
    return {
      ...state,
      completedOrders: orders,
      completedOrderLoader: false,
      completedOrdersCount: totalCount,
    };
  }),
  on(fetchRejectedOrders, (state) => ({
    ...state,
    rejectedOrderLoader: true,
  })),
  on(loadRejectedOrders, (state, { orders, totalCount }) => ({
    ...state,
    rejectedOrders: orders,
    rejectedOrderLoader: false,
    rejectedOrdersCount: totalCount,
  })),
  on(addNewRequestedOrder, (state, { order }) => ({
    ...state,
    activeOrders: [...state.activeOrders, order],
  }))
);
