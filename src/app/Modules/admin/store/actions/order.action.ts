import { createAction, props } from '@ngrx/store';
import { IadminOrder } from '../../modal/interfaces/IadminOrder.interface';
import * as actionTypes from './action-types';

export const updateOrderStatus = createAction(
  actionTypes.UPDATE_ORDER_STATUS,
  props<{ orderId: string; newStatus: string }>()
);

export const fetchActiveOrders = createAction(actionTypes.FETCH_ACTIVE_ORDERS);

export const loadActiveOrders = createAction(
  actionTypes.LOAD_ACTIVE_ORDERS,
  props<{ orders: IadminOrder[] }>()
);

export const fetchCompletedOrders = createAction(
  actionTypes.FETCH_COMPLETED_ORDERS,
  props<{ pageNumber?: number; pageLimit?: number }>()
);

export const loadCompletedOrders = createAction(
  actionTypes.LOAD_COMPLETED_ORDERS,
  props<{ orders: IadminOrder[]; totalCount?: number }>()
);

export const fetchRejectedOrders = createAction(
  actionTypes.FETCH_REJECTED_ORDERS
);

export const loadRejectedOrders = createAction(
  actionTypes.LOAD_REJECTED_ORDERS,
  props<{ orders: IadminOrder[]; totalCount?: number }>()
);

export const addNewRequestedOrder = createAction(
  actionTypes.ADD_NEW_REQUESTED_ORDER,
  props<{ order: IadminOrder }>()
);
