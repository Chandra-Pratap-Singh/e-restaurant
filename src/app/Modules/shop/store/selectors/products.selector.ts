import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as productsReducer from '../reducers';

interface IappState {
  [productsReducer.key]: productsReducer.IproductState;
}

const productStore = createFeatureSelector<
  IappState,
  productsReducer.IproductState
>(productsReducer.key);

export const productsSelector = createSelector(
  productStore,
  (state: productsReducer.IproductState, props) =>
    !!props?.category
      ? state.products.filter((product) => product.category === props.category)
      : state.products
);

export const productsLoaderSelector = createSelector(
  productStore,
  (state: productsReducer.IproductState) => state.productsLoader
);

export const productSelector = createSelector(
  productStore,
  (state: productsReducer.IproductState, props) =>
    state.products.find((product) => product.productId === props.productId)
);

export const productCategorySelector = createSelector(
  productStore,
  (state: productsReducer.IproductState) => state.categories
);

export const categoriesLoaderSelector = createSelector(
  productStore,
  (state: productsReducer.IproductState) => state.categoriesLoader
);

export const productsCountSelector = createSelector(
  productStore,
  (state: productsReducer.IproductState) => state.productsCount
);
