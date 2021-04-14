import { createReducer, on } from '@ngrx/store';
import { IadminProduct } from '../../modal/interfaces/IadminProduct.interface';
import { Icategory } from '../../modal/interfaces/Icategory.interface';
import {
  addCategory,
  addOrUpdateProduct,
  deleteProduct,
  fetchCategories,
  fetchProduct,
  fetchProducts,
  loadCategories,
  loadProduct,
  loadProducts,
} from '../actions/product.actions';

export const key = 'adminProducts';

export interface IadminProductState {
  products: IadminProduct[];
  categories: Icategory[];
  productsLoader: boolean;
  categoriesLoader: boolean;
  addOrUpdateProductLoader: boolean;
  addcategoryLoader: boolean;
  product?: IadminProduct;
  productLoader?: boolean;
}

const initialAdminProductState: IadminProductState = {
  products: [],
  categories: [],
  productsLoader: false,
  categoriesLoader: false,
  addOrUpdateProductLoader: false,
  addcategoryLoader: false,
  productLoader: false,
};

export const adminProductReducer = createReducer(
  initialAdminProductState,
  on(addOrUpdateProduct, (state) => ({
    ...state,
    addOrUpdateProductLoader: true,
  })),
  on(deleteProduct, (state, { productId }) => ({
    ...state,
    addOrUpdateProductLoader: true,
  })),
  on(addCategory, (state) => ({
    ...state,
    addcategoryLoader: true,
  })),
  on(fetchCategories, (state) => ({ ...state, categoriesLoader: true })),
  on(loadCategories, (state, { categories }) => ({
    ...state,
    categories,
    categoriesLoader: false,
    addcategoryLoader: false,
  })),
  on(fetchProducts, (state) => ({ ...state, productsLoader: true })),
  on(loadProducts, (state, { products }) => ({
    ...state,
    products,
    productsLoader: false,
    addOrUpdateProductLoader: false,
  })),
  on(fetchProduct, (state) => ({ ...state, productLoader: true })),
  on(loadProduct, (state, { product }) => ({
    ...state,
    product,
    productLoader: false,
    addOrUpdateProductLoader: false,
  }))
);
