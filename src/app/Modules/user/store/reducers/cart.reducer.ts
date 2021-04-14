import { state } from '@angular/animations';
import { createReducer, on, Store } from '@ngrx/store';
import { IcartItem } from '../../modal/interfaces/Icart.interface';
import { loadCartItems } from '../actions/cart.action';
import { checkout, checkoutComplete } from '../actions/user.action';

export const key = 'cartState';

// temporary solution

export interface IcartState {
  items: IcartItem[];
  checkoutLoader: boolean;
}

const initialCartState: IcartState = {
  items: [],
  checkoutLoader: false,
};

export const cartReducer = createReducer(
  initialCartState,
  on(loadCartItems, (_, { cartItems }) => ({ ...state, items: cartItems })),
  on(checkout, (state) => ({ ...state, checkoutLoader: true })),
  on(checkoutComplete, (state) => ({ ...state, checkoutLoader: false }))
);
