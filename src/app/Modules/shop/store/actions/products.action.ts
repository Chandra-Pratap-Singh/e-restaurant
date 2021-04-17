import { createAction, props } from '@ngrx/store';
import Icategory from '../../modal/interfaces/Icategory.interface';
import Iproduct from '../../modal/interfaces/Iproduct.interface';
import * as actionTypes from './action-types';

export const loadProducts = createAction(
  actionTypes.LOAD_PRODUCTS,
  props<{ products: Iproduct[]; totalCount?: number }>()
);
export const fetchProducts = createAction(
  actionTypes.FETCH_PRODUCTS,
  props<{ filters?: any; pageNumber?: number; pageLimit?: number }>()
);

export const loadProductCategories = createAction(
  actionTypes.LOAD_PRODUCT_CATEGORIES,
  props<{ categories: Icategory[] }>()
);
export const fetchProductCategories = createAction(
  actionTypes.FETCH_PRODUCT_CATEGORIES
);
