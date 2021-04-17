import { createSelector } from '@ngrx/store';
import { adminFeatureState } from './adminFeatureState';

export const adminProductsSelector = createSelector(
  adminFeatureState,
  (state) => state.adminProducts.products
);

export const adminProductSelector = createSelector(
  adminFeatureState,
  (state) => state.adminProducts.product
);

export const adminProductLoaderSelector = createSelector(
  adminFeatureState,
  (state) => state.adminProducts.productLoader
);

export const adminProductCategoriesSelector = createSelector(
  adminFeatureState,
  (state) => state.adminProducts.categories
);

export const adminProductsLoaderSelector = createSelector(
  adminFeatureState,
  (state) => state.adminProducts.productsLoader
);

export const adminAddOrUpdateProductsLoaderSelector = createSelector(
  adminFeatureState,
  (state) => state.adminProducts.addOrUpdateProductLoader
);

export const adminCategoriesLoaderSelector = createSelector(
  adminFeatureState,
  (state) => state.adminProducts.categoriesLoader
);

export const adminAddCategoriesLoaderSelector = createSelector(
  adminFeatureState,
  (state) => state.adminProducts.addcategoryLoader
);

export const adminProductsCountSelector = createSelector(
  adminFeatureState,
  (state) => state.adminProducts.productsCount
);
