import { createReducer, on } from '@ngrx/store';
import Icategory from '../../modal/interfaces/Icategory.interface';
import Iproduct from '../../modal/interfaces/Iproduct.interface';
import {
  fetchProductCategories,
  fetchProducts,
  loadProductCategories,
  loadProducts,
} from '../actions/products.action';

export interface IproductState {
  categories: Icategory[];
  categoriesLoader: boolean;
  products: Iproduct[];
  productsLoader: boolean;
}

const initialProductState: IproductState = {
  categories: [],
  categoriesLoader: false,
  products: [],
  productsLoader: false,
};

export const productsReducer = createReducer(
  initialProductState,
  on(fetchProducts, (state) => {
    return {
      ...state,
      productsLoader: true,
    };
  }),
  on(loadProducts, (state, { products }) => {
    return { ...state, products, productsLoader: false };
  }),
  on(fetchProductCategories, (state) => {
    return {
      ...state,
      categoriesLoader: true,
    };
  }),
  on(loadProductCategories, (state, { categories }) => {
    return { ...state, categories, categoriesLoader: false };
  })
);
