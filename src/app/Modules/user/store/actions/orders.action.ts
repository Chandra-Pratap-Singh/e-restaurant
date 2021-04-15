import { createAction, props } from '@ngrx/store';
import { Iorder } from '../../modal/interfaces/Iorder.interface';
import * as actionTypes from './action-types';

export const fetchOrders = createAction(
  actionTypes.FETCH_ORDERS,
  props<{ pageNumber?: number; pageLimit?: number }>()
);
export const loadOrders = createAction(
  actionTypes.LOAD_ORDERS,
  props<{ orders: Iorder[]; totalCount: number }>()
);
