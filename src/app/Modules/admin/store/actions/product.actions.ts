import { createAction, props } from '@ngrx/store';
import { IadminProduct } from '../../modal/interfaces/IadminProduct.interface';
import { Icategory } from '../../modal/interfaces/Icategory.interface';
import * as actionTypes from './action-types';

export const addOrUpdateProduct = createAction(
  actionTypes.ADD_OR_UPDATE_PRODUCT,
  props<{ product: IadminProduct }>()
);

export const deleteProduct = createAction(
  actionTypes.DELETE_PRODUCT,
  props<{ productId: string }>()
);

export const addCategory = createAction(
  actionTypes.ADD_CATEGORY,
  props<{ category: string }>()
);

export const fetchCategories = createAction(actionTypes.FETCH_CATEGORY);
export const loadCategories = createAction(
  actionTypes.LOAD_CATEGORY,
  props<{ categories: Icategory[] }>()
);

export const fetchProducts = createAction(actionTypes.FETCH_PRODUCT_LIST);
export const loadProducts = createAction(
  actionTypes.LOAD_PRODUCT_LIST,
  props<{ products: IadminProduct[] }>()
);
export const fetchProduct = createAction(
  actionTypes.FETCH_PRODUCT,
  props<{ productId: string }>()
);
export const loadProduct = createAction(
  actionTypes.LOAD_PRODUCT,
  props<{ product: IadminProduct }>()
);
