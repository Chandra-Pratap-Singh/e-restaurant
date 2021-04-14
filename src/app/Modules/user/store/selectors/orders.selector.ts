import { createSelector } from '@ngrx/store';
import * as userReducer from '../reducers';
import { userStateSelector } from './userStateSelector.selector';

export const orderSelector = createSelector(
  userStateSelector,
  (state: userReducer.IuserReducer) => state.orderState.orders
);

export const orderLoaderSelector = createSelector(
  userStateSelector,
  (state: userReducer.IuserReducer) => state.orderState.orderLoader
);
