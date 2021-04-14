import { createSelector } from '@ngrx/store';
import * as userReducer from '../reducers';
import { userStateSelector } from './userStateSelector.selector';

export const cartItemSelector = createSelector(
  userStateSelector,
  (state: userReducer.IuserReducer) => state.cartState.items
);

export const cartItemQuantitySelector = createSelector(
  userStateSelector,
  (state, props) =>
    state.cartState.items.find(
      (item) => item.product.productId === props.productId
    )?.quantity || 0
);

export const totalCartValueSelector = createSelector(
  userStateSelector,
  (state) =>
    state.cartState.items
      .filter((item) => item?.product?.available)
      .reduce((prev, curr) => prev + curr.product.price * curr.quantity, 0)
);

export const checkoutLoader = createSelector(
  userStateSelector,
  (state) => state.cartState.checkoutLoader
);
