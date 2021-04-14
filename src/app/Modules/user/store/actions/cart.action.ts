import { createAction, props } from '@ngrx/store';
import Iproduct from 'src/app/Modules/shop/modal/interfaces/Iproduct.interface';
import { IcartItem } from '../../modal/interfaces/Icart.interface';
import * as actionTypes from './action-types';


export const addItemToCart = createAction(
  actionTypes.ADD_ITEM_TO_CART,
  props<{ productId: string }>()
);

export const removeItemFromcart = createAction(
  actionTypes.REMOVE_ITEM_FROM_CART,
  props<{ productId: string }>()
);

export const fetchCartItems = createAction(actionTypes.FETCH_CART_ITEMS);

export const loadCartItems = createAction(
  actionTypes.LOAD_CART_ITEMS,
  props<{ cartItems: IcartItem[] }>()
);
